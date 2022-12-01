import React, { Fragment } from "react";
import Footer from "../features/footer/components/Footer";
import TopBar from "../features/nav/components/TopBar";

const Layout1 = ({ children, id, tabId, selectedTab, tabIndex }) => {
  return (
    <Fragment>
      <TopBar />
      <main
        role="tabpanel"
        id={id}
        aria-labelledby={tabId}
        hidden={selectedTab !== tabIndex}
        tabIndex={0}
        className="container"
      >
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout1;
