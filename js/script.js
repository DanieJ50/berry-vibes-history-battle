"use strict";

const historyTerms = [
  {
    "term": "Paleoindians",
    "category": "Indigenous Foundations",
    "date": "c. 13,000–8000 BCE",
    "summary": "The earliest widely recognized peoples in the Americas, often associated with mobile hunting communities and distinctive fluted stone points.",
    "memory": "earliest migrations, big-game hunting, Clovis-style points"
  },
  {
    "term": "Archaic People",
    "category": "Indigenous Foundations",
    "date": "c. 8000–1000 BCE",
    "summary": "Native communities that developed more varied hunting, fishing, gathering, and seasonal settlement patterns after the Paleoindian era.",
    "memory": "broader diets, seasonal movement, adaptation after large-game decline"
  },
  {
    "term": "Hohokam/Anasazi",
    "category": "Indigenous Foundations",
    "date": "c. 300 BCE–1450 CE",
    "summary": "Southwestern cultures known for major achievements: Hohokam communities built extensive irrigation systems, while Ancestral Puebloans built pueblos and cliff dwellings.",
    "memory": "Southwest irrigation canals, pueblos, cliff dwellings"
  },
  {
    "term": "Cahokia",
    "category": "Indigenous Foundations",
    "date": "peak c. 1050–1200 CE",
    "summary": "A large Mississippian city near present-day St. Louis, famous for monumental earthen mounds, trade networks, and a socially complex population.",
    "memory": "Monks Mound, Mississippi River, major urban center"
  },
  {
    "term": "The Taíno",
    "category": "Encounter & Empire",
    "date": "Caribbean before and after 1492",
    "summary": "Indigenous Caribbean peoples who lived in agricultural chiefdoms and were among the first communities encountered and colonized by Columbus and Spain.",
    "memory": "Caribbean, Columbus, Indigenous survival and resistance"
  },
  {
    "term": "The Aztecs",
    "category": "Encounter & Empire",
    "date": "c. 1428–1521",
    "summary": "The Mexica-led tribute empire centered at Tenochtitlan, conquered by Spanish forces and Indigenous allies in 1521.",
    "memory": "Tenochtitlan, tribute empire, Spanish conquest"
  },
  {
    "term": "Cabeza de Vaca",
    "category": "Encounter & Empire",
    "date": "journey c. 1528–1536",
    "summary": "A Spanish explorer who survived a shipwreck and traveled for years across the Gulf Coast and Southwest before writing an influential account of the region.",
    "memory": "shipwreck survivor, Gulf Coast, Southwest travel narrative"
  },
  {
    "term": "Pueblo Revolt",
    "category": "Conflict & Resistance",
    "date": "1680",
    "summary": "A coordinated Pueblo uprising led by Popé that drove Spanish colonists from New Mexico and restored Native control for about twelve years.",
    "memory": "Popé, New Mexico, Spanish expelled"
  },
  {
    "term": "Indentured Servitude",
    "category": "Labor & Colonial Society",
    "date": "especially 1600s",
    "summary": "A labor arrangement in which a person worked for a fixed number of years, often in exchange for passage to the colonies, food, and shelter.",
    "memory": "contract labor, passage to America, limited term of service"
  },
  {
    "term": "Bacon's Rebellion",
    "category": "Conflict & Resistance",
    "date": "1676",
    "summary": "A Virginia uprising led by Nathaniel Bacon against Governor William Berkeley, shaped by frontier expansion, class grievances, and violence against Native peoples.",
    "memory": "Virginia frontier, Nathaniel Bacon, Governor Berkeley"
  },
  {
    "term": "Anne Hutchinson",
    "category": "Religion & Ideas",
    "date": "banished in 1637",
    "summary": "A religious dissenter expelled from Massachusetts Bay after challenging Puritan leaders and arguing that divine grace could not be controlled by church authorities.",
    "memory": "Puritan dissent, antinomian controversy, banishment"
  },
  {
    "term": "Pequot War",
    "category": "Conflict & Resistance",
    "date": "1636–1638",
    "summary": "A New England conflict in which English colonists and Native allies defeated the Pequot, including the devastating Mystic massacre.",
    "memory": "New England, Pequot defeat, Mystic massacre"
  },
  {
    "term": "Beaver Wars",
    "category": "Conflict & Resistance",
    "date": "mostly 1600s–1701",
    "summary": "A series of conflicts involving the Haudenosaunee and neighboring Native nations over territory, captives, trade routes, and access to the fur trade.",
    "memory": "fur trade, Haudenosaunee, territory and captives"
  },
  {
    "term": "Praying Towns",
    "category": "Religion & Ideas",
    "date": "especially 1640s–1670s",
    "summary": "Puritan missionary settlements in New England created for Native converts to Christianity, often placing them under colonial religious supervision.",
    "memory": "Native converts, Puritan missions, New England settlements"
  },
  {
    "term": "King Philip's War",
    "category": "Conflict & Resistance",
    "date": "1675–1676",
    "summary": "A devastating war between New England colonists and a Native coalition led by the Wampanoag leader Metacom, called King Philip by the English.",
    "memory": "Metacom, Wampanoag coalition, devastating New England war"
  },
  {
    "term": "Columbian Exchange",
    "category": "Encounter & Empire",
    "date": "after 1492",
    "summary": "The transatlantic exchange of plants, animals, diseases, peoples, and ideas between the Americas, Europe, and Africa after Columbus's voyages.",
    "memory": "crops, animals, disease, Atlantic exchange"
  },
  {
    "term": "New Amsterdam",
    "category": "Colonial Places & People",
    "date": "c. 1624–1664",
    "summary": "The Dutch colonial port on Manhattan that became New York after England seized it in 1664.",
    "memory": "Dutch Manhattan, trade port, renamed New York"
  },
  {
    "term": "William Penn",
    "category": "Colonial Places & People",
    "date": "Pennsylvania founded 1681",
    "summary": "The Quaker proprietor who founded Pennsylvania as a colony associated with religious toleration, representative government, and early diplomacy with Native peoples.",
    "memory": "Quaker, Pennsylvania, religious toleration"
  },
  {
    "term": "Olaudah Equiano",
    "category": "Labor & Colonial Society",
    "date": "autobiography published 1789",
    "summary": "A formerly enslaved author and abolitionist whose autobiography described enslavement, freedom, maritime life, and the Atlantic slave trade.",
    "memory": "abolitionist memoir, purchased freedom, Atlantic slavery"
  },
  {
    "term": "Stono Rebellion",
    "category": "Conflict & Resistance",
    "date": "1739",
    "summary": "A major uprising by enslaved people in South Carolina that prompted the colony to impose a harsher slave code in 1740.",
    "memory": "South Carolina, enslaved resistance, stricter slave laws"
  },
  {
    "term": "Task System/Gang System",
    "category": "Labor & Colonial Society",
    "date": "colonial plantation era",
    "summary": "Two plantation labor systems: the task system assigned a daily amount of work, while the gang system organized workers into closely supervised groups.",
    "memory": "daily task versus supervised labor crews"
  },
  {
    "term": "San Diego de Alcalá",
    "category": "Encounter & Empire",
    "date": "founded 1769",
    "summary": "The first Spanish mission established in Alta California, founded at San Diego as part of Spain's mission and colonization system.",
    "memory": "first Alta California mission, 1769, Spanish colonization"
  },
  {
    "term": "French and Indian War",
    "category": "Road to Revolution",
    "date": "1754–1763",
    "summary": "The North American theater of the Seven Years' War, ending in British victory over France but leaving Britain with debt and new imperial tensions.",
    "memory": "Britain versus France, North America, war debt"
  },
  {
    "term": "Pontiac's Rebellion",
    "category": "Conflict & Resistance",
    "date": "1763–1766",
    "summary": "A broad Native resistance movement around the Great Lakes against British forts, policies, and settler expansion after the French and Indian War.",
    "memory": "Great Lakes resistance, British forts, Pontiac"
  },
  {
    "term": "Proclamation of 1763",
    "category": "Road to Revolution",
    "date": "1763",
    "summary": "A British order restricting colonial settlement west of the Appalachian Mountains in an effort to reduce frontier warfare.",
    "memory": "Appalachian boundary, westward settlement restricted"
  },
  {
    "term": "Great Awakening",
    "category": "Religion & Ideas",
    "date": "1730s–1740s",
    "summary": "A wave of Protestant revivalism emphasizing emotional conversion, personal faith, and powerful itinerant preaching in the British Atlantic.",
    "memory": "revival, emotional preaching, personal conversion"
  },
  {
    "term": "Baptists",
    "category": "Religion & Ideas",
    "date": "colonial growth in the 1700s",
    "summary": "Protestant dissenters who emphasized believer's baptism, independent congregations, and religious liberty, gaining followers during revival movements.",
    "memory": "believer's baptism, dissent, religious liberty"
  },
  {
    "term": "Comanches",
    "category": "Indigenous Foundations",
    "date": "major Southern Plains power in the 1700s",
    "summary": "A Native nation that built a powerful horse-centered society and controlled a vast Southern Plains region often called Comanchería.",
    "memory": "horses, Southern Plains, Comanchería"
  },
  {
    "term": "Boston Massacre",
    "category": "Road to Revolution",
    "date": "1770",
    "summary": "A confrontation in Boston in which British soldiers killed five colonists, becoming a powerful Patriot propaganda symbol.",
    "memory": "five colonists killed, British soldiers, Patriot propaganda"
  },
  {
    "term": "Boston Tea Party",
    "category": "Road to Revolution",
    "date": "1773",
    "summary": "A protest against the Tea Act in which Patriots boarded ships and dumped East India Company tea into Boston Harbor.",
    "memory": "Tea Act protest, Boston Harbor, destroyed tea"
  }
];

