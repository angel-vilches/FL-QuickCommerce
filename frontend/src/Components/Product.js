import React from 'react';
import {Card, Col, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import './Product.css'
import ProductSheet from './ProductSheet';

class Product extends React.Component {
    render() {
        return(
            <Col sm='3'>
                <Card className='Card' body outline color='primary'>
                    <CardImg src={this.props.image}/>
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle><b>Price: </b>{this.props.price}</CardSubtitle>
                        <CardText>{this.props.description}</CardText>
                        <ProductSheet props={this.props}></ProductSheet>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default Product;