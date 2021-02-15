export const calculatePositionsOnCircle = (
  numberOfPoints: number,
  radius: number
) => {
  const positions = [];

  for (let i = 0; i < numberOfPoints; i++) {
    var x = radius * Math.cos((2 * Math.PI * i) / numberOfPoints);
    var y = radius * Math.sin((2 * Math.PI * i) / numberOfPoints);

    positions.push([x, y]);
  }
  return positions;
};
