import React from 'react';
import css from './Button.module.css';

export const Button = ({ title }) => {
  return <button className={css.button}>{title}</button>;
};
