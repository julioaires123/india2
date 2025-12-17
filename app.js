// Data do Natal (25 de dezembro do ano atual)
const christmas = "12/25/2025";

// Selecionando os elementos
const daysEl = document.querySelector('.Dias');
const hourEl = document.querySelector('.Horas');
const minuteEl = document.querySelector('.Minutos');
const secondEl = document.querySelector('.Segundos');

// Função principal
function timeCountDown() {
  const nowDate = new Date();
  const christmasDate = new Date(christmas);

  let totalSeconds = Math.floor((christmasDate - nowDate) / 1000);

  // Evita valores negativos após o evento
  if (totalSeconds < 0) totalSeconds = 0;

  const Dias = Math.floor(totalSeconds / 3600 / 24);
  const Horas = Math.floor((totalSeconds / 3600) % 24);
  const Minutos = Math.floor((totalSeconds / 60) % 60);
  const Segundos = totalSeconds % 60;

  daysEl.textContent = formatTime(Dias);
  hourEl.textContent = formatTime(Horas);
  minuteEl.textContent = formatTime(Minutos);
  secondEl.textContent = formatTime(Segundos);
}

// Formatação padrão enterprise (2 dígitos)
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Inicialização
timeCountDown();
setInterval(timeCountDown, 1000);
