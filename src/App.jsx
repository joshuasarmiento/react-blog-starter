import Navbar from './components/Navbar';
import Homepage from './views/Home';
import About from './views/About';
import CreateBlog from './views/Create'
import BlogDetails from './views/BlogDetails';
import NotFound from './views/NotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/react-blog-starter" element={<Homepage />} />
            <Route path="/react-blog-starter/about" element={<About />} />
            <Route path="/react-blog-starter/create" element={<CreateBlog />} />
            <Route path="/react-blog-starter/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
