import React, { Component } from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";

export default class CategoryList extends Component {

    constructor() {
        super();
        this.state = {
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
        };
    };

    render() {
        return (
            <React.Fragment>
                <h3> { this.props.info.title } </h3>
                <ListGroup flush horizontal>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem key={ category.id }> { category.name } </ListGroupItem>
                        ))
                    }

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
            </React.Fragment>
        );
    }
}
