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
      card.classList.toggle("flipped");
    });

    flashcardGrid.appendChild(card);
  });

  if (!visible.length) {
    flashcardGrid.innerHTML =
      '<p class="panel empty-state">No terms matched that search.</p>';
  }
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

  if (won) celebrate();

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

function startExam() {
  window.clearInterval(examTimerId);

  examQuestions = buildQuestionSet(25);
  examIndex = 0;
  examAnswers = [];
  examSelected = null;
  examTimeLeft = 1800;

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
