import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  width: 100%;
`;

export const CardsContainer = styled.div`
  width: 50%;
  margin: -20px auto 20px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 30px;
  justify-items: center;
  align-items: center;

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

export const AgendaFooterContainer = styled.div`
  padding: 20px 0 20px 0;
`;
