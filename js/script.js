// ============================================================
// ASIYA GREETING — ПОЛНЫЙ SCRIPT.JS
// ============================================================

// ========== ГЛОБАЛЬНОЕ ЗВЁЗДНОЕ НЕБО ==========
function createGlobalStars() {
  const container = document.createElement("div");
  container.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 1;
        pointer-events: none;
        overflow: hidden;
    `;
  document.body.appendChild(container);

  const count = Math.min(200, Math.floor(window.innerWidth / 6));

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    const size = Math.random() * 2 + 0.5;
    star.className = "global-star";
    star.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            background: ${["#fff", "#fff", "#fff", "#ffd700", "#ff6b9d", "#ffa07a"][Math.floor(Math.random() * 6)]};
            box-shadow: 0 0 ${size * 3}px rgba(255, 255, 255, 0.6);
            animation-duration: ${Math.random() * 3 + 2}s;
            animation-delay: ${Math.random() * 5}s;
        `;
    container.appendChild(star);
  }

  for (let i = 0; i < 4; i++) {
    const shooting = document.createElement("div");
    shooting.className = "shooting-star";
    shooting.style.cssText = `
            left: ${Math.random() * 60 + 30}%;
            top: ${Math.random() * 40}%;
            width: 2px;
            height: 2px;
            background: #fff;
            box-shadow: 0 0 10px #fff, 0 0 20px #ff6b9d;
            animation-duration: ${Math.random() * 3 + 4}s;
            animation-delay: ${Math.random() * 10}s;
        `;
    container.appendChild(shooting);
  }
}

window.addEventListener("load", createGlobalStars);

// ========== КОНВЕРТ ==========
const envelopeScreen = document.getElementById("envelopeScreen");
const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  setTimeout(() => {
    envelopeScreen.classList.add("hidden");
    const music = document.getElementById("bgMusic");
    music
      .play()
      .then(() => {
        document.getElementById("playerToggle").textContent = "❚❚";
      })
      .catch(() => {});
  }, 800);
});

// ========== АНИМАЦИЯ ПЕЧАТИ ЗАГОЛОВКА ==========
const heroText = "Аси, ты — моё самое красивое чудо...";
const typingElement = document.querySelector(".typing-text");
let charIndex = 0;

function typeText() {
  if (charIndex < heroText.length) {
    typingElement.textContent += heroText.charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 90);
  }
}

// ========== ТАЙМЕР ==========
// ⚠️ ИЗМЕНИ ДАТУ на день вашей первой встречи!
const START_DATE = new Date("2025-02-17T21:00:00");

function startTimer() {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  function update() {
    const now = new Date();
    const diff = now - START_DATE;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }
  update();
  setInterval(update, 1000);
}

// ========== ПОЗДРАВЛЕНИЕ ==========
const congratsContent = `
Аси, с днём рождения тебя. <span class="emoji">🎂</span>

Я долго думал, писать ли это, и всё-таки решил — потому что молчать больше не могу. 
Этот сайт, каждое слово здесь — <span class="highlight">от чистого сердца</span>.

Прошло время. Много времени. Но знаешь, что я понял? Что ни один день 
не прошёл без мысли о тебе. Я вспоминал твой смех, твой голос, твои глаза. 
И с каждым днём всё яснее понимал — <span class="highlight">таких, как ты, не бывает некогда</span> 
Такие, как ты, — одна на миллион. И я это упустил.

Сейчас я старше, спокойнее и честнее с собой. И я знаю точно: 
если бы можно было повернуть время вспять — я бы сделал всё иначе. 
<span class="highlight">Внимательнее. Терпеливее. Мягче. С тобой.</span>

Но раз уж судьба дала мне этот день — день твоего рождения — 
я хочу использовать его, чтобы сказать: <span class="highlight">ты была самым важным 
человеком в моей жизни.</span> И, честно, ты остаёшься им.

С днём рождения, Аси. Ты — чудо. И я искренне верю, 
что у тебя всё будет хорошо. <span class="emoji">💫</span>
`;

