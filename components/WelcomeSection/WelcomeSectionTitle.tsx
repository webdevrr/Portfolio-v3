import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  font-size: 5rem;
  letter-spacing: 3px;
  display: flex;
  flex-direction: column;
`;
const WelcomeSectionTitle = () => {
  return (
    <>
      <Title>
        <span>
          <span>Hello.</span>
        </span>
        <span>
          <span>I am Robert</span>
        </span>
      </Title>
      <div>
        <h2>Web Developer</h2>
      </div>
    </>
  );
};

export default WelcomeSectionTitle;
