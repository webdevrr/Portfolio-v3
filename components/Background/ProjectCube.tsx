import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import ProjectBox from "./ProjectBox";

interface Props {
  position: any;
  cubeDimensions: [number, number, number];
}

const ProjectCube = (props: Props) => {
  const group = useRef();
  useHelper(group, BoxHelper, "red");
  const { cubeDimensions, position } = props;
  const cubeDimension = cubeDimensions[0];

  return (
    <group ref={group} position={position}>
      <mesh>
        <boxGeometry args={cubeDimensions} />
        <meshStandardMaterial transparent={true} opacity={0.5} />
      </mesh>
      <ProjectBox cubeDimension={cubeDimension} />
    </group>
  );
};

export default ProjectCube;
