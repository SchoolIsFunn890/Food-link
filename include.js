// include.js
document.addEventListener('DOMContentLoaded', async () => {
  const placeholders = [...document.querySelectorAll('[data-include]')];
  if (!placeholders.length) return;

  // Simple cache so multiple identical includes don't refetch.
  const cache = new Map();

  // Resolve relative include paths relative to current page
  const resolveURL = (path) => new URL(path, window.location.href).toString();

  // Fetch helper with basic error handling
  const load = async (url) => {
    if (cache.has(url)) return cache.get(url);
    try {
      const res = await fetch(url, { credentials: 'same-origin' });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const html = await res.text();
      cache.set(url, html);
      return html;
    } catch (err) {
      console.warn(`[include] Failed to load ${url}:`, err);
      cache.set(url, ''); // avoid retries
      return '';
    }
  };

  // 1) Inject all includes
  await Promise.all(placeholders.map(async (el) => {
    const url = resolveURL(el.getAttribute('data-include'));
    const html = await load(url);
    // Replace the placeholder element entirely with the fetched markup
    el.outerHTML = html || '';
  }));

  // 2) Hghlight current page link in the header nav
  // Looks for <a href="..."> whose pathname matches the current page.
  // Add a .is-active class so it can be styled via CSS.
  // Treats index.html as the folder root.
  // Ignores URL query and hash.
  const markActive = () => {
    const here = location.pathname.replace(/\/index\.html?$/, '/'); // treat index.html as folder root
    document.querySelectorAll('.headerContainer a[href]').forEach(a => {
      try {
        const aPath = new URL(a.getAttribute('href'), location.href).pathname
          .replace(/\/index\.html?$/, '/');
        a.classList.toggle('is-active', aPath === here);
      } catch { /* ignore bad URLs */ }
    });
  };
  markActive();

  // 3) Dispatch a hook in case other scripts need to run after includes
  document.dispatchEvent(new CustomEvent('includes:loaded'));
});


