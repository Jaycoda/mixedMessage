import { randomFacts } from "./data.mjs";

function getRandomFact(facts) {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const factObject = facts[randomIndex];
  console.log(`Fact: ${factObject.fact}`);
  console.log(`Topic: ${factObject.topic}`);
  console.log(`Interest Score: ${factObject.interestScore}%`);
}

getRandomFact(randomFacts);
