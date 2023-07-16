const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const dateEl = document.querySelector(".date");

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Aug",
    "Oct",
    "Nov",
    "Dec"
];

const displayClock = () => {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();
    const dayOfWeek = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    dateEl.textContent = `${days[dayOfWeek]} ${day} ${months[month]}`;
    hourEl.textContent = String(hours).padStart(2, "0");
    minuteEl.textContent = String(minutes).padStart(2, "0");
    secondEl.textContent = String(seconds).padStart(2, "0");
};

setInterval(displayClock, 1000);

chrome.storage.local.get(null, function (bookmarks) {
    for (const key in bookmarks) {
      if (bookmarks.hasOwnProperty(key)) {
        const bookmark = bookmarks[key];
        console.log(bookmark.url, bookmark.name, bookmark.favicon);
      }
    }
  });
