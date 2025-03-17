document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const targetId = e.target.getAttribute("data-target");

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector("nav").offsetHeight;

      const targetPosition = targetElement.offsetTop - navbarHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});
