import Side from "./Side";
interface Props {
  boxDimension: number;
  position: numberArray;
  rotation: numberArray;
}
interface Side {
  position: numberArray;
  rotation: numberArray;
}
type numberArray = [number, number, number];

const QuarterBox = ({ position, rotation, boxDimension }: Props) => {
  const margin = 0.001;
  const quarterBoxDimension = margin * 2 + boxDimension / 2;
  const quarterBoxShift = margin + boxDimension / 4;

  const sidesPosition: Side[] = [
    { position: [0, 0, quarterBoxShift], rotation: [0, 0, 0] },
    {
      position: [0, quarterBoxShift, 0],
      rotation: [Math.PI / 2, 0, 0],
    },
    {
      position: [quarterBoxShift, 0, 0],
      rotation: [0, Math.PI / 2, 0],
    },
  ];

  return (
    <group position={position} rotation={rotation}>
      {sidesPosition.map((sidePosition, index) => {
        return (
          <Side
            key={index}
            quarterBoxDimension={quarterBoxDimension}
            position={sidePosition.position}
            rotation={sidePosition.rotation}
          />
        );
      })}
    </group>
  );
};

export default QuarterBox;
