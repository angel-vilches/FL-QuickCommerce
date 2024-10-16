import React from "react";
import {Button, CardImg, Container, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import './ProductSheet.css';

class ProductSheet extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modal:false
        };
        this.toggle = this.toggle.bind(this);
        console.log(this.props);
    }

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render(){
        return(
            <Container>
                <Button onClick={this.toggle}>Details</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.title}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.image}/>
                        <p>Information: </p>
                        {this.props.props.description}
                        <p>The price is <b>{this.props.props.price}</b></p>
                        <p><b>Units: {this.props.props.stock}</b></p>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                        <Button color="primary" onClick={this.toggle}>Add to cart</Button>
                        <Button color="secondary" onClick={this.toggle}>Back</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default ProductSheet;
