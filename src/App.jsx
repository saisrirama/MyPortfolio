import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPosts from './pages/BlogPosts';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogPosts />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
