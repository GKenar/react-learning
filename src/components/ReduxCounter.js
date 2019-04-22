import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../modules/counterActions";

class ReduxCounter extends Component {
  render() {
    return (
      <div>
        <button children="+" onClick={this.props.inc} />
        {this.props.count}
        <button children="-" onClick={this.props.dec} />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    count: store
  };
};

const mapDispatchToProps = function(dispatch, props) {
  return {
    inc: () => dispatch(increment()),
    dec: () => dispatch(decrement())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxCounter);
