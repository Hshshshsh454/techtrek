import React from "react";
import styled from "styled-components";
import { Users, GraduationCap, Lightbulb, Clock, Book, Github, Linkedin, FileText, Pencil, UsersRound } from "lucide-react";

const Section = styled.section`
  background: #0d0d0d;
  color: #fff;
  padding: 5rem 2rem;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.8rem;
  justify-items: center;
  margin-bottom: 5rem;
`;

const Card = styled.div`
  background: #161616;
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    background: #1c1c1c;
  }
`;

const IconWrapper = styled.div`
  background: ${({ color }) => color}22;
  color: ${({ color }) => color};
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardText = styled.p`
  font-size: 0.95rem;
  color: #aaa;
  line-height: 1.6;
`;

const BootcampBenefits = () => {
  const benefits = [
    {
      icon: <Users size={22} />,
      title: "1:1 expert session",
      text: "Connects theoretical understanding with practical implementation through their insights",
      color: "#4ade80",
    },
    {
      icon: <GraduationCap size={22} />,
      title: "Expert faculty from MAANG",
      text: "Top-tier education enriched by practical knowledge and innovation",
      color: "#7c3aed",
    },
    {
      icon: <Lightbulb size={22} />,
      title: "Projects & hackathons",
      text: "Hands-on learning to spark creative problem-solving",
      color: "#fb7185",
    },
    {
      icon: <Clock size={22} />,
      title: "Fastest doubt support",
      text: "Personalised assistance for a clear understanding of concepts",
      color: "#f97316",
    },
    {
      icon: <Book size={22} />,
      title: "Self-paced classes",
      text: "Learn at your pace with practice and instant feedback",
      color: "#f97316",
    },
  ];

  const beyond = [
    {
      icon: <Github size={22} />,
      title: "Github profile",
      text: "Showcase your projects with professional code repositories.",
      color: "#22c55e",
    },
    {
      icon: <Linkedin size={22} />,
      title: "LinkedIn profile",
      text: "Build your tech identity with a standout profile.",
      color: "#3b82f6",
    },
    {
      icon: <FileText size={22} />,
      title: "Resume writing",
      text: "Create an impressive resume highlighting your technical skills.",
      color: "#facc15",
    },
    {
      icon: <Pencil size={22} />,
      title: "Soft skills",
      text: "Master communication and salary negotiation skills.",
      color: "#fb923c",
    },
    {
      icon: <UsersRound size={22} />,
      title: "Interview preparation",
      text: "Mock interviews and expert sessions to make you job-ready.",
      color: "#ef4444",
    },
  ];

  return (
    <Section>
      <Title>Job Bootcamp Benefits</Title>
      <Grid>
        {benefits.map((b, i) => (
          <Card key={i}>
            <IconWrapper color={b.color}>{b.icon}</IconWrapper>
            <CardTitle>{b.title}</CardTitle>
            <CardText>{b.text}</CardText>
          </Card>
        ))}
      </Grid>

      <Title>Benefits Beyond Learning</Title>
      <Grid>
        {beyond.map((b, i) => (
          <Card key={i}>
            <IconWrapper color={b.color}>{b.icon}</IconWrapper>
            <CardTitle>{b.title}</CardTitle>
            <CardText>{b.text}</CardText>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default BootcampBenefits;
