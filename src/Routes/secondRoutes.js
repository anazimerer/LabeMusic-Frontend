import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import MusicLibrary from '../Pages/MusicLibrary/index.js'
import CreateMusic from '../Pages/CreateMusic/index.js';
import MusicDetails from '../Pages/MusicDetails/index.js';
import Menu from '../components/Menu/index.js';
import { ContainerMenuAndRoutes } from '../styles/global'
import Login from '../Pages/Login/index.js';

export default function SecondRoutes() {
    return (
        <ContainerMenuAndRoutes>
            <BrowserRouter>
                <Menu className="cardAction" />
                <Switch>
                    <Route exact path="/biblioteca" component={MusicLibrary} />
                    <Route exact path="/musica/:id" component={MusicDetails} />
                    <Route exact path="/criarMusica" component={CreateMusic} />
                    <Route exact path="/" component={Login} />
                </Switch>
            </BrowserRouter>
        </ContainerMenuAndRoutes>
    );
}
