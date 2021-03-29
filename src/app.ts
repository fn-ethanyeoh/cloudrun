import express, { Application, Request, Response } from 'express';

const app: Application = express();

const PORT: number = Number(process.env.PORT) || 3000;
const HOST: string = String(process.env.HOST);

app.use('/', (req: Request, res: Response) => {
    res.send('Hello from Node.js Server 🚀');
});

app.listen(PORT, HOST, () => {
    console.log(`🚀 Server running on http://${HOST}:${PORT} 🚀`);
})