import React from "react";
import { DoubleSide } from "three";

interface Props {
  position: any;
}

const QuarterBox = (props: Props) => {
  return (
    <mesh {...props}>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial side={DoubleSide} color="white" />
    </mesh>
  );
};

export default QuarterBox;
