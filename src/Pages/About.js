import Section4 from "../Components/Section4";
import Section1 from '../Components/Section1';
import Sliders from '../Components/ASection2';
import Testimonials from "../Components/Testimonials";
function About() {
    return (
        <div>
            <Section1 name="About" description="Know More About Us"/>
            <Sliders/>
            <Testimonials/>
            <Section4/>
        </div>
    );
}

export default About;
