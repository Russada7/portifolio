async function buscarClima() {

    const cidade = document.getElementById("cidade").value.trim();

    const apiKey = "479fff82e5f556d2fff5d7fc4fd0d048";

    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {

        const resposta = await fetch(url);

        const dados = await resposta.json();

        console.log(dados);

        if (dados.cod === 200 || dados.cod === "200") {

            document.getElementById("resultado").innerHTML = `
                <h2>${dados.name}</h2>
                <p>Temperatura: ${dados.main.temp}°C</p>
                <p>${dados.weather[0].description}</p>
            `;

        } else {

            document.getElementById("resultado").innerHTML =
                `<p>Cidade não encontrada.</p>`;
        }

    } catch (erro) {

        console.log(erro);

        document.getElementById("resultado").innerHTML =
            `<p>Erro ao buscar clima.</p>`;
    }
}