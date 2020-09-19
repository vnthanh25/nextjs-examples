import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      root: {
        /* backgroundColor: 'red' */
      },
    },
    MuiButtonBase: {
      root: {
          padding: '0.5vh'
      },
    },
    MuiIconButton: {
      root: {
          padding: '0.5vh'
      }
    },
    MuiToolbar: {
      regular: {
        '@media (min-width: 0px)': {
          minHeight: '5vh'
        },
      },
    },
    MuiListItem: {
      gutters: {
        paddingTop: '2px',
        paddingBottom: '2px'
      },
      root: {
        paddingTop: '2px',
        paddingBottom: '2px'
      },
    },
    MuiListItemText: {
      root: {
        marginTop: '2px',
        marginBottom: '2px'
      },
    },
    MuiMenuItem: {
      root: {
        paddingTop: '2px',
        paddingBottom: '2px',
        minHeight: '5vh'
      },
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
