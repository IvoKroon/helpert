import React from 'react';
import { injectGlobal } from 'emotion';
import styled from 'react-emotion';
import { withRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TextColor } from './components/general/GlobalCss';
// HEADER
// import Header from './components/general/Header';
// import Footer from './components/general/Footer';

// PAGES
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import Header from './components/general/Header';

// import firebase from './components/general/firebaseConfig';

injectGlobal(`
  *, body {
    margin:0;
    padding:0;
    box-sizing: inherit;
    @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (orientation: portrait) { 
}

  }
  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit; /* no underline */
  }

  body{
    font-family: arial;
    font-size:40px;
     color:${TextColor};
    position:relative;
    padding-bottom: 6rem;
    min-height: 100%;
    background: #F4F4F5;
  }
  html{
    height: 100%;
    box-sizing: border-box;
  }

`);

const Container = styled.div`
  padding-top: 150px;
`;

const NoMatch = () => (
  <div>
    <h1>NOT FOUND</h1>
  </div>
);

const App = () => (
  <Router>
    <div>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </div>
  </Router>
);

export default App;
