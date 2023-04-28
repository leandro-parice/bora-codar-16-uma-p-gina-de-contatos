import { X } from "lucide-react";
import { useState, useRef } from "react";

const FormContact = ({ onAddContact, visible, onAddClick }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = { id: Date.now(), name, phone };
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
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Nome" required ref={inputRef} />
          <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Telefone" required />
          <button type="submit">Adicionar contato</button>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
