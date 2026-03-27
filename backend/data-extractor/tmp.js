import ollama from 'ollama'
import express, { response } from 'express'
import cors from 'cors'

const app = express();
app.use(cors());

async function askAI() {
    console.log("generating");

    const respone = await ollama.generate({
        model: 'gemma3:1b',
        prompt: 'Why is the sky blue',
        stream: false
    })

    console.log('generate complete');

    console.log(respone);
    return respone;
}


app.get('/ollama/ask', async (req, res) => {
    console.log('Client ask question');
    const respone = await askAI();

    res.json(respone);
})
app.listen(10000, () => {
    console.log('Server Listening....');
})