import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  background-image: linear-gradient(to right, #ff000000 0%, #231225 70%);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 500px;
  animation-name: login-background;
  animation-duration: 3s;

  @keyframes login-background {
    from {
      background-color: #231225;
    }

    to {
      background-color: #fff;
    }
  }
  & section {
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const BoxContent = styled.div`
  border: none;
  background-color: rgba(35, 18, 37, 0.502);
  width: 350px;
  height: 450px;
  display: relative;
  justify-content: space-between;
  animation-duration: 1s;
  animation-name: login;
  position: relative;

  @keyframes login {
    from {
      left: 50%;
      display: flex;
    }

    to {
      left: 0%;
      display: flex;
    }
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const BoxLogin = styled.div`
  display: flex;
  z-index: 100;
  border: none;
  background-color: #fff;
  width: 350px;
  height: 500px;
  padding: 20px;
  box-shadow: -20px 0 15px rgba(0, 0, 0, 0.2);

  @media (min-width: 700px) {
    height: 480px;
  }

  & form {
    width: 100%;
  }

  & .registerMobile {
    @media (min-width: 700px) {
      display: none;
    }
  }
`;