function renderCongratsText() {
  const container = document.getElementById("congratsText");
  const tokens = congratsContent
    .split(/(\s+|<[^>]+>)/g)
    .filter((t) => t.trim() !== "");
  let delay = 0;
  tokens.forEach((token) => {
    if (token.startsWith("<") && token.endsWith(">")) {
      container.insertAdjacentHTML("beforeend", token);
    } else if (/^\s+$/.test(token)) {
      container.insertAdjacentHTML("beforeend", " ");
    } else {
      const span = document.createElement("span");
      span.className = "word";
      span.textContent = token;
      span.style.animationDelay = `${delay}s`;
      container.appendChild(span);
      container.insertAdjacentHTML("beforeend", " ");
      delay += 0.08;
    }
  });
}

// ========== 100 ПРИЧИН ==========
const reasons = [
  "За твою улыбку",
  "За твой смех",
  "За твои глаза",
  "За твою доброту",
  "За твою заботу",
  "За твоё тепло",
  "За твой характер",
  "За твою нежность",
  "За твои объятия",
  "За твои слова",
  "За твою поддержку",
  "За твою честность",
  "За твою искренность",
  "За твоё терпение",
  "За твою красоту",
  "За твой ум",
  "За твои мечты",
  "За твои идеи",
  "За твою энергию",
  "За твой голос",
  "За то, как ты слушаешь",
  "За то, как ты говоришь",
  "За то, как ты смотришь",
  "За то, как ты молчишь",
  "За твои сообщения утром",
  "За твои звонки вечером",
  "За твои сюрпризы",
  "За твою заботу о других",
  "За твою любовь к жизни",
  "За то, что ты есть",
  "За то, что ты рядом",
  "За то, что ты понимаешь",
  "За то, что ты прощаешь",
  "За то, что ты веришь в меня",
  "За твою силу",
  "За твою слабость",
  "За твою уникальность",
  "За твои привычки",
  "За твои капризы",
  "За твои шутки",
  "За твои истории",
  "За твои советы",
  "За твоё мнение",
  "За твои страхи",
  "За твою смелость",
  "За твою скромность",
  "За твою уверенность",
  "За твои таланты",
  "За твоё вдохновение",
  "За твои фото",
  "За твои голосовые",
  "За твои стикеры",
  "За твои эмодзи",
  "За твои лайки",
  "За твои комментарии",
  "За то, как ты ешь",
  "За то, как ты спишь",
  "За то, как ты злишься",
  "За то, как ты радуешься",
  "За то, как ты грустишь",
  "За то, как ты меняешься",
  "За то, как ты растёшь",
  "За твоё детство",
  "За твоё будущее",
  "За наше настоящее",
  "За наши планы",
  "За наши мечты",
  "За наши воспоминания",
  "За наши ссоры",
  "За наши примирения",
  "За наши объятия",
  "За наши поцелуи",
  "За наши прогулки",
  "За наши вечера",
  "За наши утра",
  "За наши ночи",
  "За наши разговоры",
  "За наше молчание",
  "За нашу музыку",
  "За наши фильмы",
  "За нашу еду",
  "За наши путешествия",
  "За наши выходные",
  "За наши будни",
  "За наши праздники",
  "За наши традиции",
  'За наше "мы"',
  'За твоё "я"',
  'За моё "ты"',
  "За каждый день с тобой",
  "За каждую минуту",
  "За каждую секунду",
  "За каждый взгляд",
  "За каждое прикосновение",
  "За каждое слово",
  "За каждую улыбку",
  "За каждый смех",
  "За каждую слёзу",
  "За то, что ты — это ты",
  "За то, что я — это я с тобой",
  "За нашу любовь ❤️",
];

function renderReasons() {
  const grid = document.getElementById("reasonsGrid");
  reasons.forEach((reason, i) => {
    const card = document.createElement("div");
    card.className = "reason-card";
    card.innerHTML = `
            <div class="reason-card-inner">
                <div class="reason-card-front">${i + 1}</div>
                <div class="reason-card-back">${reason}</div>
            </div>
        `;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    grid.appendChild(card);
  });
}

