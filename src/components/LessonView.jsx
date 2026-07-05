import { useState } from "react";
import { lessons } from "../data/lessons";
import { useProgress } from "../context/ProgressContext";
import { strings } from "../i18n/strings";

function normalize(str) {
  return str.trim().toLowerCase().replace(/\s+/g, " ");
}

export default function LessonView({ lang, lessonId, onBack, onNext }) {
  const lesson = lessons.find((l) => l.id === lessonId);
  const { markComplete, isComplete } = useProgress();
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState(null); // null | "correct" | "retry"
  const t = strings[lang];

  if (!lesson) return null;

  function checkAnswer() {
    const normalizedAnswer = normalize(answer);
    const isRight = lesson.exercise.accept.some(
      (a) => normalize(a) === normalizedAnswer
    );
    if (isRight) {
      setResult("correct");
      markComplete(lesson.id);
    } else {
      setResult("retry");
    }
  }

  const nextLesson = lessons.find((l) => l.order === lesson.order + 1);

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="text-sm text-indigo hover:underline font-medium"
        lang={lang}
      >
        ← {t.backToLessons}
      </button>

      <div>
        <span className="text-xs uppercase tracking-wide text-ink/40 font-display">
          {t.lessons} · {String(lesson.order).padStart(2, "0")}
        </span>
        <h1 className="font-display text-2xl font-semibold text-indigo mt-1" lang={lang}>
          {lesson.title[lang]}
        </h1>
      </div>

      <p className="font-body text-[17px] leading-relaxed text-ink/90" lang={lang}>
        {lesson.explanation[lang]}
      </p>

      <pre className="bg-indigo-deep text-paper rounded-lg p-4 overflow-x-auto text-sm font-mono leading-relaxed" dir="ltr">
        <code>{lesson.codeExample}</code>
      </pre>

      <div className="rounded-xl border border-line bg-amber-light/40 p-5 space-y-3">
        <h2 className="font-display font-semibold text-ink" lang={lang}>
          {t.exercisePrompt}
        </h2>
        <p className="font-body text-ink/80" lang={lang}>
          {lesson.exercise.prompt[lang]}
        </p>
        <textarea
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
            setResult(null);
          }}
          placeholder={t.placeholderAnswer}
          dir="ltr"
          rows={3}
          className="w-full rounded-lg border border-line bg-white px-3 py-2 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo/40"
        />
        <div className="flex items-center gap-3">
          <button
            onClick={checkAnswer}
            className="rounded-full bg-indigo text-white px-5 py-2 text-sm font-medium hover:bg-indigo-deep transition-colors"
            lang={lang}
          >
            {t.checkAnswer}
          </button>
          {result === "correct" && (
            <span className="text-celadon text-sm font-medium" lang={lang}>
              {t.correct}
            </span>
          )}
          {result === "retry" && (
            <span className="text-amber text-sm font-medium" lang={lang}>
              {t.tryAgain}
            </span>
          )}
        </div>
      </div>

      {isComplete(lesson.id) && nextLesson && (
        <button
          onClick={() => onNext(nextLesson.id)}
          className="w-full rounded-xl border border-line bg-panel px-5 py-4 text-start hover:border-indigo/40 transition-colors"
        >
          <span className="text-xs text-ink/40 font-display uppercase tracking-wide">
            {t.nextLesson}
          </span>
          <span className="block font-display font-medium text-indigo mt-1" lang={lang}>
            {nextLesson.title[lang]} →
          </span>
        </button>
      )}
    </div>
  );
}
