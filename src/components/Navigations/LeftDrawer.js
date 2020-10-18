import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import clsx from "clsx";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

/************************************************** Constructor */
const LeftDrawer = (props) => {
  const classes = useStyles();

  const [staIsDrawerOpen, setStaIsDrawerOpen] = useState(false);
  if (props.isDrawerOpen) {
    //setStaIsDrawerOpen(props.isDrawerOpen);
  }

  const fncToggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //setStaIsDrawerOpen(isOpen);
  };

  const fncMenuItemOnClick = (event) => {};

  // Constructor.
  useEffect(() => {
    if (props.fncToggleDrawerRef) {
      // Call back parent to set a function ref.
      props.fncToggleDrawerRef((isOpen) => {
        setStaIsDrawerOpen(isOpen);
      });
    }
  }, []);

  /************************************************** render */
  return (
    <Drawer open={staIsDrawerOpen} onClose={props.fncDrawerClose}>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: props.isMobile,
        })}
        role="presentation"
      >
        {/* List items 1 */}
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={(event) => props.fncMenuItemOnClick(event)}
              onKeyDown={(event) => props.fncMenuItemOnClick(event)}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />

        {/* List items 2 */}
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

/************************************************** styles */
const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default LeftDrawer;
