import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 1.5rem;
  background: #fafafa;
`;

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 2.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  text-align: center;
`;

const Avatar = styled.div`
  height: 180px;
  background: linear-gradient(120deg, #ffccbc, #ffe0b2);
`;

const Body = styled.div`
  padding: 1.25rem;
`;

const Name = styled.h3`
  margin: 0;
`;

const Role = styled.p`
  color: #666;
`;

const Instructors = () => (
  <Section id="instructors">
    <Container>
      <Title>Meet Your Instructors</Title>
      <Grid>
        <Card>
          <Avatar />
          <Body>
            <Name>Aarav Mehta</Name>
            <Role>Frontend Engineer</Role>
          </Body>
        </Card>
        <Card>
          <Avatar />
          <Body>
            <Name>Isha Kapoor</Name>
            <Role>Full Stack Developer</Role>
          </Body>
        </Card>
        <Card>
          <Avatar />
          <Body>
            <Name>Rohan Das</Name>
            <Role>Mentor & SWE</Role>
          </Body>
        </Card>
      </Grid>
    </Container>
  </Section>
);

export default Instructors;
