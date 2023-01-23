import React from "react";
import { Container } from "./styles";
import Ellipse from "../../../assets/Ellipse.svg";
import iconBbq from "../../../assets/icon_bbq.svg";
import { Link } from "react-router-dom";

export default function AddChurrasCard() {
  return (
    <Link to="/novochurras">
      <Container>
        <div className="image">
          <img src={Ellipse} alt="Ellipse icon" className="ellipse" />
          <img src={iconBbq} alt="iconBbq icon" className="iconBbq" />
        </div>
        <div className="addChurras">
          <span>Adicionar Churras</span>
        </div>
      </Container>
    </Link>
  );
}
