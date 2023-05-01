/* eslint-disable react/prop-types */
import ListContactGroup from "../ListContactGroup";
import ListContactRow from "../ListContactRow";

const ListContact = ({ contacts, onSelectContact, selectedContact }) => {
  return (
    <section className="list-contacts">
      {Object.keys(contacts).length === 0 ? <p>Sem registros</p> : null}
      {Object.keys(contacts).map((value, key) => {
        return (
          <div className="contact-group" key={value}>
            <ListContactGroup letter={value} index={key} />
            <div className="contacts">
              {contacts[value].map((contact) => {
                return <ListContactRow key={contact.id} contact={contact} onSelectRow={onSelectContact} selectedContact={selectedContact} />;
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ListContact;