const categoryIcons = {
  "Indigenous Foundations": "🏕️",
  "Encounter & Empire": "🧭",
  "Labor & Colonial Society": "⛓️",
  "Conflict & Resistance": "⚔️",
  "Religion & Ideas": "⛪",
  "Colonial Places & People": "🏘️",
  "Road to Revolution": "📜"
};

const views = document.querySelectorAll(".view");
const navButtons = document.querySelectorAll("[data-view-link]");
const mainNav = document.querySelector("#main-nav");
const menuButton = document.querySelector("#menu-button");

const masteredCount = document.querySelector("#mastered-count");
const masteryFill = document.querySelector("#mastery-fill");
const masteryMessage = document.querySelector("#mastery-message");
const bestExamScore = document.querySelector("#best-exam-score");
const celebrationLayer = document.querySelector("#celebration-layer");

let masteredTerms = new Set(
  JSON.parse(localStorage.getItem("berryHistoryMastered") || "[]")
);

let bestScore = Number(localStorage.getItem("berryHistoryBestExam") || 0);

const defaultProfile = {
  name: "History Hero",
  icon: "🍓",
  bio: "Ready to master every HIST 1301 key term.",
  photo: "",
  theme: "berry"
};

const defaultStudyStats = {
  flippedTerms: [],
  battlesCompleted: 0,
  battlesWon: 0,
  puzzlesCompleted: 0,
  examsCompleted: 0
};

const badgeDefinitions = [
  {
    id: "deck-explorer",
    icon: "📚",
    name: "Deck Explorer",
    task: "Flip 10 different Study Deck cards."
  },
  {
    id: "deck-scholar",
    icon: "🗂️",
    name: "Deck Scholar",
    task: "Flip all 30 Study Deck cards."
  },
  {
    id: "battle-finisher",
    icon: "⚔️",
    name: "Battle Finisher",
    task: "Complete one 12-question Berry Battle."
  },
  {
    id: "beast-defeater",
    icon: "👾",
    name: "Beast Defeater",
    task: "Win a Berry Battle with at least 8 correct answers and a heart remaining."
  },
  {
    id: "puzzle-solver",
    icon: "🧩",
    name: "Puzzle Solver",
    task: "Complete one six-term matching puzzle."
  },
  {
    id: "exam-finisher",
    icon: "⏱️",
    name: "Exam Finisher",
    task: "Complete one 25-question practice exam."
  },
  {
    id: "exam-ace",
    icon: "🏆",
    name: "Exam Ace",
    task: "Score at least 20 out of 25 on a practice exam."
  },
  {
    id: "master-historian",
    icon: "👑",
    name: "Master Historian",
    task: "Master all 30 key terms."
  }
];

function readLocalJson(key, fallback) {
  try {
    const rawValue = localStorage.getItem(key);

    return rawValue
      ? JSON.parse(rawValue)
      : fallback;
  } catch (error) {
    console.warn(`Could not read ${key}.`, error);
    return fallback;
  }
}

