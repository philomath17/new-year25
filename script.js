function startAnimation() {
    document.querySelector(".last-cube").style.animationPlayState = "running";
    document.querySelector(".cat").style.animationPlayState = "running";
    document.querySelector(".fireworks-container").style.opacity = "1";
  
    setTimeout(() => {
      document.querySelector(".cat .hand").style.animationPlayState = "running";
      document.querySelector(".cat .speech-bubble").style.opacity = "1";
    }, 5000); // Trigger the cat wave after 5 seconds
  }
  