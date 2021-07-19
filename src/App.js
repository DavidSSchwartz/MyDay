import React from "react";
import { hot } from "react-hot-loader";
import "./styles/App.css";
import "./components/Layout";
import Layout from "./components/Layout";
import Title from './components/Title';
import Body from './components/Body';

const App = () => {
    return(
      <Layout>
        <Title title="I'm grateful for..."></Title>
        <Body></Body>
      </Layout>
    );
}

export default hot(module)(App);