import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import ComLeftDrawer from "./ComLeftDrawer.js";
import { useStyles } from "./ComSearchAppBar.jss";

const ComSearchAppBar = (props) => {
  const { children } = props;
  const classes = useStyles();
  const [staAnchorEl, setStaAnchorEl] = React.useState(null);
  const [staMobileMoreAnchorEl, setStaMobileMoreAnchorEl] = React.useState(
    null
  );
  const [staComLefDrawer] = React.useState({});

  const isMenuOpen = Boolean(staAnchorEl);
  const isMobileMenuOpen = Boolean(staMobileMoreAnchorEl);

  const fncToggleDrawer = (isDrawerOpen) => (event) => {
    staComLefDrawer.fncToggleDrawer(isDrawerOpen);
  };

  const fncHandleProfileMenuOpen = (event) => {
    setStaAnchorEl(event.currentTarget);
  };

  const fncHandleMobileMenuClose = () => {
    setStaMobileMoreAnchorEl(null);
  };

  const fncHandleMenuClose = () => {
    setStaAnchorEl(null);
    fncHandleMobileMenuClose();
  };

  const fncHandleMobileMenuOpen = (event) => {
    setStaMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={staAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={fncHandleMenuClose}
    >
      <MenuItem onClick={fncHandleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={fncHandleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={staMobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={fncHandleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          className={classes.menuBadge}
          aria-label="show 4 new mails"
          color="inherit"
        >
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <span>Messages</span>
      </MenuItem>
      <MenuItem>
        <IconButton
          className={classes.menuBadge}
          aria-label="show 11 new notifications"
          color="inherit"
        >
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <span>Notifications</span>
      </MenuItem>
      <MenuItem onClick={fncHandleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <span>Profile</span>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar id="topAnchor">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={fncToggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow}>{children}</div>
          <div id="sectionDesktop" className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={fncHandleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div id="sectionMobile" className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={fncHandleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {/* Go to top */}
      <ComLeftDrawer
        fncToggleDrawerRef={(fncToggleDrawerRef) =>
          (staComLefDrawer.fncToggleDrawer = fncToggleDrawerRef)
        }
        isDrawerOpen={true}
        isMobile={false}
      />
    </div>
  );
};

export default ComSearchAppBar;
