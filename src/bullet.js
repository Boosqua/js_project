import Player from './player'
import EnemyBullets from "./enemy_bullets";
export default class Bullet {
   constructor(r, x, y, dx, dy){
      this.r = r,
      this.x = x,
      this.y = y,
      this.dx = dx,
      this.dy = dy

      this.move = this.move.bind(this)
   }

   draw(ctx){
      const { r, x, y } = this;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2, false);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.stroke();
      this.move()
   }

   move(){
      this.x += this.dx,
      this.y += this.dy
   }

   static checkHit(bullets, sprites){
      let all = bullets.concat(sprites);
      for( let i = 0; i < sprites.length ; i++ ){
         let ele1 = sprites[i];
         for( let j = 0; j < bullets.length; j++ ){
            let ele2 = bullets[j]

            if( Bullet.checkTwo(ele1, ele2) ){
               return true;
            }
         }
      }
   }
   static checkTwo(ele1, ele2){
      if (ele1 instanceof Player && ele2 instanceof EnemyBullets) {
         return (
            Bullet.checkY(ele2.y, ele1.y, ele2.r, ele1.height) &&
            Bullet.checkX(ele2.x, ele1.x, ele2.r, ele1.width)
            );
      } else if (ele2 instanceof Player && ele1 instanceof EnemyBullets) {
         return (
            Bullet.checkY(ele1.y, ele2.y, ele1.r, ele2.height) &&
            Bullet.checkX(ele1.x, ele2.x, ele1.r, ele2.width)
         );
      }
   }
   static checkY(bulletY, spriteY, r, height){
      if(bulletY -  r > spriteY && bulletY + r < spriteY + height){
         return true;
      }
   }
   static checkX(bulletX, spriteX, r, width){
      if(bulletX -  r > spriteX && bulletX + r < spriteX + width){
         return true;
      }
   }
}