import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import MusicLibrary from '../Pages/MusicLibrary/index.js'
//import Menu from '../components/Menu/index.js'
import CreateMusic from '../Pages/CreateMusic/index.js';
import MusicDetails from '../Pages/MusicDetails/index.js';
import Menu from '../components/Menu/index.js';


export default function SecondRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path="/biblioteca" component={MusicLibrary} />
                <Route exact path="/musica" component={MusicDetails} />
                <Route exact path="/criarMusica" component={CreateMusic} />
            </Switch>
        </BrowserRouter>
    );
}
