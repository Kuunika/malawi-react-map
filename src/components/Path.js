import React from "react";

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
export default Path;