let userProfile = {
  ...defaultProfile,
  ...readLocalJson("berryHistoryProfile", {})
};

let studyStats = {
  ...defaultStudyStats,
  ...readLocalJson("berryHistoryStats", {})
};

studyStats.flippedTerms = Array.isArray(studyStats.flippedTerms)
  ? [...new Set(studyStats.flippedTerms)]
  : [];

let earnedBadges = readLocalJson("berryHistoryBadges", {});

let badgeToastQueue = [];
let badgeToastActive = false;
let pendingProfilePhoto = userProfile.photo;

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function unique(items) {
  return [...new Set(items)];
}

function saveProgress() {
  localStorage.setItem(
    "berryHistoryMastered",
    JSON.stringify([...masteredTerms])
  );

  localStorage.setItem(
    "berryHistoryBestExam",
    String(bestScore)
  );
}

function markMastered(termName) {
  masteredTerms.add(termName);
  saveProgress();
  updateDashboard();

  if (masteredTerms.size >= 30) {
    awardBadge("master-historian");
  }

  renderProfilePage();
}

function updateDashboard() {
  masteredCount.textContent = String(masteredTerms.size);
  masteryFill.style.width =
    `${(masteredTerms.size / historyTerms.length) * 100}%`;

  if (masteredTerms.size === 0) {
    masteryMessage.textContent =
      "Master terms by answering correctly in any mode.";
  } else if (masteredTerms.size < 10) {
    masteryMessage.textContent =
      "Your history garden has started growing. Keep battling!";
  } else if (masteredTerms.size < 25) {
    masteryMessage.textContent =
      "Strong progress—your key-term map is filling in.";
  } else if (masteredTerms.size < 30) {
    masteryMessage.textContent =
      "Almost every term is mastered. Finish the final few!";
  } else {
    masteryMessage.textContent =
      "All 30 terms mastered. BerryBelle is extremely impressed.";
  }

  bestExamScore.textContent =
    bestScore > 0
      ? `${bestScore} / 25 (${Math.round((bestScore / 25) * 100)}%)`
      : "No attempt yet";
}

function showView(name) {
  views.forEach((view) => {
    const isActive = view.dataset.view === name;
    view.hidden = !isActive;
    view.classList.toggle("active", isActive);
  });

  document
    .querySelectorAll(".main-nav button")
    .forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.viewLink === name
      );
    });

  mainNav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (name === "study") renderStudyDeck();
  if (name === "match" && !matchTerms.length) startMatchPuzzle();
  if (name === "profile") renderProfilePage();
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showView(button.dataset.viewLink);
  });
});

menuButton.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

function pickDistractors(correctTerm, field, count = 3) {
  const sameCategory = historyTerms.filter(
    (item) =>
      item.term !== correctTerm.term &&
      item.category === correctTerm.category
  );

  const others = historyTerms.filter(
    (item) => item.term !== correctTerm.term
  );

  const candidates = unique([
    ...shuffle(sameCategory),
    ...shuffle(others)
  ].map((item) => item[field]));

  return candidates.slice(0, count);
}

function createQuestion(term, index = 0) {
  const mode = index % 3;

  if (mode === 0) {
    return {
      type: "Definition → term",
      prompt: `Which key term matches this description?\n\n${term.summary}`,
      answer: term.term,
      options: shuffle([
        term.term,
        ...pickDistractors(term, "term")
      ]),
      term
    };
  }

  if (mode === 1) {
    return {
      type: "Term → definition",
      prompt: `Which description best explains “${term.term}”?`,
      answer: term.summary,
      options: shuffle([
        term.summary,
        ...pickDistractors(term, "summary")
      ]),
      term
    };
  }

  return {
    type: "Date + memory hook",
    prompt:
      `Which term belongs with ${term.date} and this memory hook?\n\n${term.memory}`,
    answer: term.term,
    options: shuffle([
      term.term,
      ...pickDistractors(term, "term")
    ]),
    term
  };
}

function buildQuestionSet(count) {
  return shuffle(historyTerms)
    .slice(0, count)
    .map((term, index) => createQuestion(term, index));
}

function celebrate(amount = 28) {
  const icons = ["🍓", "✨", "⭐", "📜", "🫐", "🎉"];

  for (let index = 0; index < amount; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = icons[index % icons.length];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.animationDelay = `${Math.random() * .45}s`;
    piece.style.fontSize = `${1 + Math.random() * 1.5}rem`;

    celebrationLayer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 2700);
  }
}

/* ---------------- STUDY DECK ---------------- */

const flashcardGrid = document.querySelector("#flashcard-grid");
const studySearch = document.querySelector("#study-search");
const studyFilters = document.querySelector("#study-filters");
const shuffleStudyButton = document.querySelector("#shuffle-study");

let activeStudyFilter = "All";
let studyOrder = [...historyTerms];
let studyCardResizeTimer = null;


function fitStudyCards() {
  window.requestAnimationFrame(() => {
    const cards = [...flashcardGrid.querySelectorAll(".flashcard")];

    if (!cards.length) return;

    /*
      Start from the same baseline so every card is measured fairly.
      scrollHeight still reports all of the content even though the
      card faces use overflow: hidden.
    */
    cards.forEach((card) => {
      card.style.height = "390px";
    });

    window.requestAnimationFrame(() => {
      let requiredHeight = 390;

      cards.forEach((card) => {
        const faces = card.querySelectorAll(".flashcard-face");

        faces.forEach((face) => {
          requiredHeight = Math.max(
            requiredHeight,
            face.scrollHeight + 8
          );
        });
      });

      /*
        Round upward for consistent rendering and add a little breathing room.
      */
      const finalHeight =
        Math.ceil((requiredHeight + 12) / 10) * 10;

      cards.forEach((card) => {
        card.style.height = `${finalHeight}px`;
      });
    });
  });
}

function scheduleStudyCardFit() {
  window.clearTimeout(studyCardResizeTimer);

  studyCardResizeTimer = window.setTimeout(() => {
    fitStudyCards();
  }, 120);
}

