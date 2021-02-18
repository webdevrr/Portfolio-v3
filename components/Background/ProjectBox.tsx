import QuarterBox from "./QuarterBox";
interface Props {
  cubeDimension: number;
}
interface Quarter {
  position: numberArray;
  rotation: numberArray;
}
type numberArray = [number, number, number];

const ProjectBox = ({ cubeDimension }: Props) => {
  const distanceFromCenter = cubeDimension / 4;

  const quartersPosition: Quarter[] = [
    {
      position: [distanceFromCenter, distanceFromCenter, distanceFromCenter],
      rotation: [0, 0, 0],
    },
    // {
    //   position: [distanceFromCenter, distanceFromCenter, -distanceFromCenter],
    //   rotation: [0, Math.PI / 2, 0],
    // },
    // { position: [0, 0, 0], rotation: [0, 0, 0] },
    // { position: [0, 0, 0], rotation: [0, 0, 0] },
  ];
  return (
    <>
      {quartersPosition.map((quarterPosition, index) => {
        return (
          <QuarterBox
            key={index}
            position={quarterPosition.position}
            rotation={quarterPosition.rotation}
            boxDimension={cubeDimension}
          />
        );
      })}
    </>
  );
};

export default ProjectBox;
