import React, { Fragment, useState } from "react";
import ReactTooltip from "react-tooltip";
import { Path, districtsData } from "./components";

class MalawiMap extends React.Component {
  state = {
    selectedDistricts: []
  };

  _updateSelectedDistricts = e => {
    const district = e.target.id;
    const updatedSelectedDistricts = this.state.selectedDistricts.includes(
      district
    )
      ? this.state.selectedDistricts.filter(dist => dist != district)
      : [...this.state.selectedDistricts, district];

    this.setState({ selectedDistricts: updatedSelectedDistricts });
    this.props.onClick(updatedSelectedDistricts);
  };

  _renderFilterMap = props => {
    return (
      <g id="Map-Filter" transform="translate(26.000000, 160.000000)">
        <g id="districts" transform="translate(42.000000, 71.000000)">
          {districtsData.map(district => {
            return (
              <Path
                key={district.name}
                district={district}
                selectedDistricts={this.state.selectedDistricts}
                onClick={this._updateSelectedDistricts}
                selectedColor={this.props.selectedColor}
              />
            );
          })}
        </g>
      </g>
    );
  };
  render() {
    return (
      <Fragment>
        <svg
          id="svg"
          className="map"
          viewBox="0 0 195 481"
          version="1.1"
          style={{ height: this.props.height - 10 }}
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Malawi Map"
              transform="translate(-68.000000, -231.000000)"
              fill="#9D9D9D"
            >
              {this._renderFilterMap(this.props)}
            </g>
          </g>
        </svg>
        <ReactTooltip id="svgTooltip" />
      </Fragment>
    );
  }
}

export default MalawiMap;
