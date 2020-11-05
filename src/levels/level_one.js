import Terrain from './terrain.js';
import TerrainUtil from '../terrain_utils'
export default class LevelOne {
   constructor(dimensions){
      this.width = dimensions.width;
      this.height = dimensions.height;
      this.left = 0;
      this.right = this.width;
      this.terrain = this.formTerrain();
      this.numTerrain = this.terrain.length;
      this.dx = 0
      this.won = this.won.bind(this)
      this.move = this.move.bind(this);
      this.stop = this.stop.bind(this);
      this.startPos = [125, 535]
      this.intSeen = false
      this.bullets = []
   }

   formTerrain(){
      let levelObjects = [];
      levelObjects.push(Terrain.ground(
         0, 
         580, 
         400, 
         this.height,
         this.width,
         false)
      );
      levelObjects.push(Terrain.ground(
         500, 
         550, 
         100, 
         this.height,
         this.width,
         false)
      );
      levelObjects.push(Terrain.ground(
         550, 
         500, 
         100, 
         this.height,
         this.width,
         false)
      );
      levelObjects.push(Terrain.ground(
         725,
         500, 
         40, 
         this.height,
         this.width,
         false)
      );
      levelObjects.push(Terrain.ground(
         825,
         435, 
         40, 
         this.height,
         this.width,
         false)
      );
      levelObjects.push(Terrain.ground(
         975,
         550, 
         40, 
         this.height,
         this.width,
         false)
      );
      levelObjects.push(Terrain.ground(
         1300,
         550, 
         300, 
         this.height,
         this.width,
         false)
      );
      levelObjects.push(Terrain.ground(
         1300,
         550, 
         300, 
         this.height,
         this.width,
         false)
      );
      levelObjects.push(Terrain.ground(
         1600,
         -100, 
         this.width, 
         this.height + 100,
         this.width,
         false)
      );
      return levelObjects
   }
   move(direction){
      this.dx = direction;
   }
   won(player){
      return this.left >1400;
   }
   stop(key){
      this.dx = 0
   }
   draw(ctx){
      const { left, right } = this
      if(this.left > 0 || this.dx > 0){
         this.left += this.dx
         this.right += this.dx
      }
      
      for(let i = 0; i < this.numTerrain; i++) {
         let ter = this.terrain[i];
         if( ter.start < right && ter.end > left ){
            ter.render = true
            let dims = ter.getDim(left);
            if (!ter.platform){
               TerrainUtil.drawGround(ctx, ...dims)
            } else {
               ctx.fillStyle = "#E76F51";
               ctx.fillRect(dims[0], dims[1], dims[2], dims[3])
            }
         } else {
            ter.render = false;
         }
      }
      if(this.left < 100 && !this.intSeen) {
         ctx.fillStyle = "#F4A261";
         ctx.textAlign = "center";
         ctx.font = "20px Georgia";
         ctx.fillText("Press A and W to move", this.width / 2, this.height / 2);
         ctx.fillText(
         "Press W or space to jump",
         this.width / 2,
         this.height / 2 + 20
         );
         ctx.fillText(
         "Press W or space twice to double jump",
         this.width / 2,
         this.height / 2 + 40
         );
      } else if(!this.intSeen) {
         this.intSeen = true
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
   }
}