import styled from "styled-components";

export const StyledProjectsSection = styled.section`
  min-height: 90vh;
  padding: 10rem 0 5rem 0;
  width: 100%;
`;

export const SingleProject = styled.div`
  display: flex;
  align-items: center;

  &:nth-child(even) {
    flex-direction: row-reverse;
    margin: 10rem 0;
    a {
      img {
        transform: rotateY(-30deg);
      }
      div {
        transform: skew(3deg, -3deg) rotateY(-30deg);
      }
      &:hover {
        img {
          transform: rotateY(0deg);
        }
        div {
          transform: skew(-3deg, 3deg) rotateY(0deg);
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    &:nth-child(even) {
      flex-direction: column;

      a {
        margin-bottom: 3rem;
        img {
          transform: rotateY(0deg);
        }
        div {
          transform: skew(-3deg, 3deg) rotateY(0deg);
        }
        &:hover {
          div {
            transform: skew(3deg, -3deg) rotateY(0deg);
          }
        }
      }
    }
  }
`;
export const ProjectImageContainer = styled.a`
  display: flex;
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  perspective: 1000px;

  img {
    width: 90%;
    border-radius: 20px;
    transform: rotateY(30deg);
    transition: ${({ theme }) => theme.transition};
    z-index: 3;
  }

  &:hover {
    img {
      transform: rotateY(0deg);
    }
    div {
      transform: skew(-3deg, 3deg) rotateY(0deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 3rem;
    justify-content: flex-start;

    img {
      transform: rotateY(0deg);
      width: 80%;
      border-radius: 9px;
    }
  }
`;
export const SlantedCard = styled.div`
  position: absolute;
  width: 90%;
  height: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.dimBlue} 2%,
    ${({ theme }) => theme.colors.yellow} 60%,
    ${({ theme }) => theme.colors.green} 100%
  );
  border-radius: 20px;
  transition: ${({ theme }) => theme.transition};
  transform: skew(3deg, -3deg) rotateY(30deg);
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    transform: skew(3deg, -3deg) rotateY(0deg);
    width: 80%;
    border-radius: 9px;
  }
`;
export const ProjectDescription = styled.div`
  flex: 1;
  h1 {
    font-size: 2rem;
    margin: 0 0 2rem 0;
    font-family: "ubuntu", sans-serif;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.dimBlue} 2%,

      ${({ theme }) => theme.colors.white} 100%
    );
    background: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 1.4rem;
    text-align: justify;
  }
  div {
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      margin: 2rem 2rem 2rem 0;
      font-size: 1.2rem;
    }
    svg {
      margin-right: 0.5rem;
    }
  }
`;
export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  span {
    display: inline-block;
    padding: 7px;
    margin-bottom: 0.5rem;
    background: #01319fdc;
    border-radius: 5px;
    font-size: 14px;
    margin-right: 1rem;
  }
`;
