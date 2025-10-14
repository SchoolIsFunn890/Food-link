const presentation = document.getElementById("presentation");
const deliverables = document.getElementById("deliverables");
const prototype = document.getElementById("prototype");

const displayerDel = document.getElementById("displayNoDel");
const displayerPre = document.getElementById("displayNoPre");
const displayerPro = document.getElementById("displayNoPro");

const base = document.createElement('base');
const head = document.querySelector('head');

const url = new URL(document.baseURI);
if(url.origin == "https://schoolisfunn890.github.io"){
  base.href = url.origin + "/Food-link/";
} else {
  base.href = url.origin;
}
head.append(base);

presentation.addEventListener(('mouseenter'), () => {

// Event listeners for dropdown menus removed since CSS handles hover for <details class="menu">

// Additional behaviors that run after includes are loaded
});

// Additional behaviors that run after includes are loaded
document.addEventListener('includes:loaded', () => {
  // Fill current year
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });

  // Smooth scroll for any .toTop links
  document.querySelectorAll('a.toTop').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href') || '#top';
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href) || document.body;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});

// Image credits:
// https://stockcake.com/i/organized-pantry-shelves_1155144_917047