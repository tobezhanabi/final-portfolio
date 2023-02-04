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
  button {
    padding: 6px 60px;
    border-radius: 6px;
    color: white;
    cursor: pointer;

    font-size: 14px;

    background-color: #0066cc;
    padding: 10px 30px;
    border: 2px solid #0066cc;
    box-shadow: rgb(0, 0, 0) 4px 0px 18px -4px;
    border-radius: 25px 0px 28px;
    transition: 1438ms;
    transform: translateY(0);
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  button:hover {
    background-color: ${({ theme }) => theme.colors.green};
    color: black;
    transition: 1438ms;
    padding: 10px 50px;
    transform: translateY(-6px);
  }

  @media (max-width: 550px) {
    height: 320px;
    width: 250px;

    h2 {
      font-size: 1.5rem;
      padding-bottom: 5px;
    }
    div input,
    div textarea {
      padding: 2px 2px 2.5px;
      border-radius: 4px;
      font-size: 0.81rem;
    }
    button {
      font-size: 12px;
    }
  }
`;
