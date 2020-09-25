import React from 'react'
import { Link } from 'react-router-dom';
import { ContainerMenu, Navbar, Nav, HeaderMenu } from '../../styles/menu'
import { TiThMenu, TiNotesOutline, TiZoomOutline, TiEdit } from "react-icons/ti";
import logo from '../../assets/labemusicMenor.png'
export default function Menu() {
    return (
        <ContainerMenu>
            <HeaderMenu></HeaderMenu>
            <input type="checkbox" id="check" />
            <label id="icone" for="check"><TiThMenu size="30px" color=" #00C4CC" /></label>
            <img src={logo} alt="logo" />
            <Navbar className="barra">
                <Nav>
                    <Link className="a" to="/biblioteca"><div className="link"><TiNotesOutline size="20px" margin-top="5px" /> Biblioteca</div></Link>
                    <Link className="a" to="/criarMusica"><div className="link"><TiEdit size="20px" margin-top="1px" /> Criar música</div></Link>
                    <Link className="a" to="/criarMusica"><div className="link"> <TiZoomOutline size="20px" margin-top="5px" /> Buscar</div></Link>
                </Nav>
            </Navbar>
        </ContainerMenu>
    );
}