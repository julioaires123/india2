const toHindiDigits = (numStr) => {
    const digitsMap = ["०","१","२","३","४","५","६","७","८","९"];
    return numStr.replace(/\d/g, d => digitsMap[d]);
};

const meses = ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
const diasSemana = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];

function atualizarRelogioData() {
    const agoraIST = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    const dataIST = new Date(agoraIST);

    // Hora, minuto e segundo
    let h = dataIST.getHours().toString().padStart(2, '0');
    let m = dataIST.getMinutes().toString().padStart(2, '0');
    let s = dataIST.getSeconds().toString().padStart(2, '0');

    h = toHindiDigits(h);
    m = toHindiDigits(m);
    s = toHindiDigits(s);

    document.getElementById('relogio01').textContent = `${h}:${m}:${s}`;

    // Data
    let diaSemana = diasSemana[dataIST.getDay()];
    let dia = toHindiDigits(dataIST.getDate().toString());
    let mes = meses[dataIST.getMonth()];
    let ano = toHindiDigits(dataIST.getFullYear().toString());

    document.getElementById('date').textContent = `${diaSemana}, ${dia} ${mes}, ${ano}`;
}

setInterval(atualizarRelogioData, 1000);
atualizarRelogioData();
