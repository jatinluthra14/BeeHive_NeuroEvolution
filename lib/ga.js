function nextGeneration() {
  console.log('next generation');
  calculateFitness();
  for (let i = 0; i < beePop; i++) {
    bees[i] = pickOne();
  }
  savedbees = [];
}

function pickOne() {
  let index = 0;
  let r = random(1);
  while (r > 0) {
    r = r - savedbees[index].fitness;
    index++;
  }
  index--;
  let bee = savedbees[index];
  let child = new Bee(bee.brain);
  child.mutate();
  return child;
}

function calculateFitness() {
  let sum = 0;
  for (let bee of savedbees) {
    sum += bee.score;
  }
  for (let bee of savedbees) {
    bee.fitness = bee.score / sum;
  }
}