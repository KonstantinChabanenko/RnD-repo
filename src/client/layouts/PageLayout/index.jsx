import React, { Fragment } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PageLayout = ({ children }) => (
  <Fragment>
    <Header />
    <div role="main" id="maincontent">
      {children}
    </div>
    <Footer />
  </Fragment>
)

export default PageLayout;
