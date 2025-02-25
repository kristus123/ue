let running = false;
let taskInterval;

function longRunningTask() {
  console.log("Task started");

  taskInterval = setInterval(() => {
    if (running) {
      console.log("Task is running...");
    }
  }, 1000);
}

function stopTask() {
  console.log("Task stopped");
  clearInterval(taskInterval);
}

process.on('message', (msg) => {
  if (msg === 'start') {
    if (!running) {
      running = true;
      longRunningTask();
    } else {
      console.log("Task is already running");
    }
  } else if (msg === 'stop') {
    if (running) {
      running = false;
      stopTask();
    } else {
      console.log("Task is not running");
    }
  }
});
