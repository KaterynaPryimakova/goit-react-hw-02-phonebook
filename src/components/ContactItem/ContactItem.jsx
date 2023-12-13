import React from 'react';
import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, id }) => {
  return (
    <li key={id} className={css.item} id={id}>
      <p>{name}</p>
      <p>{number}</p>
      <button className={css.button}>Delete</button>
    </li>
  );
};
