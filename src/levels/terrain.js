// import terrain from '../images/sheet.png';

export default class Terrain {

   static ground(x, y, width, height, canvasWidth, platform){
      return {
         platform: platform,
         width: width,
         height: height,
         start: x,
         y: y,
         render: false,
         end: (x + width + canvasWidth),
         getDim: (currentPos) => {
            return [(x - currentPos), y, width, height]
         }
      }      
   }

   // drawPlatform(ctx, options){
   //    let platform = new Image();
   //    platform.src = terrain
   //    ctx.drawImage(platform, 0, 0)
   // }
}