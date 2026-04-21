// ===== AUTO SLIDER =====
// Función que inicializa los carruseles automáticos
function iniciarCarruseles() {

  // Selecciona todos los contenedores con clase 'card-carousel'
  const carousels = document.querySelectorAll('.card-carousel');

  // Recorre cada carrusel encontrado
  carousels.forEach(carousel => {

    // Obtiene todas las imágenes dentro del carrusel actual
    const images = carousel.querySelectorAll('img');

    // Si solo hay 1 o menos imágenes, no hace nada (no tiene sentido deslizar)
    if (images.length <= 1) return;

    // Índice inicial del carrusel
    let index = 0;

    // Ejecuta un cambio automático cada 3 segundos
    setInterval(() => {

      // Avanza al siguiente índice de imagen (loop infinito)
      index = (index + 1) % images.length;

      // Hace scroll horizontal suave hacia la siguiente imagen
      carousel.scrollTo({
        left: carousel.clientWidth * index, // calcula la posición según el ancho visible
        behavior: 'smooth' // animación suave
      });

    }, 3000); // intervalo de 3 segundos
  });
}


// ===== BARRA INDICADORA =====
// Función que controla la barra visual de progreso del carrusel
function iniciarIndicador() {

  // Contenedor principal del slider
  const slider = document.querySelector('.services-carousel');

  // Barra que se mueve indicando progreso
  const bar = document.querySelector('.carousel-bar');

  // Contenedor clickeable de la barra
  const indicator = document.querySelector('.carousel-indicator');

  // Función que actualiza la posición de la barra
  function updateBar() {

    // Si no existe slider o barra, no hace nada (evita errores)
    if (!slider || !bar) return;

    // Ancho total desplazable (scroll total menos lo visible)
    const scrollWidth = slider.scrollWidth - slider.clientWidth;

    // Posición actual del scroll horizontal
    const scrollLeft = slider.scrollLeft;

    // Progreso del scroll (valor entre 0 y 1)
    const progress = scrollLeft / scrollWidth;

    // Máximo movimiento posible de la barra
    const maxMove = slider.clientWidth - bar.clientWidth;

    // Mueve la barra proporcionalmente al progreso
    bar.style.transform = `translateX(${progress * maxMove}px)`;
  }

  // Si existe el slider, escucha el evento de scroll
  if (slider) {
    slider.addEventListener('scroll', updateBar);
  }

  // Si existe el indicador y el slider
  if (indicator && slider) {

    // Permite hacer clic en la barra para mover el carrusel
    indicator.addEventListener('click', (e) => {

      // Obtiene el tamaño y posición del indicador
      const rect = indicator.getBoundingClientRect();

      // Calcula la posición del clic dentro del indicador
      const clickX = e.clientX - rect.left;

      // Convierte el clic en porcentaje (0 a 1)
      const percentage = clickX / rect.width;

      // Mueve el slider según el porcentaje clickeado
      slider.scrollTo({
        left: (slider.scrollWidth - slider.clientWidth) * percentage,
        behavior: 'smooth' // animación suave
      });
    });
  }
}