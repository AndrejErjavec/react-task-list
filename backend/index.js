import express from 'express';
import dotenv from 'dotenv';
// naloži spremenljivke iz dataoteke .env v globalno spremenljivko process.env
dotenv.config();

const app = express();
const port = 5000;

/**
 * HTTP REQUESTS
 * --------------------------------------------
 * GET - pridobiti podatke (read)
 * POST - pošlji podatke (create)
 * PUT - posodobi obstoječe podatke (update)
 * DELETE - izbriši podatke (delete)
*/

app.get('/person', (req, res) => {
  console.log(req.query);
  const gender = req.query.gender;
  const age = req.query.age;
  res.send(`You requested gender ${gender} with age ${age}`);
})

app.get('/hello', (req, res) => {
  res.send("hello");
})

app.get('/burek', (req, res) => {
  res.send('<h1>burek</h1>')
})

app.listen(port, (err, res) => {
  if (err) console.log(err);
  console.log(`Server listening on port ${port}`);
  // beremo iz process.env
  // console.log(process.env.WELCOME_MESSAGE)
});