function tips() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let gardenCondition = prompt(
    "One last question! Are you going to garden in a sunny ☀️ or a shady ⛅ area?"
  );
  gardenCondition = gardenCondition.toLowerCase();
  gardenCondition = gardenCondition.trim();

  let h1 = document.querySelector("h1");
  let h2 = document.querySelector("h2");
  let p = document.querySelector("p");

  if (gardenCondition === "sunny") {
    h1.innerHTML = "Happy gardening, " + name + "! 👩🏻‍🌾";
    h2.innerHTML =
      "Please check your email to find the 10 useful gardening tips in the " +
      gardenCondition +
      " area! ☀️";
    p.innerHTML = "Thank you for stopping by, I wish you a wonderful day! 😊";
  } else {
    h1.innerHTML = "Happy gardening, " + name + "! 👩🏻‍🌾";
    h2.innerHTML =
      "Please check your email to find the 10 useful gardening tips in the " +
      gardenCondition +
      " area! ⛅";
    p.innerHTML = "Thank you for stopping by, I wish you a wonderful day! 😊";
  }
}

let tipsButton = document.querySelector(".tips-button");
tipsButton.addEventListener("click", tips);
