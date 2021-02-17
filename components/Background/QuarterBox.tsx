import Side from "./Side";
interface Props {}
const sides = [
  { position: { x: 0.6, y: 0.6, z: 0.6 } },

  // { x, y, z, rotation },
  // { x, y, z, rotation },
];
const QuarterBox = (props: Props) => {
  return (
    <group {...props}>
      {sides.map(() => {
        return <Side />;
      })}
    </group>
  );
};

export default QuarterBox;
