import { TablePagination, TextField } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import * as locales from "@material-ui/core/locale";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Pagination from "@material-ui/lab/Pagination";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import { useSelector } from "react-redux";
import Clock from "../../components/Clock";
import ComSearchAppBar from "../../components/Navigations/ComSearchAppBar";
import ComScrollTop from "../../components/UI/ComScrollTop.js";
import { i18n, withTranslation } from "../../i18n";

const ComBasicLayout = (props) => {
  const { children, t } = props;
  const [staLocale, setStaLocale] = React.useState("viVN");
  const light = useSelector((state) => state.light);
  const lastUpdate = useSelector((state) => state.lastUpdate);
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider
        theme={(outerTheme) => createMuiTheme(outerTheme, locales[staLocale])}
      >
        <ComSearchAppBar>
          <button
            type="button"
            onClick={(event) => {
              i18n.changeLanguage(props.i18n.language === "en" ? "vi" : "en");
              setStaLocale(props.i18n.language === "en" ? "viVN" : "enUS");
            }}
          >
            {t("change-language")}
          </button>
          <Clock lastUpdate={lastUpdate} light={light} />
        </ComSearchAppBar>
        <Container>
          <Autocomplete
            options={Object.keys(locales)}
            getOptionLabel={(key) =>
              `${key.substring(0, 2)}-${key.substring(2, 4)}`
            }
            style={{ width: 300 }}
            value={staLocale}
            disableClearable
            onChange={(event, newValue) => {
              setStaLocale(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Test"
                variant="outlined"
                fullWidth
              />
            )}
          />
          <TablePagination
            count={2000}
            rowsPerPage={10}
            page={1}
            component="div"
            onChangePage={() => {}}
          />
          <Pagination count={2000} color="primary" />
          <Rating defaultValue={4} name="locales" />
          {children}
        </Container>
        <ComScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ComScrollTop>
      </ThemeProvider>
    </React.Fragment>
  );
};

// ComBasicLayout.getInitialProps = async () => ({
//   namespacesRequired: ["layout"],
// });

export default withTranslation("layout")(ComBasicLayout);
