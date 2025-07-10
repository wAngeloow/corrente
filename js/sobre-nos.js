document.addEventListener("DOMContentLoaded", function () {
    //Entrar em Contato
    const openBtn = document.getElementById('open-menu');
    const closeBtn = document.getElementById('close-menu');
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
    const botaoCausa = document.getElementById("encontrar-causa");
    const botoesDoar = document.querySelectorAll(".btn-doar");

    // Modais
    const modalCausa = document.getElementById("modalCausa");
    const contentCausa = document.getElementById("contentCausa");

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

    // Fechar modal de causa ao clicar fora
    modalCausa.addEventListener("click", function (event) {
        if (!contentCausa.contains(event.target)) {
            modalCausa.classList.add("d-none");
            document.body.classList.remove("no-scroll");
        }
    });
});
