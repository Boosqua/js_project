const MOVEMENTS = {
   a: -5,
   d: 5,
}
const GRAVITY = .5
const TERMINAL = 10
export default class Player {
   constructor(dimensions, floor){
      this.dimensions = dimensions;
      this.playerSize = 40
      this.floor = floor - this.playerSize
      this.x = dimensions.width / 2;
      this.y = floor
      this.dx = 0;
      this.dy = 0;
      this.move = this.move.bind(this)
      this.stop = this.stop.bind(this)
      this.jump = 0;
      this.fall = true
      // store lives?
   }

   draw(ctx) {
      ctx.fillStyle = "#E9C46A";
      ctx.fillRect(this.x, this.y, this.playerSize, this.playerSize);
      this.x += this.dx;
      this.y += this.dy;
      if ( this.y > this.floor ){
         this.y = this.floor 
         this.dy = 0
         this.jump = 0
      }
      if ( this.dy < TERMINAL && this.y < this.floor && this.fall) {
         this.dy += GRAVITY;
      }
   }

   move(e){
      let key = e.key;
      if( key === 'a' || key === 'd' ){
         this.dx = MOVEMENTS[key]
      } else if( e.key === 'w' 
         && this.jump < 2 ){
         console.log(this.dy)
         this.dy = this.dy > 0 ? -8 : this.dy - 8
         this.jump += 1
         this.fall = true
      } else if( key === 's' ){
         this.y += 5;
         this.fall = true
      }
   }
   
   stop(key){
      if (key === "a" || key === "d") {
         this.dx -= MOVEMENTS[key];
      }
   }
}

/* Notes
Player methods:
*/