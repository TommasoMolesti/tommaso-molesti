import React, { Component } from 'react';

import styles from './bank.module.scss';

class Bank extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h4>IBAN</h4>
                LT673250096808461208
                <br />
                <br />
                <h4>BIC / SWIFT</h4>
                REVOLT21
            </div>
        );
    }
}

export default Bank;
