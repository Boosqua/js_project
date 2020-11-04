import Player from "./player"
import LEVELS from "./levels/levels"

export default class Objects {
   constructor(dimensions, ctx) {
      this.ctx = ctx
      this.dimensions = dimensions
      this.floor = this.dimensions.height - 50;
      this.player = new Player(dimensions, this.floor, ctx)
      this.terrain = [];
      this.selectLevel = this.selectLevel.bind(this)
      this.move = this.move.bind(this)
      this.stop = this.stop.bind(this)
      this.walkingTerrain = false
   }

   selectLevel(n) {
      this.level = LEVELS[n](this.dimensions.width);
      this.terrain = this.level.terrain
   }

   move(e){
      this.checkCollision(e.key)
      // if(this.player.scrollRight && e.key === 'd'){
      //    this.level.move(5);
      // } else if(this.player.scrollLeft && e.key === 's'){
      //    this.level.move(-5);
      // }
      this.player.move(e);
   }

   stop(e){
      this.player.stop(e.key)
   }

   checkCollision(key){
      const { terrain } = this
      let feet = this.player.y + this.player.height;

      // for( let i = 0; i < terrain.length; i++ ) {
      //    let ter = terrain[i];
      //    console.
      //    if ( !ter.render ) continue;

      //    switch (key) {
      //       case 's':
      //          console.log(this.checkFloor(ter.y, feet))
      //       default:
      //          break;
      //    }
      // }
   }
   checkFloor(){
      const { terrain, player } = this;
      let feet = player.y + player.height;
      let pLeft = player.x + player.width;
      let pRight = player.x

      terrain.forEach( terr => {
         let terrStart = terr.start - this.level.left
         if( terr.render && 
               feet < (terr.y + 5) && 
               feet > (terr.y - 6) && 
               pLeft > terrStart &&
               pRight < (terrStart + terr.width)){
            player.fall = false;
            player.dy = 0
            player.y = terr.y - player.height
            player.jump = 0
            this.walkingTerrain = terr;
         }
      })
   }

   checkClear(){
      const { walkingTerrain, player } = this;
      let pLeft = player.x + player.width;
      let pRight = player.x;
      let terrStart = walkingTerrain.start - this.level.left
      if( pLeft <= terrStart || pRight >= (terrStart + walkingTerrain.width)){
         player.fall = true;
         this.walkingTerrain = false
      }
   }

   draw(ctx) {
      ctx.fillStyle = "black";
      ctx.fillRect(
         0,
         this.floor,
         this.dimensions.width,
         this.dimensions.height
      );
      if(!this.player.scrollLeft && !this.player.scrollRight){
         this.level.stop()
      } else {
         let dir = this.player.scrollRight? 5 : -5
         this.level.move(dir)
      }
      this.level.draw(ctx)
      if( this.player.dy > 0 ){
         this.checkFloor()
      } else if( !this.player.fall ){
         this.checkClear()
      }
      this.player.draw(ctx)
   }
}