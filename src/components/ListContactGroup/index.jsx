/* eslint-disable react/prop-types */
import { useState } from "react";

const ListContactGroup = ({ letter }) => {
  const [colors, setColors] = useState([
    "#1abc9c", // verde turquesa
    "#2ecc71", // esmeralda
    "#3498db", // azul petróleo
    "#9b59b6", // roxo ametista
    "#34495e", // azul aço
    "#16a085", // verde malva
    "#27ae60", // verde esmeralda
    "#2980b9", // azul belize
    "#8e44ad", // roxo wisteria
    "#2c3e50", // azul do ar
    "#f1c40f", // amarelo sol
    "#e67e22", // laranja cenoura
    "#e74c3c", // vermelho alizarina
    "#ecf0f1", // prata
    "#95a5a6", // cinza asbesto
    "#f39c12", // laranja cenoura escura
    "#d35400", // laranja abóbora
    "#c0392b", // vermelho escarlate
    "#bdc3c7", // prata brilhante
    "#7f8c8d", // cinza concreto
  ]);

  return (
    <span className="letter" style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}>
      {letter}
    </span>
  );
};

export default ListContactGroup;
