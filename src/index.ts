console.log(`
    Welcome to the TypeScript Coding Challenges!
  
    Please run 'bun run test' to run the challenges and ensure all tests pass.
    Good luck, and happy coding!
  
    ────────────────────────────────────────────────────
    ──┌──────────────────────────────────────────────┐──
    ──│   TypeScript Coding Challenges Repository    │──
    ──└──────────────────────────────────────────────┘──
    ────────────────────────────────────────────────────
  `);

import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({ origin: ['https://bee7-149-107-71-118.ngrok-free.app'] }));

app.get('/api/webhook', (req, res) => {
  res.status(200).send('Ok');
});

app.post('/api/webhook', (req, res) => {
  res.status(202).send('Accepted');

  const githubEvent = req.headers['x-github-event'];

  if (githubEvent === 'push') {
    const data = req.body;
    const action = data.action;

    console.log({ action, data });
  } else {
    console.log(`Unhandled event: ${githubEvent}`);
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
