import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // 👈 import Link

import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: #1b120e;
  color: #e3e3e3;
  padding: 4rem 2rem 2rem;
  font-family: 'Inter', sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BrandLogo = styled.h3`
  color: #fff;
  font-weight: 700;
  font-size: 1.3rem;
  span {
    color: #ff5722;
  }
`;

const Contact = styled.div`
  p {
    margin: 0.5rem 0;
    font-size: 0.95rem;
    color: #dcdcdc;
  }
  svg {
    margin-right: 0.5rem;
  }
`;

const Offerings = styled.div`
  h4 {
    color: #fff;
    margin-bottom: 1rem;
  }
  p {
    color: #aaa;
  }
`;

const Column = styled.div`
  h4 {
    color: #fff;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  a {
    display: block;
    color: #c5c5c5;
    font-size: 0.95rem;
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: 0.2s;
  }

  a:hover {
    color: #ff5722;
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid #3b2e26;
  margin-top: 3rem;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  p {
    font-size: 0.9rem;
    color: #999;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: #ccc;
    font-size: 1.25rem;
    transition: 0.3s;
  }

  a:hover {
    color: #ff5722;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        {/* Left Section */}
        <LeftSection>
          <div>
            <BrandLogo><span>©</span> Techtrek</BrandLogo>
          </div>

          <Contact>
            <h4>Contact us</h4>
            <p><FaPhoneAlt /> 1800-123-3598</p>
            <p><FaEnvelope /> contact@techtrek.com</p>
          </Contact>

          <Offerings>
            <h4>Our offerings</h4>
            <p><strong>TechTrek</strong> /job-bootcamp</p>
            <p><strong>code360</strong> by techtrek</p>
          </Offerings>
        </LeftSection>

        {/* Center Columns */}
          <Column>
          <h4>Tech Trek</h4>
          <ul>
            <li><Link className="link" to="/careers">Careers</Link></li>
            <li><Link className="link" to="/privacy-policy">Privacy policy</Link></li>
            <li><Link className="link" to="/terms-conditions">Terms & conditions</Link></li>
            <li><Link className="link" to="/pricing-refund">Pricing & refund policy</Link></li>
            <li><Link className="link" to="/bug-bounty">Bug bounty</Link></li>
            <li><Link className="link" to="/review">Review</Link></li>
            <li><Link className="link" to="/press-release">Press release</Link></li>
          </ul>
        </Column>

        <Column>
          <h4>Products</h4>
          <Link className="link" to="/job-bootcamp">Job Bootcamp</Link>
          <Link className="link" to="/code-360">Code 360</Link>
          <Link className="link" to="/professional-certifications">Professional Certifications</Link>
          <Link className="link" to="/student-certifications">Student Certifications</Link>
        </Column>

        <Column>
          <h4>Community</h4>
          <Link className="link" to="/10x-club">10X Club</Link>
          <Link className="link" to="/student-chapters">Student Chapters</Link>
          <Link className="link" to="/hire-from-us">Hire from us</Link>
        </Column>
      </Container>

      <BottomBar>
        <p>Copyright © Sunrise Mentors Pvt. Ltd.</p>
        <SocialIcons>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        </SocialIcons>
      </BottomBar>
    </FooterWrapper>
  );
};

export default Footer;
