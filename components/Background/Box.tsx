import React from "react";

interface Props {}

const Box = (props: Props) => {
  return (
    <mesh>
      <boxBufferGeometry />
      <meshStandardMaterial color="#1b1b1d" />
    </mesh>
  );
};

export default Box;
