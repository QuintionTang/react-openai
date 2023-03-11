/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import { useEffect } from "react";
import ReactGA from "react-ga";

ReactGA.initialize("G-XL0DVX6ZDL");

export default function Layout({
    title,
    keywords,
    description,
    author,
    children,
}) {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
                <link rel="icon" type="image/png" href="images/favicon.ico" />
            </Head>

            {children}
        </div>
    );
}
Layout.defaultProps = {
    title: "OpenAI ChatGPT App | DevPoint开发要点分享中心 | 前端人工智能开发",
    description:
        "一个基于 React、NextJs、OPENAI、ChartGPT 学习项目，尝试使用OPENAI的开发接口构建工具应用",
    keywords: "chatgpt, openai, nextjs, react, devpoint",
    author: "QuintionTang",
};
