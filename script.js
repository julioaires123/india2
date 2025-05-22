<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Relógio e Data em Hindi (Índia)</title>
    <style>
        body {
            font-family: 'Noto Sans Devanagari', sans-serif, Arial;
            text-align: center;
            margin-top: 50px;
            font-size: 2rem;
        }
        #relogio01, #date {
            margin: 20px 0;
        }
    </style>
</head>
<body>

    <h1>भारत का समय और दिनांक</h1>

    <div id="relogio01"></div>
    <div id="date"></div>

    <script>
        // Converte dígitos arábicos para devanagari
        function toHindiDigits(numStr) {
            const hindiDigits = ["०","१","२","३","४","५","६","७","८","९"];
            return numStr.replace(/\d/g, d => hindiDigits[d]);
        }

        // Meses e dias da semana em Hindi
        const meses = ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];
        const semanas = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];

        function atualizarRelogioData() {
            let agora = new Date();

            // Ajusta para o horário da Índia (UTC+5:30)
            let offsetIST = 5.5 * 60; // minutos
            agora = new Date(agora.getTime() + offsetIST * 60 * 1000);

            // Hora, minuto, segundo com 2 dígitos
            let h = agora.getUTCHours().toString().padStart(2, '0');
            let m = agora.getUTCMinutes().toString().padStart(2, '0');
            let s = agora.getUTCSeconds().toString().padStart(2, '0');

            // Converte para dígitos Hindi
            h = toHindiDigits(h);
            m = toHindiDigits(m);
            s = toHindiDigits(s);

            document.getElementById('relogio01').textContent = `${h}:${m}:${s}`;

            // Dia da semana, dia, mês e ano
            let diaSemana = semanas[agora.getUTCDay()];
            let dia = toHindiDigits(agora.getUTCDate().toString());
            let mes = meses[agora.getUTCMonth()];
            let ano = toHindiDigits(agora.getUTCFullYear().toString());

            document.getElementById('date').textContent = `${diaSemana}, ${dia} ${mes}, ${ano}`;
        }

        // Atualiza a cada segundo
        setInterval(atualizarRelogioData, 1000);
        atualizarRelogioData(); // Chamada inicial imediata
    </script>
</body>
</html>
