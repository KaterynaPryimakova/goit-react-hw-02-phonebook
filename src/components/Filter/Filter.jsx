import React, { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
  render() {
    const { findContact } = this.props;

    return (
      <>
        <label htmlFor="search" className={css.label}>
          Find contacts by name:
          <input onChange={findContact} type="text" name="search" />
        </label>
      </>
    );
  }
}
