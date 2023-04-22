import { Title } from 'components/Title/Title';

export const ContactList = ({ contacts }) => (
  <>
    <Title title="Contacts" />
    <ul>
      {contacts.map(item => (
        <li key={item.id}>
          <p>{item.name}</p>
        </li>
      ))}
    </ul>
  </>
);
