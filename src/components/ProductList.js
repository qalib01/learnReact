import React, { Component } from 'react'

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <h3> {this.props.title} </h3>
            </React.Fragment>
        )
    }
}
