import { ContactDto } from '@nx-phonebook/dto';

const API_URL = 'http://localhost:3000/api/contacts';

const getContacts = async (): Promise<ContactDto[]> => {
  return (await fetch(API_URL)).json();
};

export { getContacts };
