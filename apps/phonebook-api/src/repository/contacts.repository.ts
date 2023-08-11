import { ContactDto } from '@nx-phonebook/dto';
import { faker } from '@faker-js/faker';

const getAllContacts = (): ContactDto[] => {
  return Array.from(
    {
      length: faker.number.int({ min: 40, max: 100 }),
    },
    () => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();

      return {
        id: faker.string.uuid(),
        firstName: firstName,
        lastName: lastName,
        avatarUrl: faker.image.avatar(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email({ firstName, lastName }),
        address: {
          street: faker.location.streetAddress({ useFullAddress: true }),
          city: faker.location.city(),
          country: faker.location.country(),
          zipCode: faker.location.zipCode(),
        },
      };
    }
  );
};

export { getAllContacts };
