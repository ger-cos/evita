import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cantGatos : 0
        }
    }

    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navBar">
                <a class="navbar-brand" href="#">Gatos: {this.state.cantGatos}</a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Gatos registrados</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Usuarios registrados</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Turnos</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Venta de estupefacientes</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar