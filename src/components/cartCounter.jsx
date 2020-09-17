import React, { Component } from "react";

class Cart extends Component {
  //any data that components needs
  //state - i can give data which is local or private to that component. i cannot access the state it is completely internal to that component.
  //prop - is a data that i can give to the component prop are read-only, it cannot change input to other component from its component.
  state = {
    cartValue: this.props.value,

    lists: ["Item-01", "Item-02", "Item-03", "Item-04"],
    imageURL: "https://img.icons8.com/nolan/64/shopping-cart.png",
  };
  style = {
    fontSize: 20,
    fontWeight: "bold",
  };
  render() {
    //const is not applicable for Modifying, use let instead
    //let repeatedClasses = this.badgeModifier();

    return (
      <div>
        {/*{this.props.children}*/}

        <h4>Item No. {this.props.id}</h4>
        <span className={this.badgeModifier()}>{this.formatCart()}</span>

        <button
          //onClick={this.addOnClickListener}
          onClickCapture={this.addOnClickListener}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
          onClick={this.subOnClickListener}
          className="btn btn-secondary btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br></br>
      </div>
    );
  }
  addOnClickListener = () => {
    this.setState({ cartValue: this.state.cartValue + 1 });
  };
  subOnClickListener = () => {
    this.setState({ cartValue: this.state.cartValue - 1 });
  };

  badgeModifier() {
    let repeatedClasses = "badge m-2 badge-";
    repeatedClasses += this.state.cartValue === 0 ? "warning" : "primary";
    return repeatedClasses;
  }

  formatImage() {
    const { imageURL } = this.state;
    return imageURL;
  }
  formatCart() {
    const { cartValue } = this.state;
    return cartValue === 0 ? "Cart Empty" : cartValue;
  }
  renderCondition() {
    if (this.state.lists.length === 0)
      return <p>There are no Item on the Cart!</p>;

    return (
      <ul>
        {this.state.lists.map((lists) => (
          <li key={lists}>{lists}</li>
        ))}
      </ul>
    );
  }
}

export default Cart;
