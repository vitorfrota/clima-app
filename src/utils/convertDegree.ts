const convertDegree = (value: number, to: string): number => {
  switch (to) {
    case 'celsius':
      return value - 273.15;
    case 'fahrenheit':
      return (value - 273.15) * (9 / 5) + 32;
    default:
      return value;
  }
};

export default convertDegree;
