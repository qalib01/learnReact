import React from 'react';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import NavigationBar from './NavigationBar';
import { Container, Row, Col } from 'reactstrap';


class App extends React.Component {
    // let productTitle = 'Product'; When we write this in here, it will return an error that Parsing erorr: Unexpected Token

    render () {
        let titles = {
            productTitle: 'Product List',
            categoryTitle: 'Category List',
            navigationTitle: 'Navigation List',
        }; // We can write the titles as separate variables and inside an array, it will good and easy to read
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <NavigationBar title={titles.navigationTitle} />
                    </Row>
                    <Row>
                        <Col xs="3">
                            <CategoryList title={titles.categoryTitle} />
                        </Col>
                        <Col xs="9">
                            <ProductList title={titles.productTitle} />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        ) 
    }
};

export default App;