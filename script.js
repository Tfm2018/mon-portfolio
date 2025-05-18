// script.js

const typedText = document.querySelector('.typed-text');
const words = ['Inventions', 'Robotics', 'Embedded Systems', 'Innovations'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 150;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    charIndex--;
    typedText.textContent = currentWord.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, delay / 2);
    }
  } else {
    charIndex++;
    typedText.textContent = currentWord.substring(0, charIndex);
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      setTimeout(type, delay);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (typedText) type();
});
