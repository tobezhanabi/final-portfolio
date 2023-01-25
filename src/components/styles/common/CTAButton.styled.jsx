import styled from "styled-components";

export const CTAButton = styled.a`
  background: ${({ primary, theme }) =>
    primary ? theme.colors.dimBlue : theme.colors.yellow};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : theme.colors.dark};
  padding: 10px 20px;
  margin: ${({ margin }) => margin};
  border: 2px solid ${({ theme }) => theme.colors.dark};
  border-radius: 5px;
  font-size: 14px;
  font-family: "Ubuntu", sans-serif;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background: ${({ primary, theme }) =>
      primary ? theme.colors.yellow : "none"};
    color: ${({ primary, theme }) =>
      primary ? theme.colors.white : theme.colors.green};
    border: 2px solid ${({ theme }) => theme.colors.green};
  }
`;
