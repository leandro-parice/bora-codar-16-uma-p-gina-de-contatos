import { useState, useEffect } from "react";

import AppHeader from "./components/AppHeader";
import ListContact from "./components/ListContact";
import FormContact from "./components/FormContact";

const App = () => {
  const [contacts, setContacts] = useState({});
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [formContact, setFormContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  // useEffect(() => {
  //   const savedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   if (savedContacts) {
  //     // console.log("pegou os dados do local storage");
  //     setContacts(savedContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   // localStorage.setItem("contacts", JSON.stringify(contacts));
  //   console.log(contacts);
  // }, [contacts]);

  const handleVisibleFormContact = (value) => {
    // inputRef.current.focus();
    setFormContact(value);
  };

  const handleAddContact = (newContact) => {

    const newContacts = contacts;
    const firstLetter = newContact.name.toUpperCase().charAt(0);

    if (!newContacts.hasOwnProperty(firstLetter)) {
      newContacts[firstLetter] = [newContact];
    } else {
      newContacts[firstLetter].push(newContact);
      newContacts[firstLetter].sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 0));
    }

    const sortKeys = Object.keys(newContacts).sort();
    const newContactsSort = {};

    for (let key of sortKeys) {
      newContactsSort[key] = newContacts[key];
    }

    setContacts(newContactsSort);
    // setFilteredContacts(newFilteredContacts);
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

  const handleSelectContact = (contact) => {
    if(selectedContact){
      if(contact.id !== selectedContact.id){
        setSelectedContact(contact);
      }else{
        setSelectedContact(null);
      }
    } else{
      setSelectedContact(contact);
    }
  }

  return (
    <div className="app">
      <AppHeader onFilterContacts={handleFilterContacts} onAddClick={handleVisibleFormContact} selectedContact={selectedContact} />
      <ListContact contacts={contacts} onSelectContact={handleSelectContact} selectedContact={selectedContact} />
      <FormContact onAddContact={handleAddContact} visible={formContact} onAddClick={handleVisibleFormContact} />
    </div>
  );
};

export default App;
