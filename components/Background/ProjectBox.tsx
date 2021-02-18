import React from "react";
import QuarterBox from "./QuarterBox";
interface Props {
  boxSize: [number, number, number];
}
interface Quarter {
  position: numberArray;
  rotation: numberArray;
}
type numberArray = [number, number, number];
const ProjectBox = ({ boxSize }: Props) => {
  const boxDimension = boxSize[0];

  const quartersPosition: Quarter[] = [
    { position: [0, 0, 0], rotation: [0, 0, 0] },
    { position: [0, 0, 0], rotation: [0, 0, 0] },
    { position: [0, 0, 0], rotation: [0, 0, 0] },
    { position: [0, 0, 0], rotation: [0, 0, 0] },
  ];
  return (
    <>
      {quartersPosition.map((quarterPosition) => {
        return <QuarterBox boxSize={boxSize} />;
      })}
    </>
  );
};

export default ProjectBox;
