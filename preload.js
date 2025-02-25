const { contextBridge, ipcRenderer } = require('electron');

// Expose an API to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  hideWindow: () => ipcRenderer.send('hideWindow'),
  openChrome: (app) => ipcRenderer.send('openChrome', app),

  sendMail: (app) => ipcRenderer.send('sendMail', app),

  startTask: () => ipcRenderer.invoke('start-task'),
  stopTask: () => ipcRenderer.invoke('stop-task'),
});