import React, { Component } from "react";

//TODO: Functional Stateless Component
export default class Path extends Component {
  render() {
    const { name, boundary } = this.props.selectedDistricts;
    const isHiglighted = district => this.props.districts.includes(district);
    return (
      <path
        data-for="svgTooltip"
        fill={isHiglighted(name) ? this.props.selectedColor : "inherit"}
        onClick={this.props.onClick}
        data-tip={name}
        d={boundary}
        title={name}
        xlinkTitle={name}
        id={name}
      />
    );
  }
}
