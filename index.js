const text = "Welcome! I'm Kyle";
const typingSpeed = 100; // milliseconds per character
const repeatDelay = 5000; // 5 seconds delay before restarting
const typingElement = document.getElementById("heading");
    let index = 0;

    function type() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      } else {
        // After typing is done, wait and then clear and restart
        setTimeout(() => {
          typingElement.textContent = "";
          index = 0;
          type();
        }, repeatDelay);
      }
    }
                  
    window.onload = () => {
      type();
    };
 
let darkmode = true
function toggleDarkMode() {
 const text = document.querySelector(".dark-light-mode");
text.innerText = text.innerText === "🌚" ? "🌞" : "🌚";


  darkmode = !darkmode;
  document.querySelector(".container").style.background = darkmode ? `linear-gradient(
      to left,
      var(--primcolor) 0%,
      var(--seccolor) 50%,
      var(--accentcolor) 100%
    )` : 
    `linear-gradient(
      to left,
      var(--light-primcolor) 0%,
      var(--light-seccolor) 50%,
      var(--light-accentcolor) 100%
    )`;
    document.querySelector(".profilepic").style.borderColor = darkmode ? "var(--accent-light)" : "var(--light-accent-light)";
    const bgpf = document.querySelector(".profilepic");
    if (darkmode) {
        bgpf.style.setProperty("--accent-light-glow-bg", " #5CC7C3")
    }
    else {
        bgpf.style.setProperty("--accent-light-glow-bg", "#3a6ff7")
    }
    const blinking = document.getElementById("heading");
    if (darkmode) {
        blinking.style.setProperty("--h1-color-blink", "#A8C0FF");
    } else {
        blinking.style.setProperty("--h1-color-blink", "#243b6b");
    }
    document.querySelector(".tagline").style.color = darkmode ? "var(--accent-light)" : "var(--light-accent-light)";
    const tagline_glow = document.querySelector(".tagline");
    if (darkmode) {
        tagline_glow.style.setProperty("--accent-light", "#5CC7C3");
    } else {
        tagline_glow.style.setProperty("--accent-light", "#243b6b");
    }
    document.querySelector(".about").style.color = darkmode ? "var(--accent-light)" : "var(--light-accent-light)";
    document.querySelector(".about").style.webkitTextStroke = darkmode ? "0.5px var(--accent-light)" : "0.5px var(--light-accent-light)";
    const list = document.querySelectorAll(".About, .Contact, .Skills, .my-work");
    list.forEach(item => {item.style.color = darkmode ? "var(--navigation-color)" : "var(--light-navigation-color)";})
}
