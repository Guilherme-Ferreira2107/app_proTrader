import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 10px);
  max-width: 600px;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  position: fixed;
  z-index: 200;
  background-color: ${(props) => props.type};
  border-radius: 0.25rem;
  bottom: 10px;
  left: 10px;
  transition: 0.25s;

  animation-name: enable;
  animation-duration: 1s;

  @keyframes enable {
    from {
      left: -150px;
      opacity: 0;
    }

    to {
      left: 10px;
      opacity: 1;
    }
  }
`;

export const AlertForm = styled.p`
  color: #fff;
  font-size: 18px;
`;

export const AlertButton = styled.button`
  font-size: 18px;
  color: #333;
  padding: 10px;
  background: none;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 0.25rem;
  outline: none;
  transition: 0.25s;

  &:hover {
    background: ${(props) => props.type};
    color: #fff;
  }
`;
