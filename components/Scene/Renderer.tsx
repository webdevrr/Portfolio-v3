import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

import Scene from "./Scene";
interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  projectsRef: MutableRefObject<HTMLElement>;
}

const Renderer = ({ darkMode, setDarkMode, projectsRef }: Props) => {
  return (
    <Canvas
      pixelRatio={[1, 2]}
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "transparent",
        position: "fixed",
        zIndex: 100,
        top: 0,
      }}
    >
      <Scene
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        projectsRef={projectsRef}
      />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};

export default Renderer;
