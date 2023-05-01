/* eslint-disable react/prop-types */
import { Pencil, Plus, Search, Trash } from "lucide-react";

const AppHeader = ({ selectedContact, onAddClick, onEditClick, onRemoveClick, onFilterContacts }) => {
  const handleChange = (event) => {
    const newQuery = event.target.value;
    onFilterContacts(newQuery);
  };

  return (
    <header className="header">
      <div className="header-top">
        <h1>Meus contatos</h1>
        <nav>
          <button className={selectedContact ? "" : "active"} onClick={() => onAddClick(true)}>
            <Plus size={20} />
          </button>

          <button className={selectedContact ? "active" : ""} onClick={() => onEditClick()}>
            <Pencil size={20} />
          </button>

          <button className={selectedContact ? "active" : ""} onClick={() => onRemoveClick()}>
            <Trash size={20} />
          </button>
        </nav>
      </div>
      <div className="header-botton">
        <Search size={20} />
        <input type="text" placeholder="Busque por nome ou por dados de contato..." onChange={handleChange} />
      </div>
    </header>
  );
};

export default AppHeader;
