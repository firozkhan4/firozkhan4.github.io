const commandBar = document.getElementById("command-bar");

const url = "http://127.0.0.1:5500";

const navlist = new Map([
  [":home", "/"],
  [":dsa", "/dsa"],
  [":posts", "/posts"],
  [":x", "https://x.com/firozkhan_4"],
]);

function showNotification(message, ms = 1000) {
  const notification = document.getElementById("notification");
  const msg = document.getElementById("notification-msg");
  msg.innerText = message;
  notification.classList.toggle("hide");

  setTimeout(() => {
    notification.classList.toggle("hide");
  }, ms);
}

function runCommand() {
  const cmd = commandBar.value.trim().toLowerCase();

  if(cmd === ":q"){
    window.location.replace("")
  }else if (navlist.has(cmd)) {
    window.location.replace(url + navlist.get(cmd));
  } else {
    showNotification("Invalid Command!", 10000);
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === ":") {
    commandBar.value = "";
    commandBar.focus();
  } else if (event.key === "Escape") {
    window.location.reload();
  } else if (event.key === "Enter" && document.activeElement === commandBar) {
    runCommand();
  }
});