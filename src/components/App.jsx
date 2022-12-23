import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form } from './Form/Form';
import { List } from './List/List';
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };

  formSubmit = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    if (
      this.state.contacts.some(
        user => user.name.toLocaleLowerCase() === data.name.toLocaleLowerCase()
      )
    ) {
      return alert(`${data.name} is already in list`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
    }));
  };

  deleteForm = userId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(user => user.id !== userId),
    }));
  };

  onFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterName = () => {
    const filterName = this.state.filter.toLowerCase().trim();
    const { contacts } = this.state;
    return contacts.filter(user =>
      user.name.toLowerCase().trim().includes(filterName)
    );
  };

  render() {
    const filterUser = this.filterName();
    return (
      <>
        <Form onSubmit={this.formSubmit} />
        <List contacts={filterUser} deleteForm={this.deleteForm} />
        <Filter
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
      </>
    );
  }
}