function renderStudyFilters() {
  const categories = ["All", ...unique(historyTerms.map((item) => item.category))];
  studyFilters.innerHTML = "";

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent =
      category === "All"
        ? "🍓 All"
        : `${categoryIcons[category] || "📚"} ${category}`;

    button.classList.toggle("active", activeStudyFilter === category);

    button.addEventListener("click", () => {
      activeStudyFilter = category;
      renderStudyFilters();
      renderStudyDeck();
    });

    studyFilters.appendChild(button);
  });
}

function renderStudyDeck() {
  const query = studySearch.value.trim().toLowerCase();

  const visible = studyOrder.filter((item) => {
    const matchesFilter =
      activeStudyFilter === "All" ||
      item.category === activeStudyFilter;

    const matchesSearch =
      item.term.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.memory.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });

  flashcardGrid.innerHTML = "";

  visible.forEach((item) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "flashcard";
    card.setAttribute("aria-label", `Flip flashcard for ${item.term}`);

    card.innerHTML = `
      <span class="flashcard-inner">
        <span class="flashcard-face flashcard-front">
          <span class="flashcard-category">
            ${categoryIcons[item.category] || "📚"} ${item.category}
          </span>
          <h2>${item.term}</h2>
          <span class="flashcard-date">${item.date}</span>
          <span class="flip-hint">Tap to reveal the study note</span>
        </span>

        <span class="flashcard-face flashcard-back">
          <span class="flashcard-category">${item.date}</span>
          <h3>${item.term}</h3>
          <p>${item.summary}</p>
          <p class="memory-hook">
            <strong>Memory hook:</strong> ${item.memory}
          </p>
          <span class="mastered-label">
            ${masteredTerms.has(item.term) ? "✅ Mastered" : "Keep practicing"}
          </span>
        </span>
      </span>
    `;

    card.addEventListener("click", () => {
      const revealingBack = !card.classList.contains("flipped");
      card.classList.toggle("flipped");

      if (revealingBack) {
        recordStudyCardFlip(item.term);
      }
    });

    flashcardGrid.appendChild(card);
  });

  if (!visible.length) {
    flashcardGrid.innerHTML =
      '<p class="panel empty-state">No terms matched that search.</p>';
  }

  fitStudyCards();
}

studySearch.addEventListener("input", renderStudyDeck);

shuffleStudyButton.addEventListener("click", () => {
  studyOrder = shuffle(studyOrder);
  renderStudyDeck();
});

/* ---------------- BATTLE ---------------- */

const startBattleButton = document.querySelector("#start-battle");
const battleWelcome = document.querySelector("#battle-welcome");
const battleGame = document.querySelector("#battle-game");
const battleResults = document.querySelector("#battle-results");
const battleHearts = document.querySelector("#battle-hearts");
const battleScoreText = document.querySelector("#battle-score");
const battleStreakText = document.querySelector("#battle-streak");
const enemyHealthFill = document.querySelector("#enemy-health-fill");
const battleProgressText = document.querySelector("#battle-progress-text");
const battleProgressFill = document.querySelector("#battle-progress-fill");
const battleQuestionType = document.querySelector("#battle-question-type");
const battleQuestion = document.querySelector("#battle-question");
const battleOptions = document.querySelector("#battle-options");
const battleFeedback = document.querySelector("#battle-feedback");
const battleNext = document.querySelector("#battle-next");

let battleQuestions = [];
let battleIndex = 0;
let battleScore = 0;
let battleLives = 3;
let battleStreak = 0;
let battleAnswered = false;

function startBattle() {
  battleQuestions = buildQuestionSet(12);
  battleIndex = 0;
  battleScore = 0;
  battleLives = 3;
  battleStreak = 0;
  battleAnswered = false;

  battleWelcome.hidden = true;
  battleResults.hidden = true;
  battleGame.hidden = false;

  renderBattleQuestion();
}

function renderBattleQuestion() {
  if (
    battleLives <= 0 ||
    battleIndex >= battleQuestions.length
  ) {
    finishBattle();
    return;
  }

  const question = battleQuestions[battleIndex];

  battleAnswered = false;
  battleNext.hidden = true;
  battleFeedback.textContent = "";
  battleFeedback.className = "feedback";

  battleHearts.textContent =
    Array.from({ length: 3 }, (_, index) =>
      index < battleLives ? "❤️" : "🖤"
    ).join(" ");

  battleScoreText.textContent = String(battleScore);
  battleStreakText.textContent = String(battleStreak);

  enemyHealthFill.style.width =
    `${Math.max(0, ((12 - battleScore) / 12) * 100)}%`;

  battleProgressText.textContent =
    `Question ${battleIndex + 1} of ${battleQuestions.length}`;

  battleProgressFill.style.width =
    `${(battleIndex / battleQuestions.length) * 100}%`;

  battleQuestionType.textContent = question.type;
  battleQuestion.textContent = question.prompt;
  battleOptions.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = option;

    button.addEventListener("click", () => {
      answerBattle(button, option);
    });

    battleOptions.appendChild(button);
  });
}

function answerBattle(button, option) {
  if (battleAnswered) return;
  battleAnswered = true;

  const question = battleQuestions[battleIndex];
  const correct = option === question.answer;

  battleOptions
    .querySelectorAll(".option-button")
    .forEach((optionButton) => {
      optionButton.disabled = true;

      if (optionButton.textContent === question.answer) {
        optionButton.classList.add("correct");
      }
    });

  if (correct) {
    button.classList.add("correct");
    battleScore += 1;
    battleStreak += 1;
    markMastered(question.term.term);

    battleFeedback.textContent =
      `Direct hit! ${question.term.term} is correct.`;

    battleFeedback.className = "feedback correct";

    if (battleStreak >= 3) celebrate(8);
  } else {
    button.classList.add("wrong");
    battleLives -= 1;
    battleStreak = 0;

    battleFeedback.textContent =
      `The correct answer is ${question.answer}. Memory hook: ${question.term.memory}`;

    battleFeedback.className = "feedback wrong";
  }

  battleScoreText.textContent = String(battleScore);
  battleStreakText.textContent = String(battleStreak);
  battleNext.hidden = false;
}

