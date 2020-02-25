import React, { Fragment } from 'react';
import Header from '../../components/Header';

const PageLayout = ({ children }) => (
  <Fragment>
    <Header />
    <div role="main" id="maincontent">
      {children}
    </div>
  </Fragment>
)

export default PageLayout;
