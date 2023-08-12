import { useEffect, useMemo, useState } from 'react';
import ContactsList from './components/ContactsList';
import ContactsSearch from './components/ContactsSearch';
import { ContactDto } from '@nx-phonebook/dto';
import { getContacts } from './api/contacts.api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function App() {
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const [search, setSearch] = useState<string>('');
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

  return (
    <div className="contacts-wrapper">
      <ContactsSearch onSearchChange={setSearch} />
      <ContactsList contacts={filteredContacts} />
    </div>
  );
}

export default App;
