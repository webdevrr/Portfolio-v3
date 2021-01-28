import styled from "styled-components";
import { forwardRef } from "react";

const Section = styled.div`
  width: 50%;
  height: 100vh;
`;

const Sticky = forwardRef<HTMLDivElement>((props, ref) => {
  return <Section ref={ref}></Section>;
});

export default Sticky;
