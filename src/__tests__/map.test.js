import React from "react";
import { shallow, mount, render } from "enzyme";
import toJSON from "enzyme-to-json";
import MalawiMap from "../MalawiMap";

describe("Test Map Component", () => {
  it("Renders Map component and matches the snapshot", () => {
    const wrapper = mount(
      <MalawiMap
        onClick={districts => console.log(districts)}
        height={600}
        selectedColor="#0468b1"
        fill="9D9D9D"
      />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("It Responds to clicks", () => {
    let selected = [];
    const wrapper = mount(
      <MalawiMap
        onClick={districts => (selected = districts)}
        height={600}
        selectedColor="#0468b1"
        fill="9D9D9D"
      />
    );
    wrapper.find("#Lilongwe").simulate("click");
    expect(selected).toEqual(["Lilongwe"]);

    wrapper.find("#Zomba").simulate("click");
    expect(selected).toEqual(["Lilongwe", "Zomba"]);

    wrapper.update();
    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find("#Lilongwe").simulate("click");
    expect(selected).toEqual(["Zomba"]);

    wrapper.update();
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
