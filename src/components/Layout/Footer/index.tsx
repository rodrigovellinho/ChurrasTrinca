import trincaImg from "../../../assets/logoTrinca.svg";
import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <img className="banner" src={trincaImg} alt="banner-barbecue" />
    </FooterContainer>
  );
}
