import React, { useState } from "react";
import styled from "styled-components";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQSection = styled.section`
  padding: 5rem 1.5rem;
  background: #fff;
  color: #222;
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  font-weight: 700;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1.25rem 0;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1.05rem;
  color: #333;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #ff5722;
  }
`;

const Answer = styled.div`
  margin-top: 0.8rem;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.7;
  max-height: ${({ open }) => (open ? "300px" : "0")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the Full Stack Web Development Job Bootcamp program?",
      answer:
        "The Full Stack Web Development Job Bootcamp is an intensive, mentor-led training program that teaches you front-end, back-end, and database technologies. It prepares you for job interviews and guarantees placement assistance upon successful completion.",
    },
    {
      question: "What is the refund policy for the Full Stack Developer Bootcamp?",
      answer:
        "If you are not satisfied or unable to continue, you can request a refund within the first 14 days of enrollment. Please refer to our pricing & refund policy for detailed terms.",
    },
    {
      question: "Who is eligible to enroll in the Full Stack Web Developer Bootcamp?",
      answer:
        "Anyone with basic programming knowledge and a strong desire to learn web development can enroll. Both fresh graduates and working professionals looking to upskill are welcome.",
    },
    {
      question: "What is the duration of the Full Stack Web Development course?",
      answer:
        "The Bootcamp typically lasts 6 months, with live mentor sessions, guided projects, and self-paced practice assignments.",
    },
    {
      question:
        "I have been working at a service-based MNC for 2 years with a 4 LPA CTC. Will I be able to get a job at a product-based company with a better package with the help of this program?",
      answer:
        "Yes! Many learners from service-based backgrounds have transitioned successfully to product-based companies after completing this Bootcamp. Our curriculum and interview prep modules are specifically designed to help you upgrade your skills and land better roles.",
    },
    {
      question:
        "How good is the placement record for this Full Stack Web Developer Bootcamp?",
      answer:
        "The Bootcamp has an excellent placement record, with thousands of students placed in top tech companies like Amazon, Flipkart, and Paytm. Our dedicated placement team ensures every graduate gets interview opportunities.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection id="faqs">
      <Container>
        <Title>Frequently Asked Questions</Title>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleFAQ(index)}>
              {faq.question}
              {openIndex === index ? (
                <FiMinus size={20} color="#aaa" />
              ) : (
                <FiPlus size={20} color="#aaa" />
              )}
            </Question>
            <Answer open={openIndex === index}>{faq.answer}</Answer>
          </FAQItem>
        ))}
      </Container>
    </FAQSection>
  );
};

export default FAQ;
