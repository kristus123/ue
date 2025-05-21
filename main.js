const init_electron = require('./electron/init_electron')
const subprocess = require('./subprocess')

const { exec } = require('child_process')

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      console.log(stdout);
      if (error) {
        console.log(error);
        return reject(`Error: ${error.message}`);
      }
      if (stderr) {
        console.log(stderr);
        return reject(`stderr: ${stderr}`);
      }
      resolve(stdout);
    });
  });
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

  ipcMain.on('openChromeIncognito', (e, url) => {
    runCommand(`start chrome --incognito "${url}"`)
  })

  ipcMain.on('runCommand', (e, command) => {
    runCommand(command)
  })

  ipcMain.on('hideWindow', (e) => {
    win.hide()
  })

  ipcMain.on('sendMail', (e, to, title, body) => {
	  title = title.replace(/(['"])/g, '\\$1')
	  body = body.replace(/(['"])/g, '\\$1')
	runCommand(`wsl cd ~/meta-repo/repos/mail; venv/bin/python main.py ${to} "${title}" "${body}"`)
  })
})
