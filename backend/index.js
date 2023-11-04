import express from 'express';
import dotenv from 'dotenv';
import {router as authRouter} from './routes/auth.js';
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

// routers
app.use('/auth', authRouter);

app.listen(port, (err, res) => {
  if (err) console.log(err);
  console.log(`Server listening on port ${port}`);
  // beremo iz process.env
  // console.log(process.env.WELCOME_MESSAGE)
});