import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { StoreContext } from './StoreContext';
import ChampList from './components/ChampList';

function App() {
  const {state, dispatch, actions } = useContext(StoreContext)

  console.log("logging actions in App", actions)

  return (
    <div className="App">
      <header >
        
      </header>
      <section>
        <p>
          section in app
        </p>
        <ChampList />
        
      </section>
    </div>
  );
}

export default App;
