import React, { Component } from "react";

import styles from "./container.module.scss";

export default class Container extends Component {
    render() {
        let BG = { backgroundColor: `${this.props.bg}` };
        return <div className={`${styles.container} ${this.props.className}`} style={BG}>{this.props.children}</div>;
    }
}