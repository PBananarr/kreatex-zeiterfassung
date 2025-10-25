
// Kreatex-Zeiterfassung — Grundaufbau Scripts
(function(){
  const toggle = document.querySelector('.menu-toggle');
  const sheet = document.querySelector('.mobile-sheet');
  const navMenu = document.getElementById('navMenu');

  // Set active link based on current filename
  const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if((current === '' && href.endsWith('index.html')) || current === href){
      a.classList.add('active');
    }
  });

  function openSheet(open){
    if(!sheet) return;
    sheet.setAttribute('aria-hidden', String(!open));
  }

  if(toggle && sheet){
    toggle.addEventListener('click', () => {
      const isHidden = sheet.getAttribute('aria-hidden') !== 'false';
      openSheet(isHidden);
      toggle.setAttribute('aria-expanded', String(isHidden));
    });

    sheet.addEventListener('click', (e) => {
      if(e.target === sheet) openSheet(false);
    });
  }

  // Close on ESC
  window.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') openSheet(false);
  });
})();
