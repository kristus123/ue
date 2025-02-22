const init_electron = require('./init_electron')

const { exec } = require('child_process')

function runCommand(command) {
  new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(`Error: ${error.message}`)
      }
      if (stderr) {
        reject(`stderr: ${stderr}`)
      }
      resolve(stdout)
    })
  })
}

init_electron.init((globalShortcut, ipcMain, win) => {
  globalShortcut.register('z', () => {
    if (win.isVisible()) {
      win.focus()
    } else {
      win.show()
    }
  })

  ipcMain.on('openChrome', (e, app) => {
    runCommand("start chrome " + app)
  })

  ipcMain.on('hideWindow', (e) => {
    win.hide()
  })
})