import React, { Component } from "react";

import styles from "./container.module.scss";

export class ContainerOptions {
    static fluid = styles.fluid;
    static hero = styles.hero;
    static standard = styles.standard;
    static centeredHero = styles.centeredHero;
}

export default class Container extends Component {
    render() {
        let BG = { backgroundColor: `${this.props.bg}` };
        return <div className={`${styles.container} ${this.props.className} ${this.props}`} style={BG}>{this.props.children}</div>;
    }
}