function finishBattle() {
  battleGame.hidden = true;
  battleResults.hidden = false;

  const won =
    battleScore >= 8 &&
    battleLives > 0;

  studyStats.battlesCompleted += 1;
  awardBadge("battle-finisher");

  if (won) {
    studyStats.battlesWon += 1;
    awardBadge("beast-defeater");
    celebrate();
  }

  saveStudyStats();
  renderProfilePage();

  battleResults.innerHTML = `
    <span class="results-score">${battleScore} / 12</span>
    <h2>${won ? "The Forget-Me-Not Beast has been defeated!" : "The beast escaped this round."}</h2>
    <p>
      ${battleScore >= 10
        ? "Excellent recall. Your key-term armor is sparkling."
        : battleScore >= 7
          ? "Solid progress. Review the missed memory hooks and battle again."
          : "Use the Study Deck, then return for a rematch."}
    </p>
    <button class="button button-primary" id="battle-rematch" type="button">
      Battle again
    </button>
  `;

  document
    .querySelector("#battle-rematch")
    .addEventListener("click", startBattle);
}

startBattleButton.addEventListener("click", startBattle);

battleNext.addEventListener("click", () => {
  battleIndex += 1;
  renderBattleQuestion();
});

/* ---------------- MATCH PUZZLE ---------------- */

const newMatchPuzzleButton = document.querySelector("#new-match-puzzle");
const matchScoreText = document.querySelector("#match-score");
const matchMessage = document.querySelector("#match-message");
const matchTermsContainer = document.querySelector("#match-terms");
const matchDefinitionsContainer =
  document.querySelector("#match-definitions");

let matchTerms = [];
let matchedNames = new Set();
let selectedMatchTile = null;
let draggedMatchName = null;

function startMatchPuzzle() {
  matchTerms = shuffle(historyTerms).slice(0, 6);
  matchedNames = new Set();
  selectedMatchTile = null;
  draggedMatchName = null;

  renderMatchPuzzle();
}

function renderMatchPuzzle() {
  matchScoreText.textContent =
    `${matchedNames.size} of 6 matched`;

  matchMessage.textContent =
    matchedNames.size === 6
      ? "Puzzle complete! Every term found its definition."
      : "Choose a term to begin.";

  matchTermsContainer.innerHTML = "";
  matchDefinitionsContainer.innerHTML = "";

  shuffle(matchTerms).forEach((term) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "match-term";
    tile.textContent =
      `${categoryIcons[term.category] || "📚"} ${term.term}`;

    tile.dataset.term = term.term;
    tile.draggable = true;
    tile.classList.toggle(
      "matched",
      matchedNames.has(term.term)
    );

    tile.disabled = matchedNames.has(term.term);

    tile.addEventListener("click", () => {
      if (tile.disabled) return;

      if (selectedMatchTile && selectedMatchTile !== tile) {
        selectedMatchTile.classList.remove("selected");
      }

      selectedMatchTile =
        selectedMatchTile === tile ? null : tile;

      tile.classList.toggle(
        "selected",
        selectedMatchTile === tile
      );

      matchMessage.textContent =
        selectedMatchTile
          ? `${term.term} selected. Choose its definition.`
          : "Term deselected.";
    });

    tile.addEventListener("dragstart", (event) => {
      draggedMatchName = term.term;
      event.dataTransfer.setData("text/plain", term.term);
    });

    matchTermsContainer.appendChild(tile);
  });

  shuffle(matchTerms).forEach((term) => {
    const definition = document.createElement("button");
    definition.type = "button";
    definition.className = "match-definition";
    definition.textContent = term.summary;
    definition.dataset.term = term.term;

    definition.classList.toggle(
      "matched",
      matchedNames.has(term.term)
    );

    definition.disabled = matchedNames.has(term.term);

    definition.addEventListener("dragover", (event) => {
      event.preventDefault();
      definition.classList.add("drag-over");
    });

    definition.addEventListener("dragleave", () => {
      definition.classList.remove("drag-over");
    });

    definition.addEventListener("drop", (event) => {
      event.preventDefault();
      definition.classList.remove("drag-over");

      const name =
        event.dataTransfer.getData("text/plain") ||
        draggedMatchName;

      tryMatch(name, definition);
    });

    definition.addEventListener("click", () => {
      if (!selectedMatchTile) {
        matchMessage.textContent =
          "Select a term tile first.";
        return;
      }

      tryMatch(
        selectedMatchTile.dataset.term,
        definition
      );
    });

    matchDefinitionsContainer.appendChild(definition);
  });

  if (matchedNames.size === 6) {
    celebrate();
  }
}

function tryMatch(termName, definitionElement) {
  const correctName = definitionElement.dataset.term;

  if (termName === correctName) {
    matchedNames.add(termName);
    markMastered(termName);
    selectedMatchTile = null;

    matchMessage.textContent =
      `${termName} matched correctly!`;

    if (matchedNames.size === 6) {
      studyStats.puzzlesCompleted += 1;
      saveStudyStats();
      awardBadge("puzzle-solver");
      renderProfilePage();
    }

    renderMatchPuzzle();
    return;
  }

  definitionElement.classList.remove("wrong-shake");
  void definitionElement.offsetWidth;
  definitionElement.classList.add("wrong-shake");

  matchMessage.textContent =
    "Not that definition—try another one.";

  window.setTimeout(
    () => definitionElement.classList.remove("wrong-shake"),
    450
  );
}

newMatchPuzzleButton.addEventListener(
  "click",
  startMatchPuzzle
);

/* ---------------- EXAM SIMULATOR ---------------- */

const examIntro = document.querySelector("#exam-intro");
const examActive = document.querySelector("#exam-active");
const examResults = document.querySelector("#exam-results");
const startExamButton = document.querySelector("#start-exam");
const examQuestionNumber =
  document.querySelector("#exam-question-number");
const examProgressFill =
  document.querySelector("#exam-progress-fill");
const examTimer = document.querySelector("#exam-timer");
const examQuestionType =
  document.querySelector("#exam-question-type");
const examQuestion = document.querySelector("#exam-question");
const examOptions = document.querySelector("#exam-options");
const examSelectionMessage =
  document.querySelector("#exam-selection-message");
const examNext = document.querySelector("#exam-next");

let examQuestions = [];
let examIndex = 0;
let examAnswers = [];
let examSelected = null;
let examTimeLeft = 1800;
let examTimerId = null;
let examSubmitted = false;

