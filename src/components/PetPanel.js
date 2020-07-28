import React from 'react';
import ReactDOM from 'react-dom';
import PetForm from './PetForm.js'
import PetCard from './PetCard'
//Gatos..
import { pets } from '../pets.json'
import './PetPanel.css'

class PetPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pets: pets
        }

        this.handleAddPet = this.handleAddPet.bind(this);
    }

    handleAddPet(pet){
        this.setState({
            pets: [...this.state.pets, pet]
        })
    }

    render(){
        const pets = this.state.pets.map((pet, i) =>{
            return(
                <PetCard pet={pet} i={i}></PetCard>
            )
        })
        return(
            <>
                <div className="petPanel">
                    <div className="petForm" >
                        <PetForm onAddPet={this.handleAddPet}></PetForm>
                    </div>
                    <div className="grillaPetCard">
                        {pets}
                    </div>
                </div>
            </>
        )
        
    }
}

export default PetPanel