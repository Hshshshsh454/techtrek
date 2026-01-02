// import React from "react";
// import styled, { css } from "styled-components";

// const FloatingNavbarWrapper = styled.nav`
//   position: fixed;
//   top: 70px; /* below the top navbar */
//   left: 50%;
//   transform: translateX(-50%);
//   z-index: 999;
//   transition: all 0.4s ease-in-out;
//   width: 100%;
//   max-width: 100%;
//   overflow-x: auto;
//   padding: 0 1rem;

//   @media (max-width: 768px) {
//     top: 60px;
//     padding: 0 0.5rem;
//   }

//   @media (max-width: 480px) {
//     top: 56px;
//   }

//   ul {
//     display: flex;
//     list-style: none;
//     background-color: #fff;
//     border-radius: 999px;
//     padding: 0.6rem 2rem;
//     gap: 1.5rem;
//     align-items: center;
//     box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
//     transition: all 0.4s ease-in-out;
//     margin: 0 auto;
//     white-space: nowrap;

//     @media (max-width: 768px) {
//       padding: 0.5rem 1.5rem;
//       gap: 1rem;
//       border-radius: 12px;
//     }

//     @media (max-width: 480px) {
//       padding: 0.5rem 1rem;
//       gap: 0.5rem;
//       border-radius: 12px;
//     }
//   }

//   li {
//     font-size: 0.95rem;
//     font-weight: 500;
//     color: #666;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     border-radius: 999px;
//     padding: 0.4rem 0.8rem;
//     white-space: nowrap;

//     &:hover {
//       background-color: #f4f4f4;
//     }

//     &.active {
//       background-color: #222;
//       color: white;
//       font-weight: 600;
//     }

//     @media (max-width: 768px) {
//       font-size: 0.85rem;
//       padding: 0.35rem 0.7rem;
//     }

//     @media (max-width: 480px) {
//       font-size: 0.75rem;
//       padding: 0.3rem 0.6rem;
//     }
//   }

//   ${({ isScrolled }) =>
//     isScrolled &&
//     css`
//       ul {
//         box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
//         transform: scale(0.98);
//         background-color: rgba(255, 255, 255, 0.95);
//         backdrop-filter: blur(8px);
//       }
//     `}
// `;

// const FloatingNavbar = ({ isScrolled }) => {
//   return (
//     <FloatingNavbarWrapper isScrolled={isScrolled}>
//       <ul>
//         <li>About the course</li>
//         <li>Curriculum</li>
//         <li className="active">Course journey</li>
//         <li>Benefits</li>
//         <li>Plans</li>
//         <li>FAQs</li>
//       </ul>
//     </FloatingNavbarWrapper>
//   );
// };

// export default FloatingNavbar;
