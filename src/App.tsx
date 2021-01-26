import React from 'react';
import logo from './logo.svg';
import './App.css';
import GuestList from './state/GuestList';
import UserSearch from './refs/UserSearch';
import EventComponent from './events/EventComponent';

function App() {
  return (
    <div className="App">
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
}

export default App;
