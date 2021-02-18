import Side from "./Side";
interface Props {
  boxSize: numberArray;
}
interface Side {
  position: numberArray;
  rotation: numberArray;
}
type numberArray = [number, number, number];

const QuarterBox = (props: Props) => {
  const { boxSize } = props;
  const boxDimension = boxSize[0];

  const sidesPosition: Side[] = [
    { position: [0, 0, boxDimension / 4], rotation: [0, 0, 0] },
    { position: [0, boxDimension / 4, 0], rotation: [Math.PI / 2, 0, 0] },
    { position: [boxDimension / 4, 0, 0], rotation: [0, Math.PI / 2, 0] },
  ];

  return (
    <group>
      {sidesPosition.map((side) => {
        return (
          <Side
            size={boxSize}
            position={side.position}
            rotation={side.rotation}
          />
        );
      })}
    </group>
  );
};

export default QuarterBox;
