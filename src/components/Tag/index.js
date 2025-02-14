import React, { Component } from 'react';

import styles from './tag.module.scss';

class Tag extends Component {
    render() {
        return <div className={styles.container}>{this.props.tag.label}</div>;
    }
}

export default Tag;
