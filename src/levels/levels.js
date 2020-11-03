import LevelOne from './level_one';


const LEVELS = {
   1: (width) => {
      return new LevelOne(width)
   }
}

export default LEVELS;