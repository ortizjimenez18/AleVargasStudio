// Espera a que el DOM (estructura HTML) esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

  // Realiza una petición para obtener el archivo JSON de autores
  fetch("data/autores.json")
  
    // Convierte la respuesta en formato JSON
    .then(res => res.json())
    
    // Una vez obtenidos los datos, llama a la función renderAutores
    // y le pasa el arreglo de autores
    .then(data => renderAutores(data.autores))
    
    // Captura y muestra errores en consola (por ejemplo, si no encuentra el archivo)
    .catch(err => console.error("Error cargando autores:", err));
});


// Función que recibe un arreglo de autores y los renderiza en el HTML
function renderAutores(autores) {

  // Obtiene el contenedor donde se van a insertar los autores
  const container = document.getElementById("autores-container");

  // Recorre cada autor del arreglo
  autores.forEach(autor => {

    // Crea un div que servirá como columna (Bootstrap)
    const col = document.createElement("div");
    col.classList.add("col-md-5");

    // Inserta el contenido HTML dinámico usando template literals
    col.innerHTML = `
      <div class="author-card">
        
        <!-- Imagen del autor -->
        <img src="${autor.imagen}" class="author-img">

        <!-- Nombre del autor -->
        <h4>${autor.nombre}</h4>

        <!-- Rol o profesión -->
        <span class="role">${autor.rol}</span>

        <!-- Cédula -->
        <p class="cedula">Cédula: ${autor.cedula}</p>

        <!-- Correo con ícono -->
        <div class="contact">
          <i class="bi bi-envelope-paper-heart"></i>
          ${autor.email}
        </div>

        <!-- Redes sociales -->
        <div class="socials">
          
          <!-- Enlace para enviar correo -->
          <a href="mailto:${autor.email}">
            <i class="bi bi-send"></i>
          </a>

          <!-- Enlace a Instagram -->
          <a href="${autor.instagram}" target="_blank">
            <i class="bi bi-instagram"></i>
          </a>

        </div>
      </div>
    `;

    // Agrega la columna ya construida al contenedor principal
    container.appendChild(col);
  });
}