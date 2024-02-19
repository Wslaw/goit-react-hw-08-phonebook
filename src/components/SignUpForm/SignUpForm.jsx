import { useState,  useId } from 'react';

import styles from './sign-up-form.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const SignUpForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });
  const handleChange = ({ target }) => {

    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    // const { name, value } = target;
    // const newValue =  value;

    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const { name, email, password } = state;

  return (
    <div className={styles.wrap}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.block}>
          <label htmlFor={nameId}>Name:</label>
          <input
            id={nameId}
            value={name}
            onChange={handleChange}
            name="name"
            required
          />
        </div>
        <div className={styles.block}>
          <label htmlFor={emailId}>Email:</label>
          <input
            id={emailId}
            value={email}
            onChange={handleChange}
            type="email"
            name="email"
            required
          />
        </div>
        <div className={styles.block}>
          <label htmlFor={passwordId}>Password:</label>
          <input
            id={passwordId}
            value={password}
            onChange={handleChange}
            type="password"
            name="password"
            required
          />
        </div>
        <button className={styles.btn} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
