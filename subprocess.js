const { fork } = require('child_process');
const path = require('path');

let worker; // Reference to the worker process

function whenReady() {
  worker = fork(path.join(__dirname, 'longTask.js'));
  worker.on('message', (result) => {
    console.log(result);
  });
}

function init(ipcMain) {
    ipcMain.handle('start-task', () => {
        if (worker) {
        worker.send('start');
        }
    });
    
    ipcMain.handle('stop-task', () => {
        if (worker) {
        worker.send('stop');
        }
    });
}

module.exports = {whenReady, init}
