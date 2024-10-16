import React from 'react';
import {Badge, Button} from 'reactstrap';

class Cart extends React.Component{
    render(){
        return(
            <div>
                <Button color='primary'>
                <span class="material-icons">local_mall</span>
                    <Badge color='primary'>0</Badge>
                </Button>
            </div>
        );
    }
}

export default Cart;