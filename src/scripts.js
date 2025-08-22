// src/scripts.js
(() => {
  const textContainer = document.getElementById('changing-text-container');
  const texts = textContainer.querySelectorAll('.changing-text');
  let currentIndex = 0;

  // Affiche la première phrase au départ
  texts[currentIndex].style.display = 'block';

  // Fonction pour alterner les phrases toutes les 2 secondes
  setInterval(() => {
    // Masquer le texte actuel sans animation
    texts[currentIndex].style.display = 'none';

    // Passe à l'index suivant (boucle entre les 4 phrases)
    currentIndex = (currentIndex + 1) % texts.length;

    // Affiche le texte suivant immédiatement sans animation
    texts[currentIndex].style.display = 'block';
  }, 2000); // Changer toutes les 2 secondes
})();
const cards = Array.from(document.querySelectorAll('.card'));
let current = 0;

// Initialise les index CSS
function updateStack() {
  cards.forEach((card, i) => {
    card.style.setProperty('--index', i - current);
    card.classList.remove('leaving');
  });
}
updateStack();

// Gestion du scroll vertical (molette)
window.addEventListener('wheel', (event) => {
  if (event.deltaY > 0) {
    // on fait défiler vers le bas
    if (current < cards.length - 1) {
      cards[current].classList.add('leaving'); // la carte actuelle part
      current += 1;
      updateStack();
    }
  } else if (event.deltaY < 0) {
    // on remonte
    if (current > 0) {
      current -= 1;
      updateStack();
    }
  }
});
export default {
  vite: {
    server: {
      host: '0.0.0.0', // Permet à Astro d'écouter sur toutes les interfaces réseau
      port: 3000, // Le port que tu veux utiliser
    }
  }
}
