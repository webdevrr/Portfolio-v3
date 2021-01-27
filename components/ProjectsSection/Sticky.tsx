import styled from "styled-components";

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

const Sticky = ({ sticky }: Props) => {
  return <Section sticky={sticky}></Section>;
};

export default Sticky;
