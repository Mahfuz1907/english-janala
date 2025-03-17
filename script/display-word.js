const loadWords = (learnButton) => {
  removeActiveClass();
  document
    .getElementById(`active-${learnButton.level_no}`)
    .classList.add("active");
  const url = `https://openapi.programming-hero.com/api/level/${learnButton.level_no}`;
  const selectIndicator = document.getElementById("select-indicator");
  selectIndicator.classList.add("hidden");
  showLoader();
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayWords(data.data);
    });
};

const removeActiveClass = () => {
  const activeButton = document.getElementsByClassName("active");
  for (let act of activeButton) {
    act.classList.remove("active");
  }
};

const displayWords = (words) => {
  let wordByLesson = document.getElementById("word-by-lesson");
  wordByLesson.innerHTML = "";

  if (words.length == 0) {
    wordByLesson.innerHTML = `<div class="col-span-full px-5 flex flex-col gap-3 justify-center items-center">
            <img src="assets/alert-error.png" alt="" />
            <h1 class="text-[#79716B] text-sm font-normal">
              এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
            </h1>
            <h1 class="text-[#292524] text-4xl font-medium">
              নেক্সট Lesson এ যান
            </h1>
          </div>`;
  }

  for (let word of words) {
    let wordCard = document.createElement("div");
    wordCard.id = `id-${word.id}`;
    wordCard.classList =
      "bg-white flex flex-col gap-10 justify-center items-center py-10 rounded-lg px-14 h-[400px]";
    wordCard.innerHTML = `<div class="flex flex-col gap-4 justify-center items-center h-[155px]">
              <h1 class="text-3xl font-bold text-center">${word.word}</h1>
              <h1 class="text-xl font-medium text-center">Meaning /Pronounciation</h1>
              <h1 class="text-3xl font-semibold text-center">"${
                word.meaning === null ? "অর্থ নেই" : word.meaning
              } / ${word.pronunciation}"</h1>
              </div>
              <div class="flex flex-row justify-between items-center w-full">
                <button class="bg-[#1A91FF19] cursor-pointer hover:bg-white p-3 rounded-lg" onclick="showWordDetails(${
                  word.id
                })">
                  <img
                    src="assets/icons8-i-40.png"
                    alt=""
                    class="rounded-full w-6 h-6"
                  />
                </button>
                <button class="bg-[#1A91FF19] cursor-pointer hover:bg-white p-3 rounded-lg" onclick="pronouncedWord(${
                  word.id
                })">
                  <img
                    src="assets/icons8-audio-40.png"
                    alt=""
                    class="w-6 h-6"
                  />
                </button>
              </div>`;

    wordByLesson.appendChild(wordCard);
  }
  hideLoader();
};
