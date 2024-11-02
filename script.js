let language = "english";
function switchLang() {
  if (language == "german") {
    language = "english";
  } else {
    language = "german";
  }

  if (language == "german") {
    document.getElementById("aboutMe").textContent = "Über mich";
    document.getElementById("intro").textContent =
      "Hallo, mein Name ist Sophia. Ich mache gerade eine Ausbildung zur Fachinformatikerin. Im Moment lerne ich Python, Java und GDscript.";
    document.getElementById("github").textContent =
      "Klicken Sie hier für mein Github-Profil.";
    document.getElementById("skills").textContent = "Meine Fähigkeiten";
    document.getElementById("projects").textContent = "Projekte";
    document.getElementById("descSprite").textContent =
      "Ein einfaches 2D-Jump 'n' Run-Spiel um Godot zu lernen.";
    document.getElementById("descPY").textContent =
      "Ein gewöhnlicher Python-Passwort-Generator (aber niedlich)";
    document.getElementById("descRPS").textContent =
      "Stein-Papier-Schere-Spiel";
    document.getElementById("descSW").textContent = "Stoppuhr in JavaScript";
    document.getElementById("descKaplan").textContent =
      "Ein einfaches Adressbuch in Python mit customtkinter GUI.";
  } else if (language == "english") {
    document.getElementById("aboutMe").textContent = "About me";
    document.getElementById("intro").textContent =
      "Hi, my name is Sophia. I'm currently training to be an IT specialist. At the moment i'm learning Python, Java and GDscript.";
    document.getElementById("github").textContent =
      "Click here for my Github profile.";
    document.getElementById("skills").textContent = "My Skills";
    document.getElementById("projects").textContent = "Projects";
    document.getElementById("descSprite").textContent =
      "A simple 2D Jump 'n' Run game to explore Godot.";
    document.getElementById("descPY").textContent =
      "An ordinary Python Password Generator (but cute)";
    document.getElementById("descRPS").textContent = "Rock Paper Scissors Game";
    document.getElementById("descSW").textContent = "Stopwatch in JavaScript";
    document.getElementById("descKaplan").textContent =
      "A simple Address Book in python with customtkinter GUI.";
  }
}

function openBar() {
  document.getElementById("controlbar").style.display = "flex";
  document.getElementById("openbtn").style.display = "none";
}

function closeBar() {
  document.getElementById("controlbar").style.display = "none";
  document.getElementById("openbtn").style.display = "block";
}