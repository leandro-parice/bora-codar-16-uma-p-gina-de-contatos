const ListContactRow = ({contact}) => {
    return (
        <div className="contact">
            <img src="https://i.pravatar.cc/50" />
            <div className="contact-content">
            <strong>{contact.name}</strong>
            <span>{contact.phone}</span>
            </div>
        </div>
    )
}

export default ListContactRow;


