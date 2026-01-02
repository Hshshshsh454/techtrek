import React, { useState, useCallback, memo } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/TechTrek-Logo.jpg";

// HTTPS logo URL - can be configured via environment variable
const LOGO_URL = import.meta.env.VITE_LOGO_URL || logo;

const TopNavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    height: 60px;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    height: 56px;
  }
`;

const LogoLink = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: 2px solid #ff6b35;
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

const LogoImage = styled.img`
  height: 32px;
  width: auto;
  object-fit: contain;
  display: block;

  @media (max-width: 480px) {
    height: 28px;
  }
`;

const CallbackButton = styled.button`
  background-color: #ff6b35;
  color: white;
  border: none;
  padding: 0.6rem 1.4rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #ff4f00;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(255, 107, 53, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: 2px solid #ff6b35;
    outline-offset: 2px;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const TopNavbar = memo(() => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(LOGO_URL);

  const handleImageError = useCallback(() => {
    if (!imageError) {
      setImageError(true);
      setImageSrc(logo);
    }
  }, [imageError]);

  const handleLogoClick = useCallback(() => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  const handleLogoKeyDown = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleLogoClick();
    }
  }, [handleLogoClick]);

  const handleCallbackClick = useCallback(() => {
    const callbackSection = document.getElementById("request-callback");
    if (callbackSection) {
      callbackSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <TopNavbarWrapper>
      <LogoLink
        onClick={handleLogoClick}
        onKeyDown={handleLogoKeyDown}
        role="button"
        tabIndex={0}
        aria-label="TechTrek Home"
      >
        <LogoImage
          src={imageSrc}
          alt="TechTrek Logo"
          onError={handleImageError}
        />
      </LogoLink>
      <CallbackButton onClick={handleCallbackClick} aria-label="Request a callback">
        Request callback
      </CallbackButton>
    </TopNavbarWrapper>
  );
});

TopNavbar.displayName = "TopNavbar";

export default TopNavbar;