// ========== ЭФФЕКТЫ ==========
const canvas = document.getElementById("effectsCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const EFFECTS = ["fireworks", "hearts", "confetti", "stars"];
const EFFECT_ICONS = {
  fireworks: "🎆",
  hearts: "💖",
  confetti: "🎉",
  stars: "⭐",
};
let effectIndex = 0;
let currentEffect = EFFECTS[effectIndex];

const effectBtn = document.getElementById("effectToggle");
effectBtn.addEventListener("click", () => {
  effectIndex = (effectIndex + 1) % EFFECTS.length;
  currentEffect = EFFECTS[effectIndex];
  effectBtn.textContent = EFFECT_ICONS[currentEffect];
  particles = [];
  resetIntervals();
  showToast(`Эффект: ${EFFECT_ICONS[currentEffect]}`);
});

class Particle {
  constructor(x, y, color, type) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.type = type;

    if (type === "heart") {
      this.velocity = {
        x: (Math.random() - 0.5) * 1.5,
        y: Math.random() * 1.5 + 0.5,
      };
      this.decay = 0.008;
      this.size = Math.random() * 8 + 6;
    } else if (type === "confetti") {
      this.velocity = {
        x: (Math.random() - 0.5) * 6,
        y: Math.random() * 4 + 2,
      };
      this.decay = 0.006;
      this.size = Math.random() * 8 + 5;
    } else if (type === "star") {
      this.velocity = {
        x: (Math.random() - 0.5) * 2,
        y: Math.random() * 1.5 + 0.5,
      };
      this.decay = 0.006;
      this.size = Math.random() * 6 + 4;
    } else {
      this.velocity = {
        x: (Math.random() - 0.5) * 8,
        y: (Math.random() - 0.5) * 8,
      };
      this.decay = 0.015;
      this.size = 2;
    }
    this.alpha = 1;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.15;
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.alpha -= this.decay;
    this.rotation += this.rotationSpeed;
    if (this.type === "confetti") {
      this.velocity.x += (Math.random() - 0.5) * 0.3;
      this.velocity.x *= 0.98;
    }
  }

  drawHeart(size) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    const s = size / 16;
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(0, -3 * s, -5 * s, -3 * s, -5 * s, 0);
    ctx.bezierCurveTo(-5 * s, 3 * s, 0, 6 * s, 0, 8 * s);
    ctx.bezierCurveTo(0, 6 * s, 5 * s, 3 * s, 5 * s, 0);
    ctx.bezierCurveTo(5 * s, -3 * s, 0, -3 * s, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  drawConfetti(size) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.fillRect(-size / 2, -size / 4, size, size / 2);
    ctx.restore();
  }

  drawStar(size) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    const spikes = 5,
      outerR = size,
      innerR = size / 2.5;
    for (let i = 0; i < spikes * 2; i++) {
      const r = i % 2 === 0 ? outerR : innerR;
      const angle = (Math.PI / spikes) * i - Math.PI / 2;
      const x = Math.cos(angle) * r,
        y = Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  draw() {
    if (this.type === "heart") this.drawHeart(this.size);
    else if (this.type === "confetti") this.drawConfetti(this.size);
    else if (this.type === "star") this.drawStar(this.size);
    else {
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }
}

let particles = [];
const FIREWORK_COLORS = ["#ff6b9d", "#ffa07a", "#ffd700", "#ff69b4", "#ff1493"];
const SOFT_COLORS = [
  "#ff6b9d",
  "#ffa07a",
  "#ff1493",
  "#ff69b4",
  "#ffd700",
  "#87ceeb",
  "#c084fc",
];

function randomColor(palette) {
  return palette[Math.floor(Math.random() * palette.length)];
}

function createFirework(x, y) {
  const color = randomColor(FIREWORK_COLORS);
  for (let i = 0; i < 60; i++)
    particles.push(new Particle(x, y, color, "spark"));
}
function createHearts() {
  for (let i = 0; i < 3; i++)
    particles.push(
      new Particle(
        Math.random() * canvas.width,
        -20,
        randomColor(SOFT_COLORS),
        "heart",
      ),
    );
}
function createConfetti() {
  for (let i = 0; i < 5; i++)
    particles.push(
      new Particle(
        Math.random() * canvas.width,
        -20,
        randomColor(SOFT_COLORS),
        "confetti",
      ),
    );
}
function createStars() {
  for (let i = 0; i < 2; i++)
    particles.push(
      new Particle(
        Math.random() * canvas.width,
        -20,
        randomColor(SOFT_COLORS),
        "star",
      ),
    );
}

let spawnInterval = null;
function resetIntervals() {
  if (spawnInterval) clearInterval(spawnInterval);
  spawnInterval = null;
  if (currentEffect === "hearts")
    spawnInterval = setInterval(createHearts, 200);
  else if (currentEffect === "confetti")
    spawnInterval = setInterval(createConfetti, 120);
  else if (currentEffect === "stars")
    spawnInterval = setInterval(createStars, 300);
}
resetIntervals();

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (currentEffect === "fireworks" && Math.random() < 0.02) {
    createFirework(
      Math.random() * canvas.width,
      Math.random() * canvas.height * 0.6,
    );
  }
  particles.forEach((p, i) => {
    p.update();
    p.draw();
    if (
      p.alpha <= 0 ||
      p.y > canvas.height + 50 ||
      p.x < -50 ||
      p.x > canvas.width + 50
    ) {
      particles.splice(i, 1);
    }
  });
}
animate();

// ========== МУЗЫКАЛЬНЫЙ ПЛЕЕР ==========
const music = document.getElementById("bgMusic");
const playerToggle = document.getElementById("playerToggle");
const playerProgressBar = document.getElementById("playerProgressBar");
const playerProgress = document.getElementById("playerProgress");
const playerTime = document.getElementById("playerTime");

playerToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playerToggle.textContent = "❚❚";
  } else {
    music.pause();
    playerToggle.textContent = "▶";
  }
});

