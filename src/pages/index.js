import { useState } from "react";
import sanitizeHtml from "sanitize-html";
import Layout from "../components/Layout";
const showdown = require("showdown");
const converter = new showdown.Converter();

export default function Home() {
    const [userInput, setUserInput] = useState("");
    const [apiOutput, setApiOutput] = useState("You will see output here");
    const [inputError, setInputError] = useState("");
    const [loading, setLoading] = useState(false);

    const onUserChangedText = (event) => {
        setInputError("");
        setUserInput(event.target.value);
    };

    const callGenerateEndpoint = async () => {
        setInputError("");
        if (userInput !== "") {
            setApiOutput(`Please Wait ....`);
            setLoading(true);
            const response = await fetch("/api/coder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userInput }),
            });

            const data = await response.json();
            console.log(data);
            const output = data.output.message;

            const formattedText = output.content.replace(/\n/g, "<br>");
            const sanitizedOutput = sanitizeHtml(
                converter.makeHtml(formattedText)
            );
            setLoading(false);
            setApiOutput(`${sanitizedOutput}`);
        } else {
            setInputError("请输入需要实现的代码");
        }
    };

    return (
        <>
            <Layout>
                <main className="relative-fullscreen">
                    <div className="sidebar-block">
                        <div className="px-4 py-4 text-left flex-grow-1">
                            <h4 className="sidebar-title">
                                Generate JavaScript Code
                            </h4>
                            <br></br>
                            <div className="sidebar-form">
                                <textarea
                                    name=""
                                    className="form-control"
                                    rows={4}
                                    placeholder="e.g 使用代理模式创建一个类 "
                                    value={userInput}
                                    onChange={onUserChangedText}
                                ></textarea>
                                <br></br>
                                {inputError !== "" && (
                                    <div className="error-tips">
                                        {inputError}
                                    </div>
                                )}
                                <div className="py-4 d-grid gap-2 d-sm-flex justify-content-sm-center">
                                    <button
                                        type="button"
                                        disabled={loading}
                                        className="btn btn-primary btn-lg px-4"
                                        onClick={callGenerateEndpoint}
                                    >
                                        Coding
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-copy"></div>
                    </div>
                    <div className="sidebar-codebox">
                        <div className="codebox-main text-left flex-grow-1">
                            <div>
                                {apiOutput && (
                                    <div className="output">
                                        <div className="output-content">
                                            <div
                                                style={{
                                                    padding: "10px",
                                                }}
                                                dangerouslySetInnerHTML={{
                                                    __html: apiOutput,
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    );
}
