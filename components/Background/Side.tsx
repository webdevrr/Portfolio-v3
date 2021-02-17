import { DoubleSide } from "three";
interface Props {
  position: [number, number, number];
  rotation: [number, number, number];
}

const Side = ({ position, rotation }: Props) => {
  return (
    <mesh rotation={rotation} position={position}>
      <planeGeometry args={[0.5, 0.5]} />
      <meshStandardMaterial side={DoubleSide} color="green" />
    </mesh>
  );
};

export default Side;
