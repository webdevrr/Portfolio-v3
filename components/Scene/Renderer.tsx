import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

import Scene from "./Scene";
import { useRef } from "react";
interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  projectsRef: MutableRefObject<HTMLElement>;
}

const Renderer = ({ darkMode, setDarkMode, projectsRef }: Props) => {
  const canvas = useRef(null);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "transparent",
        position: "fixed",
        zIndex: 100,
        top: 0,
      }}
      ref={canvas}
    >
      <Canvas pixelRatio={[1, 2]}>
        <Scene
          canvas={canvas}
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
    </div>
  );
};

export default Renderer;