function startExam() {
  window.clearInterval(examTimerId);

  examQuestions = buildQuestionSet(25);
  examIndex = 0;
  examAnswers = [];
  examSelected = null;
  examTimeLeft = 1800;
  examSubmitted = false;

  examIntro.hidden = true;
  examResults.hidden = true;
  examActive.hidden = false;

  examTimerId = window.setInterval(() => {
    examTimeLeft -= 1;
    renderExamTimer();

    if (examTimeLeft <= 0) {
      finishExam(true);
    }
  }, 1000);

  renderExamTimer();
  renderExamQuestion();
}

function renderExamTimer() {
  const minutes = Math.floor(examTimeLeft / 60);
  const seconds = examTimeLeft % 60;

  examTimer.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  examTimer.classList.toggle(
    "warning",
    examTimeLeft <= 300
  );
}

function renderExamQuestion() {
  const question = examQuestions[examIndex];

  examSelected = null;
  examNext.disabled = true;
  examSelectionMessage.textContent =
    "Select one answer.";

  examQuestionNumber.textContent =
    `Question ${examIndex + 1} of 25`;

  examProgressFill.style.width =
    `${(examIndex / 25) * 100}%`;

  examQuestionType.textContent = question.type;
  examQuestion.textContent = question.prompt;
  examOptions.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = option;

    button.addEventListener("click", () => {
      examSelected = option;

      examOptions
        .querySelectorAll(".option-button")
        .forEach((optionButton) => {
          optionButton.classList.toggle(
            "selected",
            optionButton === button
          );
        });

      examNext.disabled = false;
      examSelectionMessage.textContent =
        "Answer selected. Save it when ready.";
    });

    examOptions.appendChild(button);
  });

  examNext.textContent =
    examIndex === 24
      ? "Submit practice exam"
      : "Save answer and continue";
}

function saveExamAnswer() {
  if (examSelected === null) return;

  const question = examQuestions[examIndex];

  examAnswers.push({
    prompt: question.prompt,
    selected: examSelected,
    answer: question.answer,
    correct: examSelected === question.answer,
    term: question.term
  });

  if (examSelected === question.answer) {
    markMastered(question.term.term);
  }

  examIndex += 1;

  if (examIndex >= 25) {
    finishExam(false);
  } else {
    renderExamQuestion();
  }
}

function finishExam(timeExpired) {
  if (examSubmitted) return;
  examSubmitted = true;

  window.clearInterval(examTimerId);
  examTimerId = null;

  while (examAnswers.length < 25) {
    const question = examQuestions[examAnswers.length];

    examAnswers.push({
      prompt: question.prompt,
      selected: "No answer",
      answer: question.answer,
      correct: false,
      term: question.term
    });
  }

  const score =
    examAnswers.filter((answer) => answer.correct).length;

  studyStats.examsCompleted += 1;
  saveStudyStats();
  awardBadge("exam-finisher");

  if (score >= 20) {
    awardBadge("exam-ace");
  }

  renderProfilePage();

  if (score > bestScore) {
    bestScore = score;
    saveProgress();
    updateDashboard();
  }

  examActive.hidden = true;
  examResults.hidden = false;

  if (score >= 20) celebrate(42);

  const reviewHtml =
    examAnswers.map((answer, index) => `
      <article class="review-item ${answer.correct ? "correct" : "wrong"}">
        <p><strong>${index + 1}. ${answer.term.term}</strong></p>
        <p>Your answer: ${answer.selected}</p>
        <p>Correct answer: ${answer.answer}</p>
        ${answer.correct
          ? ""
          : `<p><strong>Memory hook:</strong> ${answer.term.memory}</p>`}
      </article>
    `).join("");

  examResults.innerHTML = `
    <span class="results-score">${score} / 25</span>
    <h2>
      ${timeExpired
        ? "Time expired—your practice exam was submitted."
        : "Practice exam complete!"}
    </h2>
    <p>
      ${score >= 23
        ? "Excellent. You are recalling the terms with strong accuracy."
        : score >= 20
          ? "Very good. Review the few misses and try once more."
          : score >= 15
            ? "You have a foundation. Focus on the memory hooks below."
            : "Return to the Study Deck and Match Puzzle before another timed attempt."}
    </p>

    <div>
      <button class="button button-primary" id="retake-exam" type="button">
        Retake the practice exam
      </button>
      <button class="button button-secondary" id="review-study-deck" type="button">
        Open the Study Deck
      </button>
    </div>

    <h3>Answer review</h3>
    <div class="review-list">${reviewHtml}</div>
  `;

  document
    .querySelector("#retake-exam")
    .addEventListener("click", startExam);

  document
    .querySelector("#review-study-deck")
    .addEventListener("click", () => showView("study"));
}

startExamButton.addEventListener("click", startExam);
examNext.addEventListener("click", saveExamAnswer);


/* ---------------- PROFILE + BADGES ---------------- */

const profileForm = document.querySelector("#profile-form");
const profileNameInput = document.querySelector("#profile-name-input");
const profileBioInput = document.querySelector("#profile-bio-input");
const bioCharacterCount = document.querySelector("#bio-character-count");
const profilePhotoInput = document.querySelector("#profile-photo-input");
const removeProfilePhotoButton =
  document.querySelector("#remove-profile-photo");
const resetProfileButton = document.querySelector("#reset-profile");
const profileSaveState = document.querySelector("#profile-save-state");

const navProfilePhoto = document.querySelector("#nav-profile-photo");
const navProfileIcon = document.querySelector("#nav-profile-icon");
const navProfileName = document.querySelector("#nav-profile-name");

const profilePhotoPreview =
  document.querySelector("#profile-photo-preview");
const profileIconPreview =
  document.querySelector("#profile-icon-preview");
const profileNamePreview =
  document.querySelector("#profile-name-preview");
const profileBioPreview =
  document.querySelector("#profile-bio-preview");
const profileRibbonIcon =
  document.querySelector("#profile-ribbon-icon");

const profileMasteredStat =
  document.querySelector("#profile-mastered-stat");
const profileExamStat =
  document.querySelector("#profile-exam-stat");
const profileCardStat =
  document.querySelector("#profile-card-stat");
const profileBadgeStat =
  document.querySelector("#profile-badge-stat");
const profileMasteryPercent =
  document.querySelector("#profile-mastery-percent");
const profileBadgePercent =
  document.querySelector("#profile-badge-percent");
const profileMasteryFill =
  document.querySelector("#profile-mastery-fill");
const profileBadgeFill =
  document.querySelector("#profile-badge-fill");
