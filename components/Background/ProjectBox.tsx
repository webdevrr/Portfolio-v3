import React from "react";

import QuarterBox from "./QuarterBox";

interface Props {
  position: any;
}

const ProjectBox = (props: Props) => {
  return (
    <group>
      {/* <mesh {...props}>
        <boxGeometry />
        <meshStandardMaterial color="pink" />
      </mesh> */}
      <QuarterBox position={props.position} />
    </group>
  );
};

export default ProjectBox;
