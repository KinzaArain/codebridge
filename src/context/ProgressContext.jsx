import { createContext, useContext, useEffect, useState } from "react";

const ProgressContext = createContext(null);
const STORAGE_KEY = "codebridge_progress_v1";
const LANG_KEY = "codebridge_lang_v1";

export function ProgressProvider({ children }) {
  const [completed, setCompleted] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem(LANG_KEY) || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
    } catch {
      // storage unavailable — progress just won't persist this session
    }
  }, [completed]);

  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  function markComplete(lessonId) {
    setCompleted((prev) => (prev.includes(lessonId) ? prev : [...prev, lessonId]));
  }

  function isComplete(lessonId) {
    return completed.includes(lessonId);
  }

  function resetProgress() {
    setCompleted([]);
  }

  return (
    <ProgressContext.Provider
      value={{ completed, markComplete, isComplete, resetProgress, lang, setLang }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
