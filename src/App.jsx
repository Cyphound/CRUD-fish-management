// src/App.jsx
import React from 'react';
import { Container } from 'reactstrap';
import BarraNavegacion from './fragments/BarraNavegacion';
import PetFishCRUD from './fragments/MascotaPezCrud.jsx';
import './App.css';

function App() {
  return (
      <div className="App">
        <BarraNavegacion />
        <Container>
          <PetFishCRUD />
        </Container>
      </div>
  );
}

export default App;