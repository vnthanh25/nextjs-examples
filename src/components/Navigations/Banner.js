import PropTypes from "prop-types";
import { IconButton, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Auxiliary from "../../hocs/Auxiliary";

/************************************************** styles */
const useStyles = makeStyles((theme) => ({
  /* title: Mobile display none. Desktop display block. */
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  /* banner: magin right = theme x 2. */
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

/************************************************** Constructor */
/**
 * Description:
 * - Show icon menu for click.
 * - Show logo of company.
 * @param {} props
 */
const Banner = (props) => {
  const classes = useStyles();

  /************************************************** render */
  return (
    <Auxiliary>
      {/* Menu icon */}
      <IconButton
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="open drawer"
        onClick={(event) => props.fncToggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* Banner text */}
      <Typography className={classes.title} noWrap>
        Material-UI
      </Typography>
    </Auxiliary>
  );
};

/************************************************** propTypes */
Banner.propTypes = {
  fncToggleDrawer: PropTypes.func,
};

export default Banner;
