import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    return (
        <Layout>
            <div className="flex flex-col">
                <section id="home"><Home /></section>
                <section id="about" className="bg-site-bg/50"><About /></section>
                <section id="skills"><Skills /></section>
                <section id="experience" className="bg-site-bg/50"><Experience /></section>
                <section id="certifications"><Certifications /></section>
                <section id="projects" className="bg-site-bg/50"><Projects /></section>
                <section id="contact"><Contact /></section>
            </div>
        </Layout>
    );
}

export default App;
