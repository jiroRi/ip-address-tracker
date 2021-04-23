import React from "react";
import styled from "styled-components";

export const Input = (props) => <Container {...props} />;

const Container = styled.input`
  position: relative;
  z-index: 50;

  display: flex;
  width: 100%;
  height: 48px;
  padding: 16px 64px 16px 24px;
  border-radius: 16px;
  outline: none;

  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.mobileInput};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: 1;

  cursor: pointer;
  border: none;

  &::placeholder {
    color: ${(props) =>
      props.error ? props.theme.colors.red : props.theme.colors.darkGray};
  }

  @media ${(props) => props.theme.device.tablet} {
    height: 56px;
  }
`;
