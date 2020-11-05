import LevelOne from './level_one';
import LevelTwo from './level_two'

const LEVELS = {
   1: (dimensions) => {
      return new LevelOne(dimensions)
   },
   2: (dimensions) => {
      return new LevelTwo(dimensions)
   }
}

export default LEVELS;