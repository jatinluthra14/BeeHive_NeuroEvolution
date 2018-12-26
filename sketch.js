var bees;
var savedbees;
var items;
var firePop = 3;
var waterPop = 15;
var honeyPop = 15;
var beePop = 20;
var firel = 0;
var slider;
var checkBox;
var waterSprite;
var honeySprite;
var beeSprite;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(180);
  slider = createSlider(1, 100, 1);
  checkBox = createCheckbox("Bee 0", false);
  waterSprite = loadImage('Sprites/water.png');
  honeySprite = loadImage('Sprites/honey.png');
  beeSprite = loadImage('Sprites/bee.jpg');
  items = [];
  bees = [];
  savedbees = [];
  for (var i=0; i < waterPop; i++) {
    items.push(new Water());
  }
  for (var i=0; i < honeyPop; i++) {
  items.push(new Honey());
  }
  for (var i=0; i < beePop; i++) {
  bees.push(new Bee());
  }
  items.push(new House());
  for (var i=1; i <= firePop; i++) {
  items.push(new Fire(i));
  }
}

function draw() {
  background(255);
  for (var n = 0; n < slider.value(); n++) {
    for (var item of items) {
      if (item.name == "Fire") {
          item.show();
          if (item.x > windowWidth || item.y > windowHeight) {
              items.splice(items.indexOf(item),1);
              firel += 1;
          }
      }
  }
  if (firel == 3) {
      for (var bee of bees) {
          savedbees.push(bees.splice(bees.indexOf(bee),1)[0]);
      }
      firel = 0;
      nextGeneration();
      for (var i=1; i <= firePop; i++) {
        items.push(new Fire(i));
  }
  }

  for (var bee of bees) {
    bee.checkInt(items);
    if (bee.life <= 0) {
        savedbees.push(bees.splice(bees.indexOf(bee),1)[0]);
    }
    if (bee.fire == 1) {
            bee.life -= 0.02;
        }
    bee.think();
  }
  }
    if(checkBox.checked()) {
    bees[0].show();  
    } else {
        for (var bee of bees) {
            bee.show();
        }
    }
    for (var item of items) {
        item.show();
    }
}

function keyPressed() {
    if (key==' ') {
        bees[0].move();
    } else if (keyCode == LEFT_ARROW) {
        bees[0].left();
    } else if (keyCode == RIGHT_ARROW) {
        bees[0].right();
    }
}