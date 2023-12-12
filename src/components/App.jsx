import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { name: 'Rosie Simpson', number: '459-12-56' },
      { name: 'Hermione Kline', number: '443-89-12' },
      { name: 'Eden Clements', number: '645-17-79' },
      { name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  render() {
    const { contacts } = this.state;
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
        <ContactForm title="Phonebook" />
        <ContactList contacts={contacts} />
      </div>
    );
  }
}
