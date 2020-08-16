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
  render() {
    return (
      <div>
        {this.state.cartLists.map((counter) => (
          <Cart key={counter.id} value={counter.value} id={counter.id}></Cart>
        ))}
      </div>
    );
  }
}

export default CartList;
