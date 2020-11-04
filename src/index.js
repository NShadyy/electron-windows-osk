import WindowsOSK from 'electron-windows-osk';

const { BrowserWindowProxy } = require('electron');

const OSK = new WindowsOSK(new BrowserWindowProxy());

// Open and position OSK on click in inputs.
document.addEventListener('click', (event) => {
  if (event.target.tagName === 'INPUT' && event.target.tagName === 'TEXTAREA') {
    const viewportOffset = event.target.getBoundingClientRect();
    const inBrowserYOffset = viewportOffset.top - window.scrollY;

    OSK.showFromEvent(inBrowserYOffset, event.target.clientHeight, 5);
  }
});

// Close the OSK on any other click.
document.addEventListener('click', (event) => {
  if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
    OSK.close();
  }
});
