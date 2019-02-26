export class Collider {
  constructor(){

  }

  verify(target:any, object: any ) {
    if( target.posX + target.width > object.posX &&
        target.posX < object.posX + object.width &&
        target.posY + target.height > object.posY &&
        target.posY <  object.posY + object.height){
        return true;

     }
 
  }

}