import { DoubleSide } from "three";
interface Props {
  position: numberArray;
  rotation: numberArray;
  size: numberArray;
}
type numberArray = [number, number, number];

const Side = ({ position, rotation, size }: Props) => {
  const planeDimension = size[0] / 2;

  return (
    <mesh rotation={rotation} position={position}>
      <planeGeometry args={[planeDimension, planeDimension]} />
      <meshStandardMaterial side={DoubleSide} color="green" />
    </mesh>
  );
};

export default Side;
