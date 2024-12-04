document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.animationDelay = `${index * 1}s`; // Atraso escalonado maior
            card.classList.add("fade-in"); // Adiciona classe para a animação
        }, 100);
    });
});
