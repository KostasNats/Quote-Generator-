const quotes = [
  "The best way to predict the future is to invent it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do what you can, with what you have, where you are."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[randomIndex];
}







