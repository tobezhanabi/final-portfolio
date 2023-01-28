import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 2.5rem;
  text-align: center;
  display: flex;
  color: green;
  justify-content: space-evenly;
  flex-direction: column;
  font-size: 16px;
`;

export const FooterNav = styled.div`
  a {
    margin-right: 0.5rem;
  }
  &:last-child {
    margin: 0;
  }
`;

export const CodedWith = styled.div`
  margin: 0.7rem 0;
`;
