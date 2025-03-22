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

const app = express();

app.use(express.json());

app.post('/webhook', (request, response) => {
  response.status(202).send('Accepted');

  const githubEvent = request.headers['x-github-event'];

  if (githubEvent === 'push') {
    const data = request.body;
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
