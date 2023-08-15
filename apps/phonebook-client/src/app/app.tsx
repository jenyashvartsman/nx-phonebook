import { useEffect, useMemo, useState } from 'react';
import ContactsList from './components/ContactsList';
import ContactsSearch from './components/ContactsSearch';
import { ContactDto } from '@nx-phonebook/dto';
import { getContacts } from './api/contacts.api';
import ContactView from './components/ContactView';

export function App() {
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const [search, setSearch] = useState<string>('');
  const [selectedContact, setSelectedContact] = useState<ContactDto | null>(
    null
  );
  const [selectedContactActive, setSelectedContactActive] =
    useState<boolean>(false);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        `${contact.firstName} ${contact.lastName}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [search, contacts]
  );

  useEffect(() => {
    (async () => {
      const contacts = await getContacts();
      setContacts(contacts);
    })();
  }, []);

  const openContactView = (contact: ContactDto): void => {
    setSelectedContact(contact);
    setSelectedContactActive(
      !selectedContactActive || contact.id !== selectedContact?.id
    );
  };

  return (
    <main
      className={`app-wrapper ${
        selectedContactActive && 'contact-view-active'
      }`}
    >
      <div className="contacts-wrapper">
        <ContactsSearch onSearchChange={setSearch} />
        <ContactsList
          contacts={filteredContacts}
          contactViewClick={openContactView}
        />
      </div>

      <div className="contact-view-wrapper">
        <ContactView
          contact={selectedContact}
          onCloseClick={() => setSelectedContactActive(false)}
        />
      </div>
    </main>
  );
}

export default App;
