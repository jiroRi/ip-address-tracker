import React from "react";
import styled from "styled-components";

export const Text = (props) => (
  <StyledText {...props}>{props.children}</StyledText>
);

const StyledText = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: ${(props) => props.theme.fontSize.body};
  font-weight: ${(props) => props.theme.fontWeight.regular};

  ${(props) =>
    props.variant === "title" &&
    `
      color: ${props.theme.colors.white};
      font-size: ${props.theme.fontSize.mobileTitle};
      line-height: ${props.theme.fontSize.mobileTitle};
      font-weight: ${props.theme.fontWeight.bold};

      @media ${props.theme.device.tablet} {
        font-size: ${props.theme.fontSize.title};
        line-height: ${props.theme.fontSize.title};
      }
    `}

  ${(props) =>
    props.variant === "label" &&
    `
      font-size: ${props.theme.fontSize.mobileLabel};
      font-weight: ${props.theme.fontWeight.bold};
      letter-spacing: 1.5px;
      line-height: ${props.theme.fontSize.mobileLabel};
      margin-bottom: 8px;
      
      @media ${props.theme.device.tablet} {
        font-size: ${props.theme.fontSize.label};
        line-height: ${props.theme.fontSize.label};

        margin-top: 8px;

      }
    `}

    ${(props) =>
    props.variant === "card" &&
    `
      color: ${props.theme.colors.darkGray};
      font-size: ${props.theme.fontSize.mobileCard};
      font-weight: ${props.theme.fontWeight.medium};
      line-height: 1.5;

      @media ${props.theme.device.tablet} {
        font-size: ${props.theme.fontSize.card};
      }

    `}
`;

//label
//title
//main
