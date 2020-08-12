import React from 'react';
import Container from '../components/layaouts/Container'
import PetForm from '../components/pets/PetForm'
import PetPanel from '../components/pets/PetPanel';

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="text-center">Bienvenido a la pagina de los gatos!</h1>
        <PetPanel>
          
        </PetPanel>
      </Container>
      
    </div>
  );
}

export default App;