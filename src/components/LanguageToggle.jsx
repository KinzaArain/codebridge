import { languages } from "../i18n/strings";

export default function LanguageToggle({ lang, setLang }) {
  return (
    <div className="inline-flex rounded-full border border-line bg-panel p-1">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          lang={l.code}
          className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
            lang === l.code
              ? "bg-indigo text-white"
              : "text-ink/60 hover:text-ink"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
