import React from "react";
import styled from "styled-components";

export const Text = (props) => (
  <StyledText {...props}>{props.children}</StyledText>
);

const StyledText = styled.p`
    color: ${(props) => props.theme.colors.gray}
    font-size: ${(props) => props.theme.fontSize.body};
    font-weight: ${(props) => props.theme.fontWeight.bold};
`;

//label
//title
//main
