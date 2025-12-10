import React from "react";
import styled from "styled-components";
import arcesium from "../assets/logo1.jpg";
import converj from "../assets/logo2.png";
import oracle from "../assets/logo3.jpg";
import mastercard from "../assets/logo5.jpg";
// import paypal from "../assets/paypal.png"; // File not found - using placeholder
import flipkart from "../assets/logo4.jpg";

const Section = styled.section`
  background: #fff;
  color: #111;
  padding: 5rem 2rem;
  text-align: center;

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

const AlumniGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const Card = styled.div`
  background: #fafafa;
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  padding: 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
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

  p {
    font-size: 0.9rem;
    color: #6a6a6a;
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

        <AlumniGrid>
          <Card>
            <ProfileImage src={arcesium} alt="Arcesium" />
            <Info>
              <h4>Arcesium</h4>
              <span>100% hike</span>
            </Info>
          </Card>

          <Card>
            <ProfileImage src={converj} alt="Converj" />
            <Info>
              <h4>Converj</h4>
              <span>471% hike</span>
            </Info>
          </Card>

          <Card>
            <ProfileImage src={oracle} alt="Oracle" />
            <Info>
              <h4>Oracle</h4>
              <span>300% hike</span>
            </Info>
          </Card>

          <Card>
            <ProfileImage src={mastercard} alt="Mastercard" />
            <Info>
              <h4>Mastercard</h4>
              <span>First Job</span>
            </Info>
          </Card>

          {/* PayPal card commented out - paypal.png file not found
          <Card>
            <ProfileImage src={paypal} alt="PayPal" />
            <Info>
              <h4>PayPal</h4>
              <span>First Job</span>
            </Info>
          </Card>
          */}

          <Card>
            <ProfileImage src={flipkart} alt="Flipkart" />
            <Info>
              <h4>Flipkart</h4>
              <span>120% hike</span>
            </Info>
          </Card>
        </AlumniGrid>
      </AlumniSection>
    </Section>
  );
};

export default JobBootcampPage2;
