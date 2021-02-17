import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import QuarterBox from "./QuarterBox";

interface Props {
  position: any;
}

const ProjectBox = (props: Props) => {
  const group = useRef();
  useHelper(group, BoxHelper, "red");

  return (
    <group ref={group} {...props}>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
      <QuarterBox />
    </group>
  );
};

export default ProjectBox;
