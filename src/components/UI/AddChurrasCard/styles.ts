import styled from "styled-components";

export const Container = styled.div`
  width: 282px;
  height: 192px;
  border-radius: 2px;
  background: ${(props) => props.theme["gray-300"]};
  box-shadow: 2px;
  position: relative;
  transition: all 0.5s;

  .ellipse {
    position: absolute;
    left: 96px;
    top: 32px;
  }

  .iconBbq {
    position: absolute;
    left: 118px;
    top: 53px;
  }

  .addChurras {
    width: 179px;
    height: 25px;
    line-height: 24.65px;
    position: absolute;
    left: 52px;
    bottom: 32px;
    color: ${(props) => props.theme["black"]};
 

    span {
      text-decoration: none;
      border: none;
      font-size: 1.313rem;
      font-weight: 700;
    }
  }

  &:hover{
    transform: scale(1.03);
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.16);
  }
`;
