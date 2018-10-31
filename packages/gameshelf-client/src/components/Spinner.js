import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`to { transform: rotate(360deg); }`;

const Spinner = styled.div`
  content: "";
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  margin: 2rem auto;
  border-radius: 50%;
  border-top: 4px solid rgba(0, 0, 0, 0.4);
  border-left: 4px solid rgba(0, 0, 0, 0.4);
  border-bottom: 4px solid rgba(0, 0, 0, 0.4);
  border-right: 4px solid rgba(0, 0, 0, 0);
  animation: ${spin} 0.6s linear infinite;
`;

export default Spinner;
