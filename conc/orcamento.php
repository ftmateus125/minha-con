<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orçamento - TaxaCars</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Solicite seu Orçamento</h1>
        <nav>
            <ul>
                <li><a href="index.html">Início</a></li>
                <li><a href="catalogo.html">Catálogo de Carros</a></li>
                <li><a href="orcamento.html">Orçamento</a></li>
                <li><a href="suporte.html">Suporte</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="orcamento">
            <form id="formOrcamento">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>

                <label for="carro">Escolha o carro:</label>
                <select id="carro" name="carro" required>
                    <option value="fiat_mobi">Fiat Mobi</option>
                    <option value="chevrolet_onix">Chevrolet Onix</option>
                    <option value="hyundai_hb20">Hyundai HB20</option>
                 
                </select>

                <button type="submit">Solicitar Orçamento</button>
            </form>
            <p id="mensagem-agradecimento"></p>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 TaxaCars - Todos os direitos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
