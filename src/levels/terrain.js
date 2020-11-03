

export default class Terrain {

   static platform(x, y, width, height, canvasWidth){
      return {
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