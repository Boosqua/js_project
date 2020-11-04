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

/***/ "./src/images/characters.png":
/*!***********************************!*\
  !*** ./src/images/characters.png ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"3310f2cc6435910c6dafd281266e6846.png\");\n\n//# sourceURL=webpack:///./src/images/characters.png?");

/***/ }),

/***/ "./src/images/characters_reverse.png":
/*!*******************************************!*\
  !*** ./src/images/characters_reverse.png ***!
  \*******************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e300641fa2553e4f87532779adbae698.png\");\n\n//# sourceURL=webpack:///./src/images/characters_reverse.png?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ TempGameName\n/* harmony export */ });\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n/* harmony import */ var _practice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./practice */ \"./src/practice.js\");\n/** Necessary **/\n\n/** Testing **/\n\n\nclass TempGameName {\n   constructor(canvas) {\n      this.ctx = canvas.getContext(\"2d\");\n      this.dimensions = { width: canvas.width, height: canvas.height };\n      this.game = new _objects__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions, this.ctx);\n      this.level = 1;\n      this.game.selectLevel(1)\n      this.animate = this.animate.bind(this)\n\n      document.addEventListener('keydown', this.game.move)\n      document.addEventListener('keyup', this.game.stop)\n      this.animate();\n   }\n\n   animate() {\n      requestAnimationFrame(this.animate);\n      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)\n      this.ctx.fillStyle = \"#264653\";\n      this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n      this.game.draw(this.ctx)\n      /** Testing **/\n      this.drawGrid();\n      // let ctx = this.ctx\n      // this.practice.forEach( circle => circle.draw(ctx) )\n   }\n\n   /* Testing */\n   circles(){\n      let circles = [];\n      for( let i = 0; i < 10; i++){\n         circles.push(new _practice__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions));\n      }\n      return circles\n   }\n\n   drawGrid(){\n      let xEnd = this.dimensions.width;\n      let yEnd = this.dimensions.height;\n      let x1 = 0;\n      let y1 = 0;\n      this.ctx.strokeStyle = \"rgb(0, 0, 0, .5\"\n      while( y1 < yEnd ){\n         this.ctx.beginPath();\n         this.ctx.lineTo(x1, y1)\n         this.ctx.lineTo(x1 + 20, y1)\n         this.ctx.lineTo(x1 + 20, y1 + 20)\n         this.ctx.lineTo(x1, y1 + 20)\n         this.ctx.lineTo(x1, y1)\n         this.ctx.stroke()\n         x1 += 20;\n         if ( x1 >= xEnd ){\n            x1 = 0;\n            y1 += 20\n         }\n      }\n   }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ LevelOne\n/* harmony export */ });\n/* harmony import */ var _terrain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain.js */ \"./src/levels/terrain.js\");\n\n\nclass LevelOne {\n   constructor(width){\n      this.width = width;\n      this.left = 0;\n      this.right = this.width;\n      this.terrain = this.formTerrain();\n      this.numTerrain = this.terrain.length;\n      this.dx = 0\n      this.move = this.move.bind(this);\n      this.stop = this.stop.bind(this)\n   }\n\n   formTerrain(){\n      let levelObjects = [];\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n         400, \n         500, \n         100, \n         10,\n         this.width,\n         true)\n      );\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n         550, \n         400, \n         50, \n         10,\n         this.width,\n         true)\n      );\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n         300, \n         600, \n         50, \n         10,\n         this.width,\n         true)\n      );\n      // levelObjects.push(Terrain.ground(\n      //    300, \n      //    600, \n      //    50, \n      //    10,\n      //    this.width,\n      //    false)\n      // );\n      return levelObjects\n   }\n   move(direction){\n      this.dx = direction;\n   }\n\n   stop(key){\n      this.dx = 0\n   }\n   draw(ctx){\n      const { left, right } = this\n      this.left += this.dx\n      for(let i = 0; i < this.numTerrain; i++) {\n         let ter = this.terrain[i];\n         if( ter.start < right && ter.end > left ){\n            ter.render = true\n            let dims = ter.getDim(left);\n            ctx.fillStyle = \"#E76F51\";\n            ctx.fillRect(dims[0], dims[1], dims[2], dims[3])\n         } else {\n            ter.render = false;\n         }\n      }\n\n   }  \n}\n\n//# sourceURL=webpack:///./src/levels/level_one.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Terrain\n/* harmony export */ });\n\n\nclass Terrain {\n\n   static ground(x, y, width, height, canvasWidth, platform){\n      return {\n         platform: platform,\n         width: width,\n         start: x,\n         y: y,\n         render: false,\n         end: (x + width + canvasWidth),\n         getDim: (currentPos) => {\n            return [(x - currentPos), y, width, height]\n         }\n      }      \n   }\n}\n\n//# sourceURL=webpack:///./src/levels/terrain.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Objects\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _levels_levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels/levels */ \"./src/levels/levels.js\");\n\n\n\nclass Objects {\n   constructor(dimensions, ctx) {\n      this.ctx = ctx\n      this.dimensions = dimensions\n      this.floor = this.dimensions.height - 50;\n      this.player = new _player__WEBPACK_IMPORTED_MODULE_0__.default(dimensions, this.floor, ctx)\n      this.terrain = [];\n      this.selectLevel = this.selectLevel.bind(this)\n      this.move = this.move.bind(this)\n      this.stop = this.stop.bind(this)\n      this.walkingTerrain = false\n   }\n\n   selectLevel(n) {\n      this.level = _levels_levels__WEBPACK_IMPORTED_MODULE_1__.default[n](this.dimensions.width);\n      this.terrain = this.level.terrain\n   }\n\n   move(e){\n      this.checkCollision(e.key)\n      // if(this.player.scrollRight && e.key === 'd'){\n      //    this.level.move(5);\n      // } else if(this.player.scrollLeft && e.key === 's'){\n      //    this.level.move(-5);\n      // }\n      this.player.move(e);\n   }\n\n   stop(e){\n      this.player.stop(e.key)\n   }\n\n   checkCollision(key){\n      const { terrain } = this\n      let feet = this.player.y + this.player.height;\n\n      // for( let i = 0; i < terrain.length; i++ ) {\n      //    let ter = terrain[i];\n      //    console.\n      //    if ( !ter.render ) continue;\n\n      //    switch (key) {\n      //       case 's':\n      //          console.log(this.checkFloor(ter.y, feet))\n      //       default:\n      //          break;\n      //    }\n      // }\n   }\n   checkFloor(){\n      const { terrain, player } = this;\n      let feet = player.y + player.height;\n      let pLeft = player.x + player.width;\n      let pRight = player.x\n\n      terrain.forEach( terr => {\n         let terrStart = terr.start - this.level.left\n         if( terr.render && \n               feet < (terr.y + 5) && \n               feet > (terr.y - 6) && \n               pLeft > terrStart &&\n               pRight < (terrStart + terr.width)){\n            player.fall = false;\n            player.dy = 0\n            player.y = terr.y - player.height\n            player.jump = 0\n            this.walkingTerrain = terr;\n         }\n      })\n   }\n\n   checkClear(){\n      const { walkingTerrain, player } = this;\n      let pLeft = player.x + player.width;\n      let pRight = player.x;\n      let terrStart = walkingTerrain.start - this.level.left\n      if( pLeft <= terrStart || pRight >= (terrStart + walkingTerrain.width)){\n         player.fall = true;\n         this.walkingTerrain = false\n      }\n   }\n\n   draw(ctx) {\n      ctx.fillStyle = \"black\";\n      ctx.fillRect(\n         0,\n         this.floor,\n         this.dimensions.width,\n         this.dimensions.height\n      );\n      if(!this.player.scrollLeft && !this.player.scrollRight){\n         this.level.stop()\n      } else {\n         let dir = this.player.scrollRight? 5 : -5\n         this.level.move(dir)\n      }\n      this.level.draw(ctx)\n      if( this.player.dy > 0 ){\n         this.checkFloor()\n      } else if( !this.player.fall ){\n         this.checkClear()\n      }\n      this.player.draw(ctx)\n   }\n}\n\n//# sourceURL=webpack:///./src/objects.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Player\n/* harmony export */ });\n/* harmony import */ var _sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites */ \"./src/sprites.js\");\n\nconst MOVEMENTS = {\n   a: -5,\n   d: 5,\n}\nconst GRAVITY = .5\nconst TERMINAL = 10\nclass Player {\n   constructor(dimensions, floor, ctx){\n      this.ctx = ctx\n      this.dimensions = dimensions;\n      this.height = 40\n      this.width = 30\n      this.floor = floor - this.height\n      this.x = dimensions.width / 2;\n      this.y = floor\n      this.dx = 0;\n      this.dy = 0;\n      this.move = this.move.bind(this)\n      this.stop = this.stop.bind(this)\n      this.jump = 0;\n      this.fall = false\n      this.character = new _sprites__WEBPACK_IMPORTED_MODULE_0__.default(ctx)\n      this.scrollRight = false;\n      this.scrollLeft = false;\n      this.direction = true;\n      this.platform = true\n      // store lives?\n   }\n\n   draw(ctx) {\n      this.character.draw(this.x, this.y, this.direction, this.dx === 0)\n      if(this.dx === 0){\n         this.character.animationFrame = 0\n      }\n\n      if(this.dx > 0 && this.x >= 600){\n         this.scrollRight = true;\n      } else if (this.dx < 0 && this.x <= 50){\n         this.scrollLeft = true;\n      } else if ( this.dx != 0 ){\n         this.x += this.dx;\n         this.scrollRight = false;\n         this.scrollLeft = false         \n      }\n      this.y += this.dy;\n      if ( this.y > this.floor ){\n         this.y = this.floor \n         this.dy = 0\n         this.jump = 0\n         this.fall = false\n      }\n      if ( this.dy < TERMINAL && this.y < this.floor && this.fall) {\n         this.dy += GRAVITY;\n      }\n   }\n\n   move(e){\n      let key = e.key;\n\n      if( key === 'a' || key === 'd' ){\n         this.dx = MOVEMENTS[key]\n         this.direction = key === 'd' ? true : false\n      } else if( e.key === 'w' && this.jump < 2 ){\n         this.dy = this.dy > 0 ? -8 : this.dy - 8\n         this.jump += 1\n         this.fall = true\n      } else if( key === 's' && this.platform){\n         this.y += 5;\n         this.fall = true\n      }\n   }\n   \n   stop(key){\n      if (this.dx === 0) {\n         return\n      }\n      if (key === \"a\" || key === \"d\") {\n         this.dx = 0;\n         this.scrollLeft = false;\n         this.scrollRight = false;\n      \n      }\n   }\n}\n\n/* Notes\nPlayer methods:\n*/\n\n//# sourceURL=webpack:///./src/player.js?");

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

