function switchMode() {
  //Background
  let bg = document.body;
  bg.classList.toggle("dark");

  //Github
  let git = document.getElementById("github");
  git.classList.toggle("dark");

  //Intro
  let window = document.getElementById("window");
  window.classList.toggle("dark");

  //Mode switch
  let modeSwitch = document.getElementById("mode");
  modeSwitch.classList.toggle("dark");
}
