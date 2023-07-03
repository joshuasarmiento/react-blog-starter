import React from 'react';
import Navbar from './Components/Navbar';
import Homepage from './views/Home';
import About from './views/About';
import CreateBlog from './views/Create'
import BlogDetails from './views/BlogDetails';
import NotFound from './views/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/create">
                <CreateBlog />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
