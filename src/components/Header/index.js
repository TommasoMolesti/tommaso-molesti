import React, { Component } from 'react';

import Foto from '../../assets/foto_tom.jpg';

import styles from './header.module.scss';

class Header extends Component {
    render() {
        return (
            <section id="header" className={styles.mainContainer}>
                <div className={styles.text}>
                    <div className={styles.mainText}>Hi, I'm Tommaso 👋</div>
                    <div className={styles.secondaryText}>Software Engineer @ WeGlad</div>
                </div>
                <img className={styles.image} src={Foto} />
            </section>
        );
    }
}

export default Header;
