// Botón principal
const boton = document.getElementById("entrar");
// Evento
boton.addEventListener("click", () => {
    // Desvanecer la página
    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = "0";
    // Esperar la animación
    setTimeout(() => {
        window.location.href = "carta.html";
    }, 1200);
});
