import React from 'react';
import Background from './components/background-gradient'
import './App.css';
import Container from './components/container';
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>AEM certified architect - Khalil Ganiga</title>
        <link rel="canonical" href="https://kganiga.github.io/me/" />
        <meta name="description" content="Adobe Certified Expert - Adobe Experience Manager Sites Architect" />
        <meta name="keywords" content="AEM Sites Architect, AEM Forms Developer,ACM Developer,Adobe experience manager,Adobe Campagin Manager,Full Stack developer,ReactJS,Gatsby,blogger" />
      </Helmet>
      <header className="App-header">
        <Background />
        <Container />
      </header>
    </div>
  );
}

export default App;
