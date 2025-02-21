const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');

let win;

function init(run) {
    function createWindow() {
        // Create the browser window
        win = new BrowserWindow({
          width: 600 * 1.5,
          height: 400,
          show: false, // kk
          frame: false, // Remove window borders and controls
          resizable: false, // Optional: Prevent resizing
          webPreferences: {
            nodeIntegration: true,
            preload: __dirname + '/preload.js',
          },
          icon: null,
        });
      
        // Disable menu bar
        win.setMenu(null);
      
        win.webContents.openDevTools()
      
        // Load the index.html file into the window
        win.loadFile('html_base_template.html');
        //win.setSkipTaskbar(true); // enable later
      
        // Show the window once it's loaded
        win.once('ready-to-show', () => {
          win.show();
        });
      
        // Quit the app when the window is closed
        win.on('closed', () => {
          win = null;
        });
      
      run(globalShortcut, ipcMain, win)
        
        win.show(); // 
      }

      
      // When Electron is ready, create the window
      app.whenReady().then(createWindow);


      
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