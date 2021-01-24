import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 5%;
  width: 40%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const AbsoluteOverflow = styled.span`
  position: absolute;
  overflow: hidden;
  top: 20%;
  right: 0;
`;
const Contact = styled.h3`
  cursor: pointer;
  color: white;
  font-size: 2.2rem;
`;
const MiddleButton = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  cursor: pointer;
  color: white;
`;
const Overflow = styled.span`
  overflow: hidden;
`;
const MiddleTitle = styled.span`
  display: block;
`;
const Circle = () => {
  return (
    <Wrapper>
      <AbsoluteOverflow>
        <Contact>CONTACT</Contact>
      </AbsoluteOverflow>
      <svg width="403px" height="403px" viewBox="0 0 403 403">
        <circle
          cx="50%"
          cy="50%"
          r="200"
          fill="none"
          strokeWidth="1px"
          stroke="gray"
        />
      </svg>
      <MiddleButton>
        <Overflow>
          <MiddleTitle>check</MiddleTitle>
        </Overflow>
        <Overflow>
          <MiddleTitle>projects</MiddleTitle>
        </Overflow>
      </MiddleButton>
    </Wrapper>
  );
};

export default Circle;
