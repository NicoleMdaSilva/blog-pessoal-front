import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Title } from './components/Title/Title';
import { Text } from './components/Text/Text';

function App() {
  const nome = 'Nicole';

  return(
    <>
      <Title nome={nome} />
      <Text />
    </>
  );
}

export default App;

