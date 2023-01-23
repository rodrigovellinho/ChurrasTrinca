import { Container } from "./style";

export function Spinner() {
  return (
    <Container>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}
