import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import navbar_en from './translations/en/navbar.json';
import navbar_es from './translations/es/navbar.json';
import header_en from './translations/en/header.json';
import header_es from './translations/es/header.json';
import about_en from './translations/en/about.json';
import about_es from './translations/es/about.json';
import skills_en from './translations/en/skills.json';
import skills_es from './translations/es/skills.json';
import footer_en from './translations/en/footer.json';
import footer_es from './translations/es/footer.json';
import projects_en from './translations/en/projects.json';
import projects_es from './translations/es/projects.json';
import modal_contact_me_en from './translations/en/modal-contact-me.json';
import modal_contact_me_es from './translations/es/modal-contact-me.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      navbar: navbar_en,
      header: header_en,
      about: about_en,
      skills: skills_en,
      footer: footer_en,
      projects: projects_en,
      contact_me: modal_contact_me_en
    },
    es: {
      navbar: navbar_es,
      header: header_es,
      about: about_es,
      skills: skills_es,
      footer: footer_es,
      projects: projects_es,
      contact_me: modal_contact_me_es
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);