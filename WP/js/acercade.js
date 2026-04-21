// Espera a que todo el contenido del DOM esté cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {

  // Realiza una petición HTTP para obtener el archivo JSON
  fetch("data/acercade.json")
  
    // Convierte la respuesta en formato JSON
    .then(res => res.json())
    
    // Cuando ya tiene los datos, llama a la función renderImagenes
    // y le pasa el arreglo de imágenes que viene en el JSON
    .then(data => renderImagenes(data.imagenes))
    
    // Si ocurre algún error (por ejemplo, archivo no encontrado),
    // lo muestra en la consola del navegador
    .catch(err => console.error("Error cargando imágenes:", err));
});