# BeeHive_NeuroEvolution

BeeHive is a small game written in JS (P5.js) to demonstrate NeuroEvolution using Neural Networks and Genetic Algorithms.

# Inspiration

The game is hugely based on an article on DoubleZoom which showed the complete idea and basics behind it. You can see it [here](http://doublezoom.free.fr/programmation/AG_Exemple_Survival.php).

# Working
- The Game includes elements like Bees, House, Water, Fire and Honey
- Fire is a big circle which moves from left to right. 
- Every bee that passes fire have to drink water in a fixed period or they die.
- Bees have to collect honey and bring back to house. They can only carry one honey drop at a time.
- Every Bee has a brain to think which is a neural network with following
     * 5 Input Neurons 
     * One Hidden Layer with 5 Neurons
     * The Output layer with 3 Neurons
- Initially there is a population of 20 bees in each generation.
- Fitness of bees is dependent on a score which is increased by collecting honey (+0.5) and depositing it back to home(+2).
- At each next generation, Fittest bees are chosen and mutated with chance of 10%

### Tech

This project uses:

* [P5.JS](p5js.org) - A JS library based on Processing!
* [Toy-Neural-Network-JS](https://github.com/CodingTrain/Toy-Neural-Network-JS) - A Small Neural Network library made by Daniel Shiffman.

# Credits
A Special thanks to [DoubleZoom](http://doublezoom.free.fr) for this awesome idea and Of Course Daniel Shiffman for this beautiful library and his YouTube channel [The Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw) for his awesome tutorials and inspiration.
### Todos

 - Making it Efficient to increase speed on CPU-only desktops.
 - Fixing Sprites Overlapping problem.
