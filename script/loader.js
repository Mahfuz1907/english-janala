const showLoader = () => {
  document.getElementById("loader-word").classList.remove("hidden");
  document.getElementById("word-by-lesson").classList.add("hidden");
};

const hideLoader = () => {
  document.getElementById("loader-word").classList.add("hidden");
  document.getElementById("word-by-lesson").classList.remove("hidden");
};

const showLoader2 = () => {
  document.getElementById("loader-word-details").classList.remove("hidden");
  document.getElementById("modal-content").classList.add("hidden");
};

const hideLoader2 = () => {
  document.getElementById("loader-word-details").classList.add("hidden");
  document.getElementById("modal-content").classList.remove("hidden");
};
