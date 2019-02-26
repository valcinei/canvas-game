export class Player{
  context: CanvasRenderingContext2D;
  speed = 8;
  width = 20;
  height = 20;
  posX = 10;
  posY = 10;
  canvas:HTMLCanvasElement;
  
   
  constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D){
    this.posY = canvas.height/2;
   this.canvas = canvas;
   this.context = context;
  }

  up() {
    if(this.posY<=0) {
      this.posY = 0;
      return
    }
   this.posY -= this.speed;
  }

  down(){
     if(this.posY >=   this.canvas.height - this.height) {
      this.posY =   this.canvas.height - this.height;
      return
    }
   this.posY += this.speed;
  }

  right(){
     if(this.posX>=   this.canvas.width - this.width) {
      this.posX =   this.canvas.width - this.width;
      return
    }
   this.posX += this.speed;

  }

  left(){
     if(this.posX<=0) {
      this.posX = 0;
      return
    }
   this.posX -= this.speed;

  }

  draw() {
   this.context.beginPath();
   this.context.fillRect(this.posX , this.posY, this.width, this.height);
  }
}
