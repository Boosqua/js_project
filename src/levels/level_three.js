import Terrain from "./terrain.js";
import TerrainUtil from "../terrain_utils";
import LevelUtils from "./level_utils";
import EnemyBullets from "../enemy_bullets";

export default class LevelThree extends LevelUtils {
   constructor(dimensions) {
      super(dimensions);
      this.buffer = dimensions.width / 5;
      this.terrain = this.formTerrain();
      this.numTerrain = this.terrain.length;
      this.bullets = this.formBullets();
      this.startPos = [125, 525];
      this.startTime = Date.now();
      this.dx = 1
   }
   formTerrain() {
      let levelObjects = []
      levelObjects.push(
         Terrain.ground(550, 500, 100, this.height, this.width, false)
      );

      return levelObjects
   }
   formBullets() {
      return [];
   }

   won() {
      return false;
   }
   draw(ctx){
      const { numTerrain, terrain, right, left } = this;

      for( let i = 0; i < numTerrain; i++ ){
         let ter = terrain[i];
         if( ter.start < right && ter.end > left ){
            ter.render = true
            let dims = ter.getDim(left);
            
            if (!ter.platform){
            TerrainUtil.drawGround(ctx, ...dims)
            } else {
               TerrainUtil.drawPlatform(ctx, ...dims);
            }
         }
      }
   }
   drawText(ctx) {
      ctx.fillStyle = "#F4A261";
      ctx.font = "30px Georgia";
      ctx.fillText(
      "Press any key to begin",
      this.width / 2,
      this.height / 2 + 80
      );
      ctx.font = "20px Georgia";
      ctx.fillText(
      "Is the ground moving...",
      this.width / 2,
      this.height / 2 + 50
      );
   }
}