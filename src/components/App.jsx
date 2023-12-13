import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  updateState = newContact => {
    const alreadyExist = this.state.contacts.some(
      contact => contact.name === newContact.name
    );
    if (alreadyExist) {
      alert(`${newContact.name} is already in contact.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  findContact = e => {
    const { value } = e.currentTarget;
    console.log(value);
    this.setState({ filter: value });
  };

  deleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm title="Phonebook" getNewContact={this.updateState} />

        <h2>Contacts</h2>
        <Filter findContact={this.findContact} filter={filter} />
        <ContactList
          title="Contacts"
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
