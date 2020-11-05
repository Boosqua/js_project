import Terrain from "./terrain.js";
import TerrainUtil from "../terrain_utils";
import LevelUtils from './level_utils'
import EnemyBullets from '../enemy_bullets'
export default class LevelTwo extends LevelUtils {
   constructor(dimensions){
      super(dimensions);
      this.buffer = dimensions.width / 5
      this.terrain = this.formTerrain();
      this.numTerrain = this.terrain.length;
      this.bullets = this.formBullets()
      this.startPos = [125, 525];
      this.startTime = Date.now()
   }

   formTerrain(){
      let levelObjects = [];
      levelObjects.push(
         Terrain.ground(
            0, 
            450, 
            this.width, 
            20,
            this.width,
            true
         )
      );
      levelObjects.push(
         Terrain.ground(
            0, 
            325, 
            this.width, 
            20,
            this.width,
            true
         )
      );
      levelObjects.push(
         Terrain.ground(
            0, 
            200, 
            this.width, 
            20,
            this.width,
            true
         )
      );
      levelObjects.push(
         Terrain.ground(
            0, 
            575, 
            this.width, 
            this.height - 575,
            this.width,
            false
         )
      );

      return levelObjects
   }
   won(player){
      let delta = Date.now() -  this.startTime;
      if( delta > 10000){
         console.log("haha!")
      }
   }
   formBullets(){
      // debugger
      let bullets = []
      for(let i = 0; i < 6; i++){
         bullets.push( new EnemyBullets (
            5,
            this.width + (this.buffer * i) + 100,
            300,
            -2,
            0
         ))
         bullets.push( new EnemyBullets (
            5,
            0 - (this.buffer * i),
            175,
            2,
            0
         ))
         bullets.push( new EnemyBullets (
            5,
            (0 - (this.buffer * i) - 200),
            425,
            2.5,
            0
         ))
         bullets.push( new EnemyBullets (
            5,
            this.width + (this.buffer * i) + 300,
            550,
            -3,
            0
         ))
      }
      return bullets
   }
   draw(ctx){
      const { width, left, right, buffer, startTime } = this
      let delta = Date.now() - startTime
      ctx.fillStyle = "#F4A261";
      ctx.font = "15px Georgia";
      ctx.fillText(
         `Time left: ${10 - Math.floor(delta / 1000)}`,
         this.width / 2,
         this.height / 2 - 200
      );

      this.bullets.forEach( (bullet) => {
         if( bullet.x < 0 && bullet.dx < 0 ) {
            bullet.x = width + buffer
         } else if ( bullet.x > width && bullet.dx > 0) {
            bullet.x = 0 - buffer
         } else {
            bullet.draw(ctx)
         }
      })
      for(let i = 0; i < this.numTerrain; i++) {
         let ter = this.terrain[i];
         if( ter.start < right && ter.end > left ){
            ter.render = true
            let dims = ter.getDim(left);
            if (!ter.platform){
               TerrainUtil.drawGround(ctx, ...dims)
            } else {
               ctx.beginPath();
               
               ctx.fillStyle = "black";
               ctx.fillRect(dims[0], dims[1], dims[2], dims[3])
            }
         } else {
            ter.render = false;
         }
      }
   }

   drawText(ctx){
      ctx.fillStyle = "#F4A261";
      ctx.font = "30px Georgia";
      ctx.fillText(
         "Press any key to begin",
         this.width / 2,
         this.height / 2 + 80
      );
         ctx.font = "20px Georgia";
      ctx.fillText(
         "Press S to move between platforms",
         this.width / 2,
         this.height / 2 + 50
      );
   }
}