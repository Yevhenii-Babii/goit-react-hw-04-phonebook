import PropTypes from 'prop-types';
import { ListUl,BtnDelete } from './List.styled';
export const List = ({ contacts, deleteForm }) => {
  return (
    <>
    <h2>Contacts</h2>
    <ListUl>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {' '}
            {name}: {number}
            <BtnDelete onClick={() => deleteForm(id)}> Delete </BtnDelete>
          </li>
        );
      })}
    </ListUl>
    </>
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