import { ContactDto } from '@nx-phonebook/dto';
import ContactCard from './ContactCard';

interface ContactsListProps {
  contacts: ContactDto[];
}

const ContactsList = ({ contacts }: ContactsListProps) => {
  return (
    <ul className="contacts-list">
      {contacts.map((contact) => (
        <li key={contact.id}>
          <ContactCard contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
