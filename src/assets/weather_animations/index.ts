import clouds from './clouds.json';
import mist from './mist.json';
import rain from './rain.json';
import snow from './snow.json';
import storm from './storm.json';
import sunny from './sunny.json';
import windy from './windy.json';

type Tanimation = {
  [key: string] : any;
}

const animations: Tanimation = {
  _01d: sunny,
  _02d: clouds,
  _03d: windy,
  _04d: windy,
  _09d: rain,
  _10d: rain,
  _13d: snow,
  _11d: storm,
  _50d: mist,
};

function getAnimation(id: string): JSON {
  const key = `_${id}`;

  return animations[key];
}

export default getAnimation;
