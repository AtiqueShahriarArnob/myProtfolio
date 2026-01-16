

import About from '../../Components/AboutMe/About';
import Contact from '../../Components/Contact/Contact';
import Education from '../../Components/Education/Education';
import Hero from '../../Components/Hero/Hero';
import Skills from '../../Components/Skills/Skills';

const Home = () => {
    return (
        <div >
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Contact></Contact>

        </div>
    );
};

export default Home;