const badgeGrid = document.querySelector("#badge-grid");

const badgeToast = document.querySelector("#badge-toast");
const badgeToastIcon = document.querySelector("#badge-toast-icon");
const badgeToastName = document.querySelector("#badge-toast-name");

function saveStudyStats() {
  try {
    localStorage.setItem(
      "berryHistoryStats",
      JSON.stringify(studyStats)
    );
  } catch (error) {
    console.warn("Could not save study task statistics.", error);
  }
}

function saveBadgeState() {
  try {
    localStorage.setItem(
      "berryHistoryBadges",
      JSON.stringify(earnedBadges)
    );
  } catch (error) {
    console.warn("Could not save badges.", error);
  }
}

function saveProfileState() {
  try {
    localStorage.setItem(
      "berryHistoryProfile",
      JSON.stringify(userProfile)
    );

    profileSaveState.textContent =
      "Profile saved successfully!";
    profileSaveState.className = "save-state saved";
  } catch (error) {
    console.error("Could not save profile.", error);

    profileSaveState.textContent =
      "The profile could not be saved. Try a smaller picture.";
    profileSaveState.className = "save-state error";
  }
}

function getBadgeDefinition(badgeId) {
  return badgeDefinitions.find((badge) => badge.id === badgeId);
}

function awardBadge(badgeId, options = {}) {
  const badge = getBadgeDefinition(badgeId);

  if (!badge || earnedBadges[badgeId]) return false;

  earnedBadges[badgeId] = new Date().toISOString();
  saveBadgeState();
  renderProfilePage();

  if (!options.silent) {
    badgeToastQueue.push(badge);
    processBadgeToastQueue();
    celebrate(16);
  }

  return true;
}

function processBadgeToastQueue() {
  if (badgeToastActive || !badgeToastQueue.length) return;

  badgeToastActive = true;
  const badge = badgeToastQueue.shift();

  badgeToastIcon.textContent = badge.icon;
  badgeToastName.textContent = badge.name;
  badgeToast.hidden = false;

  window.setTimeout(() => {
    badgeToast.hidden = true;
    badgeToastActive = false;
    processBadgeToastQueue();
  }, 3400);
}

function recordStudyCardFlip(termName) {
  if (!studyStats.flippedTerms.includes(termName)) {
    studyStats.flippedTerms.push(termName);
    saveStudyStats();

    if (studyStats.flippedTerms.length >= 10) {
      awardBadge("deck-explorer");
    }

    if (studyStats.flippedTerms.length >= 30) {
      awardBadge("deck-scholar");
    }

    renderProfilePage();
  }
}

function reconcileCompletedTasks() {
  if (studyStats.flippedTerms.length >= 10) {
    awardBadge("deck-explorer", { silent: true });
  }

  if (studyStats.flippedTerms.length >= 30) {
    awardBadge("deck-scholar", { silent: true });
  }

  if (studyStats.battlesCompleted >= 1) {
    awardBadge("battle-finisher", { silent: true });
  }

  if (studyStats.battlesWon >= 1) {
    awardBadge("beast-defeater", { silent: true });
  }

  if (studyStats.puzzlesCompleted >= 1) {
    awardBadge("puzzle-solver", { silent: true });
  }

  if (studyStats.examsCompleted >= 1 || bestScore > 0) {
    awardBadge("exam-finisher", { silent: true });
  }

  if (bestScore >= 20) {
    awardBadge("exam-ace", { silent: true });
  }

  if (masteredTerms.size >= 30) {
    awardBadge("master-historian", { silent: true });
  }
}

function applyProfileTheme() {
  const validThemes = [
    "berry",
    "lavender",
    "sunshine",
    "mint",
    "blueberry"
  ];

  if (!validThemes.includes(userProfile.theme)) {
    userProfile.theme = "berry";
  }

  document.body.dataset.profileTheme = userProfile.theme;
}

function setAvatarDisplay(photoElement, iconElement, photoValue, iconValue) {
  const hasPhoto = Boolean(photoValue);

  photoElement.hidden = !hasPhoto;
  iconElement.hidden = hasPhoto;

  if (hasPhoto) {
    photoElement.src = photoValue;
  } else {
    photoElement.removeAttribute("src");
    iconElement.textContent = iconValue;
  }
}

function updateProfilePreviewFromInputs() {
  const draftName =
    profileNameInput.value.trim() ||
    "History Hero";

  const draftBio =
    profileBioInput.value.trim() ||
    "Ready to master every HIST 1301 key term.";

  profileNamePreview.textContent = draftName;
  profileBioPreview.textContent = draftBio;
  bioCharacterCount.textContent =
    String(profileBioInput.value.length);
}

function renderProfilePage() {
  applyProfileTheme();

  profileNameInput.value = userProfile.name;
  profileBioInput.value = userProfile.bio;
  bioCharacterCount.textContent =
    String(userProfile.bio.length);

  profileNamePreview.textContent =
    userProfile.name || "History Hero";

  profileBioPreview.textContent =
    userProfile.bio ||
    "Ready to master every HIST 1301 key term.";

  profileRibbonIcon.textContent = userProfile.icon;
  navProfileName.textContent = userProfile.name || "Profile";

  setAvatarDisplay(
    profilePhotoPreview,
    profileIconPreview,
    pendingProfilePhoto,
    userProfile.icon
  );

  setAvatarDisplay(
    navProfilePhoto,
    navProfileIcon,
    userProfile.photo,
    userProfile.icon
  );

  document
    .querySelectorAll("[data-profile-icon]")
    .forEach((button) => {
      button.classList.toggle(
        "selected",
        button.dataset.profileIcon === userProfile.icon
      );
    });

  document
    .querySelectorAll("[data-profile-theme]")
    .forEach((button) => {
      button.classList.toggle(
        "selected",
        button.dataset.profileTheme === userProfile.theme
      );
    });

  removeProfilePhotoButton.disabled = !pendingProfilePhoto;

  const masteredAmount = masteredTerms.size;
  const flippedAmount = studyStats.flippedTerms.length;
  const earnedAmount = Object.keys(earnedBadges).length;
  const masteryPercentage =
    Math.round((masteredAmount / historyTerms.length) * 100);
  const badgePercentage =
    Math.round((earnedAmount / badgeDefinitions.length) * 100);

  profileMasteredStat.textContent =
    `${masteredAmount} / ${historyTerms.length}`;

  profileExamStat.textContent =
    bestScore > 0
      ? `${bestScore} / 25`
      : "No attempt";

  profileCardStat.textContent =
    `${flippedAmount} / ${historyTerms.length}`;

  profileBadgeStat.textContent =
    `${earnedAmount} / ${badgeDefinitions.length}`;

  profileMasteryPercent.textContent =
    `${masteryPercentage}%`;

  profileBadgePercent.textContent =
    `${badgePercentage}%`;

  profileMasteryFill.style.width =
    `${masteryPercentage}%`;

  profileBadgeFill.style.width =
    `${badgePercentage}%`;

  renderBadgeGrid();
}