/***/ }),

/***/ "./src/sprites.js":
/*!************************!*\
  !*** ./src/sprites.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Sprite\n/* harmony export */ });\n/* harmony import */ var _images_characters_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/characters.png */ \"./src/images/characters.png\");\n/* harmony import */ var _images_characters_reverse_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/characters_reverse.png */ \"./src/images/characters_reverse.png\");\nconst IMAGESCROLL = 32;\n\n\n\n\nclass Sprite {\n   constructor(ctx, width, height) {\n      this.ctx = ctx;\n      this.img = new Image();\n      this.img.src = _images_characters_png__WEBPACK_IMPORTED_MODULE_0__.default;\n      this.animationFrame = 0;\n      this.imgY = 40\n      this.imgR = new Image();\n      this.imgR.src = _images_characters_reverse_png__WEBPACK_IMPORTED_MODULE_1__.default\n   }\n\n   draw(x, y, direction, idle, width, height){\n      this.ctx.mozImageSmoothingEnabled = false;\n      this.ctx.webkitImageSmoothingEnabled = false;\n      this.ctx.msImageSmoothingEnabled = false;\n      this.ctx.imageSmoothingEnabled = false;\n      let img;\n      let imgY\n      if( direction ){\n         img = this.img;\n         imgY = this.imgY;\n      } else {\n         img = this.imgR;\n         imgY = this.imgY - 2\n      }\n      // this.ctx.fillStyle = \"yellow\";\n      // this.ctx.fillRect(40,40,40,40)\n      // this.ctx.drawImage(this.img, 10, 10)\n      // this.ctx.drawImage(this.img, 10, 40, 14, 24, 0, 0, 20, 35)\n      // this.ctx.drawImage(this.img, 42, 40, 14, 24, 40, 0, 20, 35)\n      // this.ctx.drawImage(this.img, 74, 40, 14, 24, 80, 0, 20, 35)\n      // this.ctx.drawImage(this.img, 106, 40, 14, 24, 120, 0, 20, 35)\n      this.animationFrame = this.animationFrame >= 59 ? 0 : this.animationFrame + 1 \n      let imgX = (10 + (32 * Math.floor(this.animationFrame / 15)))\n\n      this.ctx.drawImage(\n         img,\n         imgX,\n         imgY,\n         14,\n         24,\n         x,\n         y,30, 40\n      )\n   }\n}\n\n//# sourceURL=webpack:///./src/sprites.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;