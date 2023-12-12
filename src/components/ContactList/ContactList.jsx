import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';

export const ContactList = ({ title, contacts, children }) => {
  return (
    <div className={css.list}>
      <h2>{title}</h2>
      {children}
      <ul>
        {contacts.map(({ name, number }) => {
          return (
            <ContactItem
              name={name}
              number={number}
              id={nanoid()}
              key={nanoid()}
            />
          );
        })}
      </ul>
    </div>
  );
};
