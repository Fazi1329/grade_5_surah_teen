/**
 * The Surah At-Tin Adventure! — Interactive Grade 5 Islamic Studies Quiz
 * Full Game Logic, Audio Synthesizer, Drag-and-Drop, Word Bank, Teacher Dashboard
 */

// ============================================================================
// 1. DATA: 20 CURATED QUESTIONS ACROSS 4 INTERACTIVE ROUNDS
// ============================================================================

const DEFAULT_QUIZ_DATA = {
  // ROUND 1: Qur'an Explorer (Multiple Choice)
  round1: [
    {
      id: "r1_q1",
      round: 1,
      roundName: "Qur'an Explorer",
      category: "Surah Background",
      question: "What is the English name commonly used for Surah At-Tin?",
      arabic: "سُورَةُ التِّينِ",
      options: [
        { text: "The Fig", correct: true },
        { text: "The Elephant", correct: false },
        { text: "The Dawn", correct: false },
        { text: "The Sun", correct: false }
      ],
      hint: "Look at the very first word of the surah! It refers to a sweet, delicious fruit that grows on a tree.",
      explanation: "Surah At-Tin (Surah 95) is named after 'The Fig' (At-Tin), mentioned in the first ayah where Allah swears by it.",
      rewardPoints: 10
    },
    {
      id: "r1_q2",
      round: 1,
      roundName: "Qur'an Explorer",
      category: "Ayat Count",
      question: "How many verses (ayat) are in Surah At-Tin?",
      arabic: "كَمْ عَدَدُ آيَاتِ سُورَةِ التِّينِ؟",
      options: [
        { text: "8 Verses", correct: true },
        { text: "5 Verses", correct: false },
        { text: "6 Verses", correct: false },
        { text: "10 Verses", correct: false }
      ],
      hint: "It is a short Makki surah that has more than 6 verses, but fewer than 10.",
      explanation: "Surah At-Tin contains exactly 8 verses (ayat). It is a Makki Surah revealed in Makkah.",
      rewardPoints: 10
    },
    {
      id: "r1_q3",
      round: 1,
      roundName: "Qur'an Explorer",
      category: "Sacred Foods",
      question: "Which two foods or plants are mentioned in the opening verses?",
      arabic: "وَالتِّينِ وَالزَّيْتُونِ ﴿١﴾",
      options: [
        { text: "Figs and olives", correct: true },
        { text: "Dates and grapes", correct: false },
        { text: "Apples and oranges", correct: false },
        { text: "Rice and wheat", correct: false }
      ],
      hint: "Verse 1 begins with 'Wat-teeni waz-zaytoon'. Think of the two blessed Mediterranean fruits!",
      explanation: "'Wat-teeni waz-zaytoon' translates to 'By the fig and the olive'. Both are wholesome, blessed foods with great health benefits.",
      rewardPoints: 10
    },
    {
      id: "r1_q4",
      round: 1,
      roundName: "Qur'an Explorer",
      category: "Prophets",
      question: "Which prophet is mentioned by name in Surah At-Tin?",
      arabic: "أَيُّ نَبِيٍّ ذُكِرَ بِاسْمِهِ فِي سُورَةِ التِّينِ؟",
      options: [
        { text: "No prophet is mentioned by name", correct: true },
        { text: "Prophet Musa (AS)", correct: false },
        { text: "Prophet Ibrahim (AS)", correct: false },
        { text: "Prophet Nuh (AS)", correct: false }
      ],
      hint: "Be careful! Mount Sinai (where Musa AS spoke to Allah) is mentioned, but is any prophet's personal name explicitly written?",
      explanation: "Surah At-Tin mentions Mount Sinai (Ṭūr Sīnīn), where Prophet Musa received revelation, but no prophet is mentioned directly by name in the text.",
      rewardPoints: 10
    },
    {
      id: "r1_q5",
      round: 1,
      roundName: "Qur'an Explorer",
      category: "Creation of Humans",
      question: "According to Surah At-Tin, how did Allah create human beings?",
      arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ ﴿٤﴾",
      options: [
        { text: "True — In the best and finest form (Ahsan Taqweem)", correct: true },
        { text: "False — Humans were created without any nobility", correct: false },
        { text: "False — Only animals were given the best form", correct: false },
        { text: "False — Humans have no special mind or stature", correct: false }
      ],
      hint: "Ayah 4 says: 'Laqad khalaqnal-insaana fee ahsani taqweem'.",
      explanation: "Ayah 4 confirms: 'We have certainly created man in the best stature / form'. Allah blessed humans with an upright body, intellect, and conscience.",
      rewardPoints: 10
    }
  ],

  // ROUND 2: Match It! — Drag and Drop & Tap-to-Match
  // 5 pairs = 50 total points (10 pts per match)
  round2: {
    round: 2,
    roundName: "Match It!",
    category: "Arabic Vocabulary Matching",
    title: "Drag or tap each English meaning to match its Arabic phrase!",
    pairs: [
      {
        id: "p1",
        arabic: "وَالتِّينِ",
        english: "By the fig",
        translit: "Wat-teen",
        explanation: "Ayah 1 oath: Allah swears by the fig."
      },
      {
        id: "p2",
        arabic: "وَالزَّيْتُونِ",
        english: "And the olive",
        translit: "Waz-zaytoon",
        explanation: "Ayah 1 oath: Allah swears by the olive tree and fruit."
      },
      {
        id: "p3",
        arabic: "أَحْسَنِ تَقْوِيمٍ",
        english: "The best form",
        translit: "Ahsani taqweem",
        explanation: "Ayah 4: The upright stature, beauty, and honor given to human beings."
      },
      {
        id: "p4",
        arabic: "أَسْفَلَ سَافِلِينَ",
        english: "The lowest of the low",
        translit: "Asfala saafileen",
        explanation: "Ayah 5: The degrading state of those who neglect faith and turn to wrongdoing."
      },
      {
        id: "p5",
        arabic: "أَجْرٌ غَيْرُ مَمْنُونٍ",
        english: "A reward that does not end",
        translit: "Ajrun ghayru mamnoon",
        explanation: "Ayah 6: The endless and uninterrupted reward in Jannah for the believers."
      }
    ]
  },

  // ROUND 3: Fill in the Missing Words (5 questions)
  round3: [
    {
      id: "r3_q1",
      round: 3,
      roundName: "Fill the Words",
      category: "Ayah 1 Completion",
      question: "Complete the first verse of Surah At-Tin:",
      versePrefix: "وَالتِّينِ وَ",
      verseSuffix: " ﴿١﴾",
      correctWord: "الزَّيْتُونِ",
      normalizedAnswer: "الزيتون",
      englishMeaning: "And the olive",
      translit: "Waz-zaytoon",
      wordBank: ["الزَّيْتُونِ", "النَّخْلِ", "الرُّمَّانِ", "الْأَمِينِ"],
      hint: "This holy fruit produces wholesome golden oil for food and light.",
      explanation: "Ayah 1: 'وَالتِّينِ وَالزَّيْتُونِ' (Wat-teeni waz-zaytoon) — 'By the fig and the olive'.",
      rewardPoints: 10
    },
    {
      id: "r3_q2",
      round: 3,
      roundName: "Fill the Words",
      category: "Ayah 4 Completion",
      question: "Complete the 4th verse describing human creation:",
      versePrefix: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ ",
      verseSuffix: " ﴿٤﴾",
      correctWord: "تَقْوِيمٍ",
      normalizedAnswer: "تقويم",
      englishMeaning: "form / mould / proportion",
      translit: "Taqweem",
      wordBank: ["تَقْوِيمٍ", "تَعْلِيمٍ", "تَكْرِيمٍ", "مَكَانٍ"],
      hint: "It starts with the letter Taa (ت) and means the finest structure and upright proportion.",
      explanation: "Ayah 4: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ' (fee ahsani taqweem) — 'in the best stature'.",
      rewardPoints: 10
    },
    {
      id: "r3_q3",
      round: 3,
      roundName: "Fill the Words",
      category: "Ayah 5 Completion",
      question: "Complete the 5th verse describing what happens without faith:",
      versePrefix: "ثُمَّ رَدَدْنَاهُ أَسْفَلَ ",
      verseSuffix: " ﴿٥﴾",
      correctWord: "سَافِلِينَ",
      normalizedAnswer: "سافلين",
      englishMeaning: "the lowest of the low",
      translit: "Saafileen",
      wordBank: ["سَافِلِينَ", "خَاسِرِينَ", "غَافِلِينَ", "ظَالِمِينَ"],
      hint: "It rhymes with Asfal (أَسْفَل) and begins with Seen (س).",
      explanation: "Ayah 5: 'ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ' (asfala saafileen) — 'Then We return him to the lowest of the low'.",
      rewardPoints: 10
    },
    {
      id: "r3_q4",
      round: 3,
      roundName: "Fill the Words",
      category: "Ayah 6 Completion",
      question: "Complete the 6th verse on what believers perform alongside faith:",
      versePrefix: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا ",
      verseSuffix: " فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ ﴿٦﴾",
      correctWord: "الصَّالِحَاتِ",
      normalizedAnswer: "الصالحات",
      englishMeaning: "righteous deeds",
      translit: "As-saalihaat",
      wordBank: ["الصَّالِحَاتِ", "الْخَيْرَاتِ", "الْحَسَنَاتِ", "الطَّاعَاتِ"],
      hint: "It refers to all righteous actions like helping others, praying, and being honest.",
      explanation: "Ayah 6: 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ' ('amilus-saalihaat) — 'Except for those who believe and do righteous deeds'.",
      rewardPoints: 10
    },
    {
      id: "r3_q5",
      round: 3,
      roundName: "Fill the Words",
      category: "Ayah 8 Completion",
      question: "Complete the final powerful question in Ayah 8:",
      versePrefix: "فَمَا يُكَذِّبُكَ بَعْدُ بِالدِّينِ أَلَيْسَ اللَّهُ بِأَحْكَمِ ",
      verseSuffix: " ﴿٨﴾",
      correctWord: "الْحَاكِمِينَ",
      normalizedAnswer: "الحاكمين",
      englishMeaning: "the judges / most just of judges",
      translit: "Al-haakimeen",
      wordBank: ["الْحَاكِمِينَ", "الْعَالَمِينَ", "الرَّاحِمِينَ", "الْخَالِقِينَ"],
      hint: "Allah is the Most Wise, the Supreme Judge above all rulers and judges.",
      explanation: "Ayah 8: 'أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ' (bi-ahkamil haakimeen) — 'Is not Allah the most just of judges?'.",
      rewardPoints: 10
    }
  ],

  // ROUND 4: Think Like a Qur'an Champion (5 questions on lessons & reflection)
  round4: [
    {
      id: "r4_q1",
      round: 4,
      roundName: "Qur'an Champion",
      category: "Human Honor",
      question: "What does Surah At-Tin teach us about the way Allah created human beings?",
      options: [
        { text: "Allah gave humans intellect, honor, and the ability to do good", correct: true },
        { text: "Humans were created purely to live without any responsibility", correct: false },
        { text: "Humans cannot choose between right and wrong", correct: false },
        { text: "Human beings have no purpose or special status", correct: false }
      ],
      hint: "Remember 'Ahsan Taqweem' — Allah made us capable of worship, kindness, and deep wisdom.",
      explanation: "Allah honored human beings above many creations by giving us a beautiful upright posture, free will, a conscious heart, and the intellect to choose what is right.",
      rewardPoints: 10
    },
    {
      id: "r4_q2",
      round: 4,
      roundName: "Qur'an Champion",
      category: "Gratitude & Blessings",
      question: "What should we do with the blessings (health, mind, senses) Allah has given us?",
      options: [
        { text: "Use them to obey Allah, help others, and do righteous deeds", correct: true },
        { text: "Show off and boast to our friends and classmates", correct: false },
        { text: "Take them for granted and never say Alhamdulillah", correct: false },
        { text: "Use our strength to harm others or be unkind", correct: false }
      ],
      hint: "A true Muslim shows gratitude by putting their body and mind to good use every day.",
      explanation: "Gratitude (Shukr) means thanking Allah with our tongue, heart, and actions by helping our family, classmates, and using our health for beneficial deeds.",
      rewardPoints: 10
    },
    {
      id: "r4_q3",
      round: 4,
      roundName: "Qur'an Champion",
      category: "Faith & Action",
      question: "What does the surah teach us about faith (Iman) and good deeds (Amal Salih)?",
      options: [
        { text: "Both faith and good deeds protect a person from falling into ruin", correct: true },
        { text: "Belief in our heart is enough, we don't need to do any good actions", correct: false },
        { text: "Good deeds are only required once a year", correct: false },
        { text: "Faith has no connection to how we treat people", correct: false }
      ],
      hint: "Look at verse 6: 'Except those who believe AND do righteous deeds'.",
      explanation: "Surah At-Tin clearly links true belief with righteous deeds. Faith is like a tree, and good deeds are its sweet fruit!",
      rewardPoints: 10
    },
    {
      id: "r4_q4",
      round: 4,
      roundName: "Qur'an Champion",
      category: "The Ultimate Reward",
      question: "According to the surah, what kind of reward is promised to those who believe and do good deeds?",
      options: [
        { text: "A continuous, never-ending reward in Jannah (Ajrun ghayru mamnoon)", correct: true },
        { text: "A temporary reward that stops after a few weeks", correct: false },
        { text: "Only fame and attention in this worldly life", correct: false },
        { text: "A reward that decreases when we get older", correct: false }
      ],
      hint: "'Ajrun ghayru mamnoon' means an uninterrupted, unending blessing from Allah.",
      explanation: "'Falahum ajrun ghayru mamnoon' promises a perpetual reward without end in Paradise, where joy and peace never run out.",
      rewardPoints: 10
    },
    {
      id: "r4_q5",
      round: 4,
      roundName: "Qur'an Champion",
      category: "Daily Life Practice",
      question: "Which lesson from Surah At-Tin can you practise today in your daily Grade 5 life?",
      options: [
        { text: "Pray on time, speak kind words, and thank Allah for our healthy mind & body", correct: true },
        { text: "Waste time and ignore our homework and parents", correct: false },
        { text: "Argue with friends to prove we are always the best", correct: false },
        { text: "Eat unhealthily and forget to say Bismillah", correct: false }
      ],
      hint: "Think about how a Qur'an Champion acts at school and at home every day.",
      explanation: "We protect our honor and divine gift of 'Ahsan Taqweem' by praying, speaking truth, sharing with others, and respecting the body Allah blessed us with.",
      rewardPoints: 10
    }
  ]
};

