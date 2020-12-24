import { useState } from 'react';
import { connect } from 'react-redux';

import { addContact } from '../../redux/phonebook/phonebook-action';
import { Form, LabelForm, InputForm, Button } from './ContactForm.style';

function ContactForm({ items, onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const checkingForExistenceOfSuchName = verifiableName => {
    const handleName = verifiableName.toLowerCase();
    return items.find(({ name }) => name.toLowerCase() === handleName);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const repeatName = checkingForExistenceOfSuchName(name);

    if (repeatName) {
      alert(`${name} is already in contact`);
    } else {
      const newContact = { name, number };
      onSubmit(newContact);
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelForm>
        Name
        <InputForm
          onChange={handleChange}
          type="text"
          name={'name'}
          placeholder="Enter name"
          value={name}
          required
        />
      </LabelForm>
      <LabelForm>
        Number
        <InputForm
          onChange={handleChange}
          type="tel"
          name={'number'}
          placeholder="Enter number"
          value={number}
          required
        />
      </LabelForm>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}

const mapStateToProps = ({ contacts }) => ({
  items: contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: newContact => dispatch(addContact(newContact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
