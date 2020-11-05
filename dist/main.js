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

/***/ "./src/images/sheet.png":
/*!******************************!*\
  !*** ./src/images/sheet.png ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"04c1c890693b52bd0188b61a9e7cd3da.png\");\n\n//# sourceURL=webpack:///./src/images/sheet.png?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ bullet\n/* harmony export */ });\nclass bullet {\n   constructor(r, x, y, dx, dy){\n      this.r = r,\n      this.x = x,\n      this.y = y,\n      this.dx = dx,\n      this.dy = dy\n\n      this.move = this.move.bind(this)\n   }\n\n   draw(ctx){\n      const { r, x, y } = this;\n      ctx.beginPath();\n      ctx.arc(x, y, r, 0, Math.PI * 2, false);\n      ctx.strokeStyle = \"blue\";\n      ctx.fillStyle = \"yellow\";\n      ctx.fill();\n      ctx.stroke();\n      this.move()\n   }\n\n   move(){\n      this.x += this.dx,\n      this.y = this.dy\n   }\n}\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/enemy_bullets.js":
/*!******************************!*\
  !*** ./src/enemy_bullets.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ EnemyBullets\n/* harmony export */ });\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\n\nclass EnemyBullets extends _bullet__WEBPACK_IMPORTED_MODULE_0__.default{\n   constructor(...options){\n      super(...options)\n   }\n}\n\n//# sourceURL=webpack:///./src/enemy_bullets.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ TempGameName\n/* harmony export */ });\n/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objects */ \"./src/objects.js\");\n/* harmony import */ var _practice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./practice */ \"./src/practice.js\");\n/** Necessary **/\n\n/** Testing **/\n\n\nclass TempGameName {\n   constructor(canvas) {\n      this.ctx = canvas.getContext(\"2d\");\n      this.dimensions = { width: canvas.width, height: canvas.height };\n      this.game = new _objects__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions, this.ctx);\n      this.level = 1;\n      this.animate = this.animate.bind(this)\n      this.noGame = true;\n      this.gameOver = false;\n      this.gameRunning = false;\n      this.move = this.move.bind(this) \n\n      document.addEventListener('keydown', this.move)\n      document.addEventListener('keyup', this.game.stop)\n      this.animate();\n   }\n\n   move(e){\n\n      if(this.noGame || this.gameOver){\n         this.game.selectLevel(2)\n         this.noGame = false;\n         this.gameOver = false;\n         this.gameRunning = true;\n      } else {\n         this.game.move(e)\n      }\n   }\n   animate() {\n      requestAnimationFrame(this.animate);\n      if(this.gameRunning){\n         this.over();\n      }\n      this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height)\n      this.ctx.fillStyle = \"#264653\";\n      this.ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n      if(this.gameRunning){\n         this.game.draw(this.ctx)\n      } else if(this.gameOver) {\n         this.endGame();\n      } else if(this.noGame){\n         this.instructions()\n      }\n      /** Testing **/\n      // this.drawGrid();\n      // let ctx = this.ctx\n      // this.practice.forEach( circle => circle.draw(ctx) )\n   }\n   over(){\n      if(this.game.over()){\n         this.gameOver = true;\n         this.gameRunning = false;\n      }\n   }\n   instructions(){\n      this.ctx.fillStyle = \"#F4A261\";\n      this.ctx.textAlign= \"center\"\n      this.ctx.font = \"20px Georgia\";\n      this.ctx.fillText(\"Press any button to begin the game\", this.dimensions.width / 2, this.dimensions.height / 2);\n   }\n   endGame(){\n\n      this.ctx.fillStyle = \"#F4A261\";\n      this.ctx.textAlign = \"center\";\n      this.ctx.font = \"20px Georgia\";\n      this.ctx.fillText(\n        \"you died lol\",\n        this.dimensions.width / 2,\n        this.dimensions.height / 2\n      );\n   }\n   /* Testing */\n   circles(){\n      let circles = [];\n      for( let i = 0; i < 10; i++){\n         circles.push(new _practice__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions));\n      }\n      return circles\n   }\n   drawGrid(){\n      let xEnd = this.dimensions.width;\n      let yEnd = this.dimensions.height;\n      let x1 = 0;\n      let y1 = 0;\n      this.ctx.strokeStyle = \"rgb(0, 0, 0, .5\";\n      while( y1 < yEnd ){\n         this.ctx.beginPath();\n         this.ctx.lineTo(x1, y1);\n         this.ctx.lineTo(x1 + 20, y1);\n         this.ctx.lineTo(x1 + 20, y1 + 20);\n         this.ctx.lineTo(x1, y1 + 20);\n         this.ctx.lineTo(x1, y1);\n         this.ctx.stroke();\n         x1 += 20;\n         if ( x1 >= xEnd ){\n            x1 = 0;\n            y1 += 20;\n         }\n      }\n   }\n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ LevelOne\n/* harmony export */ });\n/* harmony import */ var _terrain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain.js */ \"./src/levels/terrain.js\");\n/* harmony import */ var _terrain_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../terrain_utils */ \"./src/terrain_utils.js\");\n\n\nclass LevelOne {\n   constructor(dimensions){\n      this.width = dimensions.width;\n      this.height = dimensions.height;\n      this.left = 0;\n      this.right = this.width;\n      this.terrain = this.formTerrain();\n      this.numTerrain = this.terrain.length;\n      this.dx = 0\n      this.won = this.won.bind(this)\n      this.move = this.move.bind(this);\n      this.stop = this.stop.bind(this);\n      this.startPos = [125, 535]\n      this.intSeen = false\n      this.bullets = []\n   }\n\n   formTerrain(){\n      let levelObjects = [];\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n         0, \n         580, \n         400, \n         this.height,\n         this.width,\n         false)\n      );\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n         500, \n         550, \n         100, \n         this.height,\n         this.width,\n         false)\n      );\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n         550, \n         500, \n         100, \n         this.height,\n         this.width,\n         false)\n      );\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n         725,\n         500, \n         40, \n         this.height,\n         this.width,\n         false)\n      );\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n         825,\n         435, \n         40, \n         this.height,\n         this.width,\n         false)\n      );\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n         975,\n         550, \n         40, \n         this.height,\n         this.width,\n         false)\n      );\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n         1300,\n         550, \n         300, \n         this.height,\n         this.width,\n         false)\n      );\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n         1300,\n         550, \n         300, \n         this.height,\n         this.width,\n         false)\n      );\n      levelObjects.push(_terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n         1600,\n         -100, \n         this.width, \n         this.height + 100,\n         this.width,\n         false)\n      );\n      return levelObjects\n   }\n   move(direction){\n      this.dx = direction;\n   }\n   won(player){\n      return this.left >1400;\n   }\n   stop(key){\n      this.dx = 0\n   }\n   draw(ctx){\n      const { left, right } = this\n      if(this.left > 0 || this.dx > 0){\n         this.left += this.dx\n         this.right += this.dx\n      }\n      \n      for(let i = 0; i < this.numTerrain; i++) {\n         let ter = this.terrain[i];\n         if( ter.start < right && ter.end > left ){\n            ter.render = true\n            let dims = ter.getDim(left);\n            if (!ter.platform){\n               _terrain_utils__WEBPACK_IMPORTED_MODULE_1__.default.drawGround(ctx, ...dims)\n            } else {\n               ctx.fillStyle = \"#E76F51\";\n               ctx.fillRect(dims[0], dims[1], dims[2], dims[3])\n            }\n         } else {\n            ter.render = false;\n         }\n      }\n      if(this.left < 100 && !this.intSeen) {\n         ctx.fillStyle = \"#F4A261\";\n         ctx.textAlign = \"center\";\n         ctx.font = \"20px Georgia\";\n         ctx.fillText(\"Press A and W to move\", this.width / 2, this.height / 2);\n         ctx.fillText(\n         \"Press W or space to jump\",\n         this.width / 2,\n         this.height / 2 + 20\n         );\n         ctx.fillText(\n         \"Press W or space twice to double jump\",\n         this.width / 2,\n         this.height / 2 + 40\n         );\n      } else if(!this.intSeen) {\n         this.intSeen = true\n      }\n   }  \n   drawText(ctx){\n      ctx.fillStyle = \"#F4A261\";\n      ctx.font = \"30px Georgia\";\n      ctx.fillText(\n         \"Press any key to begin\",\n         this.width / 2,\n         this.height / 2 + 80\n      );\n   }\n}\n\n//# sourceURL=webpack:///./src/levels/level_one.js?");

/***/ }),

/***/ "./src/levels/level_two.js":
/*!*********************************!*\
  !*** ./src/levels/level_two.js ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ LevelTwo\n/* harmony export */ });\n/* harmony import */ var _terrain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain.js */ \"./src/levels/terrain.js\");\n/* harmony import */ var _terrain_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../terrain_utils */ \"./src/terrain_utils.js\");\n/* harmony import */ var _level_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level_utils */ \"./src/levels/level_utils.js\");\n/* harmony import */ var _enemy_bullets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enemy_bullets */ \"./src/enemy_bullets.js\");\n\n\n\n\nclass LevelTwo extends _level_utils__WEBPACK_IMPORTED_MODULE_2__.default {\n   constructor(dimensions){\n      super(dimensions);\n      this.terrain = this.formTerrain();\n      this.numTerrain = this.terrain.length;\n      this.bullets = this.formBullets()\n      this.startPos = [125, 525];\n   }\n\n   formTerrain(){\n      let levelObjects = [];\n      levelObjects.push(\n         _terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n            0, \n            450, \n            this.width, \n            20,\n            this.width,\n            true\n         )\n      );\n      levelObjects.push(\n         _terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n            0, \n            325, \n            this.width, \n            20,\n            this.width,\n            true\n         )\n      );\n      levelObjects.push(\n         _terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n            0, \n            200, \n            this.width, \n            20,\n            this.width,\n            true\n         )\n      );\n      levelObjects.push(\n         _terrain_js__WEBPACK_IMPORTED_MODULE_0__.default.ground(\n            0, \n            575, \n            this.width, \n            this.height - 575,\n            this.width,\n            false\n         )\n      );\n\n      return levelObjects\n   }\n   won(){\n\n   }\n   formBullets(){\n      let bullets = []\n      for(let i = 0; i < 10; i++){\n         bullets.push( new _enemy_bullets__WEBPACK_IMPORTED_MODULE_3__.default (\n            10,\n            this.width + (75 * i),\n            275,\n            2,\n            0\n         ))\n      }\n      return bullets\n   }\n   draw(ctx){\n      const { left, right } = this\n      if(this.left > 0 || this.dx > 0){\n         this.left += this.dx\n         this.right += this.dx\n      }\n      this.bullets.forEach( bullet => bullet.draw(ctx))\n      for(let i = 0; i < this.numTerrain; i++) {\n         let ter = this.terrain[i];\n         if( ter.start < right && ter.end > left ){\n            ter.render = true\n            let dims = ter.getDim(left);\n            if (!ter.platform){\n               _terrain_utils__WEBPACK_IMPORTED_MODULE_1__.default.drawGround(ctx, ...dims)\n            } else {\n               ctx.fillStyle = \"#E76F51\";\n               ctx.fillRect(dims[0], dims[1], dims[2], dims[3])\n            }\n         } else {\n            ter.render = false;\n         }\n      }\n\n   }\n}\n\n//# sourceURL=webpack:///./src/levels/level_two.js?");

/***/ }),

/***/ "./src/levels/level_utils.js":
/*!***********************************!*\
  !*** ./src/levels/level_utils.js ***!
  \***********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ LevelUtils\n/* harmony export */ });\n\nclass LevelUtils {\n   constructor(dimensions) {\n      this.width = dimensions.width;\n      this.height = dimensions.height;\n      this.left = 0;\n      this.right = this.width;\n      this.dx = 0;\n      this.move = this.move.bind(this);\n      this.stop = this.stop.bind(this);\n   }\n\n   move(direction) {\n      this.dx = direction;\n   }\n\n   stop(key) {\n      this.dx = 0;\n   }\n}\n\n//# sourceURL=webpack:///./src/levels/level_utils.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _level_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level_one */ \"./src/levels/level_one.js\");\n/* harmony import */ var _level_two__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level_two */ \"./src/levels/level_two.js\");\n\n\n\nconst LEVELS = {\n   1: (dimensions) => {\n      return new _level_one__WEBPACK_IMPORTED_MODULE_0__.default(dimensions)\n   },\n   2: (dimensions) => {\n      return new _level_two__WEBPACK_IMPORTED_MODULE_1__.default(dimensions)\n   }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LEVELS);\n\n//# sourceURL=webpack:///./src/levels/levels.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Terrain\n/* harmony export */ });\n// import terrain from '../images/sheet.png';\n\nclass Terrain {\n\n   static ground(x, y, width, height, canvasWidth, platform){\n      return {\n         platform: platform,\n         width: width,\n         height: height,\n         start: x,\n         y: y,\n         render: false,\n         end: (x + width + canvasWidth),\n         getDim: (currentPos) => {\n            return [(x - currentPos), y, width, height]\n         }\n      }      \n   }\n\n   // drawPlatform(ctx, options){\n   //    let platform = new Image();\n   //    platform.src = terrain\n   //    ctx.drawImage(platform, 0, 0)\n   // }\n}\n\n//# sourceURL=webpack:///./src/levels/terrain.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Objects\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _levels_levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levels/levels */ \"./src/levels/levels.js\");\n/* harmony import */ var _terrain_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terrain_utils */ \"./src/terrain_utils.js\");\n\n\n\n\nclass Objects {\n   constructor(dimensions, ctx) {\n      this.ctx = ctx;\n      this.dimensions = dimensions;\n      this.floor = this.dimensions.height - 50;\n\n      this.player = new _player__WEBPACK_IMPORTED_MODULE_0__.default(dimensions, this.floor, ctx);\n      this.terrain = [];\n      this.selectLevel = this.selectLevel.bind(this);\n      this.move = this.move.bind(this);\n      this.stop = this.stop.bind(this);\n      this.over = this.over.bind(this)\n      this.walkingTerrain = false;\n      this.currentLevel = 1;\n   }\n   over(){\n      if (this.player.y >= this.dimensions.height ){\n         this.currentLevel = 1;\n         return true\n      } else if(this.level.won()){\n         console.log('breh')\n         this.currentLevel++\n         this.selectLevel()\n         return false\n      }\n   }\n   selectLevel() {\n      this.level = _levels_levels__WEBPACK_IMPORTED_MODULE_1__.default[this.currentLevel](this.dimensions);\n      this.terrain = this.level.terrain\n      this.player.direction = true\n      this.player.y = this.level.startPos[1]\n      this.player.x = this.level.startPos[0]\n   }\n\n   move(e){\n      this.checkCollision(e.key);\n      this.player.move(e);\n   }\n\n   stop(e){\n      this.player.stop(e.key)\n   }\n\n   checkCollision(){\n      if( this.player.dx > 0 ){\n         this.player.blockL = false;\n         this.checkRight();\n      } else if( this.player.dx < 0){\n         this.player.blockR = false\n         this.checkLeft()\n      } \n   }\n\n   checkRight(){\n      const { player, terrain, level} = this;\n      let pRight = player.x + player.width;\n      let pLeft = player.x\n      let adjX = level.left;\n      let feet = player.y + player.height - 4;\n      let head = player.y\n      let blocked = false\n      terrain.forEach( (terr) => {\n         let xS = terr.start - adjX;\n         let xE = xS + terr.width\n         let top = terr.y;\n         let bot = top + terr.height\n         if(\n            !terr.platform &&\n            xS < pRight && \n            xE > pRight &&\n            xE > pLeft &&\n            feet > top &&\n            head < bot){\n            blocked = true\n            player.x = xS - player.width \n\n         }\n      })\n      if (blocked){\n         player.blockR = true\n      } else {\n         player.blockR = false\n      }\n   }\n   checkLeft(){\n      \n      const { player, terrain, level} = this;\n      let pRight = player.x + player.width;\n      let pLeft = player.x\n      let adjX = level.left;\n      let feet = player.y + player.height - 4;\n      let head = player.y\n      let blocked = false\n      terrain.forEach( (terr) => {\n         let xS = terr.start - adjX;\n         let xE = xS + terr.width\n         let top = terr.y;\n         let bot = top + terr.height\n         if(\n            !terr.platform &&\n            xS < pRight && \n            xE > pLeft &&\n            xS < pLeft &&\n            feet > top &&\n            head < bot){\n            blocked = true\n            player.x = xE + 4\n\n         }\n      })\n      if (blocked){\n         player.blockL = true\n      } else {\n         player.blockL = false\n      }\n   }\n   checkFloor(){\n      const { terrain, player } = this;\n      let feet = player.y + player.height;\n      let pLeft = player.x + player.width;\n      let pRight = player.x;\n\n      terrain.forEach( terr => {\n         let terrStart = terr.start - this.level.left;\n         if( terr.render && \n               feet < (terr.y + 5) && \n               feet > (terr.y - 6) && \n               pLeft > terrStart &&\n               pRight < (terrStart + terr.width) &&\n               this.walkingTerrain != terr){\n            player.fall = false;\n            player.platform = terr.platform\n            player.dy = 0;\n            player.y = terr.y - player.height - 4;\n            player.jump = 0;\n            this.walkingTerrain = terr;\n         }\n      })\n   }\n\n   checkClear(){\n      const { walkingTerrain, player } = this;\n      let pLeft = player.x + player.width;\n      let pRight = player.x;\n      let terrStart = walkingTerrain.start - this.level.left\n      if( pLeft <= terrStart || pRight >= (terrStart + walkingTerrain.width)){\n         player.fall = true;\n         this.walkingTerrain = false;\n      }\n   }\n\n   draw(ctx) {\n      this.checkCollision()\n      if(!this.player.scrollLeft && !this.player.scrollRight){\n         this.level.stop()\n      } else {\n         let dir = this.player.scrollRight? 5 : -5;\n         this.level.move(dir);\n      }\n      if(this.player.dy < 0){\n         this.walkingTerrain = false\n      }\n      this.level.draw(ctx);\n      if( this.player.dy > 0 ){\n         this.checkFloor();\n      } else if( !this.player.fall ){\n         this.checkClear();\n      }\n      this.player.draw(ctx);\n      if(this.player.lock){\n         this.level.drawText(ctx)\n      }\n   }\n}\n\n//# sourceURL=webpack:///./src/objects.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Player\n/* harmony export */ });\n/* harmony import */ var _sprites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprites */ \"./src/sprites.js\");\n\nconst MOVEMENTS = {\n   a: -4.5,\n   d: 4.5,\n}\nconst GRAVITY = .5\nconst TERMINAL = 10\nclass Player {\n   constructor(dimensions, floor, ctx){\n      this.ctx = ctx\n      this.dimensions = dimensions;\n      this.height = 40\n      this.width = 30\n      this.floor = dimensions.height\n      this.x = dimensions.width / 2;\n      this.y = floor - this.height\n      this.dx = 0;\n      this.dy = 0;\n      this.move = this.move.bind(this)\n      this.stop = this.stop.bind(this)\n      this.jump = 0;\n      this.fall = true\n      this.character = new _sprites__WEBPACK_IMPORTED_MODULE_0__.default(ctx)\n      this.scrollRight = false;\n      this.scrollLeft = false;\n      this.direction = true;\n      this.platform = false\n      this.blockR = false;\n      this.blockL = false;\n      this.blockClear = 0\n      this.lock = true\n      // store lives?\n   }\n\n   draw(ctx) {\n      this.character.draw(this.x, this.y, this.direction, this.dx === 0)\n      if(this.dx === 0){\n         this.character.animationFrame = 0\n      }\n      if( this.lock ){\n         return\n      }\n      if ( this.dx != 0 && !this.checkScroll() && this.checkBlock() ){\n         this.x += this.dx;\n         this.scrollRight = false;\n         this.scrollLeft = false         \n      }\n      this.y += this.dy;\n      if ( this.y > this.floor ){\n         this.y = this.floor \n         this.dy = 0\n         this.jump = 0\n         this.fall = false\n      }\n      if ( this.dy < TERMINAL && this.y < this.floor && this.fall) {\n         this.dy += GRAVITY;\n      }\n   }\n\n   checkScroll(){\n      let scroll = false;\n      if (this.dx > 0 && this.x >= 500) {\n         this.scrollRight = true;\n         scroll = true;\n      } else if (this.dx < 0 && this.x <= 100) {\n         this.scrollLeft = true;\n         scroll = true\n      } \n      return scroll\n   }\n\n   checkBlock(){\n\n      if(this.dx > 0 && this.blockR ){\n         return false;\n      } else if (this.dx < 0 && this.blockL ){\n         return false\n      } else {\n         return true\n      }\n   }\n   move(e){\n      let key = e.key;\n      if (this.lock){\n         this.lock = false\n      }\n      if( key === 'a' || key === 'd' ){\n\n            this.dx = MOVEMENTS[key]\n\n         this.direction = key === 'd' ? true : false\n      } else if( (e.which === 32 || e.key === 'w') && this.jump < 2 ){\n         this.dy = this.dy > 0 ? -8 : this.dy - 8\n         this.jump += 1\n         this.fall = true\n      } else if( key === 's' && this.platform){\n         this.y += 5;\n         this.fall = true\n      }\n   }\n   \n   stop(key){\n      if (this.dx === 0) {\n         return\n      }\n      if (key === \"a\" || key === \"d\") {\n         this.dx = 0;\n         this.scrollLeft = false;\n         this.scrollRight = false;\n      \n      }\n   }\n\n}\n\n/* Notes\nPlayer methods:\n*/\n\n//# sourceURL=webpack:///./src/player.js?");

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

/***/ }),

/***/ "./src/terrain_utils.js":
/*!******************************!*\
  !*** ./src/terrain_utils.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ TerrainUtil\n/* harmony export */ });\n/* harmony import */ var _images_sheet_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/sheet.png */ \"./src/images/sheet.png\");\n\nconst ALLGROUND = { imgX: 115, imgY: 0, width: 110, height: 100}\nconst GROUND = {imgX: 115, imgY: 32, width: 44, height: 10}\nconst GROUNDEND = { imgX: 150, imgY: 48, width: 10, height: 10 };\nconst GROUNDSTART = {imgX: 127, imgY: 48, width: 10, height: 10 }\nconst GROUNDSIDES = {imgStart: 127, imgEnd: 149, imgY: 55, width: 10, height: 8}\nclass TerrainUtil {\n   \n   \n   static drawGround(ctx, gndX, gndY, gndW, grnH, start = true){\n      ctx.mozImageSmoothingEnabled = false;\n      ctx.webkitImageSmoothingEnabled = false;\n      ctx.msImageSmoothingEnabled = false;\n      ctx.imageSmoothingEnabled = false;\n      let platform = new Image();\n      platform.src = _images_sheet_png__WEBPACK_IMPORTED_MODULE_0__.default\n      if(gndY < 580){\n         TerrainUtil.drawSides(ctx, gndW, gndX, gndY + 20, platform)\n      }\n      if (start){\n         ctx.drawImage(\n           platform,\n           GROUNDSTART.imgX,\n           GROUNDSTART.imgY,\n           GROUNDSTART.width,\n           GROUNDSTART.height,\n           gndX,\n           gndY,\n           GROUNDSTART.width * 2,\n           GROUNDSTART.height * 2\n         );\n         gndX += GROUNDSTART.width * 2\n      }\n      let groundEnd = Math.floor(gndW / (GROUND.width * 2))\n      for(let i = 0; i < groundEnd; i++){\n         ctx.drawImage(platform, GROUND.imgX, GROUND.imgY, GROUND.width, GROUND.height, gndX, gndY, GROUND.width * 2, GROUND.height * 2)\n         gndX += GROUND.width * 2 \n      } \n\n      gndW = gndW - (groundEnd * GROUND.width * 2) - GROUNDEND.width * 2;\n      \n      ctx.drawImage(\n        platform,\n        GROUND.imgX,\n        GROUND.imgY,\n        gndW / 2,\n        GROUND.height,\n        gndX,\n        gndY,\n        gndW,\n        GROUND.height * 2\n      );\n      gndX += gndW\n      ctx.drawImage(\n         platform,\n         GROUNDEND.imgX,\n         GROUNDEND.imgY,\n         GROUNDEND.width,\n         GROUNDEND.height,\n         gndX - GROUNDEND.width,\n         gndY,\n         GROUNDEND.width * 2,\n         GROUNDEND.height * 2\n      );\n   }\n\n   static drawSides(ctx, gndW, gndX, gndY, platform){\n      ctx.fillStyle = \"black\";\n      ctx.drawImage(platform, 137, 56, 5, 5, gndX + 10, gndY, gndW - 10, 700-gndY)\n      while(gndY < 600){\n      ctx.drawImage(\n         platform,\n         GROUNDSIDES.imgStart,\n         GROUNDSIDES.imgY,\n         GROUNDSIDES.width,\n         GROUNDSIDES.height,\n         gndX,\n         gndY,\n         GROUNDSIDES.width * 2,\n         GROUNDSIDES.height * 2\n      );\n      ctx.drawImage(\n         platform,\n         GROUNDSIDES.imgEnd,\n         GROUNDSIDES.imgY,\n         GROUNDSIDES.width,\n         GROUNDSIDES.height,\n         gndX + gndW - 10,\n         gndY,\n         GROUNDSIDES.width * 2,\n         GROUNDSIDES.height * 2\n      );\n      gndY += GROUNDSIDES.height * 2\n      }\n   }\n}\n\n\n//# sourceURL=webpack:///./src/terrain_utils.js?");

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