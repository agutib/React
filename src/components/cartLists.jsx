import React, { Component } from "react";
import Cart from "./cartCounter";

class CartList extends Component {
  render() {
    return (
      <div>
        {this.props.cartLists.map((cartLists) => (
          //all the attributes below are part of the prop that input to the component
          // i cant access to the state of this component
          <Cart
            onDelete={this.props.onDeleteListener}
            key={cartLists.id}
            value={cartLists.value}
            id={cartLists.id}
          ></Cart>
        ))}
      </div>
    );
  }
}

export default CartList;
