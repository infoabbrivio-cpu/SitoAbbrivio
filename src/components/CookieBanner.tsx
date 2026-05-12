import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const STORAGE_KEY = "abbrivio_cookie_consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (!v) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const setConsent = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ value, date: new Date().toISOString() })
      );
    } catch {
      /* noop */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Informativa sui cookie"
      className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6 animate-fade-in"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-abbrivio-orange/30 bg-abbrivio-navy/95 backdrop-blur-md shadow-2xl">
        <div className="relative p-5 sm:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <button
            onClick={() => setConsent("rejected")}
            aria-label="Chiudi"
            className="absolute top-3 right-3 text-abbrivio-light-blue/60 hover:text-abbrivio-orange transition-colors md:hidden"
          >
            <X className="h-4 w-4" />
          </button>

          <div className="flex-1 text-abbrivio-light-blue text-sm leading-relaxed pr-6 md:pr-0">
            <p className="font-semibold text-abbrivio-orange mb-1">
              Rispettiamo la tua privacy
            </p>
            <p className="opacity-90">
              Utilizziamo solo cookie tecnici necessari al funzionamento del sito.
              Per maggiori informazioni consulta la nostra{" "}
              <Link
                to="/cookie-policy"
                className="underline hover:text-abbrivio-cyan transition-colors"
              >
                Cookie Policy
              </Link>{" "}
              e la{" "}
              <Link
                to="/privacy-policy"
                className="underline hover:text-abbrivio-cyan transition-colors"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => setConsent("rejected")}
              className="px-5 py-2.5 rounded-full text-sm font-medium border border-abbrivio-light-blue/30 text-abbrivio-light-blue hover:border-abbrivio-orange hover:text-abbrivio-orange transition-colors"
            >
              Rifiuta
            </button>
            <button
              onClick={() => setConsent("accepted")}
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-abbrivio-orange text-abbrivio-navy hover:bg-abbrivio-orange/90 transition-colors shadow-lg"
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;