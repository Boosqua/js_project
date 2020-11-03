/** Necessary **/
import Player from './player';
/** Testing **/
import Practice from './practice'

export default class TempGameName {
   constructor(canvas) {
      this.ctx = canvas.getContext("2d");
      this.dimensions = { width: canvas.width, height: canvas.height };
      this.floor = this.dimensions.height - 50; 
      this.player = new Player(this.dimensions, this.floor);
      this.animate = this.animate.bind(this)
      document.addEventListener('keydown', this.player.move)
      // document.addEventListener('keypress', this.player.jump)
      document.addEventListener('keyup', this.player.stop)
      /** Testing **/
      // this.practice = this.circles()
      /** Testing **/
      this.animate();
   }

   animate() {
      requestAnimationFrame(this.animate);
      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
      this.ctx.fillStyle = "#264653";
      this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0, this.floor, this.dimensions.width, this.dimensions.height)
      this.player.draw(this.ctx)
      /** Testing **/
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

}
