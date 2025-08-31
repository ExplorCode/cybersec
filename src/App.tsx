import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Overview from './pages/Overview';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import { ThemeProvider } from './hooks/useTheme';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;