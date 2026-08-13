const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <div style="text-align: center; font-family: sans-serif; margin-top: 50px;">
      <h1 style="color: #2b8a3e;">🚀 DevOps CI/CD Pipeline Working Successfully!</h1>
      <p>Deployed with Docker & GitHub Actions</p>
    </div>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
