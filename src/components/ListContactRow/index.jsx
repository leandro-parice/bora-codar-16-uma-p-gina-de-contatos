/* eslint-disable react/prop-types */
const ListContactRow = ({ contact, onSelectRow, selectedContact }) => {
  return (
    <div
      className={selectedContact && selectedContact.id === contact.id ? "contact active" : "contact"}
      onClick={(event) => {
        onSelectRow(contact);
        event.stopPropagation();
      }}
    >
      <img src="https://i.pravatar.cc/50" />
      <div className="contact-content">
        <strong>{contact.name}</strong>
        <span>{contact.phone}</span>
      </div>
    </div>
  );
};

export default ListContactRow;
