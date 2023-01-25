import React from "react";
import { Container, ContainerMargin, Details } from "./styles";
import peopleIcon from "../../../assets/icon_people.svg";
import moneyIcon from "../../../assets/icon_money.svg";
import { Link } from "react-router-dom";
import { priceFormatter } from "../../../utils/formater";

interface ChurrasCardProps {
  id: number;
  name: string;
  day: string | number | Date;
  guests: {
    guestId: string;
    name: string;
    value: number;
    isPayed: boolean;
  }[];
}

export default function ChurrasCard(props: ChurrasCardProps) {
  const id = props.id;

  const churrasGuestsTotalAmount = props.guests.reduce(
    (sumTotal: number, guest) => {
      return (sumTotal += Number(guest.value));
    },
    0
  );

  return (
    <Container aria-label="Acessar Churras">
      <Link to={`/lista/${id}`}>
        <ContainerMargin>
          <span className="eventDate">{props.day}</span>
          <span className="eventReason">{props.name}</span>
          <Details>
            <div className="peopleIcon">
              <img src={peopleIcon} alt="icone pessoa" />
              <span>{props.guests.length}</span>
            </div>
            <div className="moneyIcon">
              <img src={moneyIcon} alt="icone pessoa" />
              <span>{priceFormatter.format(churrasGuestsTotalAmount)}</span>
            </div>
          </Details>
        </ContainerMargin>
      </Link>
    </Container>
  );
}
