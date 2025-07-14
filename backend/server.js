import express from 'express';

const app = express();
const PORT = 5001;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
