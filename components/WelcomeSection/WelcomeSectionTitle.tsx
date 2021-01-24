import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  font-size: 5rem;
  letter-spacing: 3px;
  display: flex;
  flex-direction: column;
`;
const Overflow = styled.span`
  overflow: hidden;
`;
const OverflowDiv = styled.div`
  overflow: hidden;
`;
const Wrapper = styled.span`
  display: block;
`;
const Info = styled.h2`
  color: white;
`;
const WelcomeSectionTitle = () => {
  return (
    <>
      <Title>
        <Overflow>
          <Wrapper>Hello.</Wrapper>
        </Overflow>
        <Overflow>
          <Wrapper>I am Robert</Wrapper>
        </Overflow>
      </Title>
      <OverflowDiv>
        <Info>Web Developer</Info>
      </OverflowDiv>
    </>
  );
};

export default WelcomeSectionTitle;
