import { ContactDto } from '@nx-phonebook/dto';
import ContactCard from './ContactCard';
import ContactNotFoundCard from './ContactNotFoundCard';

interface ContactsListProps {
  contacts: ContactDto[];
}

const ContactsList = ({ contacts }: ContactsListProps) => {
  return (
    <ul className="contacts-list">
      {contacts.length ? (
        contacts.map((contact) => (
          <li key={contact.id}>
            <ContactCard contact={contact} />
          </li>
        ))
      ) : (
        <ContactNotFoundCard />
      )}
    </ul>
  );
};

export default ContactsList;
