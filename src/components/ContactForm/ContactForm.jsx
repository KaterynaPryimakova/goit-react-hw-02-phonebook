import React, { Component } from 'react';
import css from './ContactForm.module.css';
import { Button } from 'components/Button/Button';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    const { title } = this.props;
    return (
      <form className={css.form}>
        <h2>{title}</h2>
        <label htmlFor="name">Enter your name</label>

        <input type="text" name="name" required />

        <label htmlFor="number"> Enter your number</label>

        <input type="tel" name="number" required />
        <Button title="Add contact" />
      </form>
    );
  }
}
