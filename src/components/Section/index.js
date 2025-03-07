import React, { Component } from 'react';

import Badge from '../Badge';
import Tag from '../Tag';

import styles from './section.module.scss';

class Section extends Component {
    renderText() {
        if (!this.props.section.text) {
            return null;
        }

        return this.props.section.text.split('\n').map((line, index) => {
            return (
                <p key={index} className={styles.subText}>
                    {line}
                </p>
            );
        });
    }

    render() {
        return (
            <section className={styles.mainContainer}>
                <h2 className={styles.title}>{this.props.section.title}</h2>
                {this.renderText()}
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
