// === Part 2: Functions, Scope, Parameters, Return Values ===

// Global variable
let globalMessage = "Hello from Global Scope";

// Function demonstrating local scope, parameter, and return value
function greetUser(name) {
  let localMessage = `Hello, ${name}!`; // Local scope
  return `${globalMessage} | ${localMessage}`;
}

// Call and display result
document.getElementById("scopeResult").textContent = greetUser("Student");

// === Part 3: JS Triggering Animations ===

// Function to animate the box
function triggerBoxAnimation(type) {
  const box = document.getElementById("animatedBox");

  if (type === "slide") {
    box.classList.remove("spin");
    box.classList.add("slide");
  } else if (type === "spin") {
    box.classList.remove("slide");
    box.classList.add("spin");
  }
}

// Reset box to default state
function resetBox() {
  const box = document.getElementById("animatedBox");
  box.classList.remove("slide", "spin");
}

// Function to flip the card
function flipCard() {
  const card = document.getElementById("flipCard");
  card.classList.toggle("flip");
}
