import React from 'react';
import { Button } from 'components/Button/Button';
import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, id }) => {
  return (
    <li key={id} className={css.item}>
      <p>{name}</p>
      <p>{number}</p>
      <Button title="Delete" />
    </li>
  );
};
