const envelope = document.getElementById('envelope');
const letterText = document.getElementById('letter-text');
const clickSound = document.getElementById('clickSound');
const bgm = document.getElementById('bgm');
bgm.volume = 0.5;

const message = `Haaii cantikku 💌,

Aku cuma pengen bilang
I LOVE YOU 💖

Get well soon, okay?
Aku bakal selalu ada di samping kamu,
Sebagai support terbesar kamu,
Kamu jangan pernah ngerasa sendiri,
Kamu itu kuat,
Kamu itu hebat,
Kamu itu luar biasa,
Love you more moree 💖💖,

–mojo 🐾`;

let idx = 0;

function typeLetter() {
  if (idx < message.length) {
    letterText.textContent += message[idx++];
    setTimeout(typeLetter, 50);
  }
}

envelope.addEventListener('click', () => {
  if (!envelope.classList.contains('open')) {
    clickSound.play();
    bgm.play();
    envelope.classList.add('open');
    typeLetter();
    launchHearts();
  }
});

function launchHearts() {
  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 150);
  }
}

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '♥';
  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.bottom = '0px';
  heart.style.animationDuration = (2 + Math.random() * 2) + 's';
  document.body.appendChild(heart);
  heart.addEventListener('animationend', () => heart.remove());
}
