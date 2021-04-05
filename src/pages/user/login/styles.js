import styled from "styled-components";

export const Wrapper = styled.div`
  &.login {
    box-sizing: border-box;
    background-image: linear-gradient(to right, #ff000000 0%, #231225 70%);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    min-height: 500px;
    animation-name: login-background;
    animation-duration: 3s;
  }
  @keyframes login-background {
    from {
      background-color: #231225;
    }

    to {
      background-color: #fff;
    }
  }
  &.login section {
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  &.login .box-content {
    border: none;
    background-color: rgba(35, 18, 37, 0.502);
    width: 350px;
    height: 450px;
    padding: 20px;
    color: #fff;
    display: relative;
    justify-content: space-between;
    animation-duration: 1s;
    animation-name: login;
    position: relative;
  }
  &.login .box-content p {
    margin: 25px 0;
  }
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
  &.login .box-content a,
  &.login .box-login .button-login {
    border: none;
    padding: 10px;
    background-color: rgb(253, 217, 0);
    color: #333;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  }
  &.login .box-content a:hover,
  &.login .box-login .button-login:hover {
    background-color: rgb(35, 18, 37);
    color: rgb(252, 252, 252);
    transition: 0.25s;
  }
  &.login .box-content a:active {
    border: 1px solid rgb(199, 175, 38);
  }
  &.login .box-login {
    display: flex;
    z-index: 100;
    border: none;
    background-color: #fff;
    width: 350px;
    height: 480px;
    padding: 20px;
    box-shadow: -20px 0 15px rgba(0, 0, 0, 0.2);
  }
  &.login .box-login img {
    width: 100px;
  }
  &.login label {
    color: #333;
    width: 100%;
  }
  &.login input {
    color: #333;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px 0 0 10px;
    border: none;
    border-bottom: 1px solid rgb(199, 175, 38);
  }
  &.login .box-login a {
    color: #231225;
    text-decoration: underline;
  }
  &.login .register {
    display: none;
    background-color: transparent;
  }
  @media (max-width: 700px) {
    &.login .box-content {
      display: none;
    }
    &.login .box-login .register {
      display: initial;
      background-color: #fff;
    }
  }
  &.login .loading {
    height: 50px;
    background: transparent;
  }
  &.login .message-erro {
    color: red;
    font-weight: bold;
  }
`;

export const SendForm = styled.form``;
