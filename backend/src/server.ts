import express, { response } from 'express';

const app = express();
app.use(express.json);

app.get('/users', (request, response) => {
  return response.json( {messagem: "Start backend"});
});

app.listen(3333);