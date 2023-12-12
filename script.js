const agents = [
  // Mock data of agents and their clues
  {
    "agent": "Reyna",
    "clues": [
      "The opponent used an ability that allows them to heal",
      "The opponent used an ability that enhances their abilities and firing rate.",
      "The opponent played cautiously, often relies on teammates utilities to secure kills."
    ]
  },
  {
  "roundNumber": 1,
  "attemptsLeft": 3,
  "opponent": {
    "agent": "Undisclosed",
    "clues": [
      {
        "type": "Abilities",
        "description": "The opponent used an ability that creates a burst of flames."
      },
      {
        "type": "Ultimate",
        "description": "The opponent used an ultimate that enhances their speed and allows them to rush enemies."
      },
      {
        "type": "Playstyle",
        "description": "The opponent played aggressively, pushing into enemy territory."
      }
    ]
  }
}
"agents": [
  {
    "name": "Phoenix",
    "clues": [
      "The opponent used an ability that creates a burst of flames.",
      "The opponent used an ultimate that enhances their speed and allows them to rush enemies.",
      "The opponent played aggressively, pushing into enemy territory."
    ]
  },
  {
    "name": "Jett",
    "clues": [
      "The opponent used an ability that allows them to dash through the air.",
      "The opponent used an ultimate that rains down daggers from the sky.",
      "The opponent played aggressively, often engaging in close-quarters combat."
    ]
  },
  {
    "name": "Brimstone",
    "clues": [
      "The opponent used an ability that deploys smoke screens.",
      "The opponent used an ultimate that calls in orbital airstrikes.",
      "The opponent played strategically, providing support to the team from a distance."
    ]
  },
  // Add more agents and clues as needed
]
  // ... other agents
];

let currentAgent;
let attempts = 3;

function startGame() {
  let randomAgentIndex = Math.floor(Math.random() * agents.length);
  currentAgent = agents[randomAgentIndex];
  attempts = 3;

  displayClues();
}

function displayClues() {
  let cluesDiv = document.getElementById("clues");
  cluesDiv.innerHTML = "<h2>Clues:</h2>";
  currentAgent.clues.forEach((clue) => {
    cluesDiv.innerHTML += "<p>" + clue + "</p>";
  });
}

function checkGuess() {
  let guess = document.getElementById("guess").value.toLowerCase();
  let feedback = document.getElementById("feedback");

  if (guess === currentAgent.agent.toLowerCase()) {
    feedback.innerHTML = "Congratulations! You guessed correctly. It was " + currentAgent.agent + "!";
  } else {
    attempts--;
    if (attempts > 0) {
      feedback.innerHTML = "Incorrect guess. Try again! Attempts left: " + attempts;
    } else {
      feedback.innerHTML = "Out of attempts! The undisclosed agent was " + currentAgent.agent + ".";
    }
  }
}
// Starting the game on page load
window.onload = startGame;

