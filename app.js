const levelConfig = {
  1: { label: "Level 1", unlockAfter: 6, nextLevel: 2 },
  2: { label: "Level 2", unlockAfter: 6, nextLevel: 3 },
  3: { label: "Level 3", unlockAfter: null, nextLevel: null }
};

const state = {
  currentLevel: 1,
  unlockedLevels: new Set([1]),
  correctByLevel: { 1: 0, 2: 0, 3: 0 },
  levelQueues: { 1: [], 2: [], 3: [] },
  currentQuestion: null,
  selectedChoiceIndex: null,
  answeredCorrectlyCurrent: false
};

const el = {
  levelButtons: Array.from(document.querySelectorAll(".level-btn")),
  currentLevelLabel: document.getElementById("current-level-label"),
  levelCorrectCount: document.getElementById("level-correct-count"),
  unlockProgress: document.getElementById("unlock-progress"),
  teacherMode: document.getElementById("teacher-mode"),
  questionMeta: document.getElementById("question-meta"),
  prompt: document.getElementById("prompt"),
  context: document.getElementById("context"),
  choicesForm: document.getElementById("choices-form"),
  checkBtn: document.getElementById("check-btn"),
  nextBtn: document.getElementById("next-btn"),
  incorrectPanel: document.getElementById("incorrect-feedback"),
  wrongAnswer: document.getElementById("wrong-answer"),
  hintText: document.getElementById("hint-text"),
  wrongWhy: document.getElementById("wrong-why"),
  correctPanel: document.getElementById("correct-feedback"),
  correctAnswer: document.getElementById("correct-answer"),
  correctWhy: document.getElementById("correct-why"),
  ruleRemember: document.getElementById("rule-remember"),
  punctuationRow: document.getElementById("punctuation-note-row"),
  punctuationNote: document.getElementById("punctuation-note"),
  conceptTagRow: document.getElementById("concept-tag-row"),
  conceptTag: document.getElementById("concept-tag")
};

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function questionsByLevel(level) {
  return QUESTION_BANK.filter((q) => q.level === level);
}

function refillQueue(level) {
  state.levelQueues[level] = shuffle(questionsByLevel(level));
}

function getNextQuestion(level) {
  if (state.levelQueues[level].length === 0) {
    refillQueue(level);
  }
  return state.levelQueues[level].shift();
}

function resetFeedbackPanels() {
  el.incorrectPanel.classList.add("hidden");
  el.correctPanel.classList.add("hidden");
}

function renderChoices(question) {
  el.choicesForm.innerHTML = "";
  question.choices.forEach((choice, index) => {
    const id = `choice-${question.id}-${index}`;
    const label = document.createElement("label");
    label.className = "choice-card";
    label.htmlFor = id;

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "choice";
    input.id = id;
    input.value = String(index);

    input.addEventListener("change", () => {
      state.selectedChoiceIndex = index;
      el.checkBtn.disabled = false;
    });

    const text = document.createElement("span");
    text.className = "choice-text";
    text.textContent = choice;

    label.appendChild(input);
    label.appendChild(text);
    el.choicesForm.appendChild(label);
  });
}

function renderHeader() {
  el.currentLevelLabel.textContent = levelConfig[state.currentLevel].label;
  el.levelCorrectCount.textContent = state.correctByLevel[state.currentLevel];

  const config = levelConfig[state.currentLevel];
  if (!config.nextLevel) {
    el.unlockProgress.textContent = "Final level unlocked";
  } else {
    const safeProgress = Math.min(state.correctByLevel[state.currentLevel], config.unlockAfter);
    el.unlockProgress.textContent = `${safeProgress} / ${config.unlockAfter}`;
  }

  el.levelButtons.forEach((button) => {
    const level = Number(button.dataset.level);
    const isUnlocked = state.unlockedLevels.has(level);
    button.disabled = !isUnlocked;
    button.setAttribute("aria-selected", level === state.currentLevel ? "true" : "false");
  });
}

function maybeUnlockNextLevel() {
  const config = levelConfig[state.currentLevel];
  if (!config.nextLevel) return;

  if (state.correctByLevel[state.currentLevel] >= config.unlockAfter) {
    state.unlockedLevels.add(config.nextLevel);
  }
}

function renderQuestion() {
  state.currentQuestion = getNextQuestion(state.currentLevel);
  state.selectedChoiceIndex = null;
  state.answeredCorrectlyCurrent = false;

  el.questionMeta.textContent = `${levelConfig[state.currentLevel].label} • ${state.currentQuestion.id}`;
  el.prompt.innerHTML = `<strong>${state.currentQuestion.prompt}</strong>`;
  el.context.textContent = state.currentQuestion.context;

  renderChoices(state.currentQuestion);
  resetFeedbackPanels();
  el.checkBtn.disabled = true;
  el.nextBtn.disabled = true;
}

function setLevel(level) {
  if (!state.unlockedLevels.has(level)) return;
  state.currentLevel = level;
  renderHeader();
  renderQuestion();
}

function displayIncorrectFeedback(choiceIndex) {
  const q = state.currentQuestion;
  el.wrongAnswer.textContent = q.choices[choiceIndex];
  el.hintText.textContent = q.hintByChoice[choiceIndex] || "Re-check the structure in each option for matching forms.";
  el.wrongWhy.textContent = q.wrongWhyByChoice[choiceIndex] || "This option breaks the sentence pattern and creates nonparallel structure.";

  el.correctPanel.classList.add("hidden");
  el.incorrectPanel.classList.remove("hidden");
}

function displayCorrectFeedback(choiceIndex) {
  const q = state.currentQuestion;
  el.correctAnswer.textContent = q.choices[choiceIndex];
  el.correctWhy.textContent = q.correctWhy;
  el.ruleRemember.textContent = q.ruleToRemember;

  if (q.punctuationNote) {
    el.punctuationNote.textContent = q.punctuationNote;
    el.punctuationRow.classList.remove("hidden");
  } else {
    el.punctuationNote.textContent = "";
    el.punctuationRow.classList.add("hidden");
  }

  if (el.teacherMode.checked) {
    el.conceptTag.textContent = q.conceptTag;
    el.conceptTagRow.classList.remove("hidden");
  } else {
    el.conceptTag.textContent = "";
    el.conceptTagRow.classList.add("hidden");
  }

  el.incorrectPanel.classList.add("hidden");
  el.correctPanel.classList.remove("hidden");
}

el.checkBtn.addEventListener("click", () => {
  if (state.selectedChoiceIndex === null || state.answeredCorrectlyCurrent) {
    return;
  }

  const isCorrect = state.selectedChoiceIndex === state.currentQuestion.correctIndex;
  if (isCorrect) {
    state.answeredCorrectlyCurrent = true;
    state.correctByLevel[state.currentLevel] += 1;
    maybeUnlockNextLevel();
    renderHeader();
    displayCorrectFeedback(state.selectedChoiceIndex);
    el.nextBtn.disabled = false;
    el.checkBtn.disabled = true;
  } else {
    displayIncorrectFeedback(state.selectedChoiceIndex);
    el.nextBtn.disabled = true;
  }
});

el.nextBtn.addEventListener("click", () => {
  renderQuestion();
});

el.teacherMode.addEventListener("change", () => {
  if (!el.correctPanel.classList.contains("hidden")) {
    if (el.teacherMode.checked) {
      el.conceptTag.textContent = state.currentQuestion.conceptTag;
      el.conceptTagRow.classList.remove("hidden");
    } else {
      el.conceptTagRow.classList.add("hidden");
    }
  }
});

el.levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLevel(Number(button.dataset.level));
  });
});

[1, 2, 3].forEach((level) => refillQueue(level));
renderHeader();
renderQuestion();
