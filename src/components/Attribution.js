import React from "react";
import styled from "styled-components";

export const Attribution = () => (
  <Container>
    Challenge by{" "}
    <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
      Frontend Mentor
    </Link>
    . Coded by <Link href="https://jiroricaro.netlify.app">Jiro Ricaro</Link>.
  </Container>
);

const Container = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 25000;
  width: 168px;

  font-size: ${(props) => props.theme.fontSize.label};
  color: ${(props) => props.theme.colors.darkGray};
  text-align: left;

  @media ${(props) => props.theme.device.tablet} {
    bottom: 0.5vh;
    left: 50%;

    width: 100%;

    text-align: center;
    transform: translateX(-50%);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.blue};

  &:hover {
    color: ${(props) => props.theme.colors.gray};
  }
`;
