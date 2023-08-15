import { ContactDto } from '@nx-phonebook/dto';

interface ContactCardProps {
  contact: ContactDto;
  contactViewClick: () => void;
}

const ContactCard = ({ contact, contactViewClick }: ContactCardProps) => {
  return (
    <div className="contact-card">
      <div className="contact-card-details">
        <div className="contact-card-avatar">
          <img src={contact.avatarUrl} alt={contact.firstName} />
        </div>

        <h4 className="contact-card-name">
          {contact.firstName} {contact.lastName}
        </h4>

        <h5 className="contact-card-city">{contact.address?.city}</h5>

        <p className="contact-card-phone">{contact.phoneNumber}</p>
      </div>

      <div className="contact-card-view">
        <button onClick={contactViewClick}>View</button>
      </div>
    </div>
  );
};

export default ContactCard;
