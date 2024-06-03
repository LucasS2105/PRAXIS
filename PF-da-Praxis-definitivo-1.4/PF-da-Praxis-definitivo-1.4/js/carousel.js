document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".cards-wrapper");
    const cards = document.querySelectorAll(".card");
    const setaEsquerda = document.getElementById("seta-esquerda");
    const setaDireita = document.getElementById("seta-direita");
    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth =
            cards[0].offsetWidth +
            parseInt(window.getComputedStyle(cards[0]).marginRight);
        const totalCards = cards.length;
        let offset = 0;

        // Calcula a largura total do contêiner para acomodar todos os cards
        const wrapperWidth = totalCards * cardWidth;
        wrapper.style.width = `${wrapperWidth}px`;

        // Calcula o deslocamento apenas se houver cartões
        if (totalCards > 0) {
            // Garante que o carrossel não role além do último cartão
            currentIndex = Math.min(Math.max(currentIndex, 0), totalCards - 1);
            offset = -currentIndex * cardWidth;
        }

        // Ajusta o deslocamento para permitir que a rolagem pare no índice 7
        if (currentIndex >= 7) {
            currentIndex = 7;
            offset = -currentIndex * cardWidth;
        }

        wrapper.style.transform = `translateX(${offset}px)`;
        console.log(
            `Updated carousel: index=${currentIndex}, offset=${offset}`
        );
    }

    setaDireita.addEventListener("click", () => {
        console.log("Right arrow clicked");
        if (currentIndex < 7) {
            currentIndex++;
            updateCarousel();
        }
    });

    setaEsquerda.addEventListener("click", () => {
        console.log("Left arrow clicked");
        currentIndex--;
        updateCarousel();
    });

    // Inicializa o carrossel
    updateCarousel();
});
