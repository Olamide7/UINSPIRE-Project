/**
 * Navigation Module
 * Handles sticky header shrinking and mobile menu toggle
 */

export function initNavigation() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!header) return;

  // Sticky header on scroll
  let lastScroll = 0;

  function handleScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > 60) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // run on load

  // Mobile menu
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      const isOpen = mobileNav.classList.contains('open');

      if (isOpen) {
        mobileNav.style.opacity = '0';
        setTimeout(() => {
          mobileNav.classList.remove('open');
          document.body.style.overflow = '';
        }, 300);
      } else {
        mobileNav.classList.add('open');
        requestAnimationFrame(() => {
          mobileNav.style.opacity = '1';
        });
        document.body.style.overflow = 'hidden';
      }

      toggle.classList.toggle('active');
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.style.opacity = '0';
        setTimeout(() => {
          mobileNav.classList.remove('open');
          document.body.style.overflow = '';
        }, 300);
        toggle.classList.remove('active');
      });
    });
  }

  // Set active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
      link.classList.add('active');
    }
  });
}
