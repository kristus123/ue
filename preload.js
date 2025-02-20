const { contextBridge, ipcRenderer } = require('electron');

// Expose an API to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  hideWindow: () => ipcRenderer.send('hideWindow') // Sends a message to hide the window
});
