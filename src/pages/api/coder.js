import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `在JavaScript中使用 ES6 实现`;
const tip = "并给出详细的注释和说明";
const coder = async (req, res) => {
    try {
        const prompt = `${basePromptPrefix}${req.body.userInput}${tip}`;
        const content = prompt.substring(0, 80);
        const baseCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content },
                { role: "system", content },
            ],
            temperature: 0.7,
            max_tokens: 4000,
        });

        const dataOutput = baseCompletion.data.choices.pop();
        res.status(200).json({ output: dataOutput });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export default coder;
