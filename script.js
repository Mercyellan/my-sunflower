// MUSIC
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");
let playing = false;

btn.onclick = () => {
  if(!playing){ music.play(); btn.textContent="🔈"; }
  else { music.pause(); btn.textContent="🔊"; }
  playing=!playing;
};

// LOVE LETTER TYPING
const letter = `
My sunflower 🌻,

My dearest sunflower,

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

Happy Birthday ife teminikan!

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

with Love, 
your No 1 supporter.
`;

let i = 0;
const target = document.getElementById("typed-text");

function typeLetter(){
  if(i < letter.length){
    target.textContent += letter.charAt(i);
    i++;
    setTimeout(typeLetter, 28);
  } else {
    confetti({ particleCount: 200, spread: 100, origin:{y:0.6} });
  }
}

typeLetter();

// FLOATING HEARTS
function createHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.fontSize = (12 + Math.random()*20) + "px";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),8000);
}
setInterval(createHeart,400);

// SUNFLOWER PETALS
function createPetal(){
  const petal = document.createElement("div");
  petal.className="petal";
  petal.textContent="🌻";
  petal.style.left=Math.random()*100+"vw";
  document.body.appendChild(petal);
  setTimeout(()=>petal.remove(),10000);
}
setInterval(createPetal,700);

// SPARKLES
function createSparkle(){
  const s=document.createElement("div");
  s.className="sparkle";
  s.style.left=Math.random()*100+"vw";
  s.style.top=Math.random()*100+"vh";
  document.body.appendChild(s);
  setTimeout(()=>s.remove(),2000);
}
setInterval(createSparkle,300);