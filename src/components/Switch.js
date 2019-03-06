import React, { Component } from "react";
import { SwitchElement } from "./SwitchElement";

export class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonSelected: -1
    };
  }

  render() {
    const { data, onSwitchChanged } = this.props;

    return (
      <div>
        {data.map(item => (
          <SwitchElement
            key={item.id}
            onClick={() => {
              this.setState({ buttonSelected: item.id });
              onSwitchChanged(item.id);
            }}
            active={this.state.buttonSelected === item.id}
          >
            {item.content}
          </SwitchElement>
        ))}
      </div>
    );
  }
}
