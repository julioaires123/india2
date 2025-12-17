// Datas ISO (padrão corporativo, zero bug)
const newYearDate = new Date("2026-01-01T00:00:00");
const christmasDate = new Date("2025-12-25T00:00:00");

function startCountdown(targetDate, elements) {
  function update() {
    const now = new Date();
    let totalSeconds = Math.floor((targetDate - now) / 1000);
    if (totalSeconds < 0) totalSeconds = 0;

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    elements.days.textContent = format(days);
    elements.hours.textContent = format(hours);
    elements.minutes.textContent = format(minutes);
    elements.seconds.textContent = format(seconds);
  }

  update();
  setInterval(update, 1000);
}

function format(value) {
  return value < 10 ? `0${value}` : value;
}

// Ano Novo
startCountdown(newYearDate, {
  days: document.querySelector(".ny-days"),
  hours: document.querySelector(".ny-hours"),
  minutes: document.querySelector(".ny-minutes"),
  seconds: document.querySelector(".ny-seconds"),
});

// Natal
startCountdown(christmasDate, {
  days: document.querySelector(".x-days"),
  hours: document.querySelector(".x-hours"),
  minutes: document.querySelector(".x-minutes"),
  seconds: document.querySelector(".x-seconds"),
});
