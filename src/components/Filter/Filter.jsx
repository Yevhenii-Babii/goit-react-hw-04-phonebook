import PropTypes from 'prop-types';
export const Filter = ({ filter, onFilterChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input value={filter} onChange={onFilterChange}></input>
    </>
  );
};

Filter.prototype = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(),
};
