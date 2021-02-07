import { ReactChild, forwardRef } from "react";
import styled from "styled-components";

interface Props {
  children: ReactChild;
}
const Wrapper = styled.div`
  align-self: flex-start;
  background-color: white;
`;
const AnimatedWrapper = forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => {
    return <Wrapper ref={ref}>{children}</Wrapper>;
  }
);

export default AnimatedWrapper;
