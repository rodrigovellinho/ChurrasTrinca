import { Container } from "./styles";
import { useContext } from "react";
import { ChurrasContext } from "../../store/ChurrasProvider";
import { priceFormatter } from "../../utils/formater";

interface ChurrasListGuestProps {
  churrasId?: string;
  guestId: string;
  name: string;
  value: number;
  isPayed: boolean;
}

export default function ChurrasListGuest(props: ChurrasListGuestProps) {
  const { churrasId, guestId, name, value, isPayed } = props;
  const { toogleGuest } = useContext(ChurrasContext);

  function handleTogglePersonCheck(guestId: string, churrasId?: string) {
    if (!churrasId) {
      return;
    }

    toogleGuest(churrasId, guestId);
  }

  return (
    <Container>
      <div className="completed">
        <div className="personDetail">
          <div className="personName">
            <input
              id={props.name}
              type="radio"
              checked={props.isPayed}
              onClick={() => handleTogglePersonCheck(guestId, churrasId)}
            />
            <label htmlFor={props.name}>&nbsp;&nbsp;{name}</label>
          </div>
          <div className={isPayed ? "isPayedCheck" : "noPayed"}>
            <span>{priceFormatter.format(value)}</span>
          </div>
        </div>
      </div>
      <div className="borderBottom"></div>
    </Container>
  );
}
