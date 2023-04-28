import { Pencil, Plus, Search, Trash } from "lucide-react";
import { useState} from "react";

const AppHeader = ({ onFilterContacts, onAddClick }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onFilterContacts(newQuery);
  };

  return (
    <header className="header">
      <div className="header-top">
        <h1>Meus contatos</h1>
        <nav>
          <button onClick={() => onAddClick(true)}>
            <Plus size={20} />
          </button>
          <button>
            <Pencil size={20} />
          </button>
          <button>
            <Trash size={20} />
          </button>
        </nav>
      </div>
      <div className="header-botton">
        <Search size={20} />
        <input type="text" placeholder="Busque por nome ou por dados de contato..." value={query} onChange={handleChange} />
      </div>
    </header>
  );
};

export default AppHeader;
