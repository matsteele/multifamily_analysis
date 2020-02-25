import React from "react";
import Layout from "./components/layout";
import { Global, css } from "@emotion/core";
import { StoreProvider } from "./utils/store";

export default function App(){

  return (
      <StoreProvider>
        <Global styles={globalStyles} />
        <Layout />
      </StoreProvider>
  );
}

//styles
const globalStyles = css`
  body {
    display: flex;
    font-family: 'Raleway', sans-serif;
    font-size: 15,
    font-color: white;
    align-items: flex-start;
     }
`;
