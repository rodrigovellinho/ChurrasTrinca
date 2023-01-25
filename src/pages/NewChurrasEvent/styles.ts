import styled from "styled-components";

export const NewChurrasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: -30px;
`;

export const CardContainer = styled.div`
  box-shadow: 0px 0px 0.67rem rgba(0, 0, 0, 0.06);
  margin-top: -20px;
  background: ${(props) => props.theme["white"]};
  border-radius: 2px;
  padding: 10px 20px 20px 20px;
  width: 40%;
  z-index: 1001;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 65%;
  }

  @media (max-width: 480px) {
    width: 75%;
  }
`;

export const ChurrasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  .formControl {
    margin-top: 10px;

    label {
      display: flex;
      font-size: 1rem;
      font-weight: 700;
    }

    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme["yellow-700"]};
      border-radius: 2px;
      text-align: flex-start;
      margin-top: 5px;
      padding: 2px 2px 0 2px;

      ::placeholder {
        text-align: flex-start;
        border-bottom: 1px solid ${(props) => props.theme["gray-100"]};
        opacity: 0.9;
      }
    }

    input:focus {
      background-color: ${(props) => props.theme["gray-300"]};
    }

    .datePicker {
      text-align: flex-start;
    }

    .errorMessage {
      color: ${(props) => props.theme["red-500"]};
      font-size: 0.75rem;
      margin-top: 1px;
    }
    .nullErrorMessage {
      min-height: 14px;
    }
  }

  .valuesControl {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 30px;

    .formControl {
      width: 100%;
    }
  }

  .comments {
    textarea {
      width: 100%;
      margin-top: 5px;
      border: 1px solid ${(props) => props.theme["yellow-700"]};
      border-radius: 4px;
      padding: 5px;
    }

    textarea:focus {
      border: 2px solid ${(props) => props.theme["yellow-700"]};
    }
  }
`;

export const GuestsContainer = styled.div`
  margin-top: 15px;

  span {
    font-size: 1rem;
    font-weight: 700;
  }

  .guest {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 15px;
    gap: 1rem;

    label {
      font-size: 1rem;
      font-weight: 500;
    }

    .inputField {
      width: 100%;
      height: 30px;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme["yellow-700"]};
    }

    input:focus {
      background-color: ${(props) => props.theme["gray-300"]};
    }

    .fieldError {
      color: ${(props) => props.theme["red-500"]};
      font-size: 0.75rem;
    }

    .errorMessageDiv {
      height: 25px;
    }

    .deleteGuest {
      svg {
        @media (max-width: 768px) {
          width: 20px;
          height: 20px;
        }
        @media (max-width: 600px) {
          width: 18px;
          height: 18px;
        }
      }
    }
  }

  .deleteGuest {
    background: ${(props) => props.theme["red-500"]};
    border: none;
    color: ${(props) => props.theme["white"]};
    padding: 2px 2px 0 2px;
    transition: opacity 0.2s;
    font-size: 0.875rem;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }

  .addGuestBtn {
    background: ${(props) => props.theme["green-500"]};
    border: none;
    color: ${(props) => props.theme["white"]};
    padding: 5px;
    transition: opacity 0.2s;
     border-radius: 4px;
    cursor: pointer;

    svg {
      @media (max-width: 768px) {
        width: 24px;
        height: 24px;
      }
      @media (max-width: 600px) {
        width: 20px;
        height: 20px;
      }
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: center;

  button {
    width: 175px;
    padding: 10px;
    font-size: 1rem;
    background-color: ${(props) => props.theme["yellow-100"]};
    border: none;
    border-radius: 2px;
    font-weight: 700;
    transition: opacity 0.2s;
    margin-right: 20px;
    cursor: pointer;

    @media (max-width: 815px) {
      font-size: 0.9rem;
      height: 42px;
      padding: 5px;
      width: 100px;
    }

    @media (max-width: 480px) {
      width: 80px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const NewChurraasFooterContainer = styled.div`
  padding: 20px 0 20px 0;
`;
