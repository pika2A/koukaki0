const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  effect: "coverflow",
  coverflowEffect: {
    depth: 100, //Décalage de profondeur en px - défaut 100
    modifier: 1, //Multiplicateur d'effet - défaut 1
    rotate: 30, //Rotation du slide en degrés - défaut 50
    scale: 0.7, //Effet d'échelle de diapositive - défaut 1
    slideShadows: false, //Active les ombres des diapositives - défaut TRUE
    stretch: 0, //Étirer l'espace entre les diapositives (en px) -défaut 0
  },
  slidesPerView: 3, // Nombre total de diapositives à afficher (1 principale + 2 adjacentes)
  centeredSlides: true, // Centrer la diapositive principale
  spaceBetween: 0, // Espace entre les diapositives
  loop: true,
  autoplay: {
    delay: 5000,
  },
});
