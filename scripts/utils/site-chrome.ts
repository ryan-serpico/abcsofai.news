export function syncSiteChromeOffset() {
  const root = document.documentElement;
  const chrome = document.querySelector<HTMLElement>('.site-chrome');

  if (!chrome) {
    root.style.removeProperty('--site-chrome-offset');
    return;
  }

  const updateChromeOffset = () => {
    const chromeHeight = Math.ceil(chrome.getBoundingClientRect().height);
    root.style.setProperty('--site-chrome-offset', `${chromeHeight}px`);
  };

  updateChromeOffset();
  window.addEventListener('resize', updateChromeOffset);
}
