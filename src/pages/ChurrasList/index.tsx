import {
  BasicInfoContainer,
  ButtonContainer,
  ChurrasListFooterContainer,
  Container,
  FormContainer,
  GuestListContainer,
} from "./styles";
import iconPeople from "../../assets/icon_people.svg";
import iconMoney from "../../assets/icon_money.svg";
import { useContext } from "react";
import { ChurrasContext } from "../../store/ChurrasProvider";
import { useParams } from "react-router-dom";
import ChurrasListGuest from "../../components/ChurrasListGuest";
import { Link } from "react-router-dom";
import { priceFormatter } from "../../utils/formater";
import { Footer } from "../../components/Layout/Footer";

export default function ChurrasList() {
  const { churrascos } = useContext(ChurrasContext);
  const params = useParams();

  const churras = churrascos.find(
    (churrasco) => churrasco.id === Number(params.churrasId)
  );

  const churrasGuestsTotalAmount = churras?.guests.reduce(
    (sumTotal: number, guest) => {
      return (sumTotal += Number(guest.value));
    },
    0
  );

  return (
    <Container>
      <FormContainer>
        <BasicInfoContainer>
          <div className="infoDetails">
            <span className="churrasDay">{churras?.day}</span>
            <div className="icon">
              <img src={iconPeople} alt="people icon" />
              <span>{churras?.guests.length}</span>
            </div>
          </div>

          <div className="infoDetails">
            <span className="churrasName">{churras?.name}</span>
            <div className="icon">
              <img src={iconMoney} alt="money icon" />
              <span>{priceFormatter.format(churrasGuestsTotalAmount)}</span>
            </div>
          </div>

          <div className="paymentDetails">
            <div>
              <span>Valor com Bebida: </span>
              <span>{priceFormatter.format(churras.valueWithDrinks)}</span>
            </div>
            <div className="valueWithoutDrinks">
              <span>Valor sem Bebida: </span>
              <span>{priceFormatter.format(churras.valueWithoutDrinks)}</span>
            </div>
          </div>

          <div className="commentsDetails">
            <span>Observações: </span>
            <span>{churras.comments}</span>
          </div>
        </BasicInfoContainer>

        <GuestListContainer>
          {churras?.guests.map((guest) => (
            <ChurrasListGuest
              key={params.churrasId}
              churrasId={params.churrasId}
              guestId={guest.guestId}
              name={guest.name}
              value={guest.value}
              isPayed={guest.isPayed}
            />
          ))}
        </GuestListContainer>
        <ButtonContainer>
          <Link to="/agenda">
            <button className="returnButton">Voltar</button>
          </Link>
        </ButtonContainer>
      </FormContainer>
      <ChurrasListFooterContainer>
        <Footer />
      </ChurrasListFooterContainer>
    </Container>
  );
}
