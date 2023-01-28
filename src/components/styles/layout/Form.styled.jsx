import styled from "styled-components";

export const FormBody = styled.div`
  background: ${({ theme }) => theme.colors.offWhite};
  justify-content: center;
  align-items: center;

  height: 350px;
  width: 400px;
  border-radius: 20px;

  padding-left: 20px;
  h2 {
    color: ${({ theme }) => theme.colors.dimBlue};
    padding: 5px 10px;
    padding-left: 30px;
  }
  div {
    margin: 25px -10px;
    width: 100%;
    position: relative;
  }

  div input,
  div textarea {
    position: relative;
    width: 100%;

    border: none;
    outline: none;
    padding: 5px 5px 3.5px;
    border-radius: 4px;
    font-size: 1rem;
  }
  div label {
    padding: 5px, 2px;
    color: #000;
    transition: 0.5s;
    pointer-events: none;
  }

  div input[type="type"],
  div input[type="email"] {
    border: 0;
    border-bottom: 1px solid #b4becb;
    width: 100%;
    padding: 3px;
    font-size: 14px;
    opacity: 0.7;
  }

  @media (max-width: 550px) {
    height: 350px;
    width: 220px;
  }
  h2 {
    font-size: 1.5rem;
  }
`;
