document.addEventListener("DOMContentLoaded", function () {
    // Navbar
    const slide = document.querySelector('.slide');
    const openBtn = document.getElementById('open-menu');
    const closeBtn = document.getElementById('close-menu');
    const hamburger = document.getElementById('hamburger');
    const contatoBtn = document.getElementById("btn-contato");

    openBtn?.addEventListener('click', () => {
        slide.classList.add('active');
        hamburger.style.display = 'none';
    });

    closeBtn?.addEventListener('click', () => {
        slide.classList.remove('active');
        hamburger.style.display = 'block';
    });

    contatoBtn?.addEventListener("click", function () {
        window.open("https://chat.whatsapp.com/H8fN9K9LEsvJwBuARSVAWc?mode=r_c", "_blank");
    });

    // Botões principais
    const botaoCadastro = document.getElementById("cadastrar-ponto");
    const botaoCausa = document.getElementById("encontrar-causa");

    // Todos os botões "DOAR"
    const botoesDoar = document.querySelectorAll(".btn-doar");

    // Modais
    const modalCadastro = document.getElementById("modalCadastro");
    const modalCausa = document.getElementById("modalCausa");

    const contentCadastro = document.getElementById("contentCadastro");
    const contentCausa = document.getElementById("contentCausa");

    // Abrir modal de cadastro
    botaoCadastro?.addEventListener("click", function () {
        modalCadastro.classList.remove("d-none");
        document.body.classList.add("no-scroll");
    });

    // Abrir modal de doação com botão principal
    botaoCausa?.addEventListener("click", function () {
        modalCausa.classList.remove("d-none");
        document.body.classList.add("no-scroll");
    });

    // Abrir modal de doação com qualquer botão "DOAR"
    botoesDoar.forEach((botao) => {
        botao.addEventListener("click", function () {
            modalCausa.classList.remove("d-none");
            document.body.classList.add("no-scroll");
        });
    });

    // Fechar modal de cadastro ao clicar fora
    modalCadastro.addEventListener("click", function (event) {
        if (!contentCadastro.contains(event.target)) {
            modalCadastro.classList.add("d-none");
            document.body.classList.remove("no-scroll");
        }
    });

    // Fechar modal de causa ao clicar fora
    modalCausa.addEventListener("click", function (event) {
        if (!contentCausa.contains(event.target)) {
            modalCausa.classList.add("d-none");
            document.body.classList.remove("no-scroll");
        }
    });

    // Envio do formulário de cadastro
    contentCadastro.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nomeCompleto").value.trim();
        const email = document.getElementById("email").value.trim();
        const instituicao = document.getElementById("instituicao").value.trim();
        const causa = document.getElementById("causa").value.trim();
        const endereco = document.getElementById("endereco").value.trim();
        const motivo = document.getElementById("motivo").value.trim();

        if (!nome || !email || !instituicao || !causa || !endereco || !motivo) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        const mensagem = `
*Olá, tudo bem?* Gostaria de me candidatar para ser um ponto de coleta. Seguem meus dados para cadastro:

*Nome completo:* ${nome}
*Email:* ${email}
*Instituição:* ${instituicao}
*Causa:* ${causa}
*Endereço:* ${endereco}
*Motivo:* ${motivo}
        `.trim();

        const numero = "5551984172664";
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");
        contentCadastro.reset();
        modalCadastro.classList.add("d-none");
        document.body.classList.remove("no-scroll");
    });

    // Envio do formulário "Para quem doar"
    contentCausa.addEventListener("submit", function (e) {
        e.preventDefault();

        const cidade = document.getElementById("cidade").value;
        const causas = [];
        if (document.getElementById("higiene").checked) causas.push("Higiene");
        if (document.getElementById("roupas").checked) causas.push("Roupas");
        if (document.getElementById("alimento").checked) causas.push("Alimento");

        if (!cidade || causas.length === 0) {
            alert("Selecione uma cidade e pelo menos uma causa.");
            return;
        }

        contentCausa.reset();
        modalCausa.classList.add("d-none");
        document.body.classList.remove("no-scroll");
    });
});
