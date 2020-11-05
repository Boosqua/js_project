export default class bullet {
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
      ctx.strokeStyle = "blue";
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.stroke();
      this.move()
   }

   move(){
      this.x += this.dx,
      this.y = this.dy
   }
}