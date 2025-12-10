import React, { useState } from "react";
import styled from "styled-components";
import callbackIllustration from "../assets/callback-illustration.jpg"; // uses existing asset

const Section = styled.section`
  background: #fff7f4;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
`;

const Illustration = styled.img`
  width: 320px;
  max-width: 90%;
`;

const Form = styled.form`
  background: #fff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.05);
  width: 400px;
  max-width: 100%;
`;

const Title = styled.h2`
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #222;
`;

const Label = styled.label`
  font-weight: 500;
  display: block;
  margin-bottom: 0.25rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
  &:focus {
    border-color: #ff5722;
    outline: none;
  }
`;

const RadioGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const RadioOption = styled.label`
  display: block;
  margin: 0.4rem 0;
  cursor: pointer;
  color: #444;
  input {
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  background: #ff5722;
  color: #fff;
  border: none;
  width: 100%;
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #e14a17;
  }
`;

const ConsentText = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #666;
  text-align: center;

  a {
    color: #ff5722;
    text-decoration: none;
  }
`;

const RequestCallback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Callback requested by ${formData.name}`);
  };

  return (
    <Section>
      <Illustration src={callbackIllustration} alt="Callback Illustration" />

      <Form onSubmit={handleSubmit}>
        <Title>Request a Callback</Title>

        <Label>Name *</Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Label>Email *</Label>
        <Input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Label>Phone Number *</Label>
        <Input
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <Label>Experience *</Label>
        <RadioGroup>
          {[
            "Working professional - Technical roles",
            "Working professional - Non technical",
            "College student - Final year",
            "College student - 1st to pre-final year",
            "Others",
          ].map((option) => (
            <RadioOption key={option}>
              <input
                type="radio"
                name="experience"
                value={option}
                onChange={handleChange}
                checked={formData.experience === option}
                required
              />
              {option}
            </RadioOption>
          ))}
        </RadioGroup>

        <Button type="submit">Request Callback</Button>

        <ConsentText>
          I authorise TechTrek to contact me with course updates via
          Email/SMS/WhatsApp/Call. I have read and agree to{" "}
          <a href="/privacy-policy">Privacy Policy</a> &{" "}
          <a href="/terms-conditions">Terms of Use</a>.
        </ConsentText>
      </Form>
    </Section>
  );
};

export default RequestCallback;
