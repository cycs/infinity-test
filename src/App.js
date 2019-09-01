import React from 'react';

import './App.css';

import Sidebar from './components/Sidebar'
import Contacts from './components/Contacts'
import Emails from './components/Emails'

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Contacts />
        <Emails />

    </div>
  );
}

export default App;
