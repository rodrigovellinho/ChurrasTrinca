import styled from "styled-components";

export const Container = styled.div`
  width: 282px;
  height: 192px;
  border-radius: 2px;
  background: ${(props) => props.theme["white"]};
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
  z-index: 20;

  span {
    color: ${(props) => props.theme["black"]};
    text-decoration: none !important;
  }

  a {
    text-decoration: none !important;
  }
`;

export const ContainerMargin = styled.div`
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  

  .eventDate {
    width: 83px;
    height: 33px;
    font-weight: 800;
    font-size: 1.75rem;
    line-height: 32.87px;
    margin-bottom: 8px;
    margin-top: 21px;
  }

  .eventReason {
    width: 250px;
    height: 25px;
    font-weight: 700;
    font-size: 1.75rem;
    line-height: 24.65px;
    display: flex;
    justify-content: flex-start;
    align-content:flex-start;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 52px;
  position: relative;

  span {
    margin-left: 10px;
    font-size: 1.312rem;
    font-weight: 500;
  }

  img {
    height: 20px;
    width: 20px;
  }

  .moneyIcon {
    position: absolute;
    right: 15%;
    display: flex;
    align-items: center;
  }
`;
