import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../Redux/contactSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return;
    
    // Dispatch addContact thunk z nowymi danymi kontaktowymi
    dispatch(addContact({ name, number }));

    // Wyczyść formularz po dodaniu kontaktu
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        name="name"
        value={name}
        nChange={(e) => setName(e.target.value)}
        className={styles.inputField}
        placeholder="Enter name"
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className={styles.inputField}
        placeholder="Enter phone number"
        required
      />
      <button type="submit" className={styles.submitButton}>Add contact</button>
    </form>
  );
};

export default ContactForm;