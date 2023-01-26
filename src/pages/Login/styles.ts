import styled from "styled-components";

export const LoginContainer = styled.div`
  background: ${(props) => props.theme["yellow-100"]};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 300px);
`;

export const LoginBox = styled.div`
  margin-top: -20px;
  z-index: 1000;

`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 25px;

  input {
    width: 282px;
    height: 50px;
    border-radius: 2px;
    border: none;
    margin-top: 16px;
    font-weight: 400;
    font-style: italic;
    padding-left: 20px;

    &::placeholder {
      font-weight: 400;
      font-style: italic;
      font-size: 1.125rem;
    }
  }

  input:focus {
    background-color: ${(props) => props.theme["gray-300"]};
  }

  label {
    font-weight: 700;
    font-size: 1.313rem;
  }

  .password {
    margin-top: 11px;
  }

  .errorMessage {
    color: ${(props) => props.theme["red-500"]};
    font-size: 0.875rem;
    margin-top: 3px;
  }
  .nullErrorMessage {
    min-height: 20px;
  }
`;

export const LoginButton = styled.button`
  background: ${(props) => props.theme["black"]};
  border-radius: 18px;
  height: 50px;
  width: 282px;
  border: none !important;
  cursor: pointer;
  margin-top: 25px;
  transform: opacity,   
  transition: opacity 0.5s ease-in-out;
  position: relative;

  &:hover {
    opacity: 0.85;
  }

  .button__text {
    color: ${(props) => props.theme["white"]};
    text-decoration: none;
    border: none;
    font-size: 1.125rem;
    font-weight: 700;  
    transition: all 0.3s;
  }

 .button__loading {
    visibility: hidden;
    opacity: 0;
  }

  .button__spinner::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
  }  

  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }
`;

export const LoginFooterContainer = styled.div`
  background: ${(props) => props.theme["yellow-100"]};
  display: flex;
  justify-content: center;
`;
