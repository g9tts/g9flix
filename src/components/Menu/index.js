import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/img/Logo.png";
import './Menu.css';
import Button from '../Button';

//import ButtonLink from './components/ButtonLink';

function Menu() {
    return(
        <nav className="Menu">
        <Link to="/">
            <img class="Logo" src={Logo} alt="G9FLIX logo"/>
        </Link>

        <Button as={Link} className="ButtonLink" to="/cadastro/video">
            Novo Video
        </Button>
        </nav>
    );
}

export default Menu;