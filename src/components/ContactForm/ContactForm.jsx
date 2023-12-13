import React, { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addContact = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const userName = form.elements.name.value;
    const userNumber = form.elements.number.value;

    const { getNewContact } = this.props;

    this.setState(
      {
        name: userName,
        number: userNumber,
        id: nanoid(),
      },
      () => {
        getNewContact(this.state);
      }
    );

    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.addContact} className={css.form}>
        <label htmlFor="name">Enter your name:</label>

        <input type="text" name="name" required />

        <label htmlFor="number"> Enter your number:</label>

        <input type="tel" name="number" required />

        <button className={css.button}>Add contact</button>
      </form>
    );
  }
}
