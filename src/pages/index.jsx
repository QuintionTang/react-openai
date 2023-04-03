import React from "react";
import Navbar from "../components/Navbar/navbar";
import Hero from "../components/Hero/hero";

import FullTestimonials from "../components/Full-testimonials/full-testimonials";
import CallToAction from "../components/Call-to-action/call-to-action";
import Footer from "../components/Footer/footer";
import DarkTheme from "../layouts/Dark";
import About from "../components/About/about";
import Portfolio from "../components/Portfolio/portfolio";
import Clients from "../components/Clients/clients";
import VideoWithTestimonials from "../components/Video-with-testimonials/video-with-testimonials";

const Homepage = () => {
    const navbarRef = React.useRef(null);
    const logoRef = React.useRef(null);

    React.useEffect(() => {
        const navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, [navbarRef]);
    return (
        <DarkTheme>
            <Navbar nr={navbarRef} lr={logoRef} />
            <Hero />
            <About />
            <div className="main-content">
                <Portfolio grid={2} filterPosition="left" />
                <VideoWithTestimonials />
                <Clients theme="dark" length={4} />
            </div>
            <FullTestimonials showHead />

            <CallToAction />
            <Footer />
        </DarkTheme>
    );
};

export default Homepage;
