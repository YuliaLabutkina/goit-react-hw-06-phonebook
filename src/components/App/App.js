import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

import { Container, MainTitle, ContactTitle } from './App.style';

const App = () => {
  return (
    <Container>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
