import React from "react";
import { hot } from "react-hot-loader";
import "./styles/App.css";
import "./components/Layout";
import Layout from "./components/Layout";
import Body from './components/Body';
import SideBarRight from './components/SideBarRight';

const App = () => {
    return(
      <Layout>
        <div></div>
        <Body></Body>
        <SideBarRight></SideBarRight>
      </Layout>
    );
}

export default hot(module)(App);