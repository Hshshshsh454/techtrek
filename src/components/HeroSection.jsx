import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  padding-top: 7rem;
  background: linear-gradient(135deg, #0e0f1a, #1c2030);
  color: #fff;
  gap: 3rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 3rem 1.5rem;
    padding-top: 7rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    padding-top: 8rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
    padding-top: 7.5rem;
    gap: 1.5rem;
  }
`;

const LeftSection = styled.div`
  flex: 1 1 500px;
  max-width: 600px;

  h4 {
    display: inline-block;
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    color: #ffb74d;
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }

  h1 {
    font-size: 2.8rem;
    line-height: 1.3;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }

  p {
    color: #cfd2e2;
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    text-align: center;

    h1 {
      font-size: 2.2rem;
    }
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2.2rem;
`;

const Tag = styled.span`
  background: ${({ $color }) => $color || "rgba(255,255,255,0.1)"};
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #fff;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  max-width: 500px;
  text-align: center;
  gap: 1rem;

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
  }

  p {
    font-size: 0.9rem;
    color: #bdbdbd;
  }
`;

const CTA = styled.p`
  color: #eee;
  font-size: 1.05rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const RightSection = styled.div`
  flex: 1 1 400px;
  max-width: 440px;
  background: #fff;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  color: #111;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormHeading = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;

  span {
    background: linear-gradient(90deg, #ff4081, #ff5722);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.3rem;

  label {
    font-weight: 500;
    font-size: 0.95rem;
    display: block;
    margin-bottom: 0.4rem;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border: 1.5px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: 0.3s ease;

    &:focus {
      border-color: #ff5722;
      box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.2);
    }
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin-top: 0.5rem;

  label {
    font-size: 0.95rem;
    color: #333;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;

    &:hover {
      color: #ff5722;
    }

    input {
      appearance: none;
      width: 18px;
      height: 18px;
      border: 2px solid #bbb;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      cursor: pointer;
      transition: 0.3s ease;

      &:checked {
        border-color: #ff5722;
        background: radial-gradient(circle, #ff5722 45%, transparent 46%);
      }

      &:hover {
        border-color: #ff784e;
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.25);
      }
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: #ff5722;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  margin-top: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #e14a17;
    transform: translateY(-1px);
  }
`;

const Disclaimer = styled.p`
  margin-top: 1rem;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #777;

  a {
    color: #ff5722;
    text-decoration: none;
  }
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <LeftSection>
        <h4>✨ For professionals</h4>
        <h1>Full Stack Web Development Job Bootcamp with GenAI</h1>
        <p>
          Choose MERN stack or Spring Boot and acquire expertise through
          practical application and real-world projects.
        </p>

        <TagList>
          <Tag $color="#1b5e20">💼 Placement assistance</Tag>
          <Tag $color="#4a148c">🧠 AI-infused curriculum</Tag>
          <Tag $color="#bf360c">🤝 1:1 mentorship</Tag>
          <Tag $color="#283593">👩‍🏫 Faculty from MAANG</Tag>
        </TagList>

        <StatsContainer>
          <div>
            <h3>95%</h3>
            <p>Placement rate</p>
          </div>
          <div>
            <h3>1200+</h3>
            <p>Companies Hiring</p>
          </div>
          <div>
            <h3>128%</h3>
            <p>Average hike</p>
          </div>
          <div>
            <h3>1.5L+</h3>
            <p>Learners</p>
          </div>
        </StatsContainer>

        <CTA>Know in-depth details in our free webinar 👉</CTA>
      </LeftSection>

      <RightSection>
        <FormHeading>
          Book a <span>free live webinar</span> to know more
        </FormHeading>

        <form>
          <InputGroup>
            <label htmlFor="name">Name *</label>
            <input id="name" type="text" placeholder="Enter name" required />
          </InputGroup>

          <InputGroup>
            <label htmlFor="email">Email *</label>
            <input id="email" type="email" placeholder="Enter email" required />
          </InputGroup>

          <InputGroup>
            <label htmlFor="phone">Phone Number *</label>
            <input id="phone" type="tel" placeholder="Enter phone number" required />
          </InputGroup>

          <InputGroup>
            <label htmlFor="experience-group">Experience *</label>
            <RadioGroup id="experience-group">
              <label>
                <input type="radio" name="exp" /> Working professional - Technical roles
              </label>
              <label>
                <input type="radio" name="exp" /> Working professional - Non technical
              </label>
              <label>
                <input type="radio" name="exp" /> College student - Final year
              </label>
              <label>
                <input type="radio" name="exp" /> College student - 1st to pre-final year
              </label>
              <label>
                <input type="radio" name="exp" /> Others
              </label>
            </RadioGroup>
          </InputGroup>

          <SubmitButton>Continue booking webinar →</SubmitButton>
        </form>

        <Disclaimer>
          I authorise TechTrek to contact me with course updates & offers via
          Email/SMS/Whatsapp/Call. I have read and agree to{" "}
          <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>{" "}
          &{" "}
          <a href="/terms-conditions" target="_blank" rel="noopener noreferrer">
            Terms & Conditions
          </a>
          .
        </Disclaimer>
      </RightSection>
    </HeroWrapper>
  );
};

export default HeroSection;
