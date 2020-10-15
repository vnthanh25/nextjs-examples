import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import clsx from "clsx";
import React from "react";
import { useStyles } from "./LeftDrawer.jss";

const LeftDrawer = (props) => {
  const { fncToggleDrawerRef, isDrawerOpen = false, isMobile } = props;
  const classes = useStyles();
  const [staIsDrawerOpen, setStaIsDrawerOpen] = React.useState(isDrawerOpen);

  const fncToggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setStaIsDrawerOpen(isOpen);
  };

  fncToggleDrawerRef((isOpen) => setStaIsDrawerOpen(isOpen));

  return (
    <Drawer open={staIsDrawerOpen} onClose={fncToggleDrawer(false)}>
      <div
        className={clsx(classes.list, {
          [classes.fullList]: isMobile,
        })}
        role="presentation"
        onClick={fncToggleDrawer(false)}
        onKeyDown={fncToggleDrawer(false)}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
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

export default LeftDrawer;
