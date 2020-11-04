import Sprite from './sprites'
const MOVEMENTS = {
   a: -5,
   d: 5,
}
const GRAVITY = .5
const TERMINAL = 10
export default class Player {
   constructor(dimensions, floor, ctx){
      this.ctx = ctx
      this.dimensions = dimensions;
      this.height = 40
      this.width = 30
      this.floor = floor - this.height
      this.x = dimensions.width / 2;
      this.y = floor
      this.dx = 0;
      this.dy = 0;
      this.move = this.move.bind(this)
      this.stop = this.stop.bind(this)
      this.jump = 0;
      this.fall = false
      this.character = new Sprite(ctx)
      this.scrollRight = false;
      this.scrollLeft = false;
      this.direction = true;
      this.platform = true
      // store lives?
   }

   draw(ctx) {
      this.character.draw(this.x, this.y, this.direction, this.dx === 0)
      if(this.dx === 0){
         this.character.animationFrame = 0
      }

      if(this.dx > 0 && this.x >= 600){
         this.scrollRight = true;
      } else if (this.dx < 0 && this.x <= 50){
         this.scrollLeft = true;
      } else if ( this.dx != 0 ){
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

   move(e){
      let key = e.key;

      if( key === 'a' || key === 'd' ){
         this.dx = MOVEMENTS[key]
         this.direction = key === 'd' ? true : false
      } else if( e.key === 'w' && this.jump < 2 ){
         this.dy = this.dy > 0 ? -8 : this.dy - 8
         this.jump += 1
         this.fall = true
      } else if( key === 's' && this.platform){
         this.y += 5;
         this.fall = true
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