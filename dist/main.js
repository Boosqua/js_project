/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ TempGameName\n/* harmony export */ });\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n/* harmony import */ var _practice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./practice */ \"./src/practice.js\");\n/** Necessary **/\n\n/** Testing **/\n\n\nclass TempGameName {\n   constructor(canvas) {\n      this.ctx = canvas.getContext(\"2d\");\n      this.dimensions = { width: canvas.width, height: canvas.height };\n      this.game = new _objects__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions);\n      this.level = 1;\n      this.game.selectLevel(1)\n      this.animate = this.animate.bind(this)\n\n      document.addEventListener('keydown', this.game.move)\n      document.addEventListener('keyup', this.game.stop)\n      /** Testing **/\n      // this.practice = this.circles()\n      /** Testing **/\n      this.animate();\n   }\n\n   animate() {\n      requestAnimationFrame(this.animate);\n      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)\n      this.ctx.fillStyle = \"#264653\";\n      this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n      this.game.draw(this.ctx)\n      /** Testing **/\n      // let ctx = this.ctx\n      // this.practice.forEach( circle => circle.draw(ctx) )\n   }\n\n   /* Testing */\n   circles(){\n      let circles = [];\n      for( let i = 0; i < 10; i++){\n         circles.push(new _practice__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions));\n      }\n\n      return circles\n   }\n\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/** Necessary **/\n\n/** Testing **/\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n   let canvas = document.getElementById(\"game-board\");\n\n\n   const game = new _game__WEBPACK_IMPORTED_MODULE_0__.default(canvas);\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/levels/level_one.js":
/*!*********************************!*\
  !*** ./src/levels/level_one.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ LevelOne\n/* harmony export */ });\n/* harmony import */ var _terrain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain.js */ \"./src/levels/terrain.js\");\n\n\nclass LevelOne {\n   constructor(width){\n      this.width = width;\n      this.left = 0;\n      this.right = this.width;\n      this.terrain = this.formTerrain();\n      this.numTerrain = this.terrain.length;\n   }\n\n   formTerrain(){\n      let levelObjects = [];\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.platform(\n         400, \n         500, \n         100, \n         10,\n         this.width)\n      );\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.platform(\n         550, \n         400, \n         50, \n         10,\n         this.width)\n      );\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.platform(\n         300, \n         600, \n         50, \n         10,\n         this.width)\n      );\n      return levelObjects\n   }\n\n   draw(ctx){\n      const { left, right } = this\n      for(let i = 0; i < this.numTerrain; i++) {\n         let ter = this.terrain[i];\n         if( ter.start < right && ter.end > left ){\n            ter.render = true\n            let dims = ter.getDim(left);\n            ctx.fillStyle = \"#E76F51\";\n            ctx.fillRect(dims[0], dims[1], dims[2], dims[3])\n         } else {\n            ter.render = false;\n         }\n      }\n   }  \n}\n\n//# sourceURL=webpack:///./src/levels/level_one.js?");

/***/ }),

/***/ "./src/levels/levels.js":
/*!******************************!*\
  !*** ./src/levels/levels.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _level_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level_one */ \"./src/levels/level_one.js\");\n\n\n\nconst LEVELS = {\n   1: (width) => {\n      return new _level_one__WEBPACK_IMPORTED_MODULE_0__.default(width)\n   }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LEVELS);\n\n//# sourceURL=webpack:///./src/levels/levels.js?");

/***/ }),

/***/ "./src/levels/terrain.js":
/*!*******************************!*\
  !*** ./src/levels/terrain.js ***!
  \*******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Terrain\n/* harmony export */ });\n\n\nclass Terrain {\n\n   static platform(x, y, width, height, canvasWidth){\n      return {\n         width: width,\n         start: x,\n         y: y,\n         render: false,\n         end: (x + width + canvasWidth),\n         getDim: (currentPos) => {\n            return [(x - currentPos), y, width, height]\n         }\n      }      \n   }\n}\n\n//# sourceURL=webpack:///./src/levels/terrain.js?");

/***/ }),

/***/ "./src/objects.js":
/*!************************!*\
  !*** ./src/objects.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Objects\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _levels_levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels/levels */ \"./src/levels/levels.js\");\n\n\n\nclass Objects {\n   constructor(dimensions) {\n      this.dimensions = dimensions\n      this.floor = this.dimensions.height - 50;\n      this.player = new _player__WEBPACK_IMPORTED_MODULE_0__.default(dimensions, this.floor)\n      this.terrain = [];\n      this.selectLevel = this.selectLevel.bind(this)\n      this.move = this.move.bind(this)\n      this.stop = this.stop.bind(this)\n      this.walkingTerrain = false\n   }\n\n   selectLevel(n) {\n      this.level = _levels_levels__WEBPACK_IMPORTED_MODULE_1__.default[n](this.dimensions.width);\n      this.terrain = this.level.terrain\n   }\n\n   move(e){\n      this.checkCollision(e.key)\n      this.player.move(e);\n   }\n\n   stop(e){\n      this.player.stop(e.key)\n   }\n\n   checkCollision(key){\n      const { terrain } = this\n      let feet = this.player.y + this.player.playerSize;\n\n      // for( let i = 0; i < terrain.length; i++ ) {\n      //    let ter = terrain[i];\n      //    console.\n      //    if ( !ter.render ) continue;\n\n      //    switch (key) {\n      //       case 's':\n      //          console.log(this.checkFloor(ter.y, feet))\n      //       default:\n      //          break;\n      //    }\n      // }\n   }\n   checkFloor(){\n      const { terrain, player } = this;\n      let feet = player.y + player.playerSize;\n      let pLeft = player.x + player.playerSize;\n      let pRight = player.x\n\n      terrain.forEach( terr => {\n         if( terr.render && \n               feet < (terr.y + 5) && \n               feet > (terr.y - 6) && \n               pLeft > terr.start &&\n               pRight < (terr.start + terr.width)){\n            player.fall = false;\n            player.dy = 0\n            player.y = terr.y - player.playerSize\n            player.jump = 0\n            this.walkingTerrain = terr;\n         }\n      })\n   }\n\n   checkClear(){\n      const { walkingTerrain, player } = this;\n      let pLeft = player.x + player.playerSize;\n      let pRight = player.x;\n      if( pLeft <= walkingTerrain.start || pRight >= (walkingTerrain.start + walkingTerrain.width)){\n         player.fall = true;\n      }\n   }\n\n   draw(ctx) {\n      ctx.fillStyle = \"black\";\n      ctx.fillRect(\n         0,\n         this.floor,\n         this.dimensions.width,\n         this.dimensions.height\n      );\n      this.level.draw(ctx)\n      if( this.player.dy > 0 ){\n         this.checkFloor()\n      } else if( !this.player.fall ){\n         this.checkClear()\n      }\n      this.player.draw(ctx)\n   }\n}\n\n//# sourceURL=webpack:///./src/objects.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Player\n/* harmony export */ });\nconst MOVEMENTS = {\n   a: -5,\n   d: 5,\n}\nconst GRAVITY = .5\nconst TERMINAL = 10\nclass Player {\n   constructor(dimensions, floor){\n      this.dimensions = dimensions;\n      this.playerSize = 40\n      this.floor = floor - this.playerSize\n      this.x = dimensions.width / 2;\n      this.y = floor\n      this.dx = 0;\n      this.dy = 0;\n      this.move = this.move.bind(this)\n      this.stop = this.stop.bind(this)\n      this.jump = 0;\n      this.fall = true\n      // store lives?\n   }\n\n   draw(ctx) {\n      ctx.fillStyle = \"#E9C46A\";\n      ctx.fillRect(this.x, this.y, this.playerSize, this.playerSize);\n      this.x += this.dx;\n      this.y += this.dy;\n      if ( this.y > this.floor ){\n         this.y = this.floor \n         this.dy = 0\n         this.jump = 0\n      }\n      if ( this.dy < TERMINAL && this.y < this.floor && this.fall) {\n         this.dy += GRAVITY;\n      }\n   }\n\n   move(e){\n      let key = e.key;\n      if( key === 'a' || key === 'd' ){\n         this.dx = MOVEMENTS[key]\n      } else if( e.key === 'w' \n         && this.jump < 2 ){\n         console.log(this.dy)\n         this.dy = this.dy > 0 ? -8 : this.dy - 8\n         this.jump += 1\n         this.fall = true\n      } else if( key === 's' ){\n         this.y += 5;\n         this.fall = true\n      }\n   }\n   \n   stop(key){\n      if (key === \"a\" || key === \"d\") {\n         this.dx -= MOVEMENTS[key];\n      }\n   }\n}\n\n/* Notes\nPlayer methods:\n*/\n\n//# sourceURL=webpack:///./src/player.js?");

