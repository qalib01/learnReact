import React, { Component } from 'react'

export default class NavigationBar extends Component {
    // constructor(props) {
    //     super(props);
    // } // This constructor was used in previous times, for now we don't use this function. When we remove comment from this function we'll see an error that No-Useless-Constructor. This means that it is not useless
    render() {
        return (
            <React.Fragment>
                <h1> {this.props.title} </h1>
            </React.Fragment>
        )
    }
}
