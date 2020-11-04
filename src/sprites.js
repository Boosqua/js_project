const IMAGESCROLL = 32;

import characterSheet from './images/characters.png';
import charactersReverse from './images/characters_reverse.png'

export default class Sprite {
   constructor(ctx, width, height) {
      this.ctx = ctx;
      this.img = new Image();
      this.img.src = characterSheet;
      this.animationFrame = 0;
      this.imgY = 40
      this.imgR = new Image();
      this.imgR.src = charactersReverse
   }

   draw(x, y, direction, idle, width, height){
      this.ctx.mozImageSmoothingEnabled = false;
      this.ctx.webkitImageSmoothingEnabled = false;
      this.ctx.msImageSmoothingEnabled = false;
      this.ctx.imageSmoothingEnabled = false;
      let img;
      let imgY
      if( direction ){
         img = this.img;
         imgY = this.imgY;
      } else {
         img = this.imgR;
         imgY = this.imgY - 2
      }
      // this.ctx.fillStyle = "yellow";
      // this.ctx.fillRect(40,40,40,40)
      // this.ctx.drawImage(this.img, 10, 10)
      // this.ctx.drawImage(this.img, 10, 40, 14, 24, 0, 0, 20, 35)
      // this.ctx.drawImage(this.img, 42, 40, 14, 24, 40, 0, 20, 35)
      // this.ctx.drawImage(this.img, 74, 40, 14, 24, 80, 0, 20, 35)
      // this.ctx.drawImage(this.img, 106, 40, 14, 24, 120, 0, 20, 35)
      this.animationFrame = this.animationFrame >= 59 ? 0 : this.animationFrame + 1 
      let imgX = (10 + (32 * Math.floor(this.animationFrame / 15)))

      this.ctx.drawImage(
         img,
         imgX,
         imgY,
         14,
         24,
         x,
         y,30, 40
      )
   }
}