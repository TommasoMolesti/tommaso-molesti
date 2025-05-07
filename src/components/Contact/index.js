import React, { Component } from 'react';

import styles from './contact.module.scss';

class Contact extends Component {
    render() {
        return (
            <div className={styles.contactContainer}>
                <div>
                    But feel free to{' '}
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
