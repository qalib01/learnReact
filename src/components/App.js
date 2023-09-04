import React from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import NavigationBar from './NavigationBar';
import { Container, Row, Col } from 'reactstrap';


class App extends React.Component {
    // let productTitle = 'Product'; When we write this in here, it will return an error that Parsing erorr: Unexpected Token

    render () {
        // let titles = { // After including Encapsulitation we dont need it. It wasn't easy to edit.
        //     productTitle: 'Product List',
        //     categoryTitle: 'Category List',
        //     navigationTitle: 'Navigation List',
        // }; // We can write the titles as separate variables and inside an array, it will good and easy to read

        let productInfo = {
            title: 'Product List'
        }; // Encapsulation
        let categoryInfo = {
            title: 'Category List'
        }; // Encapsulation
        let navigationInfo = {
            title: 'Navigation List'
        }; // Encapsulation

        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <NavigationBar info = { navigationInfo } />
                    </Row>
                    <Row>
                        <Col xs="3">
                            <CategoryList info = { categoryInfo } />
                        </Col>
                        <Col xs="9">
                            <ProductList info = { productInfo } />
                        </Col>
                    </Row>
                </Container>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </React.Fragment>
        ) 
    }
};

export default App;