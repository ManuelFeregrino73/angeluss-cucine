
// Fotografías de cada categoría
const catalogo = {

    cocinas: [
        "img/cocinas/cocina1.jpeg",
        "img/cocinas/cocina2.jpeg",
        "img/cocinas/cocina3.jpeg",
        "img/cocinas/cocina4.png",
        "img/cocinas/cocina5.png",
        "img/cocinas/cocina6.png",
        "img/cocinas/cocina7.jpeg",
        "img/cocinas/cocina8.jpeg",
        "img/cocinas/cocina9.jpeg",
        "img/cocinas/cocina10.jpeg",
        "img/cocinas/cocina11.jpeg",
        "img/cocinas/cocina12.jpeg",
        "img/cocinas/cocina13.jpeg",
        "img/cocinas/cocina14.jpeg",
        "img/cocinas/cocina15.jpeg",
        "img/cocinas/cocina16.jpeg",
        "img/cocinas/cocina17.jpeg",
        "img/cocinas/cocina18.jpeg",
        "img/cocinas/cocina19.jpeg",
        "img/cocinas/cocina20.jpeg",
        "img/cocinas/cocina21.jpeg",
        "img/cocinas/cocina22.jpeg",
        "img/cocinas/cocina23.jpeg",
        "img/cocinas/cocina24.jpeg",
        "img/cocinas/cocina25.jpeg",
        "img/cocinas/cocina26.jpeg",
        "img/cocinas/cocina27.jpeg",
        "img/cocinas/cocina28.jpeg",
        "img/cocinas/cocina29.jpeg",
        "img/cocinas/cocina30.jpeg",
        "img/cocinas/cocina31.jpeg",
        "img/cocinas/cocina32.jpeg",
        "img/cocinas/cocina33.jpeg",
        "img/cocinas/cocina34.jpeg",
        "img/cocinas/cocina35.jpeg",
        "img/cocinas/cocina36.jpeg",
        "img/cocinas/cocina37.jpeg",
        "img/cocinas/cocina38.jpeg",
        "img/cocinas/cocina39.jpeg",
        "img/cocinas/cocina40.jpeg",
        "img/cocinas/cocina41.jpeg",
        "img/cocinas/cocina42.jpeg",
        "img/cocinas/cocina43.jpeg",
        "img/cocinas/cocina44.jpeg",
        "img/cocinas/cocina45.jpeg",
        "img/cocinas/cocina46.jpeg",
        "img/cocinas/cocina47.jpeg",
        "img/cocinas/cocina48.jpeg",
        "img/cocinas/cocina49.jpeg",
        "img/cocinas/cocina50.jpeg",
        "img/cocinas/cocina51.jpeg",
        "img/cocinas/cocina52.jpeg",
        "img/cocinas/cocina53.jpeg",
        "img/cocinas/cocina54.jpeg",
        "img/cocinas/cocina55.jpeg",
        "img/cocinas/cocina56.jpeg"
            ],

    closets: [
        "img/closets/closet1.jpeg",
        "img/closets/closet2.jpeg",
        "img/closets/closet3.jpeg",
        "img/closets/closet4.jpeg",
        "img/closets/closet5.jpeg",
        "img/closets/closet6.jpeg",
        "img/closets/closet7.jpeg",
        "img/closets/closet8.jpeg",
        "img/closets/closet9.jpeg",
        "img/closets/closet10.jpeg",
        "img/closets/closet11.jpeg",
        "img/closets/closet12.jpeg",
        "img/closets/closet13.jpeg",
        "img/closets/closet14.jpeg",
        "img/closets/closet15.jpeg",
        "img/closets/closet16.jpeg",
        "img/closets/closet17.jpeg",
        "img/closets/closet18.jpeg",
        "img/closets/closet19.jpeg"
    ],

    muebles: [
        "img/muebles/mueble1.jpeg",
        "img/muebles/mueble2.jpeg",
        "img/muebles/mueble3.jpeg",
        "img/muebles/mueble4.jpeg",
        "img/muebles/mueble5.jpeg",
        "img/muebles/mueble6.jpeg",
        "img/muebles/mueble7.jpeg",
        "img/muebles/mueble8.jpeg",
        "img/muebles/mueble9.jpeg",
        "img/muebles/mueble10.jpeg",
        "img/muebles/mueble11.jpeg",
        "img/muebles/mueble12.jpeg",
        "img/muebles/mueble13.jpeg",
        "img/muebles/mueble14.jpeg",
        "img/muebles/mueble15.jpeg",
        "img/muebles/mueble16.jpeg"
    ],

    entretenimiento: [
        "img/entretenimiento/centro1.jpeg",
        "img/entretenimiento/centro2.jpeg",
        "img/entretenimiento/centro3.jpeg",
        "img/entretenimiento/centro4.jpeg",
        "img/entretenimiento/centro5.jpeg",
        "img/entretenimiento/centro6.jpeg",
        "img/entretenimiento/centro7.jpeg",
        "img/entretenimiento/centro8.jpeg",
        "img/entretenimiento/centro9.jpeg",
        "img/entretenimiento/centro10.jpeg",
        "img/entretenimiento/centro11.jpeg",
        "img/entretenimiento/centro12.jpeg",
        "img/entretenimiento/centro13.jpeg"
    ]

};
const modal = document.getElementById("modal-imagen");
const imagenAmpliada = document.getElementById("imagen-ampliada");

