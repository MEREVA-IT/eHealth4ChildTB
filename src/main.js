import './style.css'
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'fr',
    debug: true,
    backend: {
      loadPath: '/locales/{{lng}}.json',
    },
  }, function(err, t) {
    if (err) return console.error(err);
    updateContent();
  });

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const options = element.getAttribute('data-i18n-options');
    element.textContent = i18next.t(key, options ? JSON.parse(options) : {});
  });
  
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    element.placeholder = i18next.t(key);
  });
  
  // Update html lang attribute
  document.documentElement.lang = i18next.language;
}

// Language switcher logic
window.changeLanguage = function(lng) {
  i18next.changeLanguage(lng, () => {
    updateContent();
  });
}

// Initial update
document.addEventListener('DOMContentLoaded', () => {
    if (i18next.isInitialized) {
        updateContent();
    } else {
        i18next.on('initialized', updateContent);
    }
});
