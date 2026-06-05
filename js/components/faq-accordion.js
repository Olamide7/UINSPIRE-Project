/**
 * FAQ Accordion Module
 * Smooth expand/collapse with rotation indicator
 */

export function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  if (items.length === 0) return;

  items.forEach(item => {
    const trigger = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!trigger || !answer) return;

    // Set initial height to 0
    answer.style.maxHeight = '0';
    answer.style.overflow = 'hidden';
    answer.style.transition = 'max-height 0.4s ease, padding 0.4s ease';
    answer.style.paddingTop = '0';
    answer.style.paddingBottom = '0';

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items
      items.forEach(other => {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          const otherAnswer = other.querySelector('.faq-answer');
          otherAnswer.style.maxHeight = '0';
          otherAnswer.style.paddingTop = '0';
          otherAnswer.style.paddingBottom = '0';
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        answer.style.maxHeight = '0';
        answer.style.paddingTop = '0';
        answer.style.paddingBottom = '0';
      } else {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 32 + 'px';
        answer.style.paddingTop = '16px';
        answer.style.paddingBottom = '16px';
      }
    });
  });
}
