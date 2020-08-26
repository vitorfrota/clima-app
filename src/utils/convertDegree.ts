const convertDegree = (value: number, to: string): number => {
  let valueFormatted = 0;

  switch (to) {
    case 'celsius':
      valueFormatted = value - 273.15;
      break;
    case 'fahrenheit':
      valueFormatted = (value - 273.15) * (9 / 5) + 32;
      break;
    default:
      return valueFormatted;
  }

  return parseFloat(valueFormatted.toFixed(0));
};

export default convertDegree;
