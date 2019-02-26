export class Keyboard {
   UP_ARROW = 38 ;
   DOWN_ARROW = 40 ;
   RIGHT_ARROW = 39 ;
   LEFT_ARROW = 37 ;
   SPACE_BAR = 32 ;
   paused = false;
    element: Document;


  pressedKeys:any = [];

constructor(element: Document){
  this.element = element;
  this.listenerKeys();
  }

  listenerKeys() {
    this.element.addEventListener('keydown', ((event: KeyboardEvent)=>this.pressedKeys[event.keyCode] = true ));
    this.element.addEventListener('keyup', ((event: KeyboardEvent)=>this.pressedKeys[event.keyCode] = false ));
  }

  pressedKey(key: number) {
    return this.pressedKeys[key];
  }
  
 

}