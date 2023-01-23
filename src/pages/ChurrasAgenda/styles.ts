import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const CardsContainer = styled.div`
  width: 50%;
  margin: -20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 30px;
  justify-items: center;
  align-items: center;
  max-height: 430px;
  overflow-y: auto;

  @media (max-width: 1128px) {
    grid-template-columns: 1fr;
    grid-column-gap: 30px;
    width: 100%;
  }
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
