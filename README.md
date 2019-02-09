# Malawi SVG Map
This is a simple React Component that renders an SVG Map of Malawi and allows you to click on the various districts.  You may pass an `onClick` Callback which will be returned with a List of all the Maps Districts that have been selected. With the District List, you may execute any logic in your application such as query an API with the selected district as a Parameter.

![alt text](https://res.cloudinary.com/c99/image/upload/v1549635973/Screenshot_2019-02-08_at_4.23.57_PM.png "Logo Title Text 1")

# Installation
This is available as an NPM Package.  You may search for malawi-react-map on the NPM Website and follow instructions there.

## Usage
Once installed, below is a typical usage of the Package:

```javascript
import React from "react";
import Map from "react-malawi-map";

const MapContainer = () => (
  <div className="mapContainer">
    <Map
      onClick={districts => console.log(districts)} //Any Valid Callback will do here
      height={300} //Any valid Number
      selectedColor="#0468b1" //Any Valid Color Hex Code
      fill="#9D9D9D" //Any Valid Color Hex Code | optional
    />
  </div>
)
```

## Features

- Tooltip: The Plugin provides a Tooltip with the name of a District when you Hover on it
- Selected Color: When a District has been Clicked, the color is changed to the `selectedColor` prop you pass

# How to Contribute
- Clone and fork this Repository
- Install all Dependancies (`npm i`)
- Run the Tests (`npm run test`)
- Make your changes and write tests documenting all edge cases
- Open a Pull Request
- Wait for your changes to be merged!

# Upcoming Features
Some of the Features we propose are:
- A breakdown of the Traditional Authorities and Villages of Every District.  This can be envoked with a Double Click of the District/TA.
- The onClick District Callback can return an object with all the TAs in that District.
- Geolocation epicenters of the District/TA/Village can be returned depending on what the user has clicked.
