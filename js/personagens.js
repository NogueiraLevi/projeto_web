const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'rgba(255, 0, 0, 0.8)'; // Muda a cor do fundo ao passar o mouse
    });

    card.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'rgba(70, 16, 16, 0.8)'; // Restaura a cor do fundo
    });
});
