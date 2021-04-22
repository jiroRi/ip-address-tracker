import React from "react";
import styled from "styled-components";

import { ArrowIcon } from "./";

export const Button = (props) => (
  <Container {...props}>
    <ArrowIcon />
  </Container>
);

const Container = styled.button`
  position: absolute;
  right: -0.5px;
  top: 0;
  z-index: 50;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  height: 48px;
  width: 48px;
  border: none;
  border-radius: 0 16px 16px 0;
  box-shadow: 2px 4px 8px rgba(5, 5, 5, 0.15);

  text-decoration: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkGray};
  }

  @media ${(props) => props.theme.device.tablet} {
    height: 56px;
    width: 56px;
  }
`;
