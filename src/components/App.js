import React, { useState, useEffect } from 'react';
import { Switch, HashRouter, Route, Redirect } from 'react-router-dom';
import history from '../config/history';

import { Container } from './Container'
import { Nav } from './Nav'
import { Main } from './Main';
import { Home } from './Home';
import { About } from './About';
import { NotFound } from './NotFound';
import { Skills } from './Skills';
import { Projects } from './Projects';

const App = props => {

    return (
        <HashRouter history={history}>
            <Container>
                <Nav />
                <Main>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/skills' exact component={Skills} />
                        <Route path='/about' exact component={About} />
                        <Route path='/projects' exact component={Projects} />
                        <Route path='/404' component={NotFound} />
                        <Redirect to='/404' />
                    </Switch>
                </Main>
            </Container>
        </HashRouter>
    )

}

export default App;