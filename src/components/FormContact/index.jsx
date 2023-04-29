import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const FormContact = ({ visible, onCloseClick, selectedContact, onSendForm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("Adicionar contato");
  const nameRef = useRef(null);

  useEffect(() => {
    if (selectedContact) {
      setName(selectedContact.name);
      setPhone(selectedContact.phone);
      setTitle("Editar contato");
    }
  }, [selectedContact]);

  useEffect(() => {
    if (visible) {
      nameRef.current.focus();
    }
  }, [visible]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedContact) {
      onSendForm({ id: selectedContact.id, name, phone });
    } else {
      onSendForm({ id: Date.now(), name, phone });
    }

    handleCloseForm();
  };

  const handleCloseForm = () => {
    onCloseClick();

    setTimeout(() => {
      setName("");
      setPhone("");
      setTitle("Adicionar contato");
    }, 300);
  };

  return (
    <div className={visible ? "form-contact visible" : "form-contact"}>
      <div className="content">
        <div className="content-header">
          <h2>{title}</h2>
          <button onClick={() => handleCloseForm()}>
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Nome" required ref={nameRef} />
          <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="Telefone" required />
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
