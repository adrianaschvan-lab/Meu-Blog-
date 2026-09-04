const botoes = document.querySelectorAll("article button");

botoes.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {

        let texto = botao.querySelector("span");

        if (texto) {

            if (curtiu === false) {

                texto.textContent++;
                curtiu = true;

            } else {

                texto.textContent--;
                curtiu = false;

            }

        }

    }

});


const botaoModoEscuro = document.querySelector("#modo-escuro");

botaoModoEscuro.addEventListener("click", function () {

    document.body.classList.toggle("modo-escuro");

    if (document.body.classList.contains("modo-escuro")) {

        botaoModoEscuro.textContent = "☀️ Modo claro";

    } else {

        botaoModoEscuro.textContent = "🌙 Modo escuro";

    }

});
