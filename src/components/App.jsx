import { nanoid } from 'nanoid';

import { Form } from './Form/Form';
import { List } from './List/List';
import { Filter } from './Filter/Filter';
import { useEffect, useState } from 'react';



export function App() {
const [contacts, setContacts] = useState(() => {
  const allContacts = JSON.parse(localStorage.getItem('newContact'));
  if (allContacts) {
  return allContacts 
  } 
  return [  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]
});

const [filter, setFilter] = useState('');


useEffect(()=> {
  
    localStorage.setItem('newContact', JSON.stringify(contacts)); 
  
},[contacts])


 const formSubmit = data => {
  const newUser = {
    ...data,
    id: nanoid(),
  };
  if (
    contacts.some(
      user => user.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
    )
  ) {
    return alert(`${data.name} is already in list`);
  }
  setContacts(prevState =>  [...prevState, newUser],);
};

 const deleteForm = userId => {
  setContacts (prevState => prevState.filter(user => user.id !== userId),
);
};

const onFilterChange = e => {
  setFilter( e.target.value);
};

const filterName = () => {
  const filterName = filter.toLowerCase().trim();
  return contacts.filter(user =>
    user.name.toLowerCase().trim().includes(filterName)
  );
};

  return (
    <>
    <Form onSubmit={formSubmit} />
    <List contacts={filterName()} deleteForm={deleteForm} />
    <Filter
      filter={filter}
      onFilterChange={onFilterChange}
    />
  </>
  )

}







 

 
 


