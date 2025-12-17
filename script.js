const newYear = "01/01/2026"; // Data do Ano Novo

// Selecionando os elementos
const daysEl = document.querySelector('.Dias');
const hourEl = document.querySelector('.Horas');
const minuteEl = document.querySelector('.Minutos');
const secondEl = document.querySelector('.Segundos');

// Função que calcula e atualiza o tempo restante
function timeCountDown() {
  const nowDate = new Date(); // Hora atual
  const newYearDate = new Date(newYear); // Hora do Ano Novo
  
  // Diferença total em segundos
  let totalSeconds = Math.floor((newYearDate - nowDate) / 1000);
  
  // Incrementando 9 segundos
  totalSeconds -= 13;

  // Cálculos
  const Dias = Math.floor(totalSeconds / 3600 / 24);
  const Horas = Math.floor((totalSeconds / 3600) % 24);
  const Minutos = Math.floor((totalSeconds / 60) % 60);
  const Segundos = totalSeconds % 60;

  // Atualizando os valores na tela
  daysEl.textContent = formatTime(Dias);
  hourEl.textContent = formatTime(Horas);
  minuteEl.textContent = formatTime(Minutos);
  secondEl.textContent = formatTime(Segundos);
}

// Formatar os valores para exibir sempre dois dígitos
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// Atualizar o contador a cada segundo
timeCountDown();
setInterval(timeCountDown, 1000);
