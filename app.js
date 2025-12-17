const natalDate = new Date("12/25/2025 00:00:00");
const anoNovoDate = new Date("01/01/2026 00:00:00");

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function countdown(targetDate, prefix) {
  const now = new Date();
  const totalSeconds = Math.floor((targetDate - now) / 1000);

  const dias = Math.floor(totalSeconds / 3600 / 24);
  const horas = Math.floor((totalSeconds / 3600) % 24);
  const minutos = Math.floor((totalSeconds / 60) % 60);
  const segundos = totalSeconds % 60;

  document.querySelector(`.${prefix}-dias`).textContent = formatTime(dias);
  document.querySelector(`.${prefix}-horas`).textContent = formatTime(horas);
  document.querySelector(`.${prefix}-minutos`).textContent = formatTime(minutos);
  document.querySelector(`.${prefix}-segundos`).textContent = formatTime(segundos);
}

function updateClockBrasilia() {
  const now = new Date();
  const options = { timeZone: "America/Sao_Paulo" };

  const time = now.toLocaleTimeString("pt-BR", options);
  const date = now.toLocaleDateString("pt-BR", {
    ...options,
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  document.getElementById("clock").textContent = `Horário de Brasília: ${time}`;
  document.getElementById("date").textContent = date;
}

function updateAll() {
  countdown(natalDate, "natal");
  countdown(anoNovoDate, "ano");
  updateClockBrasilia();
}

updateAll();
setInterval(updateAll, 1000);
