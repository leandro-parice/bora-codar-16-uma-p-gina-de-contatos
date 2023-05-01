/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const ListContactGroup = ({ letter, index }) => {
  const [colors] = useState([
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
    "#e67e22", // laranja cenoura
    "#e74c3c", // vermelho alizarina
    "#95a5a6", // cinza asbesto
    "#f39c12", // laranja cenoura escura
    "#d35400", // laranja abóbora
    "#c0392b", // vermelho escarlate
    "#7f8c8d", // cinza concreto
  ]);
  const [listIndex, setListIndex] = useState(0);

  useEffect(() => {
    let newIndex = index;
    while (!colors[index]) {
      index -= colors.length;
    }
    setListIndex(newIndex);
  }, [index]);

  return (
    <span className="letter" style={{ backgroundColor: colors[listIndex] }}>
      {letter}
    </span>
  );
};

export default ListContactGroup;
