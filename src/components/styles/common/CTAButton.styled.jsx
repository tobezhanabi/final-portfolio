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
  transition: 0.5s ease;

  &:hover {
    background: ${({ primary, theme }) =>
      primary ? theme.colors.yellow : "none"};
    color: ${({ primary, theme }) =>
      primary ? theme.colors.dark : theme.colors.green};
    border: 2px solid ${({ theme }) => theme.colors.green};
    box-shadow: 0 0 4px 0 #000 inset, 0 0 10px 4px #000;
  }
`;
