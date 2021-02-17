import React from "react";
import QuarterBox from "./QuarterBox";
interface Props {
  boxSize: [number, number, number];
}

const ProjectBox = ({ boxSize }: Props) => {
  return <QuarterBox boxSize={boxSize} />;
};

export default ProjectBox;
