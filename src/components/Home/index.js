import React, { Component } from 'react';

import { INFO } from '../../INFO';
import Contact from '../Contact';
import Header from '../Header';
import Section from '../Section';

import styles from './home.module.scss';

class Home extends Component {
    render() {
        return (
            <div className={styles.mainContainer}>
                <Header />
                {INFO.map((section, index) => (
                    <Section section={section} key={index} />
                ))}
                <Contact />
            </div>
        );
    }
}

export default Home;
