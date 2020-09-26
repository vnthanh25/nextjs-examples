import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import * as locales from '@material-ui/core/locale';
import { i18n, withTranslation } from '../../i18n'

import PrimarySearchAppBar from '../PrimarySearchAppBar';
import { TablePagination, TextField } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Rating from '@material-ui/lab/Rating';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function BasicLayout(props) {
  const { children, t } = props;
  const [locale, setLocale] = React.useState('viVN');
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={(outerTheme) => createMuiTheme(outerTheme, locales[locale])}>
        <PrimarySearchAppBar>
        <button
          type='button'
          onClick={(event) => {
            i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
            setLocale(i18n.language === 'en' ? 'viVN' : 'enUS');
          }}
        >
          {t('change-language')}
        </button>
        </PrimarySearchAppBar>
        <Container>
          <Autocomplete
            options={Object.keys(locales)}
            getOptionLabel={(key) => `${key.substring(0, 2)}-${key.substring(2, 4)}`}
            style={{ width: 300 }}
            value={locale}
            disableClearable
            onChange={(event, newValue) => {
              setLocale(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Test" variant="outlined" fullWidth />
            )}
          />
          <TablePagination
            count={2000}
            rowsPerPage={10}
            page={1}
            component="div"
            onChangePage={() => { }}
          />
          <Pagination count={2000} color="primary" />
          <Rating defaultValue={4} name="locales" />
          {children}
        </Container>
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </React.Fragment>
  );
}

BasicLayout.getInitialProps = async () => ({
  namespacesRequired: ['layout'],
})

export default withTranslation('layout')(BasicLayout);