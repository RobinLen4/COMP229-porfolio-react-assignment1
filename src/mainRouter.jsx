import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Project from './components/Projects.jsx'
import Navbar from './components/Navbar.jsx'
import Services from './components/Services.jsx'
import NotFound from './components/NotFound'

const MainRouter = () => {
    return (
        <div>
            <Navbar />
            <Routes>

                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/projects" element={<Project />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </div>
    )
}
export default MainRouter;
