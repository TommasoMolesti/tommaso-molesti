import React, { Component } from 'react';

import { INFO } from './INFO';
import Contact from './components/Contact';
import Header from './components/Header';
import Section from './components/Section';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                {INFO.map((section, index) => (
                    <Section section={section} key={index} />
                ))}
                <Contact />
            </>
        );
    }
}

export default App;
