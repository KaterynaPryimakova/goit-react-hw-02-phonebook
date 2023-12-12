import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts }) => {
  return (
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
  );
};
