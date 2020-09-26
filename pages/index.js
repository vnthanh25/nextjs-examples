import React from 'react';
import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../i18n'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Layout from '../components/Layouts/BasicLayout';
import ProTip from '../components/ProTip';
import Link from '../components/Link';
import Copyright from '../components/Copyright';
import { Paper } from '@material-ui/core';

function Index({ t }) {
  return (
    <Layout>
      <Box my={4}>
        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en')}
        >
          {t('change-language')}
        </button>
        <Typography variant="h4" component="h1" gutterBottom>
        {t('title')}
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
  Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Paper>
        <ProTip />
        <Copyright />
      </Box>
    </Layout>
  );
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common', 'home'],
})

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('home')(Index)