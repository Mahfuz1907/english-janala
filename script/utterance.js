const pronouncedWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/word/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => pronounce(data.data));
};

const pronounce = (data) => {
  const utterance = new SpeechSynthesisUtterance(data.word);
  utterance.lang = "en-US"; // English
  window.speechSynthesis.speak(utterance);
};
