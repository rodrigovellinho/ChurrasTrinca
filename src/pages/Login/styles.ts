import styled from "styled-components";

export const LoginContainer = styled.div`
  background: ${(props) => props.theme["yellow-100"]};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LoginBox = styled.div`
  position: absolute;
  top: -5%;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
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
      font-size: 0.75rem;
    }
  }

  label {
    font-weight: 700;
    font-size: 0.875rem;
  }

  .password {
    margin-top: 11px;
  }

  .emailFieldError {
    color: ${(props) => props.theme["red-500"]};
    font-size: 0.75rem;
    font-weight: 500;
    margin-top: 10px;
    position: absolute;
    bottom:1%;
  }

  .passwordFieldError{
    color: ${(props) => props.theme["red-500"]};
    font-size: 0.75rem;
    font-weight: 500;
    margin-top: 10px;
    min-height: 21px;
    position: absolute;
    bottom:1%;  
  }

`;

export const LoginButton = styled.button`
  background: ${(props) => props.theme["black"]};
  border-radius: 18px;
  height: 50px;
  width: 282px;
  border: none !important;
  cursor: pointer;
  margin-top: 53px;
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
    font-size: 0.75rem;
    font-weight: 700;  
    transition: all 0.5s;
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


