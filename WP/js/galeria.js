// Función que se encarga de cargar la galería desde un archivo JSON
function cargarGaleria() {

    // Realiza una petición para obtener el archivo galeria.json
    fetch('data/galeria.json')

    // Convierte la respuesta a formato JSON
    .then(res => res.json())

    // Procesa los datos obtenidos
    .then(data => {

        // Obtiene el contenedor donde se mostrará la galería
        let contenedor = document.getElementById("contenedorGaleria");

        // Limpia el contenido previo del contenedor
        contenedor.innerHTML = "";

        // Recorre cada elemento del JSON
        data.forEach(item => {

            // Variable donde se almacenará el contenido (imagen o video)
            let contenido = "";

            // Si el tipo es imagen, crea una etiqueta <img>
            if (item.tipo === "imagen") {
                contenido = `
                    <img src="${item.src}" 
                         class="img-fluid" 
                         loading="lazy">
                `;
            } 
            // Si el tipo es video, crea una etiqueta <video>
            else if (item.tipo === "video") {
                contenido = `
                    <video autoplay muted loop playsinline>
                        <source src="${item.src}" type="video/mp4">
                    </video>
                `;
            }

            // Inserta el contenido dentro de una estructura de Bootstrap (columna)
            contenedor.innerHTML += `
                <div class="col-md-4">
                    <div class="galeria-card">
                        <div class="galeria-item">
                            ${contenido}
                        </div>
                    </div>
                </div>
            `;
        });

    })

    // Manejo de errores (por ejemplo, si no se encuentra el JSON)
    .catch(error => console.error("Error:", error));
}

// AUTO CARGA
// Llama automáticamente a la función cuando se ejecuta el script
cargarGaleria();