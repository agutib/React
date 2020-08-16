import React, { Component } from "react";
import Cart from "./cartCounter";

class CartList extends Component {
  state = {
    cartLists: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  onDeleteListener = (cartListID) => {
    const cartLists = this.state.cartLists.filter(
      (count) => count.id !== cartListID
    );
    this.setState({ cartLists });
  };
  render() {
    return (
      <div>
        {this.state.cartLists.map((cartLists) => (
          //all the attributes below are part of the prop that input to the component
          // i cant access to the state of this component
          <Cart
            onDelete={this.onDeleteListener}
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
