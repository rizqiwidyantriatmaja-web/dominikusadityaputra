const YTPlayerOverlay = document.querySelector(".youtube-player-overlay");
const YTLinks = document.querySelectorAll(".voca");

YTLinks.forEach(link => {
  link.addEventListener("click", () => {
    YTPlayerOverlay.classList.add("active");
  });
});

YTPlayerOverlay.addEventListener("click", () => {
    YTPlayerOverlay.classList.remove("active");
  });