/***/ }),

/***/ "./src/practice.js":
/*!*************************!*\
  !*** ./src/practice.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ TempGameName\n/* harmony export */ });\nclass TempGameName {\n   constructor(dimensions) {\n      this.dimensions = dimensions\n      this.x = Math.floor(Math.random() * dimensions.width);  \n\n      this.y = Math.floor(Math.random() * dimensions.height);\n      this.dx = 4\n      this.dy = 4\n      this.radius = 30;\n   }\n\n   draw(ctx) {\n      ctx.beginPath();\n      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);\n      ctx.strokeStyle = \"blue\";\n      ctx.fillStyle = \"yellow\";\n      ctx.fill();\n      ctx.stroke();\n      if (this.x + this.radius > this.dimensions.width || this.x < this.radius) {\n        // dx = dx > 0 ? dx / dx * -1 : dx/dx\n        // x = x < 30 ? 30 : width - 30\n        // acc = 1.7\n         let sign  = this.x < this.radius ? 1 : -1\n         this.dx = Math.abs(this.dx) * sign;\n      }\n\n      if (this.y + this.radius > this.dimensions.height || this.y < this.radius) {\n         let sign = this.y < this.radius ? -1 : 1;\n        this.dy = sign * Math.abs(this.dy)\n      }\n\n      // x += dx;\n      // if (acc > 1) {\n      //    dx *= acc;\n      //    acc = acc * .95\n      //    console.log(acc)\n      // }\n      this.x += this.dx;\n      this.y -= this.dy;\n   }\n   animate() {\n      // this.ctx.fillStyle = \"skyblue\";\n      // this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n\n      let ctx = this.ctx;\n      /* Testing */\n      /* Rectangle */\n      ctx.fillStyle = \"purple\";\n      ctx.fillRect(200, 200, 400, 400);\n      /* Lines */\n      ctx.beginPath();\n      ctx.moveTo(50, 300);\n      ctx.lineTo(300, 100);\n      ctx.lineTo(400, 300);\n      ctx.strokeStyle = \"red\";\n      ctx.stroke();\n\n      /* Arcs */\n      /* x, y, radius, startAngle, endAngle, clockwise ? */\n      ctx.beginPath();\n      ctx.arc(200, 200, 30, 0, Math.PI * 2, false);\n      ctx.strokeStyle = \"yellow\";\n      ctx.stroke();\n      const { width, height } = this.dimensions;\n      /* Animating */\n      let x = 400;\n      let y = 200;\n      let dx = 4;\n      let dy = 4;\n      // let acc = 1.7\n      let radius = 30;\n      function animate() {\n         requestAnimationFrame(animate);\n         ctx.clearRect(0, 0, width, height);\n\n         ctx.beginPath();\n         ctx.arc(x, y, radius, 0, Math.PI * 2, false);\n         ctx.strokeStyle = \"blue\";\n         ctx.fillStyle = \"yellow\";\n         ctx.fill();\n         ctx.stroke();\n         if (x + radius > width || x < radius) {\n         // dx = dx > 0 ? dx / dx * -1 : dx/dx\n         // x = x < 30 ? 30 : width - 30\n         // acc = 1.7\n\n         dx = -dx;\n         }\n\n         if (y + radius > height || y < radius) {\n         dy = -dy;\n         }\n\n         // x += dx;\n         // if (acc > 1) {\n         //    dx *= acc;\n         //    acc = acc * .95\n         //    console.log(acc)\n         // }\n         x += dx;\n         y -= dy;\n         // console.log(x)\n      }\n\n      animate();\n   }\n}\n\n\n//# sourceURL=webpack:///./src/practice.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;