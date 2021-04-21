import React from "react";
import styled from "styled-components";

export const ArrowIcon = () => {
  return (
    <Icon xmlns="http://www.w3.org/2000/svg">
      <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
    </Icon>
  );
};

const Icon = styled.svg`
  width: 11px;
  height: 14px;
`;