music.addEventListener("timeupdate", () => {
  if (music.duration) {
    const percent = (music.currentTime / music.duration) * 100;
    playerProgressBar.style.width = percent + "%";
    const min = Math.floor(music.currentTime / 60);
    const sec = Math.floor(music.currentTime % 60);
    playerTime.textContent = `${min}:${String(sec).padStart(2, "0")}`;
  }
});

playerProgress.addEventListener("click", (e) => {
  const rect = playerProgress.getBoundingClientRect();
  const percent = (e.clientX - rect.left) / rect.width;
  if (music.duration) music.currentTime = percent * music.duration;
});

// ========== ПАУЗА МУЗЫКИ ПРИ ВОСПРОИЗВЕДЕНИИ ВИДЕО ==========
const specialVideo = document.getElementById("specialVideo");
let musicWasPlayingBeforeVideo = false;

if (specialVideo && music) {
  specialVideo.addEventListener("play", () => {
    musicWasPlayingBeforeVideo = !music.paused;
    if (!music.paused) {
      music.pause();
      playerToggle.textContent = "▶";
    }
  });

  specialVideo.addEventListener("pause", () => {
    if (musicWasPlayingBeforeVideo && !specialVideo.ended) {
      music
        .play()
        .then(() => {
          playerToggle.textContent = "❚❚";
        })
        .catch(() => {});
    }
  });

  specialVideo.addEventListener("ended", () => {
    if (musicWasPlayingBeforeVideo) {
      music
        .play()
        .then(() => {
          playerToggle.textContent = "❚❚";
        })
        .catch(() => {});
      musicWasPlayingBeforeVideo = false;
    }
  });
}

// ========== ЛАЙТБОКС ==========
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".lightbox-img").forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("active");
  });
});

lightboxClose.addEventListener("click", () =>
  lightbox.classList.remove("active"),
);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("active");
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox.classList.remove("active");
});

// ========== КУРСОР-СЕРДЕЧКО ==========
const cursorHeart = document.getElementById("cursorHeart");
let mouseX = 0,
  mouseY = 0,
  heartX = 0,
  heartY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (window.innerWidth > 768) cursorHeart.style.opacity = "1";
});

document.addEventListener("mouseleave", () => {
  cursorHeart.style.opacity = "0";
});

function animateHeart() {
  heartX += (mouseX - heartX) * 0.15;
  heartY += (mouseY - heartY) * 0.15;
  cursorHeart.style.transform = `translate(${heartX}px, ${heartY}px) translate(-50%, -50%) rotate(${(Date.now() / 200) % 360}deg)`;
  requestAnimationFrame(animateHeart);
}
animateHeart();

// ========== ШАРИКИ ПО КЛИКУ ==========
const BALLOON_EMOJIS = ["🎈", "🎈", "🎈", "💖", "💕", "🌸"];
document.addEventListener("click", (e) => {
  if (
    e.target.closest("button") ||
    e.target.closest(".music-player") ||
    e.target.closest(".lightbox") ||
    e.target.closest("video")
  )
    return;
  const balloon = document.createElement("div");
  balloon.className = "balloon";
  balloon.textContent =
    BALLOON_EMOJIS[Math.floor(Math.random() * BALLOON_EMOJIS.length)];
  balloon.style.left = e.clientX + "px";
  balloon.style.top = e.clientY + "px";
  balloon.style.fontSize = Math.random() * 20 + 30 + "px";
  document.body.appendChild(balloon);
  setTimeout(() => balloon.remove(), 3000);
});

