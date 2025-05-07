import React, { Component } from 'react';

import { fromDateToString } from '../../utils';

import styles from './badge.module.scss';

class Badge extends Component {
    render() {
        return (
            <div
                className={styles.workContainer}
                style={this.props.badge.career?.length ? { alignItems: 'flex-start' } : { alignItems: 'center' }}
            >
                <img src={this.props.badge.image} />
                <div className={styles.infoContainer}>
                    <div className={styles.infoWrapper}>
                        <div className={styles.title}>{this.props.badge.title}</div>

                        {!this.props.badge.career?.[0].subTitle && (
                            <div className={styles.subTitle}>{this.props.badge.subTitle}</div>
                        )}
                        {this.props.badge.career?.map((careerItem) => {
                            return (
                                <>
                                    {careerItem.subTitle && (
                                        <div style={{ fontWeight: 'bold', marginTop: 5 }} className={styles.subTitle}>
                                            {careerItem.subTitle}
                                        </div>
                                    )}
                                    <div className={styles.listContainer}>
                                        {careerItem.bullets.map((item) => {
                                            return <li className={styles.subTitle}>{item.text}</li>;
                                        })}
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <div className={styles.period}>
                        {fromDateToString(this.props.badge.start)} -{' '}
                        {this.props.badge.end ? fromDateToString(this.props.badge.end) : 'Present'}
                    </div>
                </div>
            </div>
        );
    }
}

export default Badge;
