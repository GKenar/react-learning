import React, { Component } from "react";
import { ListElement } from "./ListElement";
import { ListCard } from "./ListCard";

export class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      selectedElement: -1
    };
  }

  render() {
    if (this.state.selectedElement === -1) {
      return this.renderAllList();
    } else {
      return this.renderSelectedElement();
    }
  }

  renderSelectedElement() {
    const item = this.props.data[this.state.selectedElement];

    return (
      <div>
        <ListCard
          id={item.id}
          name={item.name}
          age={item.age}
          avatar={item.avatar}
          description={item.description}
          onClick={() => this.setState({ selectedElement: -1 })}
        />
      </div>
    );
  }

  renderAllList() {
    const { data } = this.props;

    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p style={{ margin: 5 }}>Найти по имени:</p>
          <input
            value={this.state.searchText}
            onChange={e => this.setState({ searchText: e.target.value })}
          />
        </div>
        <ul>
          {data
            .filter(
              item =>
                item.name
                  .toLowerCase()
                  .indexOf(this.state.searchText.toLowerCase()) !== -1
            )
            .map((item, index) => (
              <ListElement
                key={item.id}
                id={item.id}
                name={item.name}
                age={item.age}
                avatar={item.avatar}
                onClick={() => this.setState({ selectedElement: index })}
              />
            ))}
        </ul>
      </div>
    );
  }
}
