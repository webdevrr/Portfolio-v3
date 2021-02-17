import { DoubleSide } from "three";
interface Props {}

const Side = (props: Props) => {
  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial side={DoubleSide} color="green" />
    </mesh>
  );
};

export default Side;
