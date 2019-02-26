export class Enemy{
  speed = 10;
  posX = 0;
  posY = 0;
  width = 20;
  height = 20;
  context :CanvasRenderingContext2D;
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.context = context;
    this.setRandomPosition();
    this.draw();
  }
 
  move() {
    if(this.posX < -this.width ) {
      this.setRandomPosition();
    }
    this.posX -= this.speed;
  }

  draw(){
   this.context.rect(this.posX, this.posY, this.width, this.height);
   this.
   context.stroke();
  }
  
  setRandomPosition() {
   this.posX = Math.floor(Math.random() * (this.canvas.width)) + 610;
    this.posY =  Math.floor(Math.random() * (this.canvas.height)) + 0;
  }

}