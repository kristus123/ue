const { contextBridge, ipcRenderer } = require('electron');

// Expose an API to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  hideWindow: () => ipcRenderer.send('hideWindow'),
  openChrome: (url) => ipcRenderer.send('openChrome', url),
  runCommand: (command) => ipcRenderer.send('runCommand', command),

  sendMail: (to, title, body) => ipcRenderer.send('sendMail', to, title, body),

  startTask: () => ipcRenderer.invoke('start-task'),
  stopTask: () => ipcRenderer.invoke('stop-task'),
});
