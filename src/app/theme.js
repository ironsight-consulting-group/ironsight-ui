import { grommet } from 'grommet';
import merge from 'lodash/merge'

const theme = {
  global: {
    font: {
      family: 'Roboto',
    },
  }
};

export default merge(theme, grommet)