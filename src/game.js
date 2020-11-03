/** Necessary **/
import Objects from './objects'
/** Testing **/
import Practice from './practice'

export default class TempGameName {
   constructor(canvas) {
      this.ctx = canvas.getContext("2d");
      this.dimensions = { width: canvas.width, height: canvas.height };
      this.game = new Objects(this.dimensions);
      this.level = 1;
      this.game.selectLevel(1)
      this.animate = this.animate.bind(this)

      document.addEventListener('keydown', this.game.move)
      document.addEventListener('keyup', this.game.stop)
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
      this.game.draw(this.ctx)
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
