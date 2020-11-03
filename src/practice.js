export default class TempGameName {
   constructor(dimensions) {
      this.dimensions = dimensions
      this.x = Math.floor(Math.random() * dimensions.width);  

      this.y = Math.floor(Math.random() * dimensions.height);
      this.dx = 4
      this.dy = 4
      this.radius = 30;
   }

   draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = "blue";
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.stroke();
      if (this.x + this.radius > this.dimensions.width || this.x < this.radius) {
        // dx = dx > 0 ? dx / dx * -1 : dx/dx
        // x = x < 30 ? 30 : width - 30
        // acc = 1.7
         let sign  = this.x < this.radius ? 1 : -1
         this.dx = Math.abs(this.dx) * sign;
      }

      if (this.y + this.radius > this.dimensions.height || this.y < this.radius) {
         let sign = this.y < this.radius ? -1 : 1;
        this.dy = sign * Math.abs(this.dy)
      }

      // x += dx;
      // if (acc > 1) {
      //    dx *= acc;
      //    acc = acc * .95
      //    console.log(acc)
      // }
      this.x += this.dx;
      this.y -= this.dy;
   }
   animate() {
      // this.ctx.fillStyle = "skyblue";
      // this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);

      let ctx = this.ctx;
      /* Testing */
      /* Rectangle */
      ctx.fillStyle = "purple";
      ctx.fillRect(200, 200, 400, 400);
      /* Lines */
      ctx.beginPath();
      ctx.moveTo(50, 300);
      ctx.lineTo(300, 100);
      ctx.lineTo(400, 300);
      ctx.strokeStyle = "red";
      ctx.stroke();

      /* Arcs */
      /* x, y, radius, startAngle, endAngle, clockwise ? */
      ctx.beginPath();
      ctx.arc(200, 200, 30, 0, Math.PI * 2, false);
      ctx.strokeStyle = "yellow";
      ctx.stroke();
      const { width, height } = this.dimensions;
      /* Animating */
      let x = 400;
      let y = 200;
      let dx = 4;
      let dy = 4;
      // let acc = 1.7
      let radius = 30;
      function animate() {
         requestAnimationFrame(animate);
         ctx.clearRect(0, 0, width, height);

         ctx.beginPath();
         ctx.arc(x, y, radius, 0, Math.PI * 2, false);
         ctx.strokeStyle = "blue";
         ctx.fillStyle = "yellow";
         ctx.fill();
         ctx.stroke();
         if (x + radius > width || x < radius) {
         // dx = dx > 0 ? dx / dx * -1 : dx/dx
         // x = x < 30 ? 30 : width - 30
         // acc = 1.7

         dx = -dx;
         }

         if (y + radius > height || y < radius) {
         dy = -dy;
         }

         // x += dx;
         // if (acc > 1) {
         //    dx *= acc;
         //    acc = acc * .95
         //    console.log(acc)
         // }
         x += dx;
         y -= dy;
         // console.log(x)
      }

      animate();
   }
}
