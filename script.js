const header = document.querySelector(".navbar");

window.addEventListener('scroll', (e) => {
  if (window.scrollY >= 160) {
    header.classList.add('active');
    header.style.shadow = "";
  }
  else {
    header.classList.remove('active');
  }
})
