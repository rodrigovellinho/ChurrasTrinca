import barbecueImg from "../../../assets/bbq-pattern.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="image">
        <img src={barbecueImg} alt="barbecue" />
      </div>
      <span>Agenda de Churras</span>
    </HeaderContainer>
  );
}
