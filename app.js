// ===============================
// CONTAGEM REGRESSIVA
// ===============================
function startCountdown(targetDate, els) {
  setInterval(() => {
    const now = getBrasiliaDate();
    let diff = Math.floor((targetDate - now) / 1000);
    if (diff < 0) diff = 0;

    els.days.textContent = String(Math.floor(diff / 86400)).padStart(2,"0");
    els.hours.textContent = String(Math.floor(diff % 86400 / 3600)).padStart(2,"0");
    els.minutes.textContent = String(Math.floor(diff % 3600 / 60)).padStart(2,"0");
    els.seconds.textContent = String(diff % 60).padStart(2,"0");
  }, 1000);
}

// Datas fixas Brasília
startCountdown(new Date("2026-01-01T00:00:00-03:00"), {
  days: document.querySelector(".ny-days"),
  hours: document.querySelector(".ny-hours"),
  minutes: document.querySelector(".ny-minutes"),
  seconds: document.querySelector(".ny-seconds"),
});

startCountdown(new Date("2025-12-25T00:00:00-03:00"), {
  days: document.querySelector(".x-days"),
  hours: document.querySelector(".x-hours"),
  minutes: document.querySelector(".x-minutes"),
  seconds: document.querySelector(".x-seconds"),
});

// ===============================
// HORÁRIO DE BRASÍLIA
// ===============================
function getBrasiliaDate() {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });

  const parts = formatter.formatToParts(now);
  const map = {};
  parts.forEach(p => map[p.type] = p.value);

  return new Date(
    `${map.year}-${map.month}-${map.day}T${map.hour}:${map.minute}:${map.second}`
  );
}

// ===============================
// RELÓGIO + DATA
// ===============================
setInterval(() => {
  const d = getBrasiliaDate();
  document.getElementById("relogio01").innerHTML =
    `${String(d.getHours()).padStart(2,"0")}:` +
    `${String(d.getMinutes()).padStart(2,"0")}:` +
    `${String(d.getSeconds()).padStart(2,"0")}`;
}, 1000);

function atualizarData() {
  const d = getBrasiliaDate();
  const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  const dias = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];
  document.getElementById("date").innerHTML =
    `${dias[d.getDay()]}, ${d.getDate()} de ${meses[d.getMonth()]} de ${d.getFullYear()}`;
}
setInterval(atualizarData, 1000);

