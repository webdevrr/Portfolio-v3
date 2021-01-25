import styled from "styled-components";

const description = [
  "I am a web developer based in Poland. ",
  "Passionate about building web apps and UI. ",
  "Check out my projects and if you want to hire me,",
  "contact me down below!",
];

const Wrapper = styled.div``;
const Paragraph = styled.p``;
const Overflow = styled.span``;
const Row = styled.span``;
const Description = () => {
  return (
    <Wrapper>
      <Paragraph>
        {description.map((line) => {
          <Overflow>
            <Row></Row>
          </Overflow>;
        })}
      </Paragraph>
    </Wrapper>
  );
};

export default Description;
