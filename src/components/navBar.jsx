import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/4.5/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
          Navbar
          <span className="badge badge-pill badge-primary m-2">
            {this.props.totalOrders}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
