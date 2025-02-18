import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Bank from './components/Bank';
import Casa from './components/Casa';
import Home from './components/Home';
import { ROUTES } from './constants';

import './styles.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path={ROUTES.HOME} element={<Home />} />
                    <Route path={ROUTES.BANK} element={<Bank />} />
                    <Route path={ROUTES.CASA} element={<Casa />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
