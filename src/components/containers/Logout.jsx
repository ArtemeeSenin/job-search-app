import React, { Component } from 'react';

class Logout extends Component {
    componentDidMount() {
        this.props.onLogout();
    }

    render() {
        return null;
    }
}

export default Logout;