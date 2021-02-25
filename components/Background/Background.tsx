import { forwardRef } from "react";

import { Canvas } from "react-three-fiber";

import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Background = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Wrapper ref={ref}>
      <Canvas>
        <ambientLight />
        <gridHelper args={[30, 30, 30]} />
        <axesHelper args={[10]} />
        <OrbitControls />
      </Canvas>
    </Wrapper>
  );
});

export default Background;
