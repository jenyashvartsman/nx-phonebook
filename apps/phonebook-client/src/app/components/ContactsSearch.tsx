interface ContactsSearchProps {
  onSearchChange: (newSearch: string) => void;
}

const ContactsSearch = ({ onSearchChange }: ContactsSearchProps) => {
  return (
    <input
      className="contacts-search"
      type="text"
      placeholder="Search"
      onChange={(event) => onSearchChange(event.target.value)}
    />
  );
};

export default ContactsSearch;
