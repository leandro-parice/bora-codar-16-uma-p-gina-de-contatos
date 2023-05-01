/* eslint-disable no-prototype-builtins */
import { useState, useEffect } from "react";

import AppHeader from "./components/AppHeader";
import ListContact from "./components/ListContact";
import FormContact from "./components/FormContact";
import MessageRemove from "./components/MessageRemove";

const App = () => {
  const [contacts, setContacts] = useState({});
  const [filteredContacts, setFilteredContacts] = useState({});
  const [selectedContact, setSelectedContact] = useState(null);
  const [formContact, setFormContact] = useState(false);
  const [messageRemove, setMessageRemove] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));

    if (search === "") {
      setFilteredContacts(contacts);
    } else {
      let filtred = {};

      for (let key in contacts) {
        if (contacts.hasOwnProperty(key)) {
          const group = contacts[key].filter((contact) => contact.name.toLowerCase().includes(search.toLowerCase()));

          if (group.length > 0) {
            filtred[key] = group;
          }
        }
      }

      setFilteredContacts(filtred);
    }
  }, [contacts, search]);

  const handleFilterContacts = (query) => {
    setSearch(query);

    if (query === "") {
      setFilteredContacts(contacts);
    } else {
      let filtred = {};

      for (let key in contacts) {
        if (contacts.hasOwnProperty(key)) {
          const group = contacts[key].filter((contact) => contact.name.toLowerCase().includes(query.toLowerCase()));

          if (group.length > 0) {
            filtred[key] = group;
          }
        }
      }

      setFilteredContacts(filtred);
    }
  };

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
      setMessageRemove(true);
    }
  };

  const handleConfirmRemove = () => {
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

      setMessageRemove(false);
      setSelectedContact(null);
      setContacts(newContacts);
    }
  };

  const handleCancelRemove = () => {
    setMessageRemove(false);
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
    setFormContact(false);
  };

  return (
    <div className="app">
      <AppHeader selectedContact={selectedContact} onAddClick={handleAddClick} onEditClick={handleEditContact} onRemoveClick={handleRemoveContact} onFilterContacts={handleFilterContacts} />
      <ListContact contacts={filteredContacts} selectedContact={selectedContact} onSelectContact={handleSelectContact} />
      <FormContact visible={formContact} selectedContact={selectedContact} onCloseClick={handleCloseClick} onSendForm={handleSendForm} />
      <MessageRemove visible={messageRemove} onCancelClick={handleCancelRemove} onConfirmClick={handleConfirmRemove} />
    </div>
  );
};

export default App;
