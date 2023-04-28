import ListContactGroup from "../ListContactGroup";
import ListContactRow from "../ListContactRow";

const ListContact = ({ contacts }) => {
  return (
    <section className="list-contacts">
      {contacts.length === 0 ? <p>Sem registros</p> : null}
      {Object.keys(contacts).map(key => {
        return(
          <div className="contact-group" key={key}>
            <ListContactGroup letter={key} />
            <div className="contacts">
              {contacts[key].map(contact => {
                return(<ListContactRow key={contact.id} contact={contact} />)
              })}
            </div>
          </div>
        )})}      
    </section>
  );
};

export default ListContact;
