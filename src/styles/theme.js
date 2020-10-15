import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    // MuiTypography
    MuiTypography: {
      root: {
        /* backgroundColor: 'red' */
      },
    },
    // MuiInputBase
    MuiInputBase: {
      root: {
        marginTop: "-6px",
        marginBottom: "-6px",
      },
    },
    // MuiButtonBase
    MuiButtonBase: {
      root: {
        padding: "0.5vh",
      },
    },
    // MuiIconButton
    MuiIconButton: {
      root: {
        padding: "0.5vh",
      },
    },
    // MuiToolbar
    MuiToolbar: {
      regular: {
        "@media (min-width: 0px)": {
          minHeight: "5vh",
        },
      },
    },
    // MuiListItem
    MuiListItem: {
      gutters: {
        paddingTop: "2px",
        paddingBottom: "2px",
      },
      root: {
        paddingTop: "2px",
        paddingBottom: "2px",
      },
    },
    // MuiListItemText
    MuiListItemText: {
      root: {
        marginTop: "2px",
        marginBottom: "2px",
      },
    },
    // MuiMenuItem
    MuiMenuItem: {
      root: {
        paddingTop: "2px",
        paddingBottom: "2px",
        minHeight: "5vh",
      },
    },
  },
  // palette
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
