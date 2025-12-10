import React from "react";
import styled from "styled-components";

// ---------- Styled Components ----------

// Section wrapper (now centered)
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 6rem;
  padding: 6rem 2rem;
  background-color: #f9f7fd;
  font-family: "Poppins", sans-serif;

  /* Center section horizontally and control width */
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
    gap: 3rem;
    align-items: center;
  }
`;

// Left content
const LeftContent = styled.div`
  flex: 1;
  min-width: 280px;

  h4 {
    color: #7b61ff;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 1.3;
    color: #111;
    font-weight: 700;
    margin-bottom: 1.5rem;

    span {
      color: #0073ff;
    }

    @media (max-width: 900px) {
      font-size: 2rem;
      text-align: center;
    }
  }

  button {
    background-color: #ff6b35;
    color: #fff;
    border: none;
    padding: 0.9rem 1.8rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: #ff4f00;
      transform: translateY(-2px);
    }

    @media (max-width: 900px) {
      display: block;
      margin: 0 auto;
    }
  }
`;

// Timeline wrapper (centered within section)
const Timeline = styled.div`
  flex: 1.5;
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid #e2dff8;

  @media (max-width: 900px) {
    border-left: none;
    padding-left: 0;
  }
`;

// Each card
const StepCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  padding: 1.5rem 2rem;
  margin-bottom: 3rem;
  max-width: 420px;
  position: relative;
  left: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &::before {
    content: "";
    position: absolute;
    left: -2.1rem;
    top: 2rem;
    width: 10px;
    height: 10px;
    background-color: #7b61ff;
    border-radius: 50%;
  }

  h3 {
    font-size: 1.1rem;
    color: #111;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0.2rem 0;
  }

  span {
    display: inline-block;
    font-size: 0.8rem;
    background-color: ${({ tagcolor }) => tagcolor || "#eee"};
    color: #222;
    padding: 0.2rem 0.8rem;
    border-radius: 999px;
    font-weight: 600;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 900px) {
    left: 0;
    margin: 0 auto 2rem auto;
  }
`;

const Emoji = styled.span`
  font-size: 1.6rem;
  margin-right: 0.5rem;
`;

// ---------- Component ----------

const BootcampJourney = () => {
  const steps = [
    {
      emoji: "🚀",
      tag: "Excited!",
      tagColor: "#FDCB82",
      title: "Kickstart your journey",
      points: [
        "Orientation by Ankush Singla",
        "Meet your program instructors",
        "Meet your peers",
      ],
    },
    {
      emoji: "😎",
      tag: "Confident",
      tagColor: "#F5B2A9",
      title: "Master full stack by solving real problems",
      points: [
        "Build real-world projects",
        "Get doubts resolved via 1:1 sessions",
        "Meet industry experts",
      ],
    },
    {
      emoji: "😇",
      tag: "Supported",
      tagColor: "#B6E4C1",
      title: "Experts to help you prepare for interviews",
      points: [
        "Resume and profile creation",
        "Mock interviews",
        "Soft-skill training",
      ],
    },
    {
      emoji: "🤔",
      tag: "Resilient",
      tagColor: "#E5E5E5",
      title: "Catch the eye of your dream companies",
      points: ["Daily jobs shared", "hirist.com highlights", "Alumni referrals"],
    },
    {
      emoji: "🤩",
      tag: "Over the moon",
      tagColor: "#D1D7F6",
      title: "Nail the interview for your dream job",
      points: ["Gain company insights", "Apply for higher offers"],
    },
  ];

  return (
    <Section>
      <LeftContent>
        <h4>Bootcamp Journey</h4>
        <h2>
          Future-proof your career
          <br /> with <span>GenAI skills</span>
        </h2>
        <button>Book a free webinar</button>
      </LeftContent>

      <Timeline>
        {steps.map((step, index) => (
          <StepCard key={index} tagcolor={step.tagColor}>
            <span>
              <Emoji>{step.emoji}</Emoji>
              {step.tag}
            </span>
            <h3>{step.title}</h3>
            {step.points.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </StepCard>
        ))}
      </Timeline>
    </Section>
  );
};

export default BootcampJourney;
