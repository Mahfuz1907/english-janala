const showWordDetails = (id) => {
  my_modal_5.showModal();
  const url = `https://openapi.programming-hero.com/api/word/${id}`;
  showLoader2();
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetails(data.data));
};

const showDetails = (data) => {
  //console.log(data);
  let modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = "";
  let content = document.createElement("div");
  content.classList = "flex flex-col justify-start items-start gap-8";
  content.innerHTML = `<h1 class="title text-4xl font-semibold">
              ${data.word} (<i class="fa-solid fa-microphone"></i>):${
    data.pronunciation
  }
            </h1>
            <div class="meaning flex flex-col justify-start items-start gap-3">
              <h1 class="text-2xl font-semibold">Meaning</h1>
              <h1 class="text-2xl font-medium">${
                data.meaning === null ? "অর্থ পাওয়া যায়নি" : data.meaning
              }</h1>
            </div>
            <div class="example flex flex-col justify-start items-start gap-3">
              <h1 class="text-2xl font-semibold">Example</h1>
              <p class="text-2xl font-normal">
                ${data.sentence}
              </p>
            </div>
            <div class="synonym flex flex-col justify-start items-start gap-3">
              <h1 class="text-2xl font-medium">সমার্থক শব্দ গুলো</h1>
              <div id="synonym" class="flex flex-col sm:flex-row justify-start items-start gap-3">
                
              </div>
            </div>`;

  modalContent.appendChild(content);
  //adding synonym buttons
  let synonymSection = document.getElementById("synonym");
  if (data.synonyms.length === 0) {
    let synonym = document.createElement("h1");
    synonym.classList = "text-xl font-semibold";
    synonym.innerHTML = "Synonyms not available";
    synonymSection.appendChild(synonym);
  } else {
    for (let sy of data.synonyms) {
      let synonym = document.createElement("button");
      synonym.classList =
        "bg-[#EDF7FF] text-xl font-normal px-5 py-1.5 border-[#D7E4EF] border-[1px] rounded-md";
      synonym.innerHTML = `${sy}`;

      synonymSection.appendChild(synonym);
    }
  }
  hideLoader2();
};
