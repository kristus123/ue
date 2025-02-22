
function hideWindow() {
    setTimeout(() => {
      window.electronAPI.hideWindow();               
    }, 10);
}

function openChrome(url) {
    setTimeout(() => {
      window.electronAPI.openChrome(url);               
    }, 10);
    hideWindow()
}