import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 6rem 2rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const PrivacyPolicy = () => {
  return (
    <PageWrapper>
      <h1>Privacy Policy</h1>
      <p>We value your privacy and ensure your data is secure.</p>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
