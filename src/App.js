import React, { Component } from "react";
import NavBar from "./components/navBar";
import CartLists from "./components/cartLists";
import "./App.css";

import "./App.css";
import CartList from "./components/cartLists";

class App extends Component {
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
      <React.Fragment>
        <NavBar
          totalOrders={this.state.cartLists.filter((c) => c.value > 0).length}
        />
        <button className="btn btn-primary btn-sm m-2">Reset</button>
        <main className="container">
          <CartList
            cartLists={this.state.cartLists}
            onDeleteListener={this.onDeleteListener}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
