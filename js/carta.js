// Obtener elementos
const botonMusica = document.getElementById("musica");
const audio = document.getElementById("audio");
const botonContinuar = document.getElementById("continuar");
// Reproducir / Pausar canción
botonMusica.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        botonMusica.textContent = "⏸️ Pausar nuestra canción";
    } else {
        audio.pause();
        botonMusica.textContent = "🎵 Reproducir nuestra canción";
    }
});
// Ir a la siguiente página
botonContinuar.addEventListener("click", () => {
    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = "cielo.html";
    }, 1200);
});
