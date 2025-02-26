const init_electron = require('./electron/init_electron')
const subprocess = require('./subprocess')

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
  globalShortcut.register('Escape', () => {
    win.hide();
  });

  globalShortcut.register('Alt+Space', () => {
    if (win.isVisible()) {
      win.focus()
    } else {
      win.show()
    }
  })

  subprocess.init(ipcMain)
  ipcMain.on('openChrome', (e, url) => {
    runCommand("start chrome " + url)
  })

  ipcMain.on('hideWindow', (e) => {
    win.hide()
  })

  ipcMain.on('sendMail', (e, to, title, body) => {
    runCommand(`wsl cd ~/meta-repo/repos/mail; venv/bin/python main.py ${to} ${title} ${body}`)
  })
})
