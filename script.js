// Função para converter dígitos arábicos para dígitos Devanagari (Hindi)
const toHindiDigits = (numStr) => {
    const digitsMap = ["०","१","२","३","४","५","६","७","८","९"];
    return numStr.replace(/\d/g, d => digitsMap[d]);
};

// Meses e dias da semana em Hindi
const meses = ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
const diasSemana = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];

function atualizarRelogioData() {
    const agoraUTC = new Date();

    // Ajusta para horário IST (+5:30)
    const offsetISTms = (5 * 60 + 30) * 60 * 1000;
    const agoraIST = new Date(agoraUTC.getTime() + offsetISTms);

    // Hora, minuto e segundo formatados
    let h = agoraIST.getHours().toString().padStart(2, '0');
    let m = agoraIST.getMinutes().toString().padStart(2, '0');
    let s = agoraIST.getSeconds().toString().padStart(2, '0');

    h = toHindiDigits(h);
    m = toHindiDigits(m);
    s = toHindiDigits(s);

    document.getElementById('relogio01').textContent = `${h}:${m}:${s}`;

    // Dia da semana, dia, mês e ano em Hindi
    let diaSemana = diasSemana[agoraIST.getDay()];
    let dia = toHindiDigits(agoraIST.getDate().toString());
    let mes = meses[agoraIST.getMonth()];
    let ano = toHindiDigits(agoraIST.getFullYear().toString());

    document.getElementById('date').textContent = `${diaSemana}, ${dia} ${mes}, ${ano}`;
}

// Atualiza a cada segundo
setInterval(atualizarRelogioData, 1000);
atualizarRelogioData(); // Primeira chamada imediata
