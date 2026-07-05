import { useState } from "react";
import { ProgressProvider, useProgress } from "./context/ProgressContext";
import { strings } from "./i18n/strings";
import { lessons } from "./data/lessons";
import LanguageToggle from "./components/LanguageToggle";
import LessonList from "./components/LessonList";
import LessonView from "./components/LessonView";
import BridgeProgress from "./components/BridgeProgress";

function Shell() {
  const { lang, setLang, completed } = useProgress();
  const [activeLesson, setActiveLesson] = useState(null);
  const [showAbout, setShowAbout] = useState(false);
  const t = strings[lang];
  const dir = t.dir;

  return (
    <div dir={dir} className="min-h-screen bg-paper">
      <header className="border-b border-line bg-panel">
        <div className="mx-auto max-w-3xl px-5 py-5 flex items-center justify-between gap-4">
          <button
            onClick={() => setActiveLesson(null)}
            className="flex items-center gap-2 group"
          >
            <svg width="28" height="28" viewBox="0 0 64 64">
              <rect width="64" height="64" rx="12" fill="#2A3363" />
              <path d="M8 40 L16 24 L24 40" stroke="#E0A23C" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M40 40 L48 24 L56 40" stroke="#4F9E93" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="8" y1="40" x2="56" y2="40" stroke="#EEF0F3" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="font-display font-semibold text-lg text-indigo" lang={lang}>
              {t.appName}
            </span>
          </button>
          <LanguageToggle lang={lang} setLang={setLang} />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-10">
        {activeLesson ? (
          <LessonView
            lang={lang}
            lessonId={activeLesson}
            onBack={() => setActiveLesson(null)}
            onNext={(id) => setActiveLesson(id)}
          />
        ) : (
          <div className="space-y-8">
            <div>
              <h1 className="font-display text-3xl font-semibold text-indigo" lang={lang}>
                {t.tagline}
              </h1>
              <p className="font-body text-ink/70 mt-2 max-w-xl" lang={lang}>
                {t.subtitle}
              </p>
              <button
                onClick={() => setShowAbout((s) => !s)}
                className="text-sm text-celadon hover:underline mt-2 font-medium"
                lang={lang}
              >
                {t.aboutTitle}
              </button>
              {showAbout && (
                <p className="font-body text-sm text-ink/70 mt-2 max-w-xl bg-celadon-light/50 rounded-lg p-4" lang={lang}>
                  {t.aboutBody}
                </p>
              )}
            </div>

            <section className="rounded-xl border border-line bg-panel p-5">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-display font-semibold text-ink" lang={lang}>
                  {t.yourProgress}
                </h2>
                <span className="text-sm text-ink/50 font-mono">
                  {completed.length}/{lessons.length}
                </span>
              </div>
              <BridgeProgress total={lessons.length} completedCount={completed.length} />
            </section>

            <section>
              <h2 className="font-display font-semibold text-ink mb-3" lang={lang}>
                {t.lessons}
              </h2>
              <LessonList lang={lang} onSelect={setActiveLesson} />
            </section>
          </div>
        )}
      </main>

      <footer className="mx-auto max-w-3xl px-5 py-8 text-center text-xs text-ink/40 font-body">
        CodeBridge — A Educational Project by Kinza Arain
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <Shell />
    </ProgressProvider>
  );
}
