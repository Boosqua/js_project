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
      this.animate = this.animate.bind(this)
      this.noGame = true;
      this.gameOver = false;
      this.gameRunning = false;
      this.move = this.move.bind(this) 

      document.addEventListener('keydown', this.move)
      document.addEventListener('keyup', this.game.stop)
      this.animate();
   }

   move(e){

      if(this.noGame || this.gameOver){
         this.game.selectLevel(2)
         this.noGame = false;
         this.gameOver = false;
         this.gameRunning = true;
      } else {
         this.game.move(e)
      }
   }
   animate() {
      requestAnimationFrame(this.animate);
      if(this.gameRunning){
         this.over();
      }
      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)
      this.ctx.fillStyle = "#264653";
      this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
      if(this.gameRunning){
         this.game.draw(this.ctx)
      } else if(this.gameOver) {
         this.endGame();
      } else if(this.noGame){
         this.instructions()
      }
      /** Testing **/
      // this.drawGrid();
      // let ctx = this.ctx
      // this.practice.forEach( circle => circle.draw(ctx) )
   }
   over(){
      if(this.game.over()){
         this.gameOver = true;
         this.gameRunning = false;
      }
   }
   instructions(){
      this.ctx.fillStyle = "#F4A261";
      this.ctx.textAlign= "center"
      this.ctx.font = "20px Georgia";
      this.ctx.fillText("Press any button to begin the game", this.dimensions.width / 2, this.dimensions.height / 2);
   }
   endGame(){

      this.ctx.fillStyle = "#F4A261";
      this.ctx.textAlign = "center";
      this.ctx.font = "20px Georgia";
      this.ctx.fillText(
        "you died lol",
        this.dimensions.width / 2,
        this.dimensions.height / 2
      );
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
