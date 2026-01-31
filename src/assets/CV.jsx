import { FaDownload, FaLanguage } from "react-icons/fa";
import { track } from "@vercel/analytics";
import { useLanguage } from "../contexts/LanguageContext";

function CV() {
  const { language, toggleLanguage } = useLanguage();
  const baseUrl = import.meta.env.BASE_URL || '/';
  const isEnglish = language === 'en';
  const cvConfig = {
    en: {
      label: 'English',
      title: 'Resume',
      href: `${baseUrl}resume.pdf`,
      download: 'Mohammed_Ez-Zouak_CV_EN.pdf'
    },
    fr: {
      label: 'Français',
      title: 'CV',
      href: `${baseUrl}cv_frensh.pdf`,
      download: 'Mohammed_Ez-Zouak_CV_FR.pdf'
    }
  };
  const activeCv = cvConfig[language];

  const trackCvDownload = (lang) => {
    track('Download CV', { language: lang });
  };

  const switchTo = (target) => {
    if (target !== language) {
      toggleLanguage();
    }
  };

  return (
    <section
      id="cv"
      className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg transition-colors duration-300 py-20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-gray-100 mb-4">
              {isEnglish ? 'CV / Resume' : 'CV / Résumé'}
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400">
              {isEnglish
                ? 'Choose a language and download the CV.'
                : 'Choisissez une langue et téléchargez le CV.'}
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="inline-flex items-center text-sm font-semibold text-slate-600 dark:text-gray-400">
              <FaLanguage className="mr-2" />
              {isEnglish ? 'Language' : 'Langue'}
            </span>
            <div className="flex rounded-xl overflow-hidden border-2 border-gray-300 dark:border-dark-border shadow-light-md">
              <button
                type="button"
                aria-pressed={language === 'en'}
                onClick={() => switchTo('en')}
                className={`px-4 py-2 text-sm font-semibold transition-colors ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-dark-card text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-dark-surface'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                aria-pressed={language === 'fr'}
                onClick={() => switchTo('fr')}
                className={`px-4 py-2 text-sm font-semibold transition-colors ${
                  language === 'fr'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-dark-card text-slate-700 dark:text-gray-300 hover:bg-slate-50 dark:hover:bg-dark-surface'
                }`}
              >
                FR
              </button>
            </div>
          </div>

          <div className="bg-white/90 dark:bg-dark-card/90 rounded-2xl shadow-light-xl dark:shadow-lg border-2 border-gray-200 dark:border-dark-border overflow-hidden">
            <div className="px-6 py-5 border-b-2 border-gray-200 dark:border-dark-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100">
                  {activeCv.title} ({activeCv.label})
                </h3>
                <p className="text-sm text-slate-500 dark:text-gray-400">
                  {isEnglish
                    ? 'Preview the PDF or download the full version.'
                    : 'Prévisualisez le PDF ou téléchargez la version complète.'}
                </p>
              </div>
              <a
                href={activeCv.href}
                download={activeCv.download}
                onClick={() => trackCvDownload(language)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-light-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
              >
                <FaDownload className="mr-2" />
                {isEnglish ? 'Download' : 'Télécharger'}
              </a>
            </div>
            <div className="p-6">
              <object
                data={activeCv.href}
                type="application/pdf"
                aria-label={isEnglish ? 'CV preview' : 'Aperçu du CV'}
                className="w-full h-[720px] rounded-xl border-2 border-gray-200 dark:border-dark-border bg-white"
              >
                <div className="text-center py-12 text-slate-600 dark:text-gray-400">
                  {isEnglish
                    ? 'PDF preview is not supported in your browser.'
                    : 'La prévisualisation PDF n’est pas prise en charge par votre navigateur.'}
                </div>
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;
