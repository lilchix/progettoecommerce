// Funzione per gestire il menu espanso
function toggleMenu() {
    const menuExpand = document.querySelector('.menu-expand');
    const menuToggle = document.querySelector('.navbar-toggler');
    const menuClose = document.querySelector('.menu-close');

    menuToggle.addEventListener('click', () => {
        menuExpand.classList.add('active');
    });

    menuClose.addEventListener('click', () => {
        menuExpand.classList.remove('active');
    });
}

// Funzione di inizializzazione
function init() {
    toggleMenu();
}

// Esegui la funzione di inizializzazione quando il documento è pronto
document.addEventListener('DOMContentLoaded', init);
