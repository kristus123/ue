const init_electron = require('./init_electron');

init_electron.init((globalShortcut, ipcMain, win) => {
  globalShortcut.register('z', () => {
    if (win.isVisible()) {
      win.focus()
    } else {
      win.show()
    }
  });

  ipcMain.on('hideWindow', (e) => {
    win.hide()
  });
})