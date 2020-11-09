import LevelOne from './level_one';
import LevelTwo from './level_two';
import LevelThree from './level_three';
const LEVELS = {
   1: (dimensions) => {
      return new LevelOne(dimensions)
   },
   2: (dimensions) => {
      return new LevelTwo(dimensions)
   },
   3: (dimensions) => {
      return new LevelThree(dimensions)
   }
}

export default LEVELS;