// Natal: 25 de dezembro às 00:00
const christmasDate = new Date("2025-12-25T00:00:00");

// Seletores
const daysEl = document.querySelector('.Dias');
const hourEl = document.querySelector('.Horas');
const minuteEl = document.querySelector('.Minutos');
const secondEl = document.querySelector('.Segundos');

function timeCountDown() {
  const now = new Date();

  let totalSeconds = Math.floor((christmasDate - now) / 1000);

  // Trava para não ficar negativo
  if (totalSeconds < 0) totalSeconds = 0;

  const dias = Math.floor(totalSeconds / (3600 * 24));
  const horas = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutos = Math.floor((totalSeconds % 3600) / 60);
  const segundos = totalSeconds % 60;

  daysEl.textContent = format(dias);
  hourEl.textContent = format(horas);
  minuteEl.textContent = format(minutos);
  secondEl.textContent = format(segundos);
}

function format(value) {
  return value < 10 ? `0${value}` : value;
}

timeCountDown();
setInterval(timeCountDown, 1000);
