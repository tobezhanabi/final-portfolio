import styled from "styled-components";

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 7rem;

  h1 {
    display: inline-block;
    font-size: 2rem;
    font-family: "ubuntu", sans-serif;
    margin: 0.7rem 0 1.5rem 0;
    position: relative;

    &::after {
      content: "";
      display: block;
      height: 5px;
      width: 50%;
      background: ${({ theme }) => theme.colors.green};
      position: absolute;
      left: 50%;
      bottom: -7px;
      border-radius: 5px;
    }
  }

  p {
    font-size: 16px;
    margin-bottom: 5rem;
  }

  @media (max-width) : ${({ theme }) => theme.moble} {
    text-align: left;
  } ;
`;
