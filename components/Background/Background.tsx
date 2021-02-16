import { Canvas } from "react-three-fiber";
import ProjectBox from "./ProjectBox";
import { calculatePositionsOnCircle } from "../../utils/helpers";
import { OrbitControls, useHelper } from "@react-three/drei";
import projects from "../../models/projects";

const Background = () => {
  return (
    <>
      <Canvas style={{ position: "fixed", backgroundColor: "#1b1b1d" }}>
        {calculatePositionsOnCircle(projects.length, 5).map((coords, index) => {
          return <ProjectBox position={coords} key={index} />;
        })}
        <gridHelper args={[30, 30, 30]} />
        <axesHelper args={[10]} />
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default Background;
