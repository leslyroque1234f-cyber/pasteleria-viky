const cubo = document.getElementById("cubo");

let giro = 0;

function girarCubo() {
    giro += 90;

    cubo.style.transform =
        `rotateY(-${giro}deg)`;

    setTimeout(girarCubo, 3000);
}

// Espera 3 segundos antes del primer giro.
setTimeout(girarCubo, 3000);