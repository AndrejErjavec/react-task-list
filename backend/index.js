import express from 'express';

const app = express();

const port = 5000;

app.get('/hello', (req, res) => {
  res.send("hello")
})

app.get('/burek', (req, res) => {
  res.send('<h1>burek</h1>')
})

app.listen(port, (err, res) => {
  if (err) console.log(err);
  console.log(`Server listening on port ${port}`);
});