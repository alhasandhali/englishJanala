// Add Lessons Bar
const loadLessons = () => {
  const url = `https://openapi.programming-hero.com/api/levels/all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayLessons(data.data));
};

const displayLessons = (lessons) => {
  const lessonList = document.getElementById("les-ul");
  lessons.forEach((lesson) => {
    const liLesson = document.createElement("div");

    liLesson.innerHTML = `
    <li id="lsn-btn-${lesson.level_no}" class="btn btn-outline btn-primary lsn-btn" onclick="getLessonId(${lesson.level_no})">
      <i class="fa-solid fa-book-open-reader"></i>
            Lesson - ${lesson.level_no}
     </li>
    `;
    lessonList.append(liLesson);
  });
};

//remove active class
const removeActive = () => {
  const lsnBtn = document.querySelectorAll(".lsn-btn");
  console.log(lsnBtn);
  lsnBtn.forEach((btn) => btn.classList.remove("active"));
};

// Add word cards
const getLessonId = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeActive();
      const clickBtn = document.getElementById(`lsn-btn-${id}`);
      console.log(clickBtn);
      clickBtn.classList.add("active");
      displayVocabularyById(data.data);
    });
};

const displayVocabularyById = (words) => {
  const wordContainer = document.getElementById("vocabulary-container");
  wordContainer.innerHTML = "";
  if (words.length == 0) {
    const wordCard = document.createElement("div");
    wordCard.className = "col-span-3 space-y-4 text-center";

    wordCard.innerHTML = `
        <img src="assets/alert-error.png" class="mx-auto">
        <p class="text-[14px] bangla-font text-[#79716B]">
            এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
        </p>
        <p class="bangla-font font-medium text-[35px] text-[#292524]">
            নেক্সট Lesson এ যান
        </p>
    `;
    wordContainer.append(wordCard);
    return;
  }
  words.forEach((word) => {
    const wordCard = document.createElement("div");
    wordCard.className = "bg-white p-10 rounded text-center space-y-6";

    wordCard.innerHTML = `
            <h2 class="font-bold text-[32px]">${
              word.word ? word.word : "---"
            }</h2>
            <p class="font-medium text-[20px]">Meaning / Pronounciation</p>
            <p class="bangla-font font-semibold text-[32px] text-[#18181B]">
              ${word.meaning ? word.meaning : "---"} / ${
      word.pronunciation ? word.pronunciation : "---"
    }
            </p>
            <div class="flex justify-between">
              <button class="px-3 py-2 bg-[#1A91FF30] rounded cursor-pointer" onclick="loadDetails(${
                word.id
              })">
                <i class="fa-solid fa-circle-info"></i>
              </button>
              <button class="px-3 py-2 bg-[#1A91FF30] rounded cursor-pointer" onclick="loadVoice(${
                word.id
              })">
                <i class="fa-solid fa-volume-high"></i>
              </button>
            </div>
    `;
    wordContainer.append(wordCard);
  });
};

//Word details
const loadDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWordById(data.data));
};

const displayWordById = (details) => {
  const wordDetailsContainer = document.getElementById(
    "word-details-container"
  );
  wordDetailsContainer.innerHTML = "";
  document.getElementById("wordModal").showModal();
  const modalCard = document.createElement("div");
  modalCard.className = "bg-[#F8F8F8] rounded p-3 border-2 border-[#00000010]";
  modalCard.innerHTML = `
            <h2 class="font-semibold text-[36px] mb-4">
              ${details.word} (<i class="fa-solid fa-microphone-lines"></i>:${details.pronunciation})
            </h2>
            <p class="font-semibold text-[24px]">Meaning</p>
            <p class="font-medium text-[18px] bangla-font mb-4">${details.meaning}</p>
            <p class="font-semibold text-[24px]">Example</p>
            <p class="font-medium text-[18px] mb-4">
              ${details.sentence}
            </p>
            <p class="font-medium text-[20px] bangla-font mb-1">
              সমার্থক শব্দ গুলো
            </p>
            <div id="synonyms-container"></div>
  `;
  const synCont = modalCard.querySelector("#synonyms-container");
  details.synonyms.forEach((synonym) => {
    const eachSyn = document.createElement("span");
    eachSyn.className =
      "text-[16px] p-2 bg-[#EDF7FF] inline-block rounded ml-2";
    eachSyn.textContent = synonym;
    synCont.append(eachSyn);
  });
  wordDetailsContainer.append(modalCard);
};

// For voice
const loadVoice = (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => pronounceWord(data.data.word));
};

function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}

loadLessons();

//search functionality
document.getElementById("search-btn").addEventListener("click", () => {
  const input = document.getElementById("search-input");
  const searchValue = input.value.trim().toLowerCase();

  const url = `https://openapi.programming-hero.com/api/words/all`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const allWords = data.data;
      const filterWord = allWords.filter((word) =>
        word.word.toLowerCase().includes(searchValue)
      );
      displayVocabularyById(filterWord);
    });
});
