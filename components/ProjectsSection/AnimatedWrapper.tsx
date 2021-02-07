import { ReactChild, forwardRef } from "react";
import styled from "styled-components";

interface Props {
  children: ReactChild;
}
const Wrapper = styled.div`
  align-self: flex-start;
`;
const Box = styled.div`
  position: absolute;
  background-color: white;
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
