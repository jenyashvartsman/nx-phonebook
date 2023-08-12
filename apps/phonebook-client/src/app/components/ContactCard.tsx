import { ContactDto } from '@nx-phonebook/dto';

interface ContactCardProps {
  contact: ContactDto;
}

const ContactCard = ({ contact }: ContactCardProps) => {
  return (
    <>
      {contact.firstName} {contact.lastName}
    </>
  );
};

export default ContactCard;
