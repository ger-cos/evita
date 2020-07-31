import React from 'react';
import Container from '../components/layaouts/Container'
import PetPanel from '../components/pets/PetPanel'
import '../components/pets/styles/PetPanel.css'

function Pet() {
  return (
    <div className="petContainer">
      <Container>
        <h1 className="text-center">Bienvenido a la pagina de los gatos!</h1>
        <PetPanel></PetPanel>
      </Container>
    </div>
  );
}

export default Pet;