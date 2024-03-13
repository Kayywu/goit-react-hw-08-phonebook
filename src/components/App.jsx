import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import UserMenu from './Navigation/UserMenu';
import Navigation from './Navigation/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../Redux/authSlice';
import { fetchContacts } from '../Redux/contactSlice'; 

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Router>
      <div className="appContainer">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        <Switch>
          <Route exact path="/login">
            {/* Jeśli użytkownik nie jest zalogowany, przekieruj go do innej strony */}
            {!isLoggedIn ? <Redirect to="/register" /> : null}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