// ============================================================================
// 2. WEB AUDIO SYNTHESIZER (ZERO EXTERNAL ASSET DEPENDENCY)
// ============================================================================

class SoundManager {
  constructor() {
    this.enabled = true;
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playTone(freq, type = "sine", duration = 0.2, startTime = 0, gainLevel = 0.15) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);

      gain.gain.setValueAtTime(gainLevel, this.ctx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + startTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime + startTime);
      osc.stop(this.ctx.currentTime + startTime + duration);
    } catch (e) {
      console.warn("Audio error:", e);
    }
  }

  // Chime for correct answer
  playCorrect() {
    // 3-note ascending happy triad (C5, E5, G5)
    this.playTone(523.25, "triangle", 0.15, 0.0, 0.2);
    this.playTone(659.25, "triangle", 0.18, 0.08, 0.22);
    this.playTone(783.99, "sine", 0.35, 0.16, 0.25);
  }

  // Gentle encouraging mistake tone
  playIncorrect() {
    this.playTone(349.23, "sine", 0.2, 0.0, 0.12);
    this.playTone(311.13, "sine", 0.35, 0.12, 0.12);
  }

  // Match Ding
  playMatchDing() {
    this.playTone(880, "sine", 0.25, 0.0, 0.2);
    this.playTone(1046.5, "sine", 0.4, 0.1, 0.22);
  }

  // Button click
  playClick() {
    this.playTone(440, "sine", 0.05, 0.0, 0.08);
  }

  // Level complete fanfare
  playRoundComplete() {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      this.playTone(freq, "triangle", 0.3, idx * 0.12, 0.2);
    });
  }

  // Final Champion Fanfare
  playFinalVictory() {
    const notes = [523.25, 659.25, 783.99, 880, 1046.5, 1318.5];
    notes.forEach((freq, idx) => {
      this.playTone(freq, "triangle", 0.4, idx * 0.15, 0.25);
    });
  }
}

