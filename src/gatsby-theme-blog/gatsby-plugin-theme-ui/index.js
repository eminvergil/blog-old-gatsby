/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

import { merge } from "theme-ui"
import darkmode from "gatsby-theme-blog-darkmode/src/gatsby-plugin-theme-ui"

export default merge(darkmode, {
  colors: {
    modes: {
      dark: {
        text: `tomato`,
      },
    },
  },
})
