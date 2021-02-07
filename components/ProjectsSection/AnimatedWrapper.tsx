import { ReactChild, forwardRef } from "react";
import styled from "styled-components";

interface Props {
  children: ReactChild;
}
const Wrapper = styled.div`
  align-self: flex-start;
  position: relative;
`;
const Box = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 100%;
`;
const AnimatedWrapper = forwardRef<HTMLDivElement, Props>(
  ({ children }, ref) => {
    return (
      <Wrapper>
        <Box ref={ref} />
        {children}
      </Wrapper>
    );
  }
);

export default AnimatedWrapper;
