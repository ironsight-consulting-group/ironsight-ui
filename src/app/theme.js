import { grommet } from "grommet"
import merge from "lodash/merge"

const theme = {
  global: {
    font: {
      family: "Roboto",
    },
    colors: {
      navy: "#293F5B",
      bronze: "#977E5E",
      silver: "#989DA5",
      copper: "#7D666D"
    }
  },
}

export default merge(theme, grommet)
