

export default class Terrain {

   static ground(x, y, width, height, canvasWidth, platform){
      return {
         platform: platform,
         width: width,
         start: x,
         y: y,
         render: false,
         end: (x + width + canvasWidth),
         getDim: (currentPos) => {
            return [(x - currentPos), y, width, height]
         }
      }      
   }
}