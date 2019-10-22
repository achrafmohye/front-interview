import React from "react";
import { StyledContainer, StyledContent } from "./layout.styled";
import Head from "next/head";

import Footer from "./Footer";
import Header from "./Header";

import GlobalStyle from "./theme";

export interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <StyledContainer>
      <GlobalStyle />
      <StyledContent>
        <Header />
        <Head>
          <title>Coding test with Nextjs</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        {children}
      </StyledContent>
      <Footer />
    </StyledContainer>
  );
};

export default Layout;
