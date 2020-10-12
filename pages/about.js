import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ComCopyright from "../components/UI/ComCopyright";
import ComLink from "../components/UI/ComLink";
import ComProTip from "../components/UI/ComProTip";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" component={ComLink} naked href="/">
          Go to the main page
        </Button>
        <ComProTip />
        <ComCopyright />
      </Box>
    </Container>
  );
}
