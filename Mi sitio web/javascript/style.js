// Obtener el carrusel y las imágenes
const carousel = document.querySelector('.background-carousel');
const images = carousel.querySelectorAll('img');

// Configurar el tiempo de transición entre imágenes (en milisegundos)
const interval = 5000;

// Obtener el número total de imágenes
const totalImages = images.length;

// Inicializar el índice de la imagen actual y establecer la primera imagen como visible
let currentIndex = 0;
images[currentIndex].classList.add('active');

// Función para mostrar la siguiente imagen
function showNextImage() {
  // Ocultar la imagen actual
  images[currentIndex].classList.remove('active');
  
  // Incrementar el índice de la imagen actual y asegurarse de que no exceda el número total de imágenes
  currentIndex = (currentIndex + 1) % totalImages;
  
  // Mostrar la siguiente imagen
  images[currentIndex].classList.add('active');
}

// Establecer el intervalo para mostrar las imágenes automáticamente
setInterval(showNextImage, interval);
