import { ContactDto } from '@nx-phonebook/dto';

interface ContactViewProps {
  contact: ContactDto | null;
  onCloseClick: () => void;
}

const ContactView = ({ contact, onCloseClick }: ContactViewProps) => {
  return (
    <div className="contact-view">
      <img
        className="contact-view-avatar"
        src={contact?.avatarUrl}
        alt={contact?.firstName}
      />

      <h2 className="contact-view-name">
        {contact?.firstName} {contact?.lastName}
      </h2>

      <h4 className="contact-view-phone">
        {contact?.phoneNumber}
        <br />
        {contact?.email}
      </h4>

      <p className="contact-view-address">
        {contact?.address?.street}
        <br />
        {contact?.address?.city}, {contact?.address?.zipCode},{' '}
        {contact?.address?.country}
      </p>

      <button className="contact-view-close" onClick={onCloseClick}>
        Close
      </button>
    </div>
  );
};

export default ContactView;
