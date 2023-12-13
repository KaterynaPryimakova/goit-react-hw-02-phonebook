import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';

import css from './ContactList.module.css';

export const ContactList = ({ contacts, children }) => {
  return (
    <div className={css.list}>
      {children}
      <ul>
        {contacts.map(({ name, number, id }) => {
          return <ContactItem name={name} number={number} id={id} key={id} />;
        })}
      </ul>
    </div>
  );
};
