import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LanguageDetector from 'i18next-browser-languagedetector';
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";


i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar', 'kur'],
    fallbackLng: 'en',
    debug: false,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })

const loadingMarkup = (
  <div className="py-5 text-center">
    <h3>Loading...</h3>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
