const gallery = document.getElementById("gallery");
const loveDate = document.getElementById("love-date");
const audio = document.getElementById("audio");
const loveDateText = document.getElementById("love-date-text");
const iranTime = document.getElementById("iran-time");
const menu = document.getElementById("menu");

function toggleGallery() {
  gallery.style.display = gallery.style.display === "flex" ? "none" : "flex";
}

function showLoveDate() {
  loveDate.style.display = loveDate.style.display === "block" ? "none" : "block";
}

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function toggleMenu() {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// به‌روزرسانی تاریخ عاشقی
function updateLoveDate() {
  // تاریخ شروع آشنایی را درست وارد کنید
  const startDate = new Date("2022-03-21T00:00:00");
  const currentDate = new Date();
  const diff = new Date(currentDate - startDate);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = diff.getUTCHours();
  const minutes = diff.getUTCMinutes();
  const seconds = diff.getUTCSeconds();

  loveDateText.innerHTML = `ما قبل عید با هم آشنا شدیم و روزهای خوبی رو سپری کردیم. تاریخ: ${days} روز، ${hours} ساعت، ${minutes} دقیقه، ${seconds} ثانیه`;
}
setInterval(updateLoveDate, 1000);

// به‌روزرسانی تاریخ و ساعت ایران
function updateIranTime() {
  const options = {
    timeZone: "Asia/Tehran",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const iranTimeNow = new Date().toLocaleString("fa-IR", options);
  iranTime.textContent = `تاریخ و ساعت ایران: ${iranTimeNow}`;
}
setInterval(updateIranTime, 1000);
