import React, { useState, useEffect } from 'react';

import { Container } from './Container'
import { Nav } from './Nav'
import { Main } from './Main';
import { Home } from './Home';

const App = props => {

    return (
        <Container>
            <Nav />
            <Main>
                <Home />
            </Main>
        </Container>
    )

}

export default App;