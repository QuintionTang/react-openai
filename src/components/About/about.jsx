/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../Split";
import Link from "next/link";
import AboutUs from "../../data/about.json";

const About = () => {
    return (
        <section className="agency section-padding position-re">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="imgsec md-mb50">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="item">
                                        <div
                                            className="imgone big-bord wow fadeInDown"
                                            data-wow-delay=".8s"
                                        >
                                            <img
                                                className="thumparallax-down"
                                                src={AboutUs.image1}
                                                alt=""
                                            />
                                        </div>
                                        <div className="exp">
                                            <h2 className="nmb-font">
                                                {AboutUs.exp.nmb}
                                            </h2>
                                            <h6>{AboutUs.exp.name}</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="item">
                                        <div
                                            className="imgtwo big-bord wow fadeInUp"
                                            data-wow-delay=".6s"
                                        >
                                            <img
                                                className="thumparallax"
                                                src={AboutUs.image2}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 valign">
                        <div className="content">
                            <Split>
                                <h4
                                    className="wow words chars splitting"
                                    data-splitting
                                >
                                    {AboutUs.title}
                                </h4>
                            </Split>
                            <Split>
                                <p
                                    className="wow txt words chars splitting"
                                    data-splitting
                                >
                                    {AboutUs.content.first} <br />
                                    {AboutUs.content.second}
                                </p>
                            </Split>
                            <Link
                                href={`/about/about-dark`}
                                className="butn bord curve mt-40 wow fadeInUp"
                                data-wow-delay=".8s"
                            >
                                <span>{AboutUs.smallTitle}</span>
                            </Link>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="line bottom right"></div>
        </section>
    );
};

export default About;
