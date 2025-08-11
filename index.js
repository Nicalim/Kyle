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