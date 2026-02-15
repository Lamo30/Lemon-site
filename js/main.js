const phrases = [
  "Secure Online SMS for Safe Registration",
  "Cheapest and Fastest SMS verification online"
];

const element = document.querySelector("#typewriter-effect");

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

element.innerHTML = '<span id="text"></span><span class="cursor"></span>';
const textSpan = document.getElementById("text");

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    // typing
    textSpan.textContent += currentPhrase.charAt(charIndex);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      setTimeout(() => (isDeleting = true), 1200); // pause at end
    }
  } else {
    // deleting
    textSpan.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  const speed = isDeleting ? 40 : 70;
  setTimeout(typeLoop, speed);
}

typeLoop();
