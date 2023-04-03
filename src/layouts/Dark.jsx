/* eslint-disable @next/next/no-css-tags */
import React, { useEffect } from "react";
import Head from "next/head";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
    gtmId: "G-XL0DVX6ZDL",
};

const DarkTheme = ({ children, useSkin, mobileappstyle }) => {
    useEffect(() => {
        window.theme = "dark";
        TagManager.initialize(tagManagerArgs);
    }, []);
    return (
        <>
            <Head>
                {useSkin ? (
                    <link rel="stylesheet" href="/css/arch-skin-dark.css" />
                ) : (
                    ""
                )}
                {mobileappstyle ? (
                    <link href="/css/mobile-app-dark.css" rel="stylesheet" />
                ) : (
                    ""
                )}
            </Head>
            {children}
        </>
    );
};

export default DarkTheme;
