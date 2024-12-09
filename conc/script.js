const carros = [
    {
        nome: "Fusca",
        imagem: "img/volkswagen-fusca-1965-1647298960975_v2_4x3.jpg",
        descricao: "Um clássico, sempre confiável.",
        preco: "R$ 20.000,00",
        modelos: [] 
    },
    {
        nome: "Gol",
        imagem: "img/gol.jpg",
        descricao: "Popular, econômico e ágil.",
        preco: "R$ 40.000,00",
        modelos: [
            { nome: "Gol 1.0", preco: "R$ 40.000,00", imagem: "img/gol 10.jpg" },
            { nome: "Gol 1.6", preco: "R$ 45.000,00", imagem: "img/gol1,6.jpg" },
            { nome: "Gol GTS 1988", preco: "R$ 55.000,00", imagem: "img/golgts.jpg" }
        ]
    },
    {
        nome: "Fiat Uno",
        imagem: "img/uno.jpg",
        descricao: "Compacto e prático para o dia a dia.",
        preco: "R$ 30.000,00",
        modelos: [] 
    },
    {
        nome: "Chevrolet Onix",
        imagem: "img/onix.avif",
        descricao: "Tecnologia, design e conforto.",
        preco: "R$ 50.000,00",
        modelos: [
            { nome: "Onix LT", preco: "R$ 50.000,00", imagem: "img/onixlt.webp" },
            { nome: "Onix Activ", preco: "R$ 55.000,00", imagem: "img/Chevrolet-Onix-Activ_V2_2020.webp" },
            { nome: "Onix Premier", preco: "R$ 60.000,00", imagem: "img/onix prem.webp" }
        ]
    },
    {
        nome: "Ford Ka",
        imagem: "img/ka.jpg",
        descricao: "Pequeno e robusto, ideal para a cidade.",
        preco: "R$ 37.000,00",
        modelos: [
            { nome: "Ka 1.0", preco: "R$ 37.000,00", imagem: "img/ka 1,0.jpg" },
            { nome: "Ka SE", preco: "R$ 40.000,00", imagem: "img/ka.jpg" }
        ]
    },
    {
        nome: "Renault Kwid",
        imagem: "img/kwid.jpg",
        descricao: "Compacto e econômico para o dia a dia.",
        preco: "R$ 35.000,00",
        modelos: [
            { nome: "Kwid 1.0", preco: "R$ 35.000,00", imagem: "img/kwid 1,0.jpg" },
            { nome: "Kwid Intense", preco: "R$ 40.000,00", imagem: "img/kwid int.jpg" }
        ]
    },
    {
        nome: "Toyota Corolla",
        imagem: "img/corolla.jpg",
        descricao: "Luxo, conforto e segurança.",
        preco: "R$ 120.000,00",
        modelos: [
            { nome: "Corolla GLi", preco: "R$ 120.000,00", imagem: "img/corolla gli.jpg" },
            { nome: "Corolla XEi", preco: "R$ 130.000,00", imagem: "img/corolla xli.jpg" }
        ]
    },
    {
        nome: "Honda Civic",
        imagem: "img/civic.jpg",
        descricao: "Desempenho e sofisticação.",
        preco: "115.000,00",
        modelos: [
            { nome: "Civic LX", preco: "R$ 115.000,00", imagem: "img/civic lx.jpg" },
            { nome: "Civic EX", preco: "R$ 125.000,00", imagem: "img/civic ex.png" }
        ]
    },
    {
        nome: "Chevrolet Tracker",
        imagem: "img/tracljhsv.jpg",
        descricao: "SUV moderno, ideal para família.",
        preco: "R$ 130.000,00",
        modelos: [
            { nome: "Tracker LT", preco: "R$ 130.000,00", imagem: "img/track LT.jpg" },
            { nome: "Tracker Premier", preco: "R$ 145.000,00", imagem: "img/trecx prem.jpg" }
        ]
    },
    {
        nome: "Hyundai HB20",
        imagem: "img/hb 20.jpg",
        descricao: "Design moderno e confortável.",
        preco: "45.000,00",
        modelos: [
            { nome: "HB20 Comfort", preco: "R$ 45.000,00", imagem: "img/hb20 comf.jpg" },
            { nome: "HB20 Plus", preco: "R$ 50.000,00", imagem: "img/hb20 plus.png" }
        ]
    },
    {
        nome: "Nissan Kicks",
        imagem: "img/kicks.webp",
        descricao: "SUV com design inovador.",
        preco: "R$ 110.000,00",
        modelos: [
            { nome: "Kicks S", preco: "R$ 110.000,00", imagem: "img/kicks s.jpg" },
            { nome: "Kicks SL", preco: "R$ 120.000,00", imagem: "img/kicks sl.jpg" }
        ]
    },
    {
        nome: "Jeep Compass",
        imagem: "img/compass.webp",
        descricao: "SUV de alto desempenho.",
        preco: "R$ 145.000,00",
        modelos: [
            { nome: "Compass Longitude", preco: "R$ 145.000,00", imagem: "img/compass.webp" },
            { nome: "Compass Trailhawk", preco: "R$ 160.000,00", imagem: "img/compass trail.jpg" }
        ]
    },
    {
        nome: "Volkswagen T-Cross",
        imagem: "img/T CROSS.jpg",
        descricao: "SUV compacto, ideal para a cidade.",
        preco: "R$ 115.000,00",
        modelos: [
            { nome: "T-Cross Comfortline", preco: "R$ 115.000,00", imagem: "img/T CROSS COMFORT.jpg" },
            { nome: "T-Cross Highline", preco: "R$ 130.000,00", imagem: "img/T CROSS HIGH.webp" }
        ]
    },
    {
        nome: "Volkswagen Polo",
        imagem: "img/POLO.png",
        descricao: "Compacto e robusto.",
        preco: "R$ 60.000,00",
        modelos: [
            { nome: "Polo 1.6", preco: "R$ 60.000,00", imagem: "img/POLO 1,6.jpg" },
            { nome: "Polo GTS", preco: "R$ 80.000,00", imagem: "img/POLO GTS.jpg" }
        ]
    },
    {
        nome: "Mitsubishi L200",
        imagem: "img/L200.webp",
        descricao: "Potência e robustez para quem precisa de mais força.",
        preco: "R$ 160.000,00",
        modelos: [
            { nome: "L200 Triton", preco: "R$ 160.000,00", imagem: "img/L200.webp" },
            { nome: "L200 Sport", preco: "R$ 180.000,00", imagem: "img/L200 SPORT.jpg" }
        ]
    },
    {
        nome: "BMW X1",
        imagem: "img/X1.webp",
        descricao: "SUV de luxo, performance e elegância.",
        preco: "R$ 220.000,00",
        modelos: [
            { nome: "X1 sDrive", preco: "R$ 220.000,00", imagem: "img/bmw-x1-sdrive20i-2025-brasil.jpg" },
            { nome: "X1 xDrive", preco: "R$ 230.000,00", imagem: "img/X1.webp" }
        ]
    },
    {
        nome: "Audi Q3",
        imagem: "img/Q3.webp",
        descricao: "Luxo, performance e conforto.",
        preco: "R$ 230.000,00",
        modelos: [
            { nome: "Q3 Attraction", preco: "R$ 230.000,00", imagem: "img/Q3 ATRRA.png" },
            { nome: "Q3 Prestige", preco: "R$ 250.000,00", imagem: "img/Q3 PRES.jpg" }
        ]
    },
    {
        nome: "Mercedes-Benz A200",
        imagem: "img/A200.webp",
        descricao: "Estilo e sofisticação em cada detalhe.",
        preco: "R$ 220.000,00",
        modelos: [
            { nome: "A200 Progressive", preco: "R$ 220.000,00", imagem: "img/A200 PROGRE.jpg" },
            { nome: "A200 AMG", preco: "R$ 240.000,00", imagem: "img/A200 AMG.jpg" }
        ]
    }
];