const sounds = new SoundManager();

// ============================================================================
// 3. CANVAS CONFETTI ENGINE (VIBRANT ISLAMIC PALETTE PARTICLES)
// ============================================================================

class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    this.particles = [];
    this.animationFrame = null;
    this.colors = ["#10b981", "#059669", "#f59e0b", "#fbbf24", "#0ea5e9", "#38bdf8", "#ffffff"];

    if (this.canvas) {
      this.resize();
      window.addEventListener("resize", () => this.resize());
    }
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  burst(count = 90) {
    if (!this.ctx) return;
    this.resize();
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: this.canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: this.canvas.height / 3 + (Math.random() - 0.5) * 100,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.8) * 15,
        size: Math.random() * 8 + 5,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 12,
        opacity: 1
      });
    }

    if (!this.animationFrame) {
      this.render();
    }
  }

  render() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // gravity
      p.vx *= 0.98; // air resistance
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.008;

      if (p.opacity <= 0 || p.y > this.canvas.height + 20) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.opacity);
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;

      // Draw star or diamond or circle
      if (i % 3 === 0) {
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      } else {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        this.ctx.fill();
      }

      this.ctx.restore();
    }

    if (this.particles.length > 0) {
      this.animationFrame = requestAnimationFrame(() => this.render());
    } else {
      this.animationFrame = null;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

const confetti = new ConfettiEngine("confetti-canvas");

// ============================================================================
// 4. SMART ARABIC TEXT NORMALIZATION
// ============================================================================

function normalizeArabicText(str) {
  if (!str) return "";
  return str
    .trim()
    // Remove diacritics / Harakat (Tashkeel: Fathah, Dammah, Kasrah, Sukun, Shaddah, Tanween)
    .replace(/[\u064B-\u065F\u0670]/g, "")
    // Remove tatweel (kashida)
    .replace(/\u0640/g, "")
    // Normalize Alef forms (أ إ آ -> ا)
    .replace(/[أإآٱ]/g, "ا")
    // Normalize Taa Marbuta & Haa (ة -> ه) for flexible typing
    .replace(/ة/g, "ه")
    // Normalize Yaa / Alef Maksura (ى -> ي)
    .replace(/ى/g, "ي")
    // Replace multiple spaces
    .replace(/\s+/g, " ")
    .toLowerCase();
}

// ============================================================================
// 5. GAME STATE CONTROLLER
// ============================================================================

class QuizGame {
  constructor() {
    this.studentName = "Champion";
    this.score = 0; // max 200
    this.totalQuestions = 20;
    this.currentQuestionIndex = 0; // 0 to 19 across all 4 rounds
    this.starsEarned = [false, false, false, false]; // 4 rounds
    this.userAnswers = []; // records history of all 20 questions
    this.incorrectQuestionIds = []; // for retry practice mode
    this.isRetryMode = false;
    this.retryList = [];
    this.retryIndex = 0;

    // Load active questions (supports Teacher customization)
    this.quizData = JSON.parse(JSON.stringify(DEFAULT_QUIZ_DATA));

    // Matching round state (Round 2)
    this.round2Pairs = [];
    this.selectedArabicMatch = null;
    this.selectedEnglishMatch = null;
    this.matchedCount = 0;

    // DOM Elements
    this.cacheDom();
    this.bindEvents();
    this.initTeacherQuestionList();
  }

  cacheDom() {
    // Screens
    this.welcomeScreen = document.getElementById("welcome-screen");
    this.quizScreen = document.getElementById("quiz-screen");
    this.resultsScreen = document.getElementById("results-screen");

    // Modals
    this.roundModal = document.getElementById("round-modal");
    this.reviewModal = document.getElementById("review-modal");
    this.surahModal = document.getElementById("surah-modal");
    this.teacherModal = document.getElementById("teacher-modal");
    this.hintModal = document.getElementById("hint-modal");
    this.certPrintArea = document.getElementById("certificate-print-area");

    // Inputs & HUD
    this.nameInput = document.getElementById("student-name-input");
    this.startBtn = document.getElementById("start-adventure-btn");
    this.hudStudentName = document.getElementById("hud-student-name");
    this.hudRoundIcon = document.getElementById("hud-round-icon");
    this.hudRoundName = document.getElementById("hud-round-name");
    this.hudScore = document.getElementById("hud-score");
    this.hudQuestionCounter = document.getElementById("hud-question-counter");
    this.hudPercentCounter = document.getElementById("hud-percent-counter");
    this.progressFillBar = document.getElementById("progress-fill-bar");

    // Dynamic Areas
    this.dynamicQuestionBody = document.getElementById("dynamic-question-body");
    this.qCategoryTag = document.getElementById("q-category-tag");
    this.feedbackBox = document.getElementById("feedback-message-box");
    this.nextQuestionBtn = document.getElementById("next-question-btn");
    this.hintBtn = document.getElementById("hint-btn");

    // Top Header Buttons
    this.audioToggleBtn = document.getElementById("audio-toggle-btn");
    this.audioIcon = document.getElementById("audio-icon");
    this.surahTextBtn = document.getElementById("surah-text-btn");
    this.teacherModeBtn = document.getElementById("teacher-mode-btn");

    // Results screen fields
    this.resStudentName = document.getElementById("res-student-name");
    this.resScoreNum = document.getElementById("res-score-num");
    this.resPercentage = document.getElementById("res-percentage");
    this.resCorrectCount = document.getElementById("res-correct-count");
    this.resIncorrectCount = document.getElementById("res-incorrect-count");
    this.resStarsCount = document.getElementById("res-stars-count");
    this.resPerfTitle = document.getElementById("res-perf-title");
    this.resPerfDetail = document.getElementById("res-perf-detail");
    this.resPerfIcon = document.getElementById("res-perf-icon");
    this.retryCountBadge = document.getElementById("retry-count-badge");
  }

  bindEvents() {
    // Start form
    const startForm = document.getElementById("start-form");
    if (startForm) {
      startForm.addEventListener("submit", () => this.startGame());
    }

    // Next question button
    this.nextQuestionBtn.addEventListener("click", () => {
      sounds.playClick();
      this.advanceQuestion();
    });

    // Hint button
    this.hintBtn.addEventListener("click", () => this.showHint());

    // Close modals
    document.getElementById("close-hint-btn").addEventListener("click", () => this.closeModal(this.hintModal));
    document.getElementById("close-surah-btn").addEventListener("click", () => this.closeModal(this.surahModal));
    document.getElementById("close-surah-footer-btn").addEventListener("click", () => this.closeModal(this.surahModal));
    document.getElementById("close-review-btn").addEventListener("click", () => this.closeModal(this.reviewModal));
    document.getElementById("done-review-btn").addEventListener("click", () => this.closeModal(this.reviewModal));
    document.getElementById("close-teacher-btn").addEventListener("click", () => this.closeModal(this.teacherModal));
    document.getElementById("close-teacher-footer-btn").addEventListener("click", () => this.closeModal(this.teacherModal));

    // Audio toggle
    this.audioToggleBtn.addEventListener("click", () => {
      const isSoundOn = sounds.toggle();
      this.audioIcon.textContent = isSoundOn ? "🔊" : "🔇";
      this.audioToggleBtn.querySelector(".btn-text").textContent = isSoundOn ? "Sound ON" : "Sound OFF";
    });

    // Surah viewer
    this.surahTextBtn.addEventListener("click", () => {
      sounds.playClick();
      this.openModal(this.surahModal);
    });

    // Teacher mode button
    this.teacherModeBtn.addEventListener("click", () => {
      sounds.playClick();
      this.openTeacherDashboard();
    });

    // Round celebration modal button
    document.getElementById("start-next-round-btn").addEventListener("click", () => {
      sounds.playClick();
      this.closeModal(this.roundModal);
      this.renderCurrentQuestion();
    });

    // Results screen action buttons
    document.getElementById("play-again-btn").addEventListener("click", () => {
      sounds.playClick();
      this.resetGame();
    });

    document.getElementById("review-answers-btn").addEventListener("click", () => {
      sounds.playClick();
      this.renderReviewModal();
      this.openModal(this.reviewModal);
    });

    document.getElementById("practise-incorrect-btn").addEventListener("click", () => {
      sounds.playClick();
      this.startRetryPractice();
    });

    document.getElementById("print-certificate-btn").addEventListener("click", () => {
      sounds.playClick();
      this.renderCertificate();
    });

    // Certificate actions
    document.getElementById("cert-print-action-btn").addEventListener("click", () => {
      window.print();
    });
    document.getElementById("cert-close-action-btn").addEventListener("click", () => {
      this.certPrintArea.style.display = "none";
      this.resultsScreen.style.display = "block";
    });

    // Teacher tabs
    document.querySelectorAll(".teacher-tab-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        document.querySelectorAll(".teacher-tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".teacher-tab-content").forEach(c => c.classList.remove("active"));
        e.target.classList.add("active");
        const targetId = e.target.getAttribute("data-tab");
        document.getElementById(targetId).classList.add("active");
      });
    });

    // Teacher controls
    document.getElementById("teacher-reset-btn").addEventListener("click", () => {
      if (confirm("Reset current student session and return to the welcome screen?")) {
        this.closeModal(this.teacherModal);
        this.resetGame();
      }
    });

    document.getElementById("toggle-large-font-btn").addEventListener("click", () => {
      document.body.classList.toggle("large-display-mode");
      alert("Classroom display mode toggled!");
    });

    document.getElementById("print-teacher-summary-btn").addEventListener("click", () => {
      window.print();
    });
  }

  // ==========================================================================
  // NAVIGATION & MODALS
  // ==========================================================================

  showScreen(screen) {
    [this.welcomeScreen, this.quizScreen, this.resultsScreen].forEach(s => {
      s.classList.remove("active");
      s.style.display = "none";
    });
    screen.style.display = "block";
    setTimeout(() => screen.classList.add("active"), 15);
  }

  openModal(modal) {
    modal.classList.add("active");
  }

  closeModal(modal) {
    modal.classList.remove("active");
  }

  // ==========================================================================
  // GAME LIFECYCLE
  // ==========================================================================

  startGame() {
    sounds.init();
    sounds.playClick();
    const nameVal = this.nameInput.value.trim();
    this.studentName = nameVal || "Qur'an Champion";
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.starsEarned = [false, false, false, false];
    this.userAnswers = [];
    this.incorrectQuestionIds = [];
    this.isRetryMode = false;

    this.hudStudentName.textContent = this.studentName;
    this.updateHUD();
    this.showScreen(this.quizScreen);
    this.renderCurrentQuestion();
  }

  resetGame() {
    this.nameInput.value = "";
    this.showScreen(this.welcomeScreen);
    this.updateHUD();
  }

  updateHUD() {
    this.hudScore.textContent = this.score;

    // Stars
    for (let i = 1; i <= 4; i++) {
      const starEl = document.getElementById(`star-${i}`);
      if (this.starsEarned[i - 1]) {
        starEl.classList.remove("dimmed");
        starEl.classList.add("earned");
      } else {
        starEl.classList.remove("earned");
        starEl.classList.add("dimmed");
      }
    }

    const currentDisplayNumber = Math.min(this.currentQuestionIndex + 1, this.totalQuestions);
    this.hudQuestionCounter.textContent = `Question ${currentDisplayNumber} of ${this.totalQuestions}`;

    const percent = Math.round((currentDisplayNumber / this.totalQuestions) * 100);
    this.hudPercentCounter.textContent = `${percent}% Completed`;
    this.progressFillBar.style.width = `${percent}%`;
    this.progressFillBar.setAttribute("aria-valuenow", percent);

    // Current Round Badge
    const roundNumber = this.getCurrentRoundNumber();
    const roundTitles = [
      "Round 1: Qur'an Explorer",
      "Round 2: Match It!",
      "Round 3: Fill the Words",
      "Round 4: Qur'an Champion"
    ];
    const roundIcons = ["🧭", "🤲", "✍️", "🌟"];
    this.hudRoundIcon.textContent = roundIcons[roundNumber - 1];
    this.hudRoundName.textContent = roundTitles[roundNumber - 1];
  }

  getCurrentRoundNumber() {
    // 0-4: Round 1 (5 MCQs)
    // 5-9: Round 2 (5 Matches)
    // 10-14: Round 3 (5 Fills)
    // 15-19: Round 4 (5 Reflections)
    if (this.currentQuestionIndex < 5) return 1;
    if (this.currentQuestionIndex < 10) return 2;
    if (this.currentQuestionIndex < 15) return 3;
    return 4;
  }

  // ==========================================================================
  // QUESTION RENDERING DISPATCHER
  // ==========================================================================

  renderCurrentQuestion() {
    this.updateHUD();
    this.feedbackBox.innerHTML = "";
    this.feedbackBox.className = "feedback-message-box";
    this.nextQuestionBtn.style.display = "none";

    // Check if quiz finished
    if (this.currentQuestionIndex >= this.totalQuestions) {
      this.finishQuiz();
      return;
    }

    const roundNum = this.getCurrentRoundNumber();

    if (roundNum === 1) {
      const qData = this.quizData.round1[this.currentQuestionIndex];
      this.renderMultipleChoiceQuestion(qData);
    } else if (roundNum === 2) {
      // In Round 2, each item is 1 of the 5 matches
      const matchIndex = this.currentQuestionIndex - 5;
      this.renderMatchingRound(matchIndex);
    } else if (roundNum === 3) {
      const fillIndex = this.currentQuestionIndex - 10;
      const qData = this.quizData.round3[fillIndex];
      this.renderFillInBlankQuestion(qData);
    } else if (roundNum === 4) {
      const championIndex = this.currentQuestionIndex - 15;
      const qData = this.quizData.round4[championIndex];
      this.renderMultipleChoiceQuestion(qData);
    }
  }

  // ==========================================================================
  // ROUND 1 & ROUND 4: MULTIPLE CHOICE
  // ==========================================================================

  renderMultipleChoiceQuestion(qData) {
    this.qCategoryTag.textContent = `${qData.roundName} • ${qData.category}`;

    let html = `
      <div class="q-prompt-box">
        ${qData.arabic ? `<div class="q-arabic-verse">${qData.arabic}</div>` : ""}
        <h3 class="q-title">${qData.question}</h3>
      </div>
      <div class="options-grid" role="radiogroup" aria-label="Answer options">
    `;

    const letters = ["A", "B", "C", "D"];
    qData.options.forEach((opt, idx) => {
      html += `
        <button type="button" class="option-card" data-idx="${idx}" aria-label="Option ${letters[idx]}: ${opt.text}">
          <span class="option-letter">${letters[idx]}</span>
          <span class="option-text">${opt.text}</span>
        </button>
      `;
    });

    html += `</div>`;
    this.dynamicQuestionBody.innerHTML = html;

    // Attach click listeners to cards
    const optionCards = this.dynamicQuestionBody.querySelectorAll(".option-card");
    optionCards.forEach(card => {
      card.addEventListener("click", () => {
        const selectedIdx = parseInt(card.getAttribute("data-idx"), 10);
        this.handleMultipleChoiceAnswer(qData, selectedIdx, optionCards);
      });
    });
  }

  handleMultipleChoiceAnswer(qData, selectedIdx, optionCards) {
    // Disable all options once answered
    optionCards.forEach(card => card.classList.add("disabled"));

    const chosenOption = qData.options[selectedIdx];
    const isCorrect = chosenOption.correct;

    const selectedCard = optionCards[selectedIdx];

    if (isCorrect) {
      sounds.playCorrect();
      confetti.burst(35);
      selectedCard.classList.add("correct");
      this.score += qData.rewardPoints;
      this.hudScore.textContent = this.score;

      const praiseMessages = ["MashaAllah! Excellent!", "Brilliant thinking!", "Spot on, Champion!", "SubhanAllah! Beautiful!"];
      const randomPraise = praiseMessages[Math.floor(Math.random() * praiseMessages.length)];

      this.feedbackBox.className = "feedback-message-box success-msg";
      this.feedbackBox.innerHTML = `
        <span class="feedback-icon">🌟</span>
        <div>
          <strong>${randomPraise} (+${qData.rewardPoints} pts)</strong>
          <span class="feedback-explanation">${qData.explanation}</span>
        </div>
      `;
    } else {
      sounds.playIncorrect();
      selectedCard.classList.add("incorrect");

      // Highlight the correct card
      const correctIdx = qData.options.findIndex(o => o.correct);
      if (correctIdx !== -1) {
        optionCards[correctIdx].classList.add("correct");
      }

      this.feedbackBox.className = "feedback-message-box retry-msg";
      this.feedbackBox.innerHTML = `
        <span class="feedback-icon">💡</span>
        <div>
          <strong>Good try! Keep learning!</strong>
          <span class="feedback-explanation">${qData.explanation}</span>
        </div>
      `;

      if (!this.incorrectQuestionIds.includes(qData.id)) {
        this.incorrectQuestionIds.push(qData.id);
      }
    }

    // Save answer history
    this.userAnswers.push({
      id: qData.id,
      round: qData.round,
      questionText: qData.question,
      chosenText: chosenOption.text,
      correctText: qData.options.find(o => o.correct).text,
      isCorrect: isCorrect,
      explanation: qData.explanation
    });

    this.nextQuestionBtn.style.display = "inline-flex";
  }

  // ==========================================================================
  // ROUND 2: MATCH IT! (DRAG & DROP + TAP-TO-MATCH)
  // ==========================================================================

  renderMatchingRound(itemIndex) {
    // If it's the start of Round 2, shuffle and prepare the 5 pairs
    if (itemIndex === 0 || !this.round2ShuffledPairs) {
      this.round2ShuffledPairs = [...this.quizData.round2.pairs].sort(() => Math.random() - 0.5);
      this.round2ShuffledEnglish = [...this.quizData.round2.pairs].sort(() => Math.random() - 0.5);
      this.round2MatchesMade = [];
    }

    const r2Data = this.quizData.round2;
    this.qCategoryTag.textContent = `Round 2: Match It! • Pair ${itemIndex + 1} of 5`;

    let html = `
      <div class="q-prompt-box">
        <h3 class="q-title">${r2Data.title}</h3>
        <p class="q-subtitle">Tap or drag each English meaning to match its sacred Arabic phrase. Works smoothly on touches and mice!</p>
      </div>

      <div class="match-instructions-banner">
        <span>✨ <strong>Instructions:</strong> Tap an Arabic card, then tap its matching English card (or drag and drop)!</span>
      </div>

      <div class="matching-arena">
        <div class="match-column" id="arabic-col">
          <div class="column-title">Sacred Arabic Phrases (الكلمات القرآنية)</div>
    `;

    this.round2ShuffledPairs.forEach(p => {
      const isAlreadyMatched = this.round2MatchesMade.includes(p.id);
      html += `
        <div 
          class="match-item arabic-card ${isAlreadyMatched ? 'matched' : ''}" 
          data-id="${p.id}" 
          data-type="arabic"
          id="match-ar-${p.id}"
          tabindex="0"
          role="button"
        >
          <span class="match-badge-indicator">${isAlreadyMatched ? '✅' : '🍃'}</span>
          <span class="match-arabic-text">${p.arabic}</span>
        </div>
      `;
    });

    html += `
        </div>
        <div class="match-column" id="english-col">
          <div class="column-title">English Meanings (المعاني)</div>
    `;

    this.round2ShuffledEnglish.forEach(p => {
      const isAlreadyMatched = this.round2MatchesMade.includes(p.id);
      html += `
        <div 
          class="match-item english-card ${isAlreadyMatched ? 'matched' : ''}" 
          data-id="${p.id}" 
          data-type="english"
          id="match-en-${p.id}"
          draggable="${!isAlreadyMatched}"
          tabindex="0"
          role="button"
        >
          <span class="match-english-text">${p.english}</span>
          <span class="match-badge-indicator">${isAlreadyMatched ? '✅' : '✨'}</span>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    this.dynamicQuestionBody.innerHTML = html;
    this.setupMatchingInteractions();
  }

  setupMatchingInteractions() {
    const arabicCards = this.dynamicQuestionBody.querySelectorAll(".arabic-card:not(.matched)");
    const englishCards = this.dynamicQuestionBody.querySelectorAll(".english-card:not(.matched)");

    // TAP TO MATCH LOGIC
    arabicCards.forEach(card => {
      card.addEventListener("click", () => {
        if (card.classList.contains("matched")) return;
        arabicCards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        this.selectedArabicMatch = card.getAttribute("data-id");
        sounds.playClick();
        this.checkTapMatch();
      });
    });

    englishCards.forEach(card => {
      card.addEventListener("click", () => {
        if (card.classList.contains("matched")) return;
        englishCards.forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        this.selectedEnglishMatch = card.getAttribute("data-id");
        sounds.playClick();
        this.checkTapMatch();
      });

      // DRAG AND DROP LOGIC (HTML5 API)
      card.addEventListener("dragstart", (e) => {
        card.classList.add("dragging");
        e.dataTransfer.setData("text/plain", card.getAttribute("data-id"));
      });

      card.addEventListener("dragend", () => {
        card.classList.remove("dragging");
      });
    });

    arabicCards.forEach(card => {
      card.addEventListener("dragover", (e) => {
        e.preventDefault();
        card.classList.add("drop-target");
      });

      card.addEventListener("dragleave", () => {
        card.classList.remove("drop-target");
      });

      card.addEventListener("drop", (e) => {
        e.preventDefault();
        card.classList.remove("drop-target");
        const draggedEnglishId = e.dataTransfer.getData("text/plain");
        const arabicId = card.getAttribute("data-id");
        this.executeMatchValidation(arabicId, draggedEnglishId);
      });
    });
  }

  checkTapMatch() {
    if (this.selectedArabicMatch && this.selectedEnglishMatch) {
      const arId = this.selectedArabicMatch;
      const enId = this.selectedEnglishMatch;
      this.selectedArabicMatch = null;
      this.selectedEnglishMatch = null;
      this.executeMatchValidation(arId, enId);
    }
  }

  executeMatchValidation(arId, enId) {
    const arCard = document.getElementById(`match-ar-${arId}`);
    const enCard = document.getElementById(`match-en-${enId}`);

    if (arId === enId) {
      // Correct Match!
      sounds.playMatchDing();
      confetti.burst(25);
      arCard.classList.remove("selected");
      enCard.classList.remove("selected");
      arCard.classList.add("matched");
      enCard.classList.add("matched");

      arCard.querySelector(".match-badge-indicator").textContent = "✅";
      enCard.querySelector(".match-badge-indicator").textContent = "✅";

      this.round2MatchesMade.push(arId);
      this.score += 10;
      this.hudScore.textContent = this.score;

      const pairData = this.quizData.round2.pairs.find(p => p.id === arId);

      this.feedbackBox.className = "feedback-message-box success-msg";
      this.feedbackBox.innerHTML = `
        <span class="feedback-icon">🎉</span>
        <div>
          <strong>MashaAllah! Match made: ${pairData.arabic} = ${pairData.english}! (+10 pts)</strong>
          <span class="feedback-explanation">${pairData.explanation}</span>
        </div>
      `;

      // Record answer
      this.userAnswers.push({
        id: `r2_${arId}`,
        round: 2,
        questionText: `Match Arabic: ${pairData.arabic}`,
        chosenText: pairData.english,
        correctText: pairData.english,
        isCorrect: true,
        explanation: pairData.explanation
      });

      // Show next button to advance question step
      this.nextQuestionBtn.style.display = "inline-flex";

    } else {
      // Incorrect Match
      sounds.playIncorrect();
      arCard.classList.remove("selected");
      enCard.classList.remove("selected");

      this.feedbackBox.className = "feedback-message-box retry-msg";
      this.feedbackBox.innerHTML = `
        <span class="feedback-icon">🤔</span>
        <div>
          <strong>Not quite a match! Try again.</strong>
          <span class="feedback-explanation">Review the meaning of the phrase carefully or use the Hint button!</span>
        </div>
      `;

      if (!this.incorrectQuestionIds.includes(`r2_${arId}`)) {
        this.incorrectQuestionIds.push(`r2_${arId}`);
      }
    }
  }

  // ==========================================================================
  // ROUND 3: FILL IN THE MISSING WORDS
  // ==========================================================================

  renderFillInBlankQuestion(qData) {
    this.qCategoryTag.textContent = `${qData.roundName} • ${qData.category}`;

    let html = `
      <div class="q-prompt-box">
        <h3 class="q-title">${qData.question}</h3>
      </div>

      <div class="fill-verse-box">
        <div class="verse-arabic-fill-line">
          <span>${qData.versePrefix}</span>
          <span class="verse-blank-slot" id="verse-fill-slot">_______</span>
          <span>${qData.verseSuffix}</span>
        </div>
        <p class="verse-trans-hint">Clue: "${qData.englishMeaning}" (${qData.translit})</p>
      </div>

      <div class="word-bank-container">
        <div class="bank-heading">🌟 Tap the correct word from the Sacred Word Bank (or type below):</div>
        <div class="word-bank-chips" id="word-bank-chips">
    `;

    // Shuffle word bank chips
    const shuffledBank = [...qData.wordBank].sort(() => Math.random() - 0.5);
    shuffledBank.forEach(word => {
      html += `
        <button type="button" class="word-chip" data-word="${word}" dir="rtl">
          ${word}
        </button>
      `;
    });

    html += `
        </div>
      </div>

      <form id="fill-form" class="fill-manual-input-row" onsubmit="event.preventDefault();">
        <input 
          type="text" 
          id="manual-fill-input" 
          class="fill-arabic-input" 
          placeholder="أدخل الكلمة هنا..." 
          autocomplete="off"
        >
        <button type="submit" id="submit-fill-btn" class="primary-btn">
          <span>Check ➔</span>
        </button>
      </form>
    `;

    this.dynamicQuestionBody.innerHTML = html;

    const slot = document.getElementById("verse-fill-slot");
    const chips = this.dynamicQuestionBody.querySelectorAll(".word-chip");
    const manualInput = document.getElementById("manual-fill-input");
    const fillForm = document.getElementById("fill-form");

    // Click chip
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        const word = chip.getAttribute("data-word");
        slot.textContent = word;
        slot.classList.add("filled");
        manualInput.value = word;
        chips.forEach(c => c.classList.remove("selected"));
        chip.classList.add("selected");
        this.checkFillAnswer(qData, word);
      });
    });

    // Form submit
    fillForm.addEventListener("submit", () => {
      const typed = manualInput.value.trim();
      if (!typed) return;
      slot.textContent = typed;
      slot.classList.add("filled");
      this.checkFillAnswer(qData, typed);
    });
  }

  checkFillAnswer(qData, studentInput) {
    const normStudent = normalizeArabicText(studentInput);
    const normCorrect = normalizeArabicText(qData.correctWord);

    const isMatch = normStudent === normCorrect || normStudent.includes(normCorrect) || normCorrect.includes(normStudent);

    // Disable input
    document.getElementById("manual-fill-input").disabled = true;
    document.getElementById("submit-fill-btn").disabled = true;
    document.querySelectorAll(".word-chip").forEach(c => c.disabled = true);

    if (isMatch) {
      sounds.playCorrect();
      confetti.burst(35);
      this.score += qData.rewardPoints;
      this.hudScore.textContent = this.score;

      this.feedbackBox.className = "feedback-message-box success-msg";
      this.feedbackBox.innerHTML = `
        <span class="feedback-icon">🌟</span>
        <div>
          <strong>MashaAllah! Perfectly completed! (+${qData.rewardPoints} pts)</strong>
          <span class="feedback-explanation">${qData.explanation}</span>
        </div>
      `;
    } else {
      sounds.playIncorrect();
      this.feedbackBox.className = "feedback-message-box retry-msg";
      this.feedbackBox.innerHTML = `
        <span class="feedback-icon">📖</span>
        <div>
          <strong>Correct Word: ${qData.correctWord} (${qData.englishMeaning})</strong>
          <span class="feedback-explanation">${qData.explanation}</span>
        </div>
      `;

      if (!this.incorrectQuestionIds.includes(qData.id)) {
        this.incorrectQuestionIds.push(qData.id);
      }
    }

    this.userAnswers.push({
      id: qData.id,
      round: qData.round,
      questionText: `${qData.versePrefix} [ ... ] ${qData.verseSuffix}`,
      chosenText: studentInput,
      correctText: qData.correctWord,
      isCorrect: isMatch,
      explanation: qData.explanation
    });

    this.nextQuestionBtn.style.display = "inline-flex";
  }

  // ==========================================================================
  // ROUND PROGRESSION & CELEBRATION
  // ==========================================================================

  advanceQuestion() {
    const currentRound = this.getCurrentRoundNumber();
    this.currentQuestionIndex++;
    const newRound = this.getCurrentRoundNumber();

    // Check if a round was just completed
    if (newRound > currentRound && currentRound <= 4) {
      this.celebrateRoundCompletion(currentRound);
    } else {
      this.renderCurrentQuestion();
    }
  }

  celebrateRoundCompletion(roundCompleted) {
    sounds.playRoundComplete();
    confetti.burst(70);

    // Award bonus star
    this.starsEarned[roundCompleted - 1] = true;
    this.updateHUD();

    const titles = [
      "Round 1: Qur'an Explorer Completed!",
      "Round 2: Match It! Mastered!",
      "Round 3: Verses Beautifully Completed!",
      "Round 4: Qur'an Champion Reflections Done!"
    ];

    const praises = [
      "Brilliant exploration of the background and facts of Surah At-Tin!",
      "MashaAllah! Your Arabic vocabulary understanding is shining!",
      "SubhanAllah! You have memorized and completed the holy verses accurately!",
      "Alhamdulillah! You thought deeply like a true Qur'an Champion!"
    ];

    document.getElementById("round-modal-title").textContent = titles[roundCompleted - 1];
    document.getElementById("round-modal-text").textContent = praises[roundCompleted - 1];
    document.getElementById("round-modal-round-score").textContent = "+50 Points Earned!";
    document.getElementById("round-modal-star-earned").textContent = `⭐ Star #${roundCompleted} Unlocked!`;

    this.openModal(this.roundModal);
  }

  // ==========================================================================
  // HINT MODAL
  // ==========================================================================

  showHint() {
    sounds.playClick();
    const roundNum = this.getCurrentRoundNumber();
    let hintText = "Read the surah carefully and think of the blessing Allah mentions!";

    if (roundNum === 1) {
      hintText = this.quizData.round1[this.currentQuestionIndex].hint;
    } else if (roundNum === 2) {
      hintText = "Think of the root words: Teeni = Fig, Zaytoon = Olive, Taqweem = Form, Asfal = Lowest, Ajr = Reward!";
    } else if (roundNum === 3) {
      const fillIndex = this.currentQuestionIndex - 10;
      hintText = this.quizData.round3[fillIndex].hint;
    } else if (roundNum === 4) {
      const qIndex = this.currentQuestionIndex - 15;
      hintText = this.quizData.round4[qIndex].hint;
    }

    document.getElementById("hint-modal-text").textContent = hintText;
    this.openModal(this.hintModal);
  }

  // ==========================================================================
  // FINAL RESULTS SCREEN
  // ==========================================================================

  finishQuiz() {
    sounds.playFinalVictory();
    confetti.burst(120);

    const correctAnswers = this.userAnswers.filter(a => a.isCorrect).length;
    const incorrectAnswers = 20 - correctAnswers;
    const percentage = Math.round((this.score / 200) * 100);

    this.resStudentName.textContent = this.studentName;
    this.resScoreNum.textContent = this.score;
    this.resPercentage.textContent = `${percentage}%`;
    this.resCorrectCount.textContent = correctAnswers;
    this.resIncorrectCount.textContent = incorrectAnswers;
    this.retryCountBadge.textContent = incorrectAnswers;

    // Stars string
    const starsString = "⭐".repeat(this.starsEarned.filter(Boolean).length) || "⭐";
    this.resStarsCount.textContent = starsString;

    // Performance tiers requested in Prompt:
    // 90–100%: “Excellent! You are a Surah At-Tin Champion!”
    // 75–89%: “Amazing work! You understand Surah At-Tin well!”
    // 50–74%: “Good effort! Practise a little more to become a champion!”
    // Below 50%: “Keep learning! Every attempt helps you improve!”
    if (percentage >= 90) {
      this.resPerfTitle.textContent = "Excellent! You are a Surah At-Tin Champion!";
      this.resPerfDetail.textContent = "MashaAllah! You have mastered the verses, vocabulary, and moral lessons of Surah At-Tin with distinction!";
      this.resPerfIcon.textContent = "🏆";
    } else if (percentage >= 75) {
      this.resPerfTitle.textContent = "Amazing work! You understand Surah At-Tin well!";
      this.resPerfDetail.textContent = "Alhamdulillah! You demonstrated great knowledge and effort throughout all four challenges!";
      this.resPerfIcon.textContent = "🌟";
    } else if (percentage >= 50) {
      this.resPerfTitle.textContent = "Good effort! Practise a little more to become a champion!";
      this.resPerfDetail.textContent = "You did a very good job! Try the Practice mode to master the questions you missed!";
      this.resPerfIcon.textContent = "🌿";
    } else {
      this.resPerfTitle.textContent = "Keep learning! Every attempt helps you improve!";
      this.resPerfDetail.textContent = "The Prophet (ﷺ) encouraged seeking knowledge step by step. Try again and you will succeed!";
      this.resPerfIcon.textContent = "🌱";
    }

    // Toggle Retry button visibility
    const retryBtn = document.getElementById("practise-incorrect-btn");
    if (incorrectAnswers === 0) {
      retryBtn.style.display = "none";
    } else {
      retryBtn.style.display = "inline-flex";
    }

    this.showScreen(this.resultsScreen);
  }

  // ==========================================================================
  // REVIEW ANSWERS MODAL
  // ==========================================================================

  renderReviewModal() {
    const container = document.getElementById("review-list-container");
    if (this.userAnswers.length === 0) {
      container.innerHTML = "<p>No questions answered yet.</p>";
      return;
    }

    let html = "";
    this.userAnswers.forEach((item, idx) => {
      html += `
        <div class="review-item ${item.isCorrect ? 'is-correct' : 'is-wrong'}">
          <div class="review-header">
            <span>Challenge #${idx + 1} • Round ${item.round}</span>
            <span>${item.isCorrect ? '✅ Correct (+10 pts)' : '❌ Needs Practice'}</span>
          </div>
          <p class="review-q-text">${item.questionText}</p>
          <div class="review-answers">
            <div><strong>Your Answer:</strong> ${item.chosenText}</div>
            <div><strong>Correct Answer:</strong> ${item.correctText}</div>
          </div>
          <p class="review-explanation"><strong>Teacher Note:</strong> ${item.explanation}</p>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // ==========================================================================
  // RETRY PRACTICE MODE (INCORRECT QUESTIONS ONLY)
  // ==========================================================================

  startRetryPractice() {
    if (this.incorrectQuestionIds.length === 0) {
      alert("MashaAllah! You scored 100% and have no incorrect questions to practise!");
      return;
    }

    alert(`Starting Practice Mode for your ${this.incorrectQuestionIds.length} missed question(s)! Bismillah!`);

    // Reset score and load only missed questions
    this.isRetryMode = true;
    this.totalQuestions = this.incorrectQuestionIds.length;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswers = [];

    this.showScreen(this.quizScreen);
    this.renderCurrentQuestion();
  }

  // ==========================================================================
  // PRINTABLE CERTIFICATE OF ACHIEVEMENT
  // ==========================================================================

  renderCertificate() {
    const certName = document.getElementById("cert-student-name");
    const certScore = document.getElementById("cert-score-val");
    const certPct = document.getElementById("cert-pct-val");
    const certDate = document.getElementById("cert-date-line");

    certName.textContent = this.studentName;
    certScore.textContent = `${this.score} / 200`;
    certPct.textContent = `${Math.round((this.score / 200) * 100)}%`;

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
    certDate.textContent = formattedDate;

    this.resultsScreen.style.display = "none";
    this.certPrintArea.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ==========================================================================
  // TEACHER DASHBOARD LOGIC
  // ==========================================================================

  openTeacherDashboard() {
    document.getElementById("teacher-student-name").textContent = this.studentName;
    document.getElementById("teacher-student-score").textContent = `${this.score} / 200`;
    const pct = Math.round((this.score / 200) * 100);
    document.getElementById("teacher-student-pct").textContent = `${pct}%`;

    const roundsContainer = document.getElementById("teacher-rounds-stats");
    roundsContainer.innerHTML = `
      <div class="teacher-q-row">
        <strong>Round Breakdown for ${this.studentName}:</strong>
        <ul>
          <li>Round 1 (MCQ Explorer): 5 Questions</li>
          <li>Round 2 (Drag & Tap Matching): 5 Arabic Vocabulary Pairs</li>
          <li>Round 3 (Fill the Words): 5 Authentic Verses with Word Bank</li>
          <li>Round 4 (Reflections & Ethics): 5 Qur'an Champion Questions</li>
        </ul>
        <p>Total Questions Completed: ${this.userAnswers.length} / 20</p>
      </div>
    `;

    this.openModal(this.teacherModal);
  }

  initTeacherQuestionList() {
    const list = document.getElementById("teacher-q-list");
    if (!list) return;

    let html = "";

    // Round 1
    this.quizData.round1.forEach((q, idx) => {
      html += `
        <div class="teacher-q-row">
          <div class="teacher-q-header">
            <span>Round 1 • Question ${idx + 1}</span>
            <span>Answer: ${q.options.find(o => o.correct).text}</span>
          </div>
          <p><strong>${q.question}</strong></p>
          <small>Explanation: ${q.explanation}</small>
        </div>
      `;
    });

    // Round 2
    this.quizData.round2.pairs.forEach((p, idx) => {
      html += `
        <div class="teacher-q-row">
          <div class="teacher-q-header">
            <span>Round 2 • Pair ${idx + 1}</span>
            <span>Meaning: ${p.english}</span>
          </div>
          <p><strong>${p.arabic}</strong> (${p.translit})</p>
          <small>Note: ${p.explanation}</small>
        </div>
      `;
    });

    // Round 3
    this.quizData.round3.forEach((q, idx) => {
      html += `
        <div class="teacher-q-row">
          <div class="teacher-q-header">
            <span>Round 3 • Verse ${idx + 1}</span>
            <span>Missing Word: ${q.correctWord}</span>
          </div>
          <p><strong>${q.versePrefix} [ ${q.correctWord} ] ${q.verseSuffix}</strong></p>
          <small>Word Bank: ${q.wordBank.join(" • ")}</small>
        </div>
      `;
    });

    // Round 4
    this.quizData.round4.forEach((q, idx) => {
      html += `
        <div class="teacher-q-row">
          <div class="teacher-q-header">
            <span>Round 4 • Reflection ${idx + 1}</span>
            <span>Approved Answer: ${q.options.find(o => o.correct).text}</span>
          </div>
          <p><strong>${q.question}</strong></p>
          <small>Lesson: ${q.explanation}</small>
        </div>
      `;
    });

    list.innerHTML = html;
  }
}

// Instantiate game when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  window.quizApp = new QuizGame();
});
