const time = document.querySelector(".current-time");
const new_time = new Date().toISOString();
time.textContent = new_time;