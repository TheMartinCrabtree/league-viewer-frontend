import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { StoreContext } from './StoreContext';

function App() {
  const {state, dispatch, actions } = useContext(StoreContext)

  return (
    <div className="App">
      <header >
        
      </header>
      <section>
        <p>
          section in app
        </p>
        
      </section>
    </div>
  );
}

export default App;
