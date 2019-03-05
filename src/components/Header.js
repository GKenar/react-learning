import React, { Component } from "react";
import { Link } from "./Link";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <div className="header-logo">
          <img src={this.props.logo} alt="Logo" />
        </div>
        <div className="header-nav">
          <h2>{this.props.header}</h2>
          <nav className="nav">
            <Link name="Home" href="" />
            <Link name="About" href="about" />
            <Link name="Another link" href="Anotherlink" />
          </nav>
        </div>
      </header>
    );
  }
}
