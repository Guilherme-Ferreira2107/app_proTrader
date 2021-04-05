import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: linear-gradient(to right, #ff000000 0%, #231225 70%);
  display: flex;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  animation-name: background-loading;
  animation-duration: 3s;

  @keyframes background-loading {
    from {
      background-color: #231225;
    }
    to {
      background-color: #fff;
    }
  }
`;
export const LogoIcon = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;
export const Load = styled.p`
  color: #fff;
  margin-right: 10px;
`;
