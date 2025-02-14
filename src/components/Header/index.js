import React, { Component } from 'react';

import styles from './header.module.scss';

class Header extends Component {
    render() {
        return (
            <section id="header" className={styles.mainContainer}>
                <div className={styles.text}>
                    <div className={styles.mainText}>Hi, I'm Tommaso 👋</div>
                    <div className={styles.secondaryText}>Software Engineer @ WeGlad</div>
                </div>
                <img
                    className={styles.image}
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEqaN3DgtEW7Q/profile-displayphoto-shrink_800_800/B4DZOQzrwZHgAg-/0/1733301288747?e=1744848000&v=beta&t=mTbjwscGTQi85tWJD0LFpBov_o3sKwvVB4RMDHd6Hqg"
                />
            </section>
        );
    }
}

export default Header;
