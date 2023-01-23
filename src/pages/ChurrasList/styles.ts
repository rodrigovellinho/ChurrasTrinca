import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: -20px;
  z-index: 20;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  width: 60%;
  margin-top: -20px;
  background: ${(props) => props.theme["white"]};
  border-radius: 2px;
  height: 80%;
  max-height: 450px;
  overflow: auto;
  position: relative;
  padding: 25px 25px 0 25px;
`;

export const BasicInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .infoDetails {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    .churrasDay,
    .churrasName {
      font-weight: 800;
      font-size: 1.75rem;
    }

    .icon {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 120px;

      img {
        width: 20px;
        height: 20px;
      }

      span {
        font-weight: 500;
        font-size: 1.312rem;
      }
    }
  }

  .infoDetails:nth-child(2) {
    margin-top: 10px;
  }

  .paymentDetails {
    display: flex;
    margin-top: 10px;
    span {
      font-weight: 500;
      font-size: 1.312rem;
    }

    .valueWithoutDrinks {
      margin-left: 50px;
    }
  }

  .commentsDetails {
    display: flex;
    margin-top: 10px;

    span {
      font-weight: 500;
      font-size: 1.312rem;
    }
    span:nth-child(2) {
      margin-left: 5px;
    }
  }
`;

export const GuestListContainer = styled.div`
  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 25px;
  margin-bottom: 10px;
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
`;
