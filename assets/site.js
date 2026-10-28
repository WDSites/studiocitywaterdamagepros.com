(function () {
  var header = document.querySelector('.siteheader');
  var btn = document.querySelector('.menu-toggle');
  if (!header || !btn) { return; }
  var mq = window.matchMedia('(max-width: 900px)');
  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  btn.addEventListener('click', function () { setOpen(!header.classList.contains('nav-open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { setOpen(false); } });
  var onChange = function () { if (!mq.matches) { setOpen(false); } };
  if (mq.addEventListener) { mq.addEventListener('change', onChange); } else { mq.addListener(onChange); }
})();
