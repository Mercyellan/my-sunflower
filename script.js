// MUSIC CONTROL
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
let playing = false;

musicBtn.onclick = () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = "🔈";
  } else {
    music.pause();
    musicBtn.textContent = "🔊";
  }
  playing = !playing;
};

// CONFETTI SECRET
const unlockBtn = document.getElementById("unlock-btn");
const secretText = document.getElementById("secret-text");

unlockBtn.onclick = () => {
  secretText.classList.toggle("hidden");
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 }
  });
};

// TYPING LOVE LETTER
const letter = `
My sunflower 🌻,

My dearest sunflower,

First of all, I Love you so much 🤭
I love you to the moon and I'm not coming back 😂

To say you're one of the best things to happen to me is an understatement.
You bring so much color into my life.

Your presence is the missing piece I never knew I needed.

Your charisma, your mindset, your humility, your heart — all so beautiful.

I am so proud of you.
I love how you love me — gentle, calm, intentional.

You are my everyday highlight.
My favorite human.
My answered prayer.

Happy Birthday, ife teminikan ❤️

I pray the Lord bless you abundantly, guide your steps,
and crown your efforts with favor.

Forever yours,
Your love & No.1 supporter ❤️
`;

const target = document.getElementById("typed-text");
let index = 0;

function typeLetter() {
  if (index < letter.length) {
    target.textContent += letter.charAt(index);
    index++;
    setTimeout(typeLetter, 30);
  }
}

typeLetter();