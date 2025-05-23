const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');
const subprocess = require('../subprocess')

let win;

function init(run) {
    function createWindow() {
        win = new BrowserWindow({
          //width: 600 * 1.5,
          //height: 400,
          show: false, // kk
          frame: false, // Remove window borders and controls
          resizable: false, // Optional: Prevent resizing
          webPreferences: {
            nodeIntegration: true,
            preload: __dirname + '/preload.js',
            contextIsolation: true, // Ensures renderer process runs in its own context
            enableRemoteModule: false // For security reasons, avoid remote module usage
          },
          icon: null,
        });
      
        // Disable menu bar
        win.setMenu(null);
      
        // win.webContents.openDevTools({ mode: 'detach' });

      
        win.loadFile('base_template.html');
        win.setSkipTaskbar(true);
      
        // win.once('ready-to-show', () => {
        //   win.show();
        // });
      
        win.on('closed', () => {
          win = null;
        });
      
      run(globalShortcut, ipcMain, win)
        win.show()
      }
      
        
        app.whenReady().then(() => {
          subprocess.whenReady()
          createWindow()
          win.hide();
        });

      // Quit the app when all windows are closed (for macOS compatibility)
      app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
          app.quit();
        }
      });

      // Recreate window on app activate (for macOS)
      app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createWindow();
          win.focus(); // Focus the window if it's visible
        }
      });
}

module.exports = {win, init}
