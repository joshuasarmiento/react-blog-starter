import React from 'react';
import Navbar from './Components/Navbar';
import Homepage from './views/Home';
import About from './views/About';
import CreateBlog from './views/Create'
import BlogDetails from './views/BlogDetails';
import NotFound from './views/NotFound';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
                <Route index element={<Homepage />}/>
                <Route path="Create" element={<CreateBlog />}/>
                <Route path="/blogs/:id" element={<BlogDetails />}/>
                <Route path="About" element={<About />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
