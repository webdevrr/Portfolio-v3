import { DoubleSide } from "three";
interface Props {
  position: numberArray;
  rotation: numberArray;
  quarterBoxDimension: number;
}
type numberArray = [number, number, number];

const Side = ({ position, rotation, quarterBoxDimension }: Props) => {
  const sideDimension = quarterBoxDimension * 2;

  return (
    <mesh rotation={rotation} position={position}>
      <planeGeometry args={[sideDimension, sideDimension]} />
      <meshStandardMaterial side={DoubleSide} color="green" />
    </mesh>
  );
};

export default Side;
