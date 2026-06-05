/**
 * Form Handler Module
 * Client-side validation and submission handling
 */

export function initContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;

  form.addEventListener('submit', handleSubmit);

  // Live validation on blur
  form.querySelectorAll('input, textarea, select').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.closest('.form-group').classList.contains('has-error')) {
        validateField(field);
      }
    });
  });
}

function validateField(field) {
  const group = field.closest('.form-group');
  if (!group) return true;

  const errorMsg = group.querySelector('.error-msg');
  let isValid = true;
  let message = '';

  // Required check
  if (field.hasAttribute('required') && !field.value.trim()) {
    isValid = false;
    message = 'This field is required';
  }

  // Email check
  if (isValid && field.type === 'email' && field.value.trim()) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(field.value.trim())) {
      isValid = false;
      message = 'Please enter a valid email address';
    }
  }

  // Phone check
  if (isValid && field.type === 'tel' && field.value.trim()) {
    const phonePattern = /^[\+]?[\d\s\-\(\)]{7,}$/;
    if (!phonePattern.test(field.value.trim())) {
      isValid = false;
      message = 'Please enter a valid phone number';
    }
  }

  if (!isValid) {
    group.classList.add('has-error');
    if (errorMsg) errorMsg.textContent = message;
  } else {
    group.classList.remove('has-error');
  }

  return isValid;
}

function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const fields = form.querySelectorAll('input, textarea, select');
  let allValid = true;

  fields.forEach(field => {
    if (!validateField(field)) {
      allValid = false;
    }
  });

  if (!allValid) return;

  // Show success state
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;

  submitBtn.textContent = 'Sending…';
  submitBtn.disabled = true;

  // Simulate submission (replace with real endpoint)
  setTimeout(() => {
    form.innerHTML = `
      <div class="form-success" style="text-align: center; padding: 3rem 1rem;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--color-accent-light); color: var(--color-accent); display: flex; align-items: center; justify-content: center; margin: 0 auto var(--space-lg);">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <h3 style="margin-bottom: var(--space-sm);">Message Sent</h3>
        <p class="text-muted">Thank you for reaching out. We'll get back to you within 24 hours.</p>
      </div>
    `;
  }, 1500);
}
