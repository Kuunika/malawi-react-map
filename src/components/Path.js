import React from "react";
import PropTypes from "prop-types";

const Path = props => {
  const { selectedColor, district, onClick, selectedDistricts } = props;
  const { name, boundary } = district;

  const isHiglighted = district => selectedDistricts.includes(district);

  return (
    <path
      data-for="svgTooltip"
      fill={isHiglighted(name) ? selectedColor : "inherit"}
      onClick={onClick}
      data-tip={name}
      d={boundary}
      title={name}
      xlinkTitle={name}
      id={name}
    />
  );
};
Path.propTypes = {
  district: PropTypes.shape({
    name: PropTypes.string.isRequired,
    boundary: PropTypes.string.isRequired
  }),
  selectedDistricts: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired
};
export default Path;
