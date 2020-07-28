import React from 'react';
import ReactDOM from 'react-dom';
import PetAvatar from './PetAvatar';

//import evite from '../resources/evite.jpeg'
import fidel from '../resources/fidel.jpeg'
import luna from '../resources/luna.jpeg'
import evite from '../resources/evite.jpeg'

export default function PetCard(props){

    let img = props.pet.avatar
    if(props.pet.nombre === 'Evite'){
        img = evite
    }
    else if(props.pet.nombre === 'Luna'){
        img = luna
    }
    else if(props.pet.nombre === 'Fidel'){
        img = fidel
    }

    return(
        <div key={props.i}>
                <div>
                    <img class="card-img-top" src={img}/>
                </div>
                <div className="card-title text-center">
                    <h3>{props.pet.nombre}</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                        {props.pet.peso}
                    </span>
                </div>
                <div className="card-body">
                    {props.pet.descripcion}
                </div>
                <div className="card-footer">
                    <button
                        className="btn btn-danger"
                        >
                        Delete
                    </button>
                </div>
        </div>
    )
}