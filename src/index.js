/** Necessary **/
import TempGameName from './game'
/** Testing **/

document.addEventListener("DOMContentLoaded", () => {
   console.log('Webpack is running')
   let canvas = document.getElementById("game-board");
   const game = new TempGameName(canvas);

})
