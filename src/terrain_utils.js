import terrain from './images/sheet.png'
const ALLGROUND = { imgX: 115, imgY: 0, width: 110, height: 100}
const GROUND = {imgX: 115, imgY: 32, width: 44, height: 10}
const GROUNDEND = { imgX: 150, imgY: 48, width: 10, height: 10 };
const GROUNDSTART = {imgX: 127, imgY: 48, width: 10, height: 10 }
const GROUNDSIDES = {imgStart: 127, imgEnd: 149, imgY: 55, width: 10, height: 8}
export default class TerrainUtil {
   
   
   static drawGround(ctx, gndX, gndY, gndW, grnH, start = true){
      ctx.mozImageSmoothingEnabled = false;
      ctx.webkitImageSmoothingEnabled = false;
      ctx.msImageSmoothingEnabled = false;
      ctx.imageSmoothingEnabled = false;
      let platform = new Image();
      platform.src = terrain
      if(gndY < 580){
         TerrainUtil.drawSides(ctx, gndW, gndX, gndY + 20, platform)
      }
      if (start){
         ctx.drawImage(
           platform,
           GROUNDSTART.imgX,
           GROUNDSTART.imgY,
           GROUNDSTART.width,
           GROUNDSTART.height,
           gndX,
           gndY,
           GROUNDSTART.width * 2,
           GROUNDSTART.height * 2
         );
         gndX += GROUNDSTART.width * 2
      }
      let groundEnd = Math.floor(gndW / (GROUND.width * 2))
      for(let i = 0; i < groundEnd; i++){
         ctx.drawImage(platform, GROUND.imgX, GROUND.imgY, GROUND.width, GROUND.height, gndX, gndY, GROUND.width * 2, GROUND.height * 2)
         gndX += GROUND.width * 2 
      } 

      gndW = gndW - (groundEnd * GROUND.width * 2) - GROUNDEND.width * 2;
      
      ctx.drawImage(
        platform,
        GROUND.imgX,
        GROUND.imgY,
        gndW / 2,
        GROUND.height,
        gndX,
        gndY,
        gndW,
        GROUND.height * 2
      );
      gndX += gndW
      ctx.drawImage(
         platform,
         GROUNDEND.imgX,
         GROUNDEND.imgY,
         GROUNDEND.width,
         GROUNDEND.height,
         gndX - GROUNDEND.width,
         gndY,
         GROUNDEND.width * 2,
         GROUNDEND.height * 2
      );
   }

   static drawSides(ctx, gndW, gndX, gndY, platform){
      ctx.fillStyle = "black";
      ctx.drawImage(platform, 137, 56, 5, 5, gndX + 10, gndY, gndW - 10, 700-gndY)
      while(gndY < 600){
      ctx.drawImage(
         platform,
         GROUNDSIDES.imgStart,
         GROUNDSIDES.imgY,
         GROUNDSIDES.width,
         GROUNDSIDES.height,
         gndX,
         gndY,
         GROUNDSIDES.width * 2,
         GROUNDSIDES.height * 2
      );
      ctx.drawImage(
         platform,
         GROUNDSIDES.imgEnd,
         GROUNDSIDES.imgY,
         GROUNDSIDES.width,
         GROUNDSIDES.height,
         gndX + gndW - 10,
         gndY,
         GROUNDSIDES.width * 2,
         GROUNDSIDES.height * 2
      );
      gndY += GROUNDSIDES.height * 2
      }
   }
}
