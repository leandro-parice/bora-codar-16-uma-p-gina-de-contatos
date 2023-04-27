import { useState, useEffect } from "react";

import AppHeader from "./components/AppHeader";
import ListContact from "./components/ListContact";
import FormContact from "./components/FormContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [formContact, setFormContact] = useState(false);

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (savedContacts) {
  //     // console.log("pegou os dados do local storage");
  //     setContacts(savedContacts);
  //   }
  // }, []);

  useEffect(() => {
    // localStorage.setItem("contacts", JSON.stringify(contacts));
    console.log(contacts);
  }, [contacts]);

  const handleVisibleFormContact = (value) => {
    setFormContact(value);
  };

  const handleAddContact = (newContact) => {
    const newContacts = [...contacts, newContact];
    newContacts.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 0));

    const newFilteredContacts = [...filteredContacts, newContact];
    newFilteredContacts.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 0));

    setContacts(newContacts);
    setFilteredContacts(newFilteredContacts);
    setFormContact(false);
  };

  const handleFilterContacts = (query) => {
    if (query === "") {
      setFilteredContacts(contacts);
    } else {
      const filtered = contacts.filter((contact) => contact.name.toLowerCase().includes(query.toLowerCase()));
      setFilteredContacts(filtered);
    }
  };

  return (
    <div className="app">
      <AppHeader onFilterContacts={handleFilterContacts} onAddClick={handleVisibleFormContact} />
      <ListContact contacts={filteredContacts} />
      <FormContact onAddContact={handleAddContact} visible={formContact} onAddClick={handleVisibleFormContact} />
    </div>
  );
};

export default App;
