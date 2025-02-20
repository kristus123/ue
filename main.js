const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron');

let win;

function createWindow() {
  // Create the browser window
  win = new BrowserWindow({
    width: 600,
    height: 400,
    show: false, // Initially hide the window
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

  // Load the index.html file into the window
  win.loadFile('index.html');
  //win.setSkipTaskbar(true); // enable later

  // Show the window once it's loaded
  win.once('ready-to-show', () => {
    win.show();
  });

  // Quit the app when the window is closed
  win.on('closed', () => {
    win = null;
  });

  // Register the global shortcut for 'z' key to show/focus the window
  globalShortcut.register('z', () => {
    if (win.isVisible()) {
      win.focus(); // Focus the window if it's visible
    } else {
      win.show(); // Show the window if it's hidden
    }
  });

  


  // Listen for 'hideWindow' event and hide the window when it occurs
  ipcMain.on('hideWindow', (e) => {
console.log(e)
    win.hide(); // This hides the window instead of closing it
  });
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



