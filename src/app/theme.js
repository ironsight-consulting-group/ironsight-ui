import { base } from "grommet"
import merge from "lodash/merge"

const theme = {
  global: {
    font: {
      family: "Poppins, san serif",
    },
    colors: {
      'brand': '#0254A4',
      'blue-1': "#0254A4",
      'blue-2': "#3676BA",
      'blue-3': "#6092C6",
      'blue-4': "#B2CBE1",
      'blue-5': "#7CAAD1",
      'focus': 'transparent',
    },
    drop: {
      zIndex: '150',
    }
  },
  heading: {
    font: {
      family: 'PoppinsRegular, sans serif'
    },
  },
  worldMap: {
    continent: {
      active: '6px',
    },
  },
}

const output = merge(base, theme);
console.log(output);

export default output;
