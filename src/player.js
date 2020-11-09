import Sprite from './sprites'
const MOVEMENTS = {
   a: -4.5,
   d: 4.5,
}
const GRAVITY = .4
const TERMINAL = 10
export default class Player {
   constructor(dimensions, floor, ctx){
      this.ctx = ctx
      this.dimensions = dimensions;
      this.height = 40
      this.width = 30
      this.floor = dimensions.height
      this.x = dimensions.width / 2;
      this.y = floor - this.height
      this.dx = 0;
      this.dy = 0;
      this.move = this.move.bind(this)
      this.stop = this.stop.bind(this)
      this.edgeRight = 500
      this.jump = 0;
      this.fall = true
      this.character = new Sprite(ctx)
      this.scrollRight = false;
      this.scrollLeft = false;
      this.direction = true;
      this.platform = false
      this.blockR = false;
      this.blockL = false;
      this.blockClear = 0
      this.lock = true
      // store lives?
   }

   draw(ctx) {
      this.character.draw(this.x, this.y, this.direction, this.dx === 0)
      if(this.dx === 0){
         this.character.animationFrame = 0
      }
      if( this.lock ){
         return
      }
      if ( this.dx != 0 && !this.checkScroll() && this.checkBlock() ){
         this.x += this.dx;
         this.scrollRight = false;
         this.scrollLeft = false         
      }
      this.y += this.dy;
      if ( this.y > this.floor ){
         this.y = this.floor 
         this.dy = 0
         this.jump = 0
         this.fall = false
      }
      if ( this.dy < TERMINAL && this.y < this.floor && this.fall) {
         this.dy += GRAVITY;
      }
   }

   checkScroll(){
      let scroll = false;
      if (this.dx > 0 && this.x >= this.edgeRight) {
         this.scrollRight = true;
         scroll = true;
      } else if (this.dx < 0 && this.x <= 100) {
         this.scrollLeft = true;
         scroll = true
      } 
      return scroll
   }

   checkBlock(){

      if(this.dx > 0 && this.blockR ){
         return false;
      } else if (this.dx < 0 && this.blockL ){
         return false
      } else {
         return true
      }
   }
   move(e){
      let key = e.key;
      if (this.lock){
         this.lock = false
      }
      if( key === 'a' || key === 'd' ){

            this.dx = MOVEMENTS[key]

         this.direction = key === 'd' ? true : false
      } else if( (e.which === 32 || e.key === 'w') && this.jump < 2 ){
         this.dy = this.dy > 0 ? -8 : this.dy - 8
         this.jump += 1
         this.fall = true
      } else if( key === 's' && this.platform){
         this.y += 5;
         this.fall = true
      } else if(key === 'm'){
         this.character.mapa = !this.character.mapa
      }
   }
   
   stop(key){
      if (this.dx === 0) {
         return
      }
      if (key === "a" || key === "d") {
         this.dx = 0;
         this.scrollLeft = false;
         this.scrollRight = false;
      
      }
   }

}

/* Notes
Player methods:
*/