import React from "react";
import styled, { keyframes } from "styled-components";
import arcesium from "../assets/logo1.jpg";
import converj from "../assets/logo2.png";
import oracle from "../assets/logo3.jpg";
import mastercard from "../assets/logo5.jpg";
import flipkart from "../assets/logo4.jpg";

// Animation for continuous left-to-right movement
const moveRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const Section = styled.section`
  background: #fff;
  color: #111;
  padding: 5rem 2rem;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 1.9rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`;

const BrochureButton = styled.a`
  background: #111;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  padding: 0.9rem 1.8rem;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  &:hover {
    background: #ff5722;
    transform: translateY(-3px);
  }
`;

const AlumniSection = styled.div`
  margin-top: 4rem;
`;

const AlumniHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
`;

const AlumniWrapper = styled.div`
  display: flex;
  width: 200%;
  animation: ${moveRight} 25s linear infinite;
`;

const AlumniTrack = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background: #fafafa;
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  padding: 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`;

const Info = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;

  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0;
  }

  span {
    background: #eef1ff;
    color: #3f51b5;
    font-weight: 600;
    border-radius: 8px;
    font-size: 0.85rem;
    padding: 0.25rem 0.6rem;
    width: fit-content;
  }
`;

const logos = [
  { src: arcesium, name: "Arcesium", tag: "100% hike" },
  { src: converj, name: "Converj", tag: "471% hike" },
  { src: oracle, name: "Oracle", tag: "300% hike" },
  { src: mastercard, name: "Mastercard", tag: "First Job" },
  { src: flipkart, name: "Flipkart", tag: "120% hike" },
];

const JobBootcampPage2 = () => {
  return (
    <Section>
      <Heading>Job Bootcamp brochure</Heading>

      <ButtonGroup>
        <BrochureButton href="#">Download MERN brochure</BrochureButton>
        <BrochureButton href="#">Download Springboot brochure</BrochureButton>
      </ButtonGroup>

      <AlumniSection>
        <AlumniHeading>Trek who took this bootcamp got hired at</AlumniHeading>

        <AlumniWrapper>
          <AlumniTrack>
            {[...logos, ...logos].map((logo, index) => (
              <Card key={index}>
                <ProfileImage src={logo.src} alt={logo.name} />
                <Info>
                  <h4>{logo.name}</h4>
                  <span>{logo.tag}</span>
                </Info>
              </Card>
            ))}
          </AlumniTrack>
        </AlumniWrapper>
      </AlumniSection>
    </Section>
  );
};

export default JobBootcampPage2;
