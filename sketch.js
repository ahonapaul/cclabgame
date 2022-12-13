let tree1;
let tree2;
let enemy;
let trees = [];
let enemies = [];
let character;
let bullet;
let mode = 0;
let d2;

function preload() {
  treeimg = loadImage("treesprite.png");
  enemyimg = loadImage("enemy1.gif");
  enemy2img = loadImage("enemy2.gif");
  enemy3img = loadImage("enemy3.png");
  // characterimg = loadImage("");
  runningimg = loadImage("character.gif");
  bulletimg = loadImage("bullet.gif");
  treeimg2 = loadImage("tree2.png");
  // tractorimg = loadImage("");
  // trashimg = loadImage("");
}

function setup() {
  createCanvas(600, 400);
  tree1 = new Tree(0, 25, 1);
  tree2 = new Tree(0, 25, 0.5);
  for (let i = 0; i < 100; i++) {
    let myTrees = new Tree(width, 50, random(3), 1);
    trees.push(myTrees);
  }
  enemy = new Enemies((3 / 4) * width, height / 2, 30, 1);

  character = new Character(0, 2/3 * height, 3, 0.7);

  bullet = new Bullet(0, height / 2, 5);
}

function draw() {
  switch (mode) {
    case 0:
      startscene();
      break;
    case 1:
      scene1();
      break;
    case 2:
      scene2();
      break;
    case 3:
      scene3();
      break;
    case 4:
      scene4();
      break;
    case 5:
      endscene();
      break;
  }
}

function startscene() {
  background(255);
  textSize(30);
  textAlign(CENTER);
  text("SURVIVOR", width / 2, height / 4 - 50);

  textSize(15);
  text("LEFT to move forward", width / 2, height / 4);
  text("RIGHT to move back", width / 2, height / 4 + 50);
  text("stop and press S to shoot", width / 2, height / 4 + 100);
  text("start moving again after shot to move on", width / 2, height / 4 + 150);
  text(
    "M to open instructions, continue moving to exit",
    width / 2,
    height / 4 + 200
  );

  character.move();
  character.body();
}

// function customization)(){
    // this is only for if i have time
//}

function scene1() {
  background(0, 200, 250);
  fill(94, 64, 23);
  rect(0, height / 2, width, height / 2);

  d2 = dist(character.x, character.y, enemy.x, enemy.y);

  if (d2 <= 35) {
    character.x = 0;
    enemy.x = 500;
  }

  push();
  scale(2);
  tree1.body1();
  tree1.body2();
  tree1.move();


  for (let i = 0; i < 100; i++) {
    trees[i].move();
    trees[i].body1();
  }
  for (let j = 0; j < 50; j += 2) {
    trees[j].move();
    trees[j].body2();
  }
  pop();

  push();

  if (!(enemy.x && bullet.x)) {
    character.body();
    character.move();
    character.stop();
    character.move();
  }
  if (enemy.x && bullet.x) {
    character.body();
    character.move();
  }

  pop();

  bullet.body();
  bullet.move();
  bullet.collision();

  setTimeout(enemy.body1(), 5000);
  enemy.move();


  if (key == "m") {
    startscene();
  }
}

function scene2() {
  background(101, 172, 184);
  fill(94, 64, 23);
  rect(0, height / 2, width, height / 2);

  d2 = dist(character.x, character.y, enemy.x, enemy.y);

  if (d2 <= 35) {
    character.x = 0;
    enemy.x = 500;
  }

  push();
  scale(2);
  tree1.body1();
  tree2.body2();
  tree1.move();

  for (let i = 0; i < 50; i++) {
    trees[i].move();
    trees[i].body1();
  }
  for (let j = 0; j < 20; j += 2) {
    trees[j].move();
    trees[j].body2();
  }
  pop();

  push();
  if (!(enemy.x && bullet.x)) {
    character.body();
    character.move();
    character.stop();
    character.move();
  }
  if (enemy.x && bullet.x) {
    character.body();
    character.move();
  }

  pop();

  bullet.body();
  bullet.move();
  bullet.collision();

  setTimeout(enemy.body2(), 5000);
  enemy.move();

  if (key == "m") {
    startscene();
  }
}

function scene3() {
  background(114, 146, 150);
  fill(94, 64, 23);
  rect(0, height / 2, width, height / 2);

  d2 = dist(character.x, character.y, enemy.x, enemy.y);

  if (d2 <= 35) {
    character.x = 0;
    enemy.x = 500;
  }

  push();
  scale(2);
  tree1.body1();
  tree2.body2();
  tree1.move();

  for (let i = 0; i < 20; i++) {
    trees[i].move();
    trees[i].body1();
  }
  for (let j = 0; j < 5; j += 2) {
    trees[j].move();
    trees[j].body2();
  }
  pop();

  push();
  if (!(enemy.x && bullet.x)) {
    character.body();
    character.move();
    character.stop();
    character.move();
  }
  if (enemy.x && bullet.x) {
    character.body();
    character.move();
  }

  pop();

  bullet.body();
  bullet.move();
  bullet.collision();

  scale(2);
  setTimeout(enemy.body3(), 5000);
  enemy.move();

  if (key == "m") {
    startscene();
  }
}

function scene4() {
  background(132, 139, 140);
  fill(94, 64, 23);
  rect(0, height / 2, width, height / 2);

  d2 = dist(character.x, character.y, enemy.x, enemy.y);

  if (d2 <= 35) {
    character.x = 0;
    enemy.x = 500;
  }

  push();
  scale(2);
  tree1.body1();
  tree2.body2();
  tree1.move();

  for (let i = 0; i < 10; i++) {
    trees[i].move();
    trees[i].body1();
  }
  for (let j = 0; j < 2; j += 2) {
    trees[j].move();
    trees[j].body2();
  }
  pop();

  push();
  if (!(enemy.x && bullet.x)) {
    character.body();
    character.move();
    character.stop();
    character.move();
  }
  if (enemy.x && bullet.x) {
    character.body();
    character.move();
  }

  pop();

  bullet.body();
  bullet.move();
  bullet.collision();

  setTimeout(enemy.body3(), 5000);
  enemy.move();

  if (key == "m") {
    startscene();
  } 

}

function endscene() {
  
  background(50);
  fill(255);
  textSize(30);
  textAlign(CENTER);
  text("THE END", width/2, height/4);
  
  character.move();
  character.body();
  
  if(character.x >= width/4){
    textSize(15);
    fill(255);
    text("were you really the hero?", width/2, height/2);
  }
  if(character.x >= width/2){
    fill(255);
    textSize(15);
    text("or were you the villain?", width/2, height/2 + 50);
    character.x = width/2;
  }
  
}
