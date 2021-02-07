import { ReactChild } from "react";
import styled from "styled-components";

interface Props {
  children: ReactChild;
}
const Wrapper = styled.div``;
const AnimatedWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default AnimatedWrapper;