// ========== ПАСХАЛКА НА ИМЯ ==========
const compliments = [
  "Ты — моё вдохновение 💫",
  "Ты самая красивая 🌹",
  "Ты делаешь меня счастливым 💖",
  "Ты — моё чудо ✨",
  "Я люблю тебя ❤️",
  "Ты — моя вселенная 🌌",
  "Ты — мой самый родной человек 💕",
  "С тобой каждый день — праздник 🎉",
  "Твоя улыбка — моё счастье 😊",
  "Ты — лучшее, что со мной случилось 🌟",
];

const nameEgg = document.querySelector(".name-easter-egg");
let complimentPopup = null;
let complimentTimer = null;

nameEgg.addEventListener("click", () => {
  if (!complimentPopup) {
    complimentPopup = document.createElement("div");
    complimentPopup.className = "compliment-popup";
    document.body.appendChild(complimentPopup);
  }
  complimentPopup.textContent =
    compliments[Math.floor(Math.random() * compliments.length)];
  complimentPopup.classList.add("show");
  clearTimeout(complimentTimer);
  complimentTimer = setTimeout(
    () => complimentPopup.classList.remove("show"),
    2500,
  );
});

// ========== ФИНАЛЬНЫЙ ЭКРАН — ЗВЁЗДЫ ==========
const finalSection = document.getElementById("finalSection");
const starsBg = document.getElementById("starsBg");
let starsStarted = false;

function createFinalStars() {
  const starCount = Math.min(120, Math.floor(window.innerWidth / 8));

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";
    const size = Math.random() * 2 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.setProperty("--duration", Math.random() * 3 + 2 + "s");
    star.style.setProperty("--delay", Math.random() * 5 + "s");

    const rand = Math.random();
    if (rand < 0.15) star.style.background = "#ff6b9d";
    else if (rand < 0.3) star.style.background = "#ffd700";
    else if (rand < 0.45) star.style.background = "#ffa07a";

    starsBg.appendChild(star);
  }

  for (let i = 0; i < 3; i++) {
    const shooting = document.createElement("div");
    shooting.className = "shooting-star";
    shooting.style.left = Math.random() * 60 + 30 + "%";
    shooting.style.top = Math.random() * 30 + "%";
    shooting.style.setProperty("--duration", Math.random() * 3 + 4 + "s");
    shooting.style.setProperty("--delay", Math.random() * 8 + "s");
    starsBg.appendChild(shooting);
  }
}

const finalObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !starsStarted) {
        starsStarted = true;
        finalSection.classList.add("visible");
        createFinalStars();
      }
    });
  },
  { threshold: 0.3 },
);

finalObserver.observe(finalSection);

// ========== КНОПКА «ПОДЕЛИТЬСЯ» ==========
const shareBtn = document.getElementById("shareBtn");
shareBtn.addEventListener("click", async () => {
  const shareData = {
    title: "Для Аси 💕",
    text: "Сайт-поздравление с любовью 💌",
    url: window.location.href,
  };
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (e) {}
  } else {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Ссылка скопирована! 💕");
    } catch (e) {
      showToast("Не удалось скопировать 😔");
    }
  }
});

// ========== TOAST ==========
function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("show"), 2000);
}

// ========== ФОРМА TELEGRAM ==========
const BOT_TOKEN = "8582743328:AAFfKXDSBiyiVO7dAbCd1-e2ogcjkvWLgS4";
const CHAT_ID = "5675508527";

document
  .getElementById("responseForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const status = document.getElementById("formStatus");
    const responseText = document.getElementById("responseText").value;
    if (!responseText.trim()) return;

    status.textContent = "Отправка...";
    try {
      const message = `💌 Ответ от Аси:\n\n${responseText}`;
      const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      });
      status.textContent = "Спасибо, я получил твой ответ! ❤️";
      document.getElementById("responseText").value = "";
    } catch (error) {
      status.textContent = "Ошибка отправки. Попробуй ещё раз.";
      console.error(error);
    }
  });

// ========== ИНИЦИАЛИЗАЦИЯ ==========
window.addEventListener("load", () => {
  setTimeout(typeText, 500);
  renderCongratsText();
  startTimer();
  renderReasons();
});
