fetch("https://openapi.programming-hero.com/api/levels/all")
  .then((res) => res.json())
  .then((data) => {
    displayLearnButton(data.data);
  });

const displayLearnButton = (learnButton) => {
  const learn = document.getElementById("learn-button");
  for (let lb of learnButton) {
    let button = document.createElement("button");
    button.onclick = () => loadWords(lb);
    button.id = `active-${lb.level_no}`;
    button.classList =
      "cursor-pointer text-[#1aa52d] border-2 hover:bg-[#1aa52d] hover:text-white border-[#1aa52d] px-5 py-2 flex flex-row gap-2 rounded-md justify-center items-center";
    button.innerHTML = `<i class="fa-solid fa-book-open"></i> Lesson -${lb.level_no}`;

    learn.appendChild(button);
  }
};
