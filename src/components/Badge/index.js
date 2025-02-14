import React, { Component } from 'react';

import { fromDateToString } from '../../utils';

import styles from './badge.module.scss';

class Badge extends Component {
    constructor() {
        super();

        this.state = {
            showDescription: false
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        if (this.props.badge.link) {
            window.location.href = this.props.section.link;
            return;
        }
        if (this.props.badge.description) {
            this.setState({ showDescription: !this.state.showDescription });
        }
    }
    render() {
        return (
            <a
                style={this.props.badge.link || this.props.badge.description ? { cursor: 'pointer' } : {}}
                onClick={this.handleClick}
            >
                <div className={styles.workContainer}>
                    <img src={this.props.badge.image} />
                    <div className={styles.infoContainer}>
                        <div className={styles.infoWrapper}>
                            <div className={styles.title}>{this.props.badge.title}</div>
                            <div className={styles.subTitle}>{this.props.badge.subTitle}</div>
                            {/* {this.state.showDescription && <p>{this.props.badge.description}</p>} */}
                        </div>
                        <div className={styles.period}>
                            {fromDateToString(this.props.badge.start)} -{' '}
                            {this.props.badge.end ? fromDateToString(this.props.badge.end) : 'Present'}
                        </div>
                    </div>
                </div>
            </a>
        );
    }
}

export default Badge;
