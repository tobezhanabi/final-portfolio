import styled, { keyframes } from "styled-components";

const float = keyframes`
 from{
 transform: translate(0px, 0px)
 }
 65%{
    transform: translate(3px, 10px)
 }

 to{
    transform: translate(0px, 0px)
 }
`;

const wobble = keyframes`
	0%,
	100% {
		transform: translateX(0%);
		transform-origin: 50% 50%;
	}

	15% {
		transform: translateX(-30px) rotate(-6deg);
	}

	30% {
		transform: translateX(15px) rotate(6deg);
	}

	45% {
		transform: translateX(-15px) rotate(-3.6deg);
	}

	60% {
		transform: translateX(9px) rotate(2.4deg);
	}

	75% {
		transform: translateX(-6px) rotate(-1.2deg);
	
}`;

export const StyledContactSection = styled.section`
  min-height: 90vh;
  padding: 10rem 0 5rem;
  width: 100%;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
  }
`;
export const ContactInfo = styled.div`
  flex: 1;
  font-size: 18px;

  p {
    padding: 10px 0;
  }

  .twiitercontact {
    display: flex;
    align-items: center;
    margin: 2rem;

    justify-content: flex-start;
    p {
      padding-right: 20px;
    }

    svg {
      margin-right: 12px;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: flex-start;
    flex-direction: column;
    .p {
      font-size: 1.2rem;
    }
    .twiitercontact {
      font-size: 1rem;
      margin: 1rem;

      p {
        padding-right: 10px;
      }

      svg {
        margin-right: 6px;
      }
    }
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  img {
    width: 70%;

    animation: ${float} 3s ease-in-out infinite;
  }
  &:hover {
    img {
      animation: ${wobble} 2s ease-in-out 0s infinite alternate backwards;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: flex-start;
  }
`;
