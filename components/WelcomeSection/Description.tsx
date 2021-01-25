import styled from "styled-components";

const description = [
  "I am a web developer based in Poland. ",
  "Passionate about building web apps and UI. ",
  "Check out my projects and if you want to hire me,",
  "contact me down below!",
];

const Wrapper = styled.div`
  position: absolute;
  left: 20%;
  bottom: 15%;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "Kanit", sans-serif;
  font-weight: 300;
`;
const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
`;
const Overflow = styled.span`
  overflow: hidden;
`;
const Row = styled.span`
  display: block;
`;

const Description = () => {
  return (
    <Wrapper>
      <Paragraph>
        {description.map((line, index) => {
          return (
            <Overflow key={index}>
              <Row>{line}</Row>
            </Overflow>
          );
        })}
      </Paragraph>
    </Wrapper>
  );
};

export default Description;
