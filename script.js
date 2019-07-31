const addSticky = () => {
  let header = document.getElementById("header");
  let sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

const playSoundOnClick = () => {
  let audio = document.getElementById("button_sound");
  audio.play();
};

window.onscroll = addSticky;
