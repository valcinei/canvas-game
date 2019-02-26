
// Import Scripts
import { Player } from './player';
import { Enemy } from './enemy';
import { Keyboard } from './keyboard';
import { Collider } from './collider';

// Get Canvas and Context!
const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const startButton = document.getElementById('start');
const score = document.getElementById('score');
const context = <CanvasRenderingContext2D> canvas.getContext('2d');
let keyboard = new Keyboard(document);

let scoreContent = document.getElementById('score');
let scoreCounter = 0;

let player = new Player(canvas, context);
let collider = new Collider();

let enemyQty = 10;
let enemys:any = [];
let paused = false;

// requestAnimationFrame(loop);
function loop() {
  if (paused) { return; }
  scoreCounter++;
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (keyboard.pressedKey(keyboard.DOWN_ARROW)) {
    player.down();
  }
  if (keyboard.pressedKey(keyboard.UP_ARROW)) {
    player.up();
  }
  if (keyboard.pressedKey(keyboard.LEFT_ARROW)) {
    player.left();
  }
  if (keyboard.pressedKey(keyboard.RIGHT_ARROW)) {
    player.right();
  }
  enemys.forEach((en:any) => {
    en.move();
    en.draw();
    //Pause 
    if (collider.verify(player, en)) {
      paused = true;
    }
  })

  player.draw();
  score.innerHTML = `Score: ${(scoreCounter / 100).toFixed()}`;
  requestAnimationFrame(loop);
}

startButton.addEventListener('click', (event) => {
  start()
})

function start() {
  scoreCounter = 0;
  enemyQty = 10;
  enemys = [];
  paused = false;
  for (let i = 0; i < enemyQty; i++) {
    enemys.push(new Enemy(canvas, context));
  }

  let enemy = new Enemy(canvas, context);
  requestAnimationFrame(loop);
}

