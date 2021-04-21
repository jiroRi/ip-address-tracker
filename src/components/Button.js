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
  right: 0;
  top: 0;
  z-index: 50;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  height: 56px;
  width: 56px;
  border: none;

  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.darkGray};
  }
`;
