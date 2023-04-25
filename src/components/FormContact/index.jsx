import { X } from "lucide-react";
import { useState } from "react";

const FormContact = ({ onAddContact, visible, onAddClick }) => {
  const [name, setName] = useState("Leandro Parice");
  const [phone, setPhone] = useState("(14) 99739-2434");

  const handleSubmit = (event) => {
    event.preventDefault();

    const letter = name.toUpperCase().substring(0, 1);

    const newContact = { id: Date.now(), name, phone, letter };
    onAddContact(newContact);

    setName("");
    setPhone("");
  };

  return (
    <div className={visible ? "form-contact visible" : "form-contact"}>
      <div className="content">
        <div className="content-header">
          <h2>Adicioanar contato</h2>
          <button onClick={() => onAddClick(false)}>
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Nome" />
          <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Telefone" />

          <button type="submit">Adicionar contato</button>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
