import { DoubleSide } from "three";
interface Props {
  position: numberArray;
  rotation: numberArray;
  quarterBoxDimension: number;
}
type numberArray = [number, number, number];

const Side = ({ position, rotation, quarterBoxDimension }: Props) => {
  return (
    <mesh rotation={rotation} position={position}>
      <planeGeometry args={[quarterBoxDimension, quarterBoxDimension]} />
      <meshStandardMaterial side={DoubleSide} color="green" />
    </mesh>
  );
};

export default Side;
