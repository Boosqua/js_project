import Player from "./player"
import LEVELS from "./levels/levels"
import terrainUtils from "./terrain_utils"
import TerrainUtil from "./terrain_utils";
export default class Objects {
   constructor(dimensions, ctx) {
      this.ctx = ctx;
      this.dimensions = dimensions;
      this.floor = this.dimensions.height - 50;
      this.player = new Player(dimensions, this.floor, ctx);
      this.terrain = [];
      this.selectLevel = this.selectLevel.bind(this);
      this.move = this.move.bind(this);
      this.stop = this.stop.bind(this);
      this.walkingTerrain = false;
   }

   selectLevel(n) {
      this.level = LEVELS[n](this.dimensions);
      this.terrain = this.level.terrain
      this.player.y = this.level.startPos[1]
      this.player.x = this.level.startPos[0]
   }

   move(e){
      this.checkCollision(e.key);
      this.player.move(e);
   }

   stop(e){
      this.player.stop(e.key)
   }

   checkCollision(){
      if( this.player.dx > 0 ){
         this.player.blockL = false;
         this.checkRight();
      } else if( this.player.dx < 0){
         this.player.blockR = false
         this.checkLeft()
      } 
   }

   checkRight(){
      const { player, terrain, level} = this;
      let pRight = player.x + player.width;
      let pLeft = player.x
      let adjX = level.left;
      let feet = player.y + player.height;
      let head = player.y
      let blocked = false
      terrain.forEach( (terr) => {
         let xS = terr.start - adjX;
         let xE = xS + terr.width
         let top = terr.y;
         let bot = top + terr.height
         if(
            !terr.platform &&
            xS < pRight && 
            xE > pRight &&
            xE > pLeft &&
            feet > top &&
            head < bot){
            blocked = true
            player.x = xS - player.width 

         }
      })
      if (blocked){
         player.blockR = true
      } else {
         player.blockR = false
      }
   }
   checkLeft(){
      
      const { player, terrain, level} = this;
      let pRight = player.x + player.width;
      let pLeft = player.x
      let adjX = level.left;
      let feet = player.y + player.height;
      let head = player.y
      let blocked = false
      terrain.forEach( (terr) => {
         let xS = terr.start - adjX;
         let xE = xS + terr.width
         let top = terr.y;
         let bot = top + terr.height
         if(
            !terr.platform &&
            xS < pRight && 
            xE > pLeft &&
            xS < pLeft &&
            feet > top &&
            head < bot){
            blocked = true
            player.x = xE 

         }
      })
      if (blocked){
         player.blockL = true
      } else {
         player.blockL = false
      }
   }
   checkFloor(){
      const { terrain, player } = this;
      let feet = player.y + player.height;
      let pLeft = player.x + player.width;
      let pRight = player.x;

      terrain.forEach( terr => {
         let terrStart = terr.start - this.level.left;
         if( terr.render && 
               feet < (terr.y + 5) && 
               feet > (terr.y - 6) && 
               pLeft > terrStart &&
               pRight < (terrStart + terr.width) &&
               this.walkingTerrain != terr){
            player.fall = false;
            player.platform = terr.platform
            player.dy = 0;
            player.y = terr.y - player.height - 4;
            player.jump = 0;
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
         this.walkingTerrain = false;
      }
   }

   draw(ctx) {
      this.checkCollision()
      if(!this.player.scrollLeft && !this.player.scrollRight){
         this.level.stop()
      } else {
         let dir = this.player.scrollRight? 5 : -5;
         this.level.move(dir);
      }
      if(this.player.dy < 0){
         this.walkingTerrain = false
      }
      this.level.draw(ctx);
      if( this.player.dy > 0 ){
         this.checkFloor();
      } else if( !this.player.fall ){
         this.checkClear();
      }
      this.player.draw(ctx);
   }
}