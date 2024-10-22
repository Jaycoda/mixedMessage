import { randomFacts } from "./data.mjs";

function getRandomFact(facts) {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const factObject = facts[randomIndex];
  return factObject;
}

document.getElementById("generate-btn").addEventListener("click", () => {
  const fact = getRandomFact(randomFacts);
  document.getElementById("fact-display").innerHTML = `
    <p><strong>Fact:</strong> ${fact.fact}</p>
    <p><strong>Topic:</strong> ${fact.topic}</p>
    <p><strong>Interest Score:</strong> ${fact.interestScore}%</p>
  `;
});
