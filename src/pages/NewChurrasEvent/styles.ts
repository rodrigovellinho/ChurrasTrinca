import styled from "styled-components";

export const NewChurrasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: -30px;
  z-index: 10;

  @media (max-width: 1024px) {
    label {
      max-width: 160px;
    }

    input,
    .datePicker {
      max-width: 180px;
    }

    .valueWithDrinks,
    .valueWithoutDrinks {
      width: 120px;
    }

    .commentsContainer {
      textarea {
        max-width: 90%;
      }
    }
  }

  @media (max-width: 768px) {
    .suggestedValueContainer {
      input,
      label {
        width: 100px;
      }
    }

    .deleteGuest {
      svg {
        height: 24px;
        width: 24px;
      }
    }
    .addGuestBtn {
      svg {
        height: 24px;
        width: 24px;
      }
    }

    .commentsContainer {
      textarea {
        max-width: 85%;
      }
    }
  }
  @media (max-width: 600px) {
    .suggestedValueContainer {
      input,
      label {
        width: 80px;
      }
    }
    .deleteGuest {
      svg {
        height: 20px;
        width: 20px;
      }
    }
    .addGuestBtn {
      svg {
        height: 20px;
        width: 20px;
      }
    }
    .commentsContainer {
      textarea {
        max-width: 80%;
      }
    }
  }
`;

export const CardContainer = styled.div`
  box-shadow: 0px 0px 0.67rem rgba(0, 0, 0, 0.06);
  width: 50%;
  margin-top: -20px;
  background: ${(props) => props.theme["white"]};
  border-radius: 2px;
  padding: 10px;
  max-height: 450px;
  overflow: auto;
`;

export const ChurrasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;

  label {
    display: flex;
    font-size: 1rem;
    font-weight: 700;
    margin-left: 20px;
    width: 180px;
  }

  input {
    width: 250px;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme["yellow-700"]};
    text-align: center;

    ::placeholder {
      text-align: center;
      border-bottom: 1px solid ${(props) => props.theme["gray-100"]};
    }
  }

  .basicInformationContainer {
    display: flex;
    align-items: flex-end;

    .datePicker {
      text-align: center;
    }

    .nameFieldError {
      color: ${(props) => props.theme["red-500"]};
      font-size: 0.75rem;
      margin-left: 10px;
    }

    .dateFieldError {
      color: ${(props) => props.theme["red-500"]};
      font-size: 0.75rem;
      margin-left: 10px;
    }
  }

  .suggestedValueContainer {
    display: flex;
    align-items: flex-end;

    .lineContainer {
      display: flex;

      input {
        width: 150px;
      }
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .commentsContainer {
    display: flex;
    flex-direction: column;
    margin-top: 5px;

    label {
      width: 200px;
    }

    textarea {
      width: 95%;
      height: 50px;
      align-self: center;
      margin-top: 10px;
      border: 1px solid ${(props) => props.theme["yellow-700"]};
      border-radius: 4px;
      padding: 5px;
    }
  }
`;

export const GuestsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
  margin-left: 20px;

  span {
    font-size: 1rem;
    font-weight: 700;
    width: 150px;
  }

  .guest {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 15px;
    width: 100%;
    gap: 1rem;

    label {
      font-size: 1rem;
      font-weight: 500;
      display: flex;
      justify-content: flex-start;
    }
    .inputField {
      width: 55%;
      height: 30px;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme["yellow-700"]};
    }
    .name {
      width: 300px;
    }
    .value {
      width: 150px;
    }
    .nameFieldError {
      color: ${(props) => props.theme["red-500"]};
      font-size: 0.75rem;
      text-align: center;
      margin-top: 10px;
    }
    .valueFieldError {
      color: ${(props) => props.theme["red-500"]};
      font-size: 0.75rem;
      text-align: center;
      margin-top: 10px;
    }

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 0;
      margin-top: 0;

      .name {
        max-width: 150px;
      }
      .value {
        width: 150px;
      }

      button {
        margin-top: 5px;
      }
    }
  }

  .deleteGuest {
    margin-left: 10px;
    background: ${(props) => props.theme["red-500"]};
    border: none;
    color: ${(props) => props.theme["white"]};
    padding: 5px;
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
    font-size: 0.875rem;
    margin-top: 15px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: center;

  .returnButton {
    padding: 10px;
    font-size: 1.125rem;
    background-color: ${(props) => props.theme["yellow-100"]};
    border: none;
    border-radius: 2px;
    font-weight: 700;
    transition: opacity 0.2s;
    margin-right: 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .addChurrastButton {
    background: ${(props) => props.theme["yellow-100"]};
    border: none;
    color: ${(props) => props.theme["black"]};
    padding: 10px;
    transition: opacity 0.2s;
    font-size: 1.125rem;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