const cerrarModal = document.getElementById("cerrar-modal");
const anteriorModal = document.getElementById("anterior-modal");
const siguienteModal = document.getElementById("siguiente-modal");
const contadorImagen = document.getElementById("contador-imagen");

let imagenesActuales = [];
let indiceActual = 0;
// Elementos HTML
const galeria = document.getElementById("galeria");
const botones = document.querySelectorAll(".filtro");

// Mostrar fotografías

function mostrarFotografias(categoria) {

    galeria.innerHTML = "";

    const fotografias = catalogo[categoria] || [];

    // Guardar las imágenes de la categoría actual
    imagenesActuales = fotografias;

    fotografias.forEach((imagen, indice) => {

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("tarjeta-catalogo");

        tarjeta.innerHTML = `
            <img
                src="${imagen}"
                alt="Proyecto ${categoria} ${indice + 1}"
                loading="lazy"
            >
        `;

        // Abrir modal al presionar la imagen
        tarjeta.addEventListener("click", () => {
            abrirModal(indice);
        });

        galeria.appendChild(tarjeta);

    });

}


// Evento de los botones
botones.forEach(boton => {

    boton.addEventListener("click", () => {

        // Quitar selección anterior
        botones.forEach(b => b.classList.remove("activo"));

        // Activar botón seleccionado
        boton.classList.add("activo");

        // Mostrar categoría seleccionada
        const categoria = boton.dataset.categoria;

        mostrarFotografias(categoria);

    });

});

// Mostrar cocinas al entrar
mostrarFotografias("cocinas");
// Abrir modal
function abrirModal(indice) {

    indiceActual = indice;

    actualizarImagenModal();

    modal.classList.add("activo");

    document.body.style.overflow = "hidden";
}

// Actualizar imagen
function actualizarImagenModal() {

    imagenAmpliada.src = imagenesActuales[indiceActual];

    contadorImagen.textContent =
        `${indiceActual + 1} / ${imagenesActuales.length}`;

}

// Cerrar modal
function cerrarVentanaModal() {

    modal.classList.remove("activo");

    document.body.style.overflow = "";

}

// Imagen anterior
anteriorModal.addEventListener("click", () => {

    indiceActual--;

    if (indiceActual < 0) {
        indiceActual = imagenesActuales.length - 1;
    }

    actualizarImagenModal();

});

// Imagen siguiente
siguienteModal.addEventListener("click", () => {

    indiceActual++;

    if (indiceActual >= imagenesActuales.length) {
        indiceActual = 0;
    }

    actualizarImagenModal();

});

// Cerrar con botón
cerrarModal.addEventListener("click", cerrarVentanaModal);

// Cerrar al presionar fuera de la imagen
modal.addEventListener("click", (evento) => {

    if (evento.target === modal) {
        cerrarVentanaModal();
    }

});

// Cerrar con tecla ESC y navegar con flechas
document.addEventListener("keydown", (evento) => {

    if (!modal.classList.contains("activo")) return;

    if (evento.key === "Escape") {
        cerrarVentanaModal();
    }

    if (evento.key === "ArrowRight") {
        siguienteModal.click();
    }

    if (evento.key === "ArrowLeft") {
        anteriorModal.click();
    }

});