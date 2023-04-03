import React from "react";
import particlesConfig from "../../config/particle-config";
import Particles from "react-tsparticles";

const Hero = ({ sliderRef }) => {
    return (
        <header ref={sliderRef} className="particles circle-bg valign">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="cont text-center">
                            <h1>
                                <span className="color-font">Crayons</span>
                                {" with AI wings to draw"}
                                <span className="color-font">
                                    colorful life
                                </span>
                                .
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <Particles id="particles-js" options={particlesConfig} />

            <div className="gradient-circle"></div>
            <div className="gradient-circle two"></div>
            <div className="line bottom left"></div>
        </header>
    );
};

export default Hero;
