import React from "react";
import Script from "next/script";
import loadingPace from "../../libs/loadingPace";
import appData from "../../data/app.json";

const LoadingScreen = () => {
    React.useEffect(() => {
        let bodyEl = document.querySelector("body");
        if (appData.showLoading) {
            loadingPace();

            if (bodyEl.classList.contains("hideX")) {
                bodyEl.classList.remove("hideX");
            }
        } else {
            bodyEl.classList.add("hideX");
        }
    });
    return (
        <>
            <div
                className={`${
                    appData.showLoading === true ? "showX" : "hideX"
                }`}
            >
                <div className="loading">
                    <span>L</span>
                    <span>o</span>
                    <span>a</span>
                    <span>d</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                </div>
                <div id="preloader"></div>
            </div>
            {appData.showLoading ? (
                // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
                <Script
                    id="pace"
                    strategy="beforeInteractive"
                    src="/scripts/pace.min.js"
                ></Script>
            ) : (
                ""
            )}
        </>
    );
};

export default LoadingScreen;
