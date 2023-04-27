import { useState } from "react";

const ListContact = ({ contacts }) => {
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
  const [colorsCount, setColorsCount] = useState(0);

  return (
    <section className="list-contacts">
      {contacts.length === 0 ? <p>Sem registros</p> : null}
      {contacts.map((contact) => (
        <div className="contact-group" key={contact.id}>
          <span className="letter" style={{ backgroundColor: colors[Math.floor(Math.random() * colors.length)] }}>
            {contact.letter}
          </span>
          <div className="contacts">
            <div className="contact">
              <img src="https://i.pravatar.cc/50" />
              <div className="contact-content">
                <strong>{contact.name}</strong>
                <span>{contact.phone}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListContact;
