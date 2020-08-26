import snow from './snow.json';
import storm from './storm.json';
import sunny from './sunny.json';
import windy from './windy.json';

type Tanimation = {
  [key: string] : any;
}

const animations: Tanimation = {
  _13d: snow,
  _01d: sunny,
  _11d: storm,
  _03d: windy,
};

export default animations;
