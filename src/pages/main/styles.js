import styled from "styled-components";

export const ModalInicial = styled.div`
  width: calc(100% - 15px);
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  position: fixed;
  z-index: 200;
  color: #fff;
  background-color: #231225;
  border-radius: 0.25rem;
  top: 60px;
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

  form {
    width: auto;
    color: #231225;
  }

  input {
    padding: 5px;
    margin: 0 10px;
    border: none;
    outline: none;
    border-radius: 0.25rem;
  }

  .inputValue {
    width: 250px;
  }
`;
