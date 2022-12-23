import PropTypes from 'prop-types';
export const List = ({ contacts, deleteForm }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {' '}
            {name}:{number}
            <button onClick={() => deleteForm(id)}> Delete </button>
          </li>
        );
      })}
    </ul>
  );
};

List.prototype = {
    deleteForm: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.number.isRequired  
        }).isRequired
    ).isRequired
}