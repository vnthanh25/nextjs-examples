import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ComLightBulbIcon from "./ComLightBulbIcon";
import { useStyles } from "./ComProTip.jss";

const ProTip = () => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} color="textSecondary">
      <ComLightBulbIcon className={classes.lightBulb} />
      Pro tip: See more{" "}
      <Link href="https://material-ui.com/getting-started/templates/">
        templates
      </Link>{" "}
      on the Material-UI documentation.
    </Typography>
  );
};

export default ProTip;
