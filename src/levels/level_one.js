import Terrain from './terrain.js';

export default class LevelOne {
   constructor(width){
      this.width = width;
      this.left = 0;
      this.right = this.width;
      this.terrain = this.formTerrain();
      this.numTerrain = this.terrain.length;
      this.dx = 0
      this.move = this.move.bind(this);
      this.stop = this.stop.bind(this)
   }

   formTerrain(){
      let levelObjects = [];
      levelObjects.push(Terrain.ground(
         400, 
         500, 
         100, 
         10,
         this.width,
         true)
      );
      levelObjects.push(Terrain.ground(
         550, 
         400, 
         50, 
         10,
         this.width,
         true)
      );
      levelObjects.push(Terrain.ground(
         300, 
         600, 
         50, 
         10,
         this.width,
         true)
      );
      // levelObjects.push(Terrain.ground(
      //    300, 
      //    600, 
      //    50, 
      //    10,
      //    this.width,
      //    false)
      // );
      return levelObjects
   }
   move(direction){
      this.dx = direction;
   }

   stop(key){
      this.dx = 0
   }
   draw(ctx){
      const { left, right } = this
      this.left += this.dx
      for(let i = 0; i < this.numTerrain; i++) {
         let ter = this.terrain[i];
         if( ter.start < right && ter.end > left ){
            ter.render = true
            let dims = ter.getDim(left);
            ctx.fillStyle = "#E76F51";
            ctx.fillRect(dims[0], dims[1], dims[2], dims[3])
         } else {
            ter.render = false;
         }
      }

   }  
}