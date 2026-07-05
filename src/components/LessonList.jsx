import { lessons } from "../data/lessons";
import { useProgress } from "../context/ProgressContext";
import { strings } from "../i18n/strings";

export default function LessonList({ lang, onSelect }) {
  const { isComplete } = useProgress();
  const t = strings[lang];

  return (
    <ol className="space-y-3">
      {lessons.map((lesson) => {
        const done = isComplete(lesson.id);
        return (
          <li key={lesson.id}>
            <button
              onClick={() => onSelect(lesson.id)}
              className="w-full text-start flex items-center gap-4 rounded-xl border border-line bg-panel px-5 py-4 hover:border-indigo/40 hover:shadow-sm transition-all"
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold ${
                  done ? "bg-celadon text-white" : "bg-paper text-ink/50 border border-line"
                }`}
              >
                {done ? "✓" : lesson.order}
              </span>
              <span className="flex-1">
                <span className="block font-display font-medium text-ink" lang={lang}>
                  {lesson.title[lang]}
                </span>
                {done && (
                  <span className="text-xs text-celadon font-medium" lang={lang}>
                    {t.completed}
                  </span>
                )}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}
