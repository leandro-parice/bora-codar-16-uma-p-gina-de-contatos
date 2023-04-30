/* eslint-disable no-prototype-builtins */
import { useState, useEffect } from "react";

import AppHeader from "./components/AppHeader";
import ListContact from "./components/ListContact";
import FormContact from "./components/FormContact";

const App = () => {
  const [contacts, setContacts] = useState({
    A: [
      { id: 1, name: "Alberto Rodrigues", phone: "(12) 93454-1343" },
      { id: 2, name: "Alice Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 3, name: "Arnaldo Pereira", phone: "(11) 95423-2335" },
      { id: 4, name: "Beatriz Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 5, name: "Enzo Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 6, name: "Alice Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 7, name: "Eduarda Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 8, name: "Fernanda Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 9, name: "Arthur Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 10, name: "Davi Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 11, name: "Isabella Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 12, name: "Guilherme Sobrenome", phone: "(XX) XXXXX-XXXX" },
    ],
    L: [
      { id: 13, name: "Leandro Parice", phone: "(14) 97979-7979" },
      { id: 14, name: "Lilian Pricigo", phone: "(14) 97979-2343" },
      { id: 15, name: "Lucas da Silva", phone: "(14) 92432-7979" },
      { id: 16, name: "Miguel Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 17, name: "Guilherme Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 18, name: "Giovanna Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 19, name: "Miguel Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 20, name: "Beatriz Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 21, name: "Laura Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 22, name: "Beatriz Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 23, name: "Gabriel Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 24, name: "Gabriel Sobrenome", phone: "(XX) XXXXX-XXXX" },
      { id: 25, name: "Beatriz Sobrenome", phone: "(XX) XXXXX-XXXX" },
    ],
  });
  // const [filteredContacts, setFilteredContacts] = useState([]);
  const [formContact, setFormContact] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
    console.log(contacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // const handleFilterContacts = (query) => {
  //   if (query === "") {
  //     setFilteredContacts(contacts);
  //   } else {
  //     const filtered = contacts.filter((contact) => contact.name.toLowerCase().includes(query.toLowerCase()));
  //     setFilteredContacts(filtered);
  //   }
  // };

  const handleSelectContact = (contact) => {
    if (selectedContact) {
      if (contact.id !== selectedContact.id) {
        setSelectedContact(contact);
      } else {
        setSelectedContact(null);
      }
    } else {
      setSelectedContact(contact);
    }
  };

  const handleAddClick = () => {
    if (!selectedContact) {
      setFormContact(true);
    }
  };

  const handleEditContact = () => {
    if (selectedContact) {
      setFormContact(true);
    }
  };

  const handleCloseClick = () => {
    setFormContact(false);
  };

  const handleRemoveContact = () => {
    if (selectedContact) {
      const selectedId = selectedContact.id;
      const selectedName = selectedContact.name;
      const firstLetter = selectedName.toUpperCase().charAt(0);

      const newGroup = contacts[firstLetter].filter((value) => value.id !== selectedId);
      const newContacts = Object.assign({}, contacts);
      if (newGroup.length === 0) {
        delete newContacts[firstLetter];
      } else {
        newContacts[firstLetter] = newGroup;
      }

      setSelectedContact(null);
      setContacts(newContacts);
    }
  };

  const handleSendForm = (newContact) => {
    const newContacts = contacts;
    const firstLetter = newContact.name.toUpperCase().charAt(0);

    if (selectedContact) {
      const newGroup = contacts[firstLetter].map((contact) => {
        return contact.id === selectedContact.id ? { id: selectedContact.id, name: newContact.name, phone: newContact.phone } : contact;
      });
      newContacts[firstLetter] = newGroup;
    } else if (!newContacts.hasOwnProperty(firstLetter)) {
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

  return (
    <div className="app">
      <AppHeader selectedContact={selectedContact} onAddClick={handleAddClick} onEditClick={handleEditContact} onRemoveClick={handleRemoveContact} />
      <ListContact contacts={contacts} selectedContact={selectedContact} onSelectContact={handleSelectContact} />
      <FormContact visible={formContact} selectedContact={selectedContact} onCloseClick={handleCloseClick} onSendForm={handleSendForm} />
    </div>
  );
};

export default App;
