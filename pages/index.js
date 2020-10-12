import { Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import ComCopyright from "../components/UI/ComCopyright";
import ComLink from "../components/UI/ComLink";
import ComProTip from "../components/UI/ComProTip";
import ComBasicLayout from "../hocs/Layouts/ComBasicLayout";
import { withTranslation } from "../i18n";

function Index(props) {
  const { t } = props;
  return (
    <ComBasicLayout {...props}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t("title")}
        </Typography>
        <ComLink href="/about" color="secondary">
          Go to the about page
        </ComLink>
        <Paper>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join("\n")}
        </Paper>
        <ComProTip />
        <ComCopyright />
      </Box>
    </ComBasicLayout>
  );
}

Index.getInitialProps = async () => ({
  namespacesRequired: ["common", "home"],
});

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("home")(Index);
