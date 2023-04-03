import React from "react";

const Footer = ({ hideBGCOLOR }) => {
    return (
        <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copy-right text-center">
                            <p>© 2023, Crayon.dev</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
