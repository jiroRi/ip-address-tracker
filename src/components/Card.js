import React from "react";
import styled from "styled-components";

import { Text } from "./";

export const Card = (props) => {
  return (
    <Container>
      <CardItem>
        <Text variant="label">IP ADDRESS</Text>
        <Text variant="card">
          {props.loading ? "---.---.---.---" : props.ip}
        </Text>
      </CardItem>

      <Separator />

      <CardItem>
        <Text variant="label">LOCATION</Text>
        <Text variant="card">
          {props.loading
            ? "---"
            : `${props.city}, ${props.region}
                ${props.postalCode}`}
        </Text>
      </CardItem>

      <Separator />

      <CardItem>
        <Text variant="label">TIMEZONE</Text>
        <Text variant="card">
          UTC {props.loading ? "--:--" : props.timezone}
        </Text>
      </CardItem>

      <Separator />

      <CardItem>
        <Text variant="label">ISP</Text>
        <Text variant="card">{props.loading ? "---" : props.isp}</Text>
      </CardItem>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 500;

  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 16px;
  padding: 12px;

  @media ${(props) => props.theme.device.tablet} {
    flex-flow: row wrap;
    align-items: flex-start;
    padding: 0;
  }

  @media ${(props) => props.theme.device.laptop} {
    align-items: center;
    flex-flow: row nowrap;
    max-width: 1110px;
  }
`;

const CardItem = styled.div`
  padding: 12px 0;

  text-align: center;
  display: flex;
  flex-flow: column;

  @media ${(props) => props.theme.device.tablet} {
    padding: 32px;
    text-align: left;
    width: 50%;
  }

  @media ${(props) => props.theme.device.laptop} {
    height: 100%;
    width: 25%;

    &:last-child {
      padding-right: 64px;
    }
  }
`;

const Separator = styled.div`
  @media ${(props) => props.theme.device.laptop} {
    height: 72px;
    width: 1px;
    background-color: ${(props) => props.theme.colors.gray};
    opacity: 0.5;
  }
`;
