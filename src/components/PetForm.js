import React from 'react';
import ReactDOM from 'react-dom';
import PetAvatar from './PetAvatar.js'

class PetForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            edad: '',
            peso: 0,
            propietario: '',
            alojamiento: '',
            avatar: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddAvatar = this.handleAddAvatar.bind(this) 
    }

    handleChange(event){
        const value = event.target.value
        const name = event.target.name
 
        this.setState({
            [name]: value
        })
    }

    handleAddAvatar(avatar){
        this.setState({
           avatar: avatar
       }) 
    }

    handleSubmit(event){
        event.preventDefault()
        alert("Estas por registrar a esta nueva rata de campo")
        console.log(this.state)
        this.props.onAddPet(this.state)
        this.setState({
            nombre: '',
            edad: '',
            peso: 0,
            propietario: '',
            alojamiento: '',
        })
        
    }

    render(){
        return(
            <form>
                <div class="form-row">
                    <div class="form-group col-xs-2">
                        <label>Nombre</label>
                        <input name="nombre" type="text" value={this.state.nombre} onChange={this.handleChange} class="form-control" id="inputNombre" placeholder="Evite"></input>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group col-xs-2">
                        <label>Edad</label>
                        <input name="edad" type="number" value={this.state.edad} onChange={this.handleChange} class="form-control" id="inputEdad" placeholder="4"></input>
                    </div>
                </div>
                
                <div class="form-row">
                    <PetAvatar onAddAvatar={this.handleAddAvatar}></PetAvatar>
                </div>
                <div class="form-row">
                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </div>
            </form>
        )
    }
}

export default PetForm