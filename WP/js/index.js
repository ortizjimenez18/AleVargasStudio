// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    // Solicita el archivo index.json
    fetch('data/index.json')
    .then(res => res.json())
    .then(data => {

        // ================= NAVBAR =================
        // Obtiene el logo del navbar y le asigna la ruta desde el JSON
        const logo = document.getElementById("logoNav");
        logo.src = data.navbar.logo;

        // ================= HERO (CARRUSEL) =================
        // Contenedor del carrusel
        const heroContainer = document.getElementById("heroCarouselInner");

        // Recorre las imágenes del hero
        data.hero.forEach((img, index) => {
            heroContainer.innerHTML += `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                    <img src="${img}" class="d-block w-100">
                </div>
            `;
        });

        // ================= GALERÍA =================
        // Contenedor de la galería
        const galeria = document.getElementById("galeriaContainer");

        // Inserta imágenes de la galería
        data.galeria.forEach(img => {
            galeria.innerHTML += `
                <div class="col-md-4">
                    <img src="${img}" class="img-fluid gallery-img">
                </div>
            `;
        });

    })
    // Manejo de errores en la carga del JSON
    .catch(err => console.error("Error cargando JSON:", err));

});


// ================= REVIEWS =================
// Solicita nuevamente el JSON para cargar reseñas
fetch("data/index.json")
    .then(res => res.json())
    .then(data => {

        // Contenedor de reseñas
        let container = document.getElementById("reviewsContainer");

        // Información manual de reseñas
        let reviewsData = [
            {
                nombre: "María López",
                texto: "Excelente servicio, mi piel mejoró muchísimo.",
                tiempo: "1 mes"
            },
            {
                nombre: "Ana Rodríguez",
                texto: "Muy profesional y resultados increíbles.",
                tiempo: "2 semanas"
            },
            {
                nombre: "Laura Gómez",
                texto: "Totalmente recomendado, volveré sin duda.",
                tiempo: "5 días"
            }
        ];

        // Recorre imágenes del JSON y las combina con los datos manuales
        data.reviews.forEach((img, i) => {

            let r = reviewsData[i];

            container.innerHTML += `
                <div class="col-md-4">
                    <div class="review-card text-center p-4 h-100">

                        <!-- Imagen del cliente -->
                        <img src="${img}" class="review-img mb-3">

                        <!-- Nombre -->
                        <h6 class="fw-bold">${r.nombre}</h6>

                        <!-- Estrellas (rating fijo) -->
                        <div class="text-warning mb-2">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                        </div>

                        <!-- Tiempo -->
                        <small class="text-muted d-block mb-2">${r.tiempo}</small>

                        <!-- Comentario -->
                        <p class="review-text">
                            ${r.texto}
                        </p>

                    </div>
                </div>
            `;
        });

    })
    // Manejo de errores en reviews
    .catch(err => console.error("Error cargando reviews:", err));


// ================= NOTICIAS =================
// Función para cargar noticias desde un JSON
function cargarNoticias() {

    fetch('data/noticias.json')
    .then(res => res.json())
    .then(data => {

        // Contenedor de noticias
        let contenedor = document.getElementById("panelNoticias");

        // Limpia el contenido antes de insertar
        contenedor.innerHTML = "";

        // Recorre cada noticia
        data.forEach(noticia => {

            contenedor.innerHTML += `
                <div class="col-md-4">
                    <div class="card shadow h-100 text-center">

                        <!-- Imagen de la noticia -->
                        <img src="${noticia.imagen}" 
                             class="card-img-top"
                             style="height:200px; object-fit:cover;">

                        <!-- Contenido -->
                        <div class="card-body">
                            <h5 class="card-title">${noticia.titulo}</h5>
                            <p class="card-text">${noticia.descripcion}</p>
                        </div>

                    </div>
                </div>
            `;
        });

    })
    // Manejo de errores
    .catch(error => console.error("Error:", error));
}

// AUTO CARGA
// Ejecuta la función automáticamente al cargar el script
cargarNoticias();