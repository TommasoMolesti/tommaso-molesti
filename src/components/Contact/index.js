import React, { Component } from 'react';

import styles from './contact.module.scss';

class Contact extends Component {
    render() {
        return (
            <div className={styles.contactContainer}>
                <div>
                    My personal portfolio is still in progress, but feel free to{' '}
                    <a href="https://www.linkedin.com/in/tommaso-molesti/" target="_blank">
                        reach out
                    </a>{' '}
                    !
                </div>
            </div>
        );
    }
}

export default Contact;
