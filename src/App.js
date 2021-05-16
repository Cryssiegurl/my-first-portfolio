
import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header.js'
import Navigation from './components/Navigation.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Skills from './components/Skills.js'
import Hire from './components/Hire.js'
import Footer from './components/Footer.js'
import Card from './components/Card.js'
import CardText from './components/CardText.js'
import CardTitle from './components/CardTitle.js'

function App() {

  return (
    <div className="App">
      <Header />
      <Router>
      <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/skills" exact component={() => <Skills />} />
          <Route path="/hire" exact component={() => <Hire />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
