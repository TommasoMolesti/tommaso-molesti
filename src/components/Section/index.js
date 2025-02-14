import React, { Component } from 'react';

import Badge from '../Badge';
import Tag from '../Tag';

import styles from './section.module.scss';

class Section extends Component {
    render() {
        return (
            <section className={styles.mainContainer}>
                <h2 className={styles.title}>{this.props.section.title}</h2>
                {this.props.section.text && <p className={styles.subText}>{this.props.section.text}</p>}
                {this.props.section.badges?.map((badge, index) => {
                    return <Badge key={index} badge={badge} />;
                })}
                <div className={styles.tagsContainer}>
                    {this.props.section.tags?.map((tag, index) => {
                        return <Tag key={index} tag={tag} />;
                    })}
                </div>
            </section>
        );
    }
}

export default Section;
