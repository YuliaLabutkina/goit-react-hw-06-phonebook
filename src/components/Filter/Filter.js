import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContact } from '../../redux/phonebook/phonebook-action';
import { FilterLabel, FilterInput } from './Filter.style';

const Filter = ({ filter, changeFilterName }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={filter}
        onChange={changeFilterName}
        type="text"
        placeholder="Enter name"
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilterName: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts }) => ({
  filter: contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilterName: e => dispatch(filterContact(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
