// PASTELERÍA VICKY - JavaScript
window.addEventListener ("load",function(){
    const loader =
    document.getElementById("loader");
    if (loader) {
    loader.style.display = "none";
    }
});


// ===== MENÚ RESPONSIVE =====
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav ul");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}


// ===== CAMBIO DEL HEADER AL HACER SCROLL =====
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});


// ===== BOTÓN SUBIR =====
const btnTop = document.createElement("button");
btnTop.innerHTML = "⬆";
btnTop.className = "btn-top";

document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===== TARJETAS DE PRODUCTOS =====
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});


// ===== FAVORITOS =====
const favoritos = document.querySelectorAll(".favorito");

favoritos.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.classList.toggle("seleccionado");

        if (btn.classList.contains("seleccionado")) {
            btn.innerHTML = "❤️";
        } else {
            btn.innerHTML = "🤍";
        }

    });

});


// ===== PREGUNTAS FRECUENTES =====
const preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach(pregunta => {

    pregunta.addEventListener("click", () => {

        const respuesta = pregunta.nextElementSibling;

        if (respuesta.style.display === "block") {
            respuesta.style.display = "none";
        } else {
            respuesta.style.display = "block";
        }

    });

});


// ===== FORMULARIO DE CONTACTO =====
const formulario = document.querySelector("form");

if (formulario) {

    formulario.addEventListener("submit", (e) => {

        e.preventDefault();

        let nombre = document.querySelector("#nombre").value;
        let correo = document.querySelector("#correo").value;
        let mensaje = document.querySelector("#mensaje").value;


        if(nombre === "" || correo === "" || mensaje === "") {

            alert("Por favor completa todos los campos.");

        } else {

            alert("Gracias por escribirnos, " + nombre + ". Te responderemos pronto.");
            formulario.reset();

        }

    });

}


// ===== ANIMACIÓN AL APARECER SECCIONES =====
const secciones = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    secciones.forEach(seccion => {

        let posicion = seccion.getBoundingClientRect().top;
        let pantalla = window.innerHeight;

        if(posicion < pantalla - 100){
            seccion.classList.add("mostrar");
        }

    });

});