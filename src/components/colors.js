// A color list allowing us to cooridnate tab/page style colors
// Color will be according to tab number, give tab number, receive color
// Tabs go from 1-4.
const red = 'rgb(164,17,9)';
const green = 'rgb(218,194,0)';
const blue = 'rgb(0,174,239)';
const purple = 'rgb(143,0,102)';
const grey = 'rgb(102,102,102)';

const tabColors = [red, purple, blue, green];

const allColors = tabColors + [grey];

// Return full list of colors
const colorList = () => allColors;

// Will be for quick color picking based on tab, 1-4.
const colorPicker = (number) => {
  // adjust number to 0 index
  const i = number - 1;

  // If valid tab number->color, return tabs color.
  if (i >= 0 && i <= 3) {
    return tabColors[i];
  }

  return tabColors[1];
};

export {
  colorList,
  colorPicker,
};
