 let birthdayDate = new Date("2025-08-09T00:00:00").getTime();

    let countdownElement = document.getElementById("countdown");
    let messageElement = document.getElementById("wishMessage");
    let messageElement2 = document.getElementById("wishMessage2");

    let countdownTimer = setInterval(function () {
      let now = new Date().getTime();
      let distance = birthdayDate - now;

    if (distance <= 0) {
  clearInterval(countdownTimer);
  countdownElement.style.display = "none";
  

  document.getElementById("countdownHeading").style.display = "none";
  
  
  messageElement.style.display = "block";
  messageElement2.style.display = "block";

  
  messageElement.classList.add("move-up");
  messageElement2.classList.add("move-up");

  return;
}


      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `
        ${days}d: ${hours}h: ${minutes}m: ${seconds}s
      `;
    }, 1000);