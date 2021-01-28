import styled from "styled-components";
import { forwardRef } from "react";
interface Props {
  sticky: boolean;
}
const Section = styled.div<Props>`
  width: 50%;
  height: 100vh;
  position: ${(props) => (props.sticky ? "fixed" : "static")};
  top: 0;
  left: 0;
`;

const Sticky = forwardRef<HTMLDivElement, Props>(({ sticky }: Props, ref) => {
  return <Section ref={ref} sticky={sticky}></Section>;
});

export default Sticky;
