import React from 'react';
import Container from '../components/layaouts/Container'
import PetPanel from '../components/pets/PetPanel'
import '../components/pets/styles/PetPanel.css'
import '../components/pets/styles/PetAvatar.css'


function Pet() {
  return (
    <div className="petContainer">
      <Container>
        <PetPanel></PetPanel>
      </Container>
    </div>
  );
}

export default Pet;