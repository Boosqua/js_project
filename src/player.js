const MOVEMENTS = {
   a: -5,
   d: 5,
}
const GRAVITY = .5
const TERMINAL = 15
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
      if ( this.dy < TERMINAL && this.y < this.floor ) {
         this.dy += GRAVITY;
         console.log(this.dy)
      }
   }

   move(e){
      let key = e.key;
      console.log('hi')
      if( key === 'a' || key === 'd' ){
         this.dx = MOVEMENTS[key]
      } else if( e.key === 'w' 
         && this.jump < 2 ){
         this.dy = this.dy > 0 ? -10 : this.dy - 10
         this.jump += 1
      }
   }
   stop(e){
      let key = e.key;
      if (key === "a" || key === "d") {
         this.dx -= MOVEMENTS[key];
      }
   }
}

/* Notes
Player methods:
*/