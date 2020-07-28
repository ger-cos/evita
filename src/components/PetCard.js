import React from 'react';
import ReactDOM from 'react-dom';
import PetAvatar from './PetAvatar';

export default function PetCard(props){

    return(
        <div className="col-md-4" key={props.i}>
            <div className="card mt-4">
                <div>
                    <img class="card-img-top" src={props.pet.avatar}/>
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
        </div>
    )
}