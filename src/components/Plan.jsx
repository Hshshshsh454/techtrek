import React, { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiSpringboot } from "react-icons/si";

const Section = styled.section`
  padding: 5rem 2rem;
  background: #fff;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
`;

const TabContainer = styled.div`
  background: #eaf0ff;
  display: flex;
  justify-content: center;
  border-radius: 50px;
  padding: 0.4rem;
  width: fit-content;
  margin: 0 auto 3rem;
`;

const Tab = styled.button`
  border: none;
  background: ${({ active }) => (active ? "#fff" : "transparent")};
  color: ${({ active }) => (active ? "#000" : "#4460d4")};
  border-radius: 50px;
  padding: 0.8rem 2rem;
  margin: 0 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
  }
`;

const TableWrapper = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 1rem 1.5rem;
    text-align: left;
  }

  th {
    background: #fafafa;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }

  tr:nth-child(even) {
    background: #fafafa;
  }

  td {
    color: #444;
    border-top: 1px solid #f1f1f1;
  }

  svg {
    color: #4c63e5;
  }
`;

const PriceBox = styled.div`
  text-align: center;
  margin-top: 2rem;

  h3 {
    font-size: 1.2rem;
    color: #333;
    font-weight: 500;
  }

  h2 {
    font-size: 1.6rem;
    color: #000;
    font-weight: 700;
    margin: 0.5rem 0;
  }
`;

const Button = styled.button`
  background: #ff5722;
  color: #fff;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: #e14a17;
  }
`;

const PlansPricing = () => {
  const [selected, setSelected] = useState("MERN");

  const perks = [
    "Industry-standard curriculum by expert",
    "Self Paced Classes",
    "1:1 live doubt support (Unlimited)",
    "Live Doubt Class",
    "Relationship manager",
    "Dedicated, focused, personalised placement assistance.",
    "Peer Interaction and network building",
    "1:1 Domain Expert Sessions",
    "Full fees refundable within 7 days",
  ];

  return (
    <Section id="plans">
      <Container>
        <Title>Plans and Pricing</Title>

        {/* Tabs */}
        <TabContainer>
          <Tab active={selected === "MERN"} onClick={() => setSelected("MERN")}>
            <SiMongodb color="#4db33d" /> <SiExpress color="#000" />{" "}
            <SiReact color="#61dafb" /> <SiNodedotjs color="#68a063" /> MERN
          </Tab>
          <Tab
            active={selected === "Springboot"}
            onClick={() => setSelected("Springboot")}
          >
            <SiSpringboot color="#6db33f" /> Springboot
          </Tab>
        </TabContainer>

        {/* Table */}
        <TableWrapper>
          <Table>
            <thead>
              <tr>
                <th>Perks</th>
                <th>
                  TechTrek Job Bootcamp
                  <br />
                  <small style={{ color: "#666" }}>
                    to help you transition faster into tech
                  </small>
                </th>
              </tr>
            </thead>
            <tbody>
              {perks.map((perk, i) => (
                <tr key={i}>
                  <td>{perk}</td>
                  <td style={{ textAlign: "center" }}>
                    <FaCheck />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>

        {/* Pricing */}
        <PriceBox>
          <h3>Price as low as</h3>
          <h2>₹7204 / month</h2>
          <Button>Apply now</Button>
        </PriceBox>
      </Container>
    </Section>
  );
};

export default PlansPricing;
