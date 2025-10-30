const riddles = {
  "1": "What has keys but can’t open locks?",
  "2": "What can travel around the world while staying in the same spot?",
  "3": "The more you take, the more you leave behind. What am I?"
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const riddleId = getQueryParam("riddle");
const riddleElem = document.getElementById("riddle-text");

if (riddleId && riddles[riddleId]) {
  riddleElem.textContent = riddles[riddleId];
} else {
  riddleElem.textContent = "No valid riddle found.";
}
