/** Necessary **/
import Objects from './objects'
/** Testing **/
import Practice from './practice'

export default class TempGameName {
   constructor(canvas) {
      this.ctx = canvas.getContext("2d");
      this.dimensions = { width: canvas.width, height: canvas.height };
      this.game = new Objects(this.dimensions, this.ctx);
      this.level = 1;
      this.game.selectLevel(2)
      this.animate = this.animate.bind(this)

      document.addEventListener('keydown', this.game.move)
      document.addEventListener('keyup', this.game.stop)
      this.animate();
   }

   animate() {
      requestAnimationFrame(this.animate);
      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
      this.ctx.fillStyle = "#264653";
      this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
      this.game.draw(this.ctx)
      /** Testing **/
      // this.drawGrid();
      // let ctx = this.ctx
      // this.practice.forEach( circle => circle.draw(ctx) )
   }

   /* Testing */
   circles(){
      let circles = [];
      for( let i = 0; i < 10; i++){
         circles.push(new Practice(this.dimensions));
      }
      return circles
   }

   drawGrid(){
      let xEnd = this.dimensions.width;
      let yEnd = this.dimensions.height;
      let x1 = 0;
      let y1 = 0;
      this.ctx.strokeStyle = "rgb(0, 0, 0, .5";
      while( y1 < yEnd ){
         this.ctx.beginPath();
         this.ctx.lineTo(x1, y1);
         this.ctx.lineTo(x1 + 20, y1);
         this.ctx.lineTo(x1 + 20, y1 + 20);
         this.ctx.lineTo(x1, y1 + 20);
         this.ctx.lineTo(x1, y1);
         this.ctx.stroke();
         x1 += 20;
         if ( x1 >= xEnd ){
            x1 = 0;
            y1 += 20;
         }
      }
   }
}
