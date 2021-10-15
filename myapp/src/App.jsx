import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Template/Navbar";
import Resa from "./Views/Resa";
import Homepage from "./Views/Homepage";
import Footer from "./Template/Footer";
import React from "react";
import "./App.css"

function App() {
    return (
      <>
        <Router>
          <Navbar />
  
          <Switch>
            <Route path="/resa">
                <Resa />
            </Route>

            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
  
          <Footer />
        </Router>
      </>
    );
  }
  
  export default App;