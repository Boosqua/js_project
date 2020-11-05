
export default class LevelUtils {
   constructor(dimensions) {
      this.width = dimensions.width;
      this.height = dimensions.height;
      this.left = 0;
      this.right = this.width;
      this.dx = 0;
      this.move = this.move.bind(this);
      this.stop = this.stop.bind(this);
   }

   move(direction) {
      this.dx = direction;
   }

   stop(key) {
      this.dx = 0;
   }
}