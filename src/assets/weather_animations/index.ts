import rain from './rain.json';
import snow from './snow.json';
import storm from './storm.json';
import sunny from './sunny.json';
import windy from './windy.json';

type Tanimation = {
  [key: string] : any;
}

const animations: Tanimation = {
  _10d: rain,
  _13d: snow,
  _01d: sunny,
  _11d: storm,
  _03d: windy,
};

function getAnimation(id: string): JSON {
  const key = `_${id}`;

  return animations[key];
}

export default getAnimation;
