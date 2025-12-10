import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #fff;
  color: #111;
  padding: 5rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
  justify-items: center;
  text-align: left;
  max-width: 1100px;
  margin: 0 auto 3rem auto;
`;

const Card = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  max-width: 320px;
`;

const Icon = styled.div`
  font-size: 2rem;
  flex-shrink: 0;
`;

const CardText = styled.div`
  h3 {
    font-size: 1.05rem;
    font-weight: 600;
    color: #111;
    margin-bottom: 0.4rem;
  }
  p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 0.9rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  ${({ primary }) =>
    primary
      ? `
    background: #ff5722;
    color: white;
    border: none;
    &:hover { background: #e14a17; }
  `
      : `
    background: transparent;
    color: #111;
    border: 1.5px solid #111;
    &:hover { background: #111; color: white; }
  `}
`;

const PlacementBenefits = () => {
  const benefits = [
    {
      icon: "🏃‍♂️",
      title: "Profiles highlighted on hirist.com",
      text: "Get access to an abundance of job openings.",
    },
    {
      icon: "👥",
      title: "1200+ Companies Hiring",
      text: "Expanded job search with a vast network of companies hiring.",
    },
    {
      icon: "📤",
      title: "Profiles highlighted on naukri.com",
      text: "Make a distinct mark for yourself on India's leading job portal.",
    },
    {
      icon: "👔",
      title: "Dedicated placement team",
      text: "Guiding and motivating you every step of the way.",
    },
    {
      icon: "💼",
      title: "50+ Members placement team",
      text: "A dedicated team to help you get placed in your dream company.",
    },
    {
      icon: "💬",
      title: "Job openings shared every day",
      text: "We send job openings daily to your WhatsApp directly.",
    },
  ];

  return (
    <Section>
      <Title>Placement Benefits</Title>
      <Grid>
        {benefits.map((item, index) => (
          <Card key={index}>
            <Icon>{item.icon}</Icon>
            <CardText>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </CardText>
          </Card>
        ))}
      </Grid>

      {/* CTA Buttons */}
      <ButtonContainer>
        <Button>Request callback</Button>
        <Button primary>Book a free webinar</Button>
      </ButtonContainer>
    </Section>
  );
};

export default PlacementBenefits;
