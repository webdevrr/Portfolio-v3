import Side from "./Side";
interface Props {}
interface Side {
  position: [number, number, number];
  rotation: [number, number, number];
}
const sides: Side[] = [
  { position: [0, 0, 0.25], rotation: [0, 0, 0] },
  { position: [0, 0.25, 0], rotation: [Math.PI / 2, 0, 0] },
  { position: [0.25, 0, 0], rotation: [0, Math.PI / 2, 0] },
];
const QuarterBox = (props: Props) => {
  return (
    <group {...props}>
      {sides.map((side) => {
        return <Side position={side.position} rotation={side.rotation} />;
      })}
    </group>
  );
};

export default QuarterBox;