function renderBadgeGrid() {
  badgeGrid.innerHTML = "";

  badgeDefinitions.forEach((badge) => {
    const earnedDate = earnedBadges[badge.id];
    const card = document.createElement("article");

    card.className = "badge-card";
    card.classList.toggle("earned", Boolean(earnedDate));

    const formattedDate = earnedDate
      ? new Date(earnedDate).toLocaleDateString()
      : "";

    card.innerHTML = `
      <span class="badge-card-icon" aria-hidden="true">${badge.icon}</span>
      <h3>${badge.name}</h3>
      <p>${badge.task}</p>
      <span class="badge-state">
        ${earnedDate ? "Earned" : "Locked"}
      </span>
      ${
        earnedDate
          ? `<span class="badge-earned-date">Earned ${formattedDate}</span>`
          : ""
      }
    `;

    badgeGrid.appendChild(card);
  });
}

function resizeProfileImage(file) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("image/")) {
      reject(new Error("Please choose an image file."));
      return;
    }

    if (file.size > 7 * 1024 * 1024) {
      reject(new Error("Please choose an image smaller than 7 MB."));
      return;
    }

    const reader = new FileReader();

    reader.onerror = () => {
      reject(new Error("The picture could not be read."));
    };

    reader.onload = () => {
      const image = new Image();

      image.onerror = () => {
        reject(new Error("The picture could not be opened."));
      };

      image.onload = () => {
        const size = 360;
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = size;
        canvas.height = size;

        const cropSize = Math.min(
          image.naturalWidth,
          image.naturalHeight
        );

        const sourceX =
          (image.naturalWidth - cropSize) / 2;

        const sourceY =
          (image.naturalHeight - cropSize) / 2;

        context.drawImage(
          image,
          sourceX,
          sourceY,
          cropSize,
          cropSize,
          0,
          0,
          size,
          size
        );

        resolve(canvas.toDataURL("image/jpeg", .82));
      };

      image.src = reader.result;
    };

    reader.readAsDataURL(file);
  });
}

profileNameInput.addEventListener(
  "input",
  updateProfilePreviewFromInputs
);

profileBioInput.addEventListener(
  "input",
  updateProfilePreviewFromInputs
);

document
  .querySelectorAll("[data-profile-icon]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      userProfile.icon = button.dataset.profileIcon;
      profileIconPreview.textContent = userProfile.icon;
      profileRibbonIcon.textContent = userProfile.icon;

      document
        .querySelectorAll("[data-profile-icon]")
        .forEach((iconButton) => {
          iconButton.classList.toggle(
            "selected",
            iconButton === button
          );
        });
    });
  });

document
  .querySelectorAll("[data-profile-theme]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      userProfile.theme = button.dataset.profileTheme;
      applyProfileTheme();

      document
        .querySelectorAll("[data-profile-theme]")
        .forEach((themeButton) => {
          themeButton.classList.toggle(
            "selected",
            themeButton === button
          );
        });

      profileSaveState.textContent =
        "Background previewed. Save Profile to keep it.";
      profileSaveState.className = "save-state";
    });
  });

profilePhotoInput.addEventListener("change", async () => {
  const [file] = profilePhotoInput.files;

  if (!file) return;

  profileSaveState.textContent =
    "Preparing profile picture…";
  profileSaveState.className = "save-state";

  try {
    pendingProfilePhoto =
      await resizeProfileImage(file);

    setAvatarDisplay(
      profilePhotoPreview,
      profileIconPreview,
      pendingProfilePhoto,
      userProfile.icon
    );

    removeProfilePhotoButton.disabled = false;

    profileSaveState.textContent =
      "Picture ready. Save Profile to keep it.";
  } catch (error) {
    profileSaveState.textContent = error.message;
    profileSaveState.className = "save-state error";
  } finally {
    profilePhotoInput.value = "";
  }
});

removeProfilePhotoButton.addEventListener("click", () => {
  pendingProfilePhoto = "";

  setAvatarDisplay(
    profilePhotoPreview,
    profileIconPreview,
    pendingProfilePhoto,
    userProfile.icon
  );

  removeProfilePhotoButton.disabled = true;
  profileSaveState.textContent =
    "Picture removed. Save Profile to keep the change.";
  profileSaveState.className = "save-state";
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  userProfile.name =
    profileNameInput.value.trim() ||
    defaultProfile.name;

  userProfile.bio =
    profileBioInput.value.trim() ||
    defaultProfile.bio;

  userProfile.photo = pendingProfilePhoto;
  saveProfileState();
  renderProfilePage();
});

resetProfileButton.addEventListener("click", () => {
  userProfile = { ...defaultProfile };
  pendingProfilePhoto = "";
  saveProfileState();
  renderProfilePage();

  profileSaveState.textContent =
    "Profile reset to the Berry Vibes defaults.";
  profileSaveState.className = "save-state saved";
});


/* ---------------- SOURCES ---------------- */

const sourcesDialog = document.querySelector("#sources-dialog");
const openSources = document.querySelector("#open-sources");
const closeSources = document.querySelector("#close-sources");

openSources.addEventListener("click", () => {
  sourcesDialog.showModal();
});

closeSources.addEventListener("click", () => {
  sourcesDialog.close();
});

sourcesDialog.addEventListener("click", (event) => {
  const bounds = sourcesDialog.getBoundingClientRect();

  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (outside) sourcesDialog.close();
});

/* ---------------- INITIALIZE ---------------- */

renderStudyFilters();
renderStudyDeck();
updateDashboard();
reconcileCompletedTasks();
renderProfilePage();

window.addEventListener("resize", scheduleStudyCardFit);

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(fitStudyCards);
}
