import React from 'react';
import './App.css';
import Product from './Components/Product';
import {Container, Row} from 'reactstrap';
import NavigationBar from './Components/NavigationBar';
import productList from './productList.json';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      productList
    };
  }
  render() {
    const componentArray = this.state.productList.productList.map(
      (productList, i) => {
        return(
          <Product
            key={i}
            title={productList.title}
            image={productList.image}
            description={productList.description}
            price={productList.price}
            stock={productList.stock}
          />
        )
      }
    );
    return (
      <>
        <NavigationBar title="Quickcommerce"/>
        <Container>
          <Row>
            {componentArray}
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
