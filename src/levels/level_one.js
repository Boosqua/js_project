import Terrain from './terrain.js';

export default class LevelOne {
   constructor(width){
      this.width = width;
      this.left = 0;
      this.right = this.width;
      this.terrain = this.formTerrain();
      this.numTerrain = this.terrain.length;
   }

   formTerrain(){
      let levelObjects = [];
      levelObjects.push(Terrain.platform(
         400, 
         500, 
         100, 
         10,
         this.width)
      );
      levelObjects.push(Terrain.platform(
         550, 
         400, 
         50, 
         10,
         this.width)
      );
      levelObjects.push(Terrain.platform(
         300, 
         600, 
         50, 
         10,
         this.width)
      );
      return levelObjects
   }

   draw(ctx){
      const { left, right } = this
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