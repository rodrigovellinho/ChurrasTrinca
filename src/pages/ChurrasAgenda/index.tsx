import React, { useContext } from "react";
import { Container, CardsContainer, SpinnerContainer } from "./styles";
import ChurrasCard from "../../components/UI/ChurrasCard";
import AddChurrasCard from "../../components/UI/AddChurrasCard";
import {
  ChurrasContext,
  ChurrasContextData,
} from "../../store/ChurrasProvider";
import { Spinner } from "../../components/UI/Spinner";

export default function ChurrasAgenda() {
  const { churrascos } = useContext(ChurrasContext) as ChurrasContextData;

  if (churrascos.length === 0) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }

  return (
    <Container>
      <CardsContainer>
        {churrascos.map((churrasco) => (
          <ChurrasCard
            key={churrasco.id}
            id={churrasco.id}
            name={churrasco.name}
            day={churrasco.day}
            guests={churrasco.guests}
          />
        ))}
        <AddChurrasCard />
      </CardsContainer>
    </Container>
  );
}
