// Sélectionnez tous les éléments h2 et h3 sur la page
const title = document.querySelectorAll("h2,h3");

// Parcourez chaque titre sélectionné
title.forEach((currentTitle) => {
  // Divisez le texte du titre en mots
  const words = currentTitle.textContent.split(" ");

  // Effacez le texte du titre
  currentTitle.textContent = "";

  // Parcourez chaque mot du titre
  words.forEach((currentWord, index) => {
    // Créez un nouvel élément span
    const span = document.createElement("span");

    // Définissez le texte de l'élément span sur le mot actuel
    span.textContent = currentWord + " ";

    // Ajoutez la classe "word-animation" à l'élément span
    span.classList.add("word-animation");

    // Ajoutez un délai à l'animation pour chaque mot
    span.style.animationDelay = `${index * 0.3}s`;

    // Ajoutez l'élément span au titre
    currentTitle.appendChild(span);
  });
});

// Créez un nouvel observateur d'intersection
const observer = new IntersectionObserver(
  // Cette fonction est appelée chaque fois qu'un titre entre ou sort de la fenêtre de visualisation
  (entries) => {
    entries.forEach((entry) => {
      // Si le titre est dans la fenêtre de visualisation
      if (entry.isIntersecting) {
        // Ajoutez la classe "animate-title" au titre
        entry.target.classList.add("animate-title");
      } else {
        // Sinon, retirez la classe "animate-title" du titre
        entry.target.classList.remove("animate-title");
      }
    });
  },
  // Ces options déterminent quand l'observateur d'intersection déclenche la fonction ci-dessus
  {
    rootMargin: "-10% 0px", // L'animation se déclenche lorsque le titre est à 10% de la fenêtre de visualisation
    threshold: 0.1, //et le seuil reglé a 10% l’animation commencera lorsque 10% du titre sera visible à l’écran.
  }
);

// Faites observer chaque titre par l'observateur d'intersection
title.forEach((currentTitle) => {
  observer.observe(currentTitle);
});

//initialise de skrollr
var s = skrollr.init();
console.log(skrollr);

//initialise la hauteur du body en auto
document.body.style.height = "auto";

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: "auto", // Nombre total de diapositives à afficher (1 principale + 2 adjacentes)
  centeredSlides: true, // Centrer la diapositive principale
  spaceBetween: 100, // Espace entre les diapositives
  loop: true,
  coverflowEffect: {
    depth: 200, //Décalage de profondeur en px - défaut 100
    modifier: 1, //Multiplicateur d'effet - défaut 1
    rotate: 200, //Rotation du slide en degrés - défaut 50
    scale: 0.6, //Effet d'échelle de diapositive - défaut 1
    slideShadows: false, //Active les ombres des diapositives - défaut TRUE
    stretch: 0, //Étirer l'espace entre les diapositives (en px) -défaut 0
  },
  autoplay: {
    delay: 4000,
    //reverseDirection: true, //cette ligne pour inverser le sens de l'autoplay
  },
});

/* **************** MENU BURGER ******************* */
// Sélectionne l'élément avec la classe "menu-toggle"
const menuToggle = document.querySelector(".menu-toggle");

// Sélectionne l'élément avec la classe "menu"
const menuContainer = document.querySelector(".menu");

// Sélectionne tous les éléments avec la classe "menu-li"
const menuLinks = document.querySelectorAll(".menu-li");

// Ajoute un gestionnaire d'événements de clic à l'élément "menuToggle"
menuToggle.addEventListener("click", () => {
  // Bascule la classe "open" sur l'élément "menuToggle"
  menuToggle.classList.toggle("open");

  // Bascule la classe "open" sur l'élément "menuContainer"
  menuContainer.classList.toggle("open");

  // Si l'élément "menuToggle" a la classe "open", ajoute la classe "cross"
  if (menuToggle.classList.contains("open")) {
    menuToggle.classList.add("cross");
  } else {
    // Sinon, supprime la classe "cross"
    menuToggle.classList.remove("cross");
  }
});

// Pour chaque lien du menu...
menuLinks.forEach((link) => {
  // Ajoute un gestionnaire d'événements de clic
  link.addEventListener("click", () => {
    // Si le menu est ouvert...
    if (menuContainer.classList.contains("open")) {
      // Ferme le menu
      menuToggle.classList.remove("open");
      menuContainer.classList.remove("open");
      menuToggle.classList.remove("cross");
    }
  });
});
