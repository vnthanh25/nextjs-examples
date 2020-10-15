import { Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import Copyright from "../components/UIs/Copyright";
import Link from "../components/UIs/Link";
import ProTip from "../components/UIs/ProTip";
import BasicLayout from "../hocs/Layouts/BasicLayout";
import { withTranslation } from "../i18n";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { END } from "redux-saga";
import { wrapper } from "../store";
import { loadData, startClock, tickClock } from "../store/actions";

function Index(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  const { t } = props;
  return (
    <BasicLayout {...props}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {/* {t("title")} */}
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
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
        <ProTip />
        <Copyright />
      </Box>
    </BasicLayout>
  );
}

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

Index.getInitialProps = async () => ({
  namespacesRequired: ["common", "home", "layout"],
});

// Index.defaultProps = {
//   namespacesRequired: ["common", "home"],
// };

// export async function getServerSideProps(context) {
//   return {
//     // Unlike `getInitialProps` the props are returned under a props key
//     // The reasoning behind this is that there's potentially more options
//     // that will be introduced in the future.
//     // For example to allow you to further control behavior per-page.
//     props: { namespacesRequired: ["common", "home"] },
//   };
// }

// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   store.dispatch(tickClock(false));

//   if (!store.getState().placeholderData) {
//     store.dispatch(loadData());
//     store.dispatch(END);
//   }

//   await store.sagaTask.toPromise();
// });

export default withTranslation("home")(Index);
