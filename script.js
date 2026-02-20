const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");
const video = document.getElementById("love-video");

let playing = false;

musicBtn.onclick = () => {
  if (!playing) {
    music.play();
    musicBtn.textContent = "🔇";
  } else {
    music.pause();
    musicBtn.textContent = "🔊";
  }
  playing = !playing;
};

video.onplay = () => music.pause();
video.onpause = () => music.play();

new Typed("#typed-text", {
  strings: [`
Mi Girasol, My sunflower 🌻,

my dearest dearest,

First of all, I Love you soo much! 🤭
I Love you to the moon and I'm not coming back 😂😂😂😂

To say you're one of the best thing to happen to me will be like an understatement, 
You bring so much colour to my life.
Your presence in my life is that missing piece I never knew I needed and you're not just present, you in Loveeeeee with meee!!! The realization is hitting me again as I type this 🤭

Your charisma, your thoughts process (I could listen to you talk all day), your mindset, your humility and your heart is beautiful to see. 
The way you Love and do things with so much intentionality warms my heart 

I'm soooooo proud of you!
you're whatever you think you are and I love it for you!

I Love how you Love me, gentle, calm, soft and sometimes dhjkkhcghcffjkhcdf then we align again 😂😂😂😂

I Love you my honey boo! 

You're my everyday highlight and favorite human being! 

I just remembered this is suppose to be a birthday wish but look at me confessing Love 😂😂😂

Happy Birthday ife teminikan 😍😍😍!

I pray over you that,

Blessed shall be thy basket and thy store. 

Blessed shalt thou be when thou comest in, and blessed shalt thou be when thou goest out. 

The LORD shall cause thine enemies that rise up against thee to be smitten before thy face: they shall come out against thee one way, and flee before thee seven ways.

The LORD shall command the blessing upon thee in thy storehouses, and in all that thou settest thine hand unto; and he shall bless thee in the land which the LORD thy God giveth thee. 

And all people of the earth shall see that thou art called by the name of the LORD; and they shall be afraid of thee. 

The LORD shall open unto thee his good treasure, the heaven to give the rain unto thy land in his season, and to bless all the work of thine hand: and thou shalt lend unto many nations, and thou shalt not borrow.

And the LORD shall make thee the head, and not the tail; and thou shalt be above only, and thou shalt not be beneath; 

The Lord will always be gracious to you! 

I look forward to celebrating more wins and successes with you! 
I Love and cherish you so much ife mi, in fact words are not enough. 

With love, 
Your No.1 supporter ❤️

Happy Birthday,ife mi💖
  `],
  typeSpeed: 35,
  showCursor: false
});

const unlockBtn = document.getElementById("unlock-btn");
const secretText = document.getElementById("secret-text");

unlockBtn.onclick = () => {
  secretText.style.display = "block";
  unlockBtn.style.display = "none";

  confetti({
    particleCount: 200,
    spread: 80,
    origin: { y: 0.6 }
  });
};

setTimeout(() => {
  confetti({
    particleCount: 120,
    spread: 60,
    origin: { y: 0.7 }
  });
}, 1500);