import { useEffect, useState } from 'react';
import ContactsList from './components/ContactsList';
import ContactsSearch from './components/ContactsSearch';
import { ContactDto } from '@nx-phonebook/dto';
import { getContacts } from './api/contacts.api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function App() {
  const [contacts, setContacts] = useState<ContactDto[]>([]);

  useEffect(() => {
    (async () => {
      const contacts = await getContacts();
      setContacts(contacts);
    })();
  }, []);

  return (
    <div className="contacts-wrapper">
      <ContactsSearch />
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default App;
