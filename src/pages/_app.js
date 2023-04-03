import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>OpenAI ChatGPT App | DevPoint | AI</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <Cursor />
            <LoadingScreen />
            <Component {...pageProps} />
            <ScrollToTop />

            <Script id="wow" src="/scripts/wow.min.js"></Script>
            <Script
                id="wowInit"
                strategy="lazyOnload"
            >{`new WOW().init();`}</Script>
        </>
    );
}

export default MyApp;
