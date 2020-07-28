import React from 'react';
import ReactDOM from 'react-dom';
import PetForm from './PetForm.js'
import PetCard from './PetCard'
//Gatos..
import { pets } from '../pets.json'

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
                <div class="card" style={{width: "16rem"}}>
                    <PetForm onAddPet={this.handleAddPet} />
                </div>
                <div className="col-md-8">
                    <div className="row">
                        {pets}
                    </div>
                </div>
            </>
        )
        
    }
}

export default PetPanel