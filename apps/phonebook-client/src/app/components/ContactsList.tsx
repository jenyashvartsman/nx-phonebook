import { ContactDto } from '@nx-phonebook/dto';
import ContactCard from './ContactCard';
import ContactNotFoundCard from './ContactNotFoundCard';

interface ContactsListProps {
  contacts: ContactDto[];
  contactViewClick: (contact: ContactDto) => void;
}

const ContactsList = ({ contacts, contactViewClick }: ContactsListProps) => {
  return (
    <ul className="contacts-list">
      {contacts.length ? (
        contacts.map((contact) => (
          <li key={contact.id}>
            <ContactCard
              contact={contact}
              contactViewClick={() => contactViewClick(contact)}
            />
          </li>
        ))
      ) : (
        <ContactNotFoundCard />
      )}
    </ul>
  );
};

export default ContactsList;
