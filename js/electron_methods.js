function hideWindow() {
    setTimeout(() => {
      window.electronAPI.hideWindow();               
    }, 10);
}

function startTask() {
  setTimeout(() => {
    window.electronAPI.startTask();             
  }, 10);
}

function stopTask() {
  setTimeout(() => {
    window.electronAPI.stopTask();             
  }, 10);
}

function sendMail(to, title, body) {
  setTimeout(() => {
    window.electronAPI.sendMail(to, title, body);             
  }, 10);
}

function openChrome(url) {
    setTimeout(() => {
      window.electronAPI.openChrome(url);               
    }, 10);
}

function openChromeIncognito(url) {
    setTimeout(() => {
      window.electronAPI.openChromeIncognito(url);               
    }, 10);
}


function runCommand(command) {
    setTimeout(() => {
      window.electronAPI.runCommand(command);               
    }, 10);
}
