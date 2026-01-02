import React from "react";
import styled from "styled-components";

const PageWrapper = styled.div`
  padding: 6rem 2rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const Careers = () => {
  return (
    <PageWrapper>
      <h1>Careers at TechTrek</h1>
      <p>Explore exciting opportunities to join our growing team!</p>
    </PageWrapper>
  );
};

export default Careers;
