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

// Email validation function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Download form handler
function initDownloadForm() {
  const form = document.getElementById('downloadForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInput = document.getElementById('emailInput');
    const termsCheckbox = document.getElementById('termsCheckbox');
    const messageArea = document.getElementById('messageArea');
    const messageContent = document.getElementById('messageContent');
    const downloadBtn = document.getElementById('downloadBtn');
    
    const email = emailInput.value.trim();
    
    // Validate email
    if (!validateEmail(email)) {
      messageArea.classList.remove('hidden');
      messageContent.className = 'alert alert-error';
      messageContent.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span data-i18n="download.invalid_email">${i18next.t('download.invalid_email')}</span>
      `;
      return;
    }
    
    // Check terms acceptance
    if (!termsCheckbox.checked) {
      messageArea.classList.remove('hidden');
      messageContent.className = 'alert alert-warning';
      messageContent.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <span>${i18next.t('download.terms_accept')}</span>
      `;
      return;
    }
    
    // Disable button and show loading
    downloadBtn.disabled = true;
    downloadBtn.innerHTML = `
      <span class="loading loading-spinner"></span>
      <span>${i18next.t('download.button')}</span>
    `;
    
    // Simulate API call (replace with actual API endpoint)
    try {
      // This is a mock API call - replace with your actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In a real implementation, you would make an API call here:
      // const response = await fetch('/api/send-download-link', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });
      
      // Show success message
      messageArea.classList.remove('hidden');
      messageContent.className = 'alert alert-success';
      messageContent.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span data-i18n="download.success_message">${i18next.t('download.success_message')}</span>
      `;
      
      // Reset form
      form.reset();
      
      // Log email for demonstration (remove in production)
      console.log('Download link would be sent to:', email);
      
    } catch (error) {
      // Show error message
      messageArea.classList.remove('hidden');
      messageContent.className = 'alert alert-error';
      messageContent.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span data-i18n="download.error_message">${i18next.t('download.error_message')}</span>
      `;
    } finally {
      // Re-enable button
      downloadBtn.disabled = false;
      downloadBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        <span data-i18n="download.button">${i18next.t('download.button')}</span>
      `;
    }
  });
}

// Initial update
document.addEventListener('DOMContentLoaded', () => {
    if (i18next.isInitialized) {
        updateContent();
        initDownloadForm();
    } else {
        i18next.on('initialized', () => {
          updateContent();
          initDownloadForm();
        });
    }
});
