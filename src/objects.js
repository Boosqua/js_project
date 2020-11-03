import Player from "./player"
import LEVELS from "./levels/levels"

export default class Objects {
   constructor(dimensions) {
      this.dimensions = dimensions
      this.floor = this.dimensions.height - 50;
      this.player = new Player(dimensions, this.floor)
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
      this.player.move(e);
   }

   stop(e){
      this.player.stop(e.key)
   }

   checkCollision(key){
      const { terrain } = this
      let feet = this.player.y + this.player.playerSize;

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
      let feet = player.y + player.playerSize;
      let pLeft = player.x + player.playerSize;
      let pRight = player.x

      terrain.forEach( terr => {
         if( terr.render && 
               feet < (terr.y + 5) && 
               feet > (terr.y - 6) && 
               pLeft > terr.start &&
               pRight < (terr.start + terr.width)){
            player.fall = false;
            player.dy = 0
            player.y = terr.y - player.playerSize
            player.jump = 0
            this.walkingTerrain = terr;
         }
      })
   }

   checkClear(){
      const { walkingTerrain, player } = this;
      let pLeft = player.x + player.playerSize;
      let pRight = player.x;
      if( pLeft <= walkingTerrain.start || pRight >= (walkingTerrain.start + walkingTerrain.width)){
         player.fall = true;
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
      this.level.draw(ctx)
      if( this.player.dy > 0 ){
         this.checkFloor()
      } else if( !this.player.fall ){
         this.checkClear()
      }
      this.player.draw(ctx)
   }
}