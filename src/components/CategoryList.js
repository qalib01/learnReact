import React, { Component, useState } from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";
import PropTypes from 'prop-types'

export default class CategoryList extends Component {
    // constructor() { // We don't need any constructor function, it is optional
    //     super();
    //     this.state = {
    //         categories: [
    //             {
    //                 id: 1,
    //                 name: 'Rose',
    //             },
    //             {
    //                 id: 2,
    //                 name: 'Tulip',
    //             },
    //             {
    //                 id: 3,
    //                 name: 'Lily',
    //             },
    //             {
    //                 id: 4,
    //                 name: 'Peony',
    //             },
    //             {
    //                 id: 5,
    //                 name: 'Orchid',
    //             },
    //             {
    //                 id: 6,
    //                 name: 'Marigold',
    //             },
    //         ],
    //     };
    // };

    state = {
        categories: [
            {
                id: 1,
                name: 'Rose',
            },
            {
                id: 2,
                name: 'Tulip',
            },
            {
                id: 3,
                name: 'Lily',
            },
            {
                id: 4,
                name: 'Peony',
            },
            {
                id: 5,
                name: 'Orchid',
            },
            {
                id: 6,
                name: 'Marigold',
            },
        ],
        categoryText: '',
        inputValue: '',
    };

    static defaultProps = {
        title: '',
    }

    changeText = (category) => {
        this.setState({ categoryText: category.name })
        // console.log(this);
    }

    setInputValue = (value) => {
        this.setState({ inputValue: value })
        // console.log(value);
    }
    
    render() {
        return (
            <React.Fragment>
                <h3> { this.props.info.title } </h3>
                <ListGroup flush horizontal>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem onClick={() => this.changeText( category )} key={ category.id }> { category.name } </ListGroupItem>
                        ))
                    }

                    <h6> { this.props.name } </h6>

                    <div>
                        {/* Your input element */}
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => this.setInputValue( e.target.value )}
                        />

                        {/* Display the input value */}
                        <p>Input Value: { this.state.inputValue }</p>
                    </div>



                    {/* <ListGroupItem active>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem disabled>Morbi leo risus</ListGroupItem>
                    <ListGroupItem color="success">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros
                        <ListGroupItemHeading>
                            List group item heading
                        </ListGroupItemHeading>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem> */}
                </ListGroup>
                <h5> {this.state.categoryText} </h5>
            </React.Fragment>
        );
    }
}


