import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  background: #fff;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #111;
`;

const ChartContainer = styled.div`
  background: #0d0d0d;
  border-radius: 30px;
  padding: 3rem 2rem;
  max-width: 950px;
  margin: 0 auto 3rem auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  overflow: hidden;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.05) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
`;

const Bubble = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid ${({ color }) => color};
  background: rgba(255, 255, 255, 0.05);
  font-weight: 500;
  transition: transform 0.3s ease, background 0.3s ease;
  cursor: default;

  &:hover {
    background: ${({ color }) => color};
    transform: scale(1.05);
  }

  h3 {
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.9rem 1.8rem;
  cursor: pointer;
  transition: 0.3s ease;
  ${({ primary }) =>
    primary
      ? `
    background: #ff5722;
    color: #fff;
    &:hover {
      background: #e14a17;
    }
  `
      : `
    background: #111;
    color: #fff;
    &:hover {
      background: #333;
    }
  `}
`;

const LearnerStats = () => {
  const data = [
    { label: "Final year students", percent: "12%", color: "#ff6b6b", size: "140px" },
    { label: "Non CS", percent: "14%", color: "#58a6ff", size: "150px" },
    { label: "Service company engineers", percent: "41%", color: "#f1c40f", size: "220px" },
    { label: "Non technical roles", percent: "27%", color: "#00c48c", size: "180px" },
    { label: "Others", percent: "6%", color: "#b083ff", size: "110px" },
  ];

  return (
    <Section>
      <Title>Our learners bring varied backgrounds and experiences</Title>
      <ChartContainer>
        {data.map((item, index) => (
          <Bubble key={index} color={item.color} size={item.size}>
            <h3>{item.label}</h3>
            <p>{item.percent}</p>
          </Bubble>
        ))}
      </ChartContainer>

      <ButtonsContainer>
        <Button>Request callback</Button>
        <Button primary>Book a free webinar</Button>
      </ButtonsContainer>
    </Section>
  );
};

export default LearnerStats;
