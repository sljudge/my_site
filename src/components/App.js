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
import { MobileFooter } from './MobileFooter';
import { Loading } from './Loading';

const viewportWidth = window.innerWidth

const App = props => {
    const [mobile, setMobile] = useState(viewportWidth > 700 ? false : true)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <HashRouter history={history}>
            <Container>
                {
                    loading &&
                    <Loading />
                }
                {
                    !loading &&
                    <>
                        <Nav mobile={mobile} />
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
                    </>
                }

                {
                    mobile && !loading &&
                    <MobileFooter />
                }
            </Container>
        </HashRouter>
    )

}

export default App;