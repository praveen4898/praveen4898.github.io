// JavaScript to handle smooth scrolling with offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = document.querySelector("nav").offsetHeight; // Adjust this offset as needed
      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

function resume() {
  window.open("./Praveen Kumar R-Full Stack Web Developer.pdf", "_blank");
}

// GitHubCalendar(".calendar", "audacity07", {
//   responsive: true,
//   global_stats: true,
//   tooltips: true,
// });

// to handle mobile navigation
const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".hamburger__bar1");
const bar2 = document.querySelector(".hamburger__bar2");
const bar3 = document.querySelector(".hamburger__bar3");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function () {
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  mobileNav.classList.toggle("openDrawer");
});
