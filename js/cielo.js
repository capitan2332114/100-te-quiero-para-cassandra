// Esperar a que cargue la página
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 2s ease";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});
// Hacer que las estrellas fugaces aparezcan de forma continua
const estrellas = document.querySelectorAll(".shooting-stars span");
estrellas.forEach((estrella, index) => {
    estrella.style.animationDelay = `${index * 1.2}s`;
});
// Efecto suave en la luna
const luna = document.querySelector(".moon");
setInterval(() => {
    luna.animate(
        [
            {
                transform: "scale(1)"
            },
            {
                transform: "scale(1.03)"
            },
            {
                transform: "scale(1)"
            }
        ],
        {
            duration: 3500,
            iterations: 1,
            easing: "ease-in-out"
        }
    );
}, 3500);
// Brillo de las frases
const frases = document.querySelectorAll(".frases span");
frases.forEach((frase, index) => {
    frase.animate(
        [
            {
                opacity: .6
            },
            {
                opacity: 1
            },
            {
                opacity: .6
            }
        ],
        {
            duration: 2500,
            delay: index * 300,
            iterations: Infinity
        }
    );
});
