import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './views/Home'
import { About } from './views/About'
import { Pictures } from './views/Pictures'
import { History } from './views/History'
import { English } from './views/English'
import { Dev } from './views/Dev'
import { NoMatch } from './views/NoMatch'
import { Layout } from './components/Layout' 
import { Header } from './components/Header' 
import { Footer } from './components/Footer' 
import { Jumbotron } from './components/Jumbotron'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        {/* <Jumbotron /> */}
        {/* <Layout> */}
          <Router>
              <Switch>
                <Route exact path="/" component={Home} /> 
                <Route  path="/about" component={About} />
                <Route  path="/pictures" component={Pictures} />
                <Route  path="/history" component={History} />
                <Route  path="/english" component={English} />
                <Route  path="/dev" component={Dev} />
                <Route   component={NoMatch} />
              </Switch>
          </Router>
        {/* </Layout> */}
        <Footer />
      </React.Fragment>
    );
    }
}

export default App;
