import { useRef } from "react";
import { useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import QuarterBox from "./QuarterBox";

interface Props {
  position: any;
  boxSize: [number, number, number];
}

const ProjectBox = (props: Props) => {
  const group = useRef();
  useHelper(group, BoxHelper, "red");
  const { boxSize } = props;

  return (
    <group ref={group} {...props}>
      <mesh>
        <boxGeometry args={boxSize} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <QuarterBox boxSize={boxSize} />
    </group>
  );
};

export default ProjectBox;
