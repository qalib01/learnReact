import React, { Component } from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from "reactstrap";

export default class CategoryList extends Component {
    render() {
        return (
            <React.Fragment>
                <h3> { this.props.title } </h3>
                <ListGroup numbered flush horizontal>
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem active>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem disabled>Morbi leo risus</ListGroupItem>
                    <ListGroupItem color="success">Porta ac consectetur ac</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros
                        <ListGroupItemHeading>
                            List group item heading
                        </ListGroupItemHeading>
                        <ListGroupItemText>
                            Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </React.Fragment>
        );
    }
}
