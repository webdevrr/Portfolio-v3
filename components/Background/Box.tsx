import React from "react";

interface Props {
  position: any;
}

const Box = (props: Props) => {
  console.log(props);

  return (
    <mesh {...props}>
      <boxBufferGeometry />
      <meshStandardMaterial color="#1b1b1d" />
    </mesh>
  );
};

export default Box;
