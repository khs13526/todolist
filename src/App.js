import React from 'react';
import './App.css';
import Main from './components/Main'
import Head from './components/Head';
import List from './components/List';
import Create from './components/Create';



function App() {
  return (
    <Main>
      <Head />
      <List />
      <Create />
    </Main>
  );
}

export default App;