function renderizarCarros() {
    const carrosContainer = document.getElementById("carros-container");

    carros.forEach(carro => {
        const carroDiv = document.createElement("div");
        carroDiv.classList.add("carro");

        carroDiv.innerHTML = `
            <img src="${carro.imagem}" alt="${carro.nome}" id="imagem-${carro.nome.replace(/\s/g, '')}">
            <h3>${carro.nome}</h3>
            <p>${carro.descricao}</p>
            <p class="preco" id="preco-${carro.nome.replace(/\s/g, '')}">${carro.preco}</p>
            <label for="modelos-${carro.nome.replace(/\s/g, '')}">Escolha o modelo:</label>
            <select id="modelos-${carro.nome.replace(/\s/g, '')}" ${carro.modelos.length === 0 ? 'disabled' : ''} onchange="atualizarModelo('${carro.nome.replace(/\s/g, '')}')">
                <option value="">Selecione um modelo</option>
                ${carro.modelos.map((modelo, index) => 
                    `<option value="${index}">${modelo.nome}</option>`
                ).join('')}
            </select>
        `;

        carrosContainer.appendChild(carroDiv);
    });
}


function atualizarModelo(carroNome) {
    const carro = carros.find(c => c.nome.replace(/\s/g, '') === carroNome);
    const select = document.getElementById(`modelos-${carroNome}`);
    const precoElement = document.getElementById(`preco-${carroNome}`);
    const imagemElement = document.getElementById(`imagem-${carroNome}`);

    const modeloIndex = select.value;
    if (modeloIndex !== "") {
        const modelo = carro.modelos[modeloIndex];
        precoElement.textContent = modelo.preco;
        imagemElement.src = modelo.imagem;
    } else {
        precoElement.textContent = carro.preco;
        imagemElement.src = carro.imagem;
    }
}


renderizarCarros();
