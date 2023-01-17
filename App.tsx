import * as React from 'react';
import { useState } from 'react';
import './style.css';

const initErrorState = {
  name: false,
  email: false,
  wish: false,
};

const initState = {
  name: undefined,
  email: undefined,
  wish: undefined,
};

const hasError = (value: string | undefined): boolean => {
  return value === undefined || value === '';
};

export default function App() {
  const [state, setState] = useState(initState);
  const [error, setError] = useState({
    name: false,
    email: false,
    wish: false,
  });
  const [message, setMessage] = useState('');

  const submitForm = () => {
    const currentError = {
      name: hasError(state.name),
      email: hasError(state.email),
      wish: hasError(state.wish),
    };
    setError(currentError);
    const message =
      currentError.email || currentError.name || currentError.wish
        ? 'Some required fields are empty. Please, fix fields marked in red.'
        : 'Thanks for fullfilling the survey! Who knows? maybe a goldfish will fulfill your wish?';
    setMessage(message);
  };

  return (
    <div className="container">
      <h1>Goldfish.Inc</h1>
      {/* <img src="/" /> */}
      <form>
        <div className="section">
          Name:
          <input
            type="text"
            className={error.name ? 'incorrect-field' : 'field'}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div className="section">
          <label>
            Email:
            <input
              type="text"
              className={error.email ? 'incorrect-field' : 'field'}
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </label>
        </div>
        <div className="section">
          <label>
            Wish:
            <input
              type="textarea"
              className={`${error.name ? 'incorrect-field' : 'field'} textarea`}
              onChange={(e) => setState({ ...state, wish: e.target.value })}
            />
          </label>
        </div>
      </form>
      <div onClick={submitForm} className="submit-button">
        Submit
      </div>
      {message && <div className="message">{message}</div>}
    </div>
  );
}
