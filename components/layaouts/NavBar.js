import React from 'react';
import Link from 'next/link';

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navBar">
                <a className="navbar-brand" href="/">Inicio</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link href="/pet">
                                <a className="nav-link" href="#">Mascotas</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link href="/user">
                                <a className="nav-link" href="#">Usuarios</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link href="/meet">
                                <a className="nav-link" href="#">Turnos</a>
                            </Link>
                        </li>
                        <li className="nav-item active">
                            <Link href ="/drug">
                                <a className="nav-link" href="#">Ventas</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar