import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme["yellow-100"]};
  height: 260px;
  position: relative;

  .image {
    font-weight: 800;
    font-size: 2rem;
    height: 100%;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 800;
    font-size: 2rem;
  }
`;
