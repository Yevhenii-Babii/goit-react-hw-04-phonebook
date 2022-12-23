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
