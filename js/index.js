const slide = document.querySelector('.slide');
const openBtn = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-menu');
const hamburger = document.getElementById('hamburger');

//Navbar
openBtn.addEventListener('click', () => {
    slide.classList.add('active');
    hamburger.style.display = 'none'; // Esconde o botão
});

closeBtn.addEventListener('click', () => {
    slide.classList.remove('active');
    hamburger.style.display = 'block'; // Mostra novamente
});
