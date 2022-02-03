import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import about_en from './en/about.json';
import footer_en from './en/footer.json';
import header_en from './en/header.json';
import modal_contact_me_en from './en/modal-contact-me.json';
import navbar_en from './en/navbar.json';
import not_found_en from './en/not-found.json';
import projects_en from './en/projects.json';
import skills_en from './en/skills.json';
import about_es from './es/about.json';
import footer_es from './es/footer.json';
import header_es from './es/header.json';
import modal_contact_me_es from './es/modal-contact-me.json';
import navbar_es from './es/navbar.json';
import not_found_es from './es/not-found.json';
import projects_es from './es/projects.json';
import skills_es from './es/skills.json';

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
      contact_me: modal_contact_me_en,
      not_found: not_found_en,
    },
    es: {
      navbar: navbar_es,
      header: header_es,
      about: about_es,
      skills: skills_es,
      footer: footer_es,
      projects: projects_es,
      contact_me: modal_contact_me_es,
      not_found: not_found_es,
    },
  },
});

export const I18NextProvider = ({ children }) => {
  return (
    <I18nextProvider i18n={i18next} >
      { children }
    </I18nextProvider>
  );
};
