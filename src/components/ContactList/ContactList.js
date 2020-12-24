import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { deleteContact } from '../../redux/phonebook/phonebook-action';
import ContactListItem from './ContactListItem';
import List from './ContactList.style';

const ContactList = ({ items, deleteContact }) => {
  return items && items.length > 0 ? (
    <List>
      {items.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          deleteContact={() => deleteContact(id)}
        />
      ))}
    </List>
  ) : null;
};

ContactList.propTypes = {
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

const filterByName = (items, currentFilter) => {
  const searchName = currentFilter.toLowerCase();
  return items.filter(({ name }) => name.toLowerCase().includes(searchName));
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  items: filterByName(items, filter),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: contactId => dispatch(deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
