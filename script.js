const presentation = document.getElementById("presentation");
const deliverables = document.getElementById("deliverables");
const prototype = document.getElementById("prototype");

const displayerDel = document.getElementById("displayNoDel");
const displayerPre = document.getElementById("displayNoPre");
const displayerPro = document.getElementById("displayNoPro");

const base = document.createElement('base');
const head = document.querySelector('head');

const url = new URL(document.baseURI);

base.href = url.origin;
head.append(base);

presentation.addEventListener(('mouseenter'), () => {
        displayerPre.className = "display";
        displayerPre.removeAttribute("id");
});

presentation.addEventListener(('mouseleave'), () => {
        displayerPre.id = "displayNoPre";
        displayerPre.removeAttribute("class");

});


deliverables.addEventListener(('mouseenter'), () => {
        displayerDel.className = "display";
        displayerDel.removeAttribute("id");
});

deliverables.addEventListener(('mouseleave'), () => {
        displayerDel.id = "displayNoDel";
        displayerDel.removeAttribute("class");

});


prototype.addEventListener(('mouseenter'), () => {
        displayerPro.className = "display";
        displayerPro.removeAttribute("id");
});

prototype.addEventListener(('mouseleave'), () => {
        displayerPro.id = "displayNoPro";
        displayerPro.removeAttribute("class");

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






// https://stockcake.com/i/organized-pantry-shelves_1155144_917047