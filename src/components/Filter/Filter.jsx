import React from 'react';
import css from './Filter.module.css';

export const Filter = () => {
  return (
    <>
      <label htmlFor="search" className={css.label}>
        Find contacts by name:
        <input type="text" name="search" />
      </label>
    </>
  );
};
