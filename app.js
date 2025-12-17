// ================= CONFIGURAÇÕES CENTRAIS =================
const YOUTUBE_DELAY_SEGUNDOS = 18; // ajuste fino do delay da live

const EVENTOS = {
  natal: new Date("12/25/2025 00:00:00"),
  ano: new Date("01/01/2026 00:00:00")
};

// ================= FUNÇÕES UTILITÁRIAS =================
function pad(valor) {
  return String(valor).padStart(2, '0');
}

function agoraComDelay() {
  const agora = new Date();
  agora.setSeconds(agora.getSeconds() + YOUTUBE_DELAY_SEGUNDOS);
  return agora;
}

// ================= CONTAGEM REGRESSIVA =================
function atualizarContagem(dataAlvo, prefixo) {
  const agora = agoraComDelay();
  let totalSegundos = Math.floor((dataAlvo - agora) / 1000);

  if (totalSegundos < 0) totalSegundos = 0;

  const dias = Math.floor(totalSegundos / 86400);
  const horas = Math.floor((totalSegundos % 86400) / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  document.querySelector(`.${prefixo}-dias`).textContent = pad(dias);
  document.querySelector(`.${prefixo}-horas`).textContent = pad(horas);
  document.querySelector(`.${prefixo}-minutos`).textContent = pad(minutos);
  document.querySelector(`.${prefixo}-segundos`).textContent = pad(segundos);
}

// ================= HORÁRIO DE BRASÍLIA =================
function atualizarHorarioBrasilia() {
  const agora = agoraComDelay();

  const time = agora.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo"
  });

  const date = agora.toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  document.getElementById("clock").textContent = `Horário de Brasília: ${time}`;
  document.getElementById("date").textContent = date;
}

// ================= LOOP PRINCIPAL =================
function atualizarTudo() {
  atualizarContagem(EVENTOS.natal, "natal");
  atualizarContagem(EVENTOS.ano, "ano");
  atualizarHorarioBrasilia();
}

atualizarTudo();
setInterval(atualizarTudo, 1000);

