// #1
// https://github.com/wojtkowiak/electron-windows-osk

// import WindowsOSK from 'electron-windows-osk';

// const { BrowserWindowProxy } = require('electron');

// const OSK = new WindowsOSK(new BrowserWindowProxy());

// // Open and position OSK on click in inputs.
// document.addEventListener('click', (event) => {
//   if (event.target.tagName === 'INPUT' && event.target.tagName === 'TEXTAREA') {
//     const viewportOffset = event.target.getBoundingClientRect();
//     const inBrowserYOffset = viewportOffset.top - window.scrollY;

//     OSK.showFromEvent(inBrowserYOffset, event.target.clientHeight, 5);
//   }
// });

// // Close the OSK on any other click.
// document.addEventListener('click', (event) => {
//   if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
//     OSK.close();
//   }
// });

// #2
// https://stackoverflow.com/a/39900197/4941819

// Something I've used is running the Tabtip.exe from the BrowserWindow.
// This should work in Windows 7 and Windows 10 (using the Touch Keyboard).
// Although I've noticed Tabtip doesn't work in Windows 10 when there's no touch screen.

// const { exec } = require('child_process');

// const nameInput = document.getElementById('name');
// const ageInput = document.getElementById('age');
// const emailInput = document.getElementById('email');
// const aboutInput = document.getElementById('about');

// const showTouchKeyboard = () => {
//   // eslint-disable-next-line no-console
//   console.log('input or textarea clicked!!');

//   exec(
//     'start /d "C:\\Program Files\\Common Files\\microsoft shared\\ink" TabTip.exe',
//     // eslint-disable-next-line no-unused-vars
//     (error, _stdout, _stderr) => {
//       if (error) {
//         // eslint-disable-next-line no-console
//         console.error(error);
//       }
//     },
//   );
// };

// nameInput.addEventListener('click', showTouchKeyboard);
// ageInput.addEventListener('click', showTouchKeyboard);
// emailInput.addEventListener('click', showTouchKeyboard);
// aboutInput.addEventListener('click', showTouchKeyboard);
