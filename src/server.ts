import express from 'express';

const App = express();

App.get('/users', (request, response) => {
  const user = {
    name: 'Manel do Mock',
    email: 'maneldomock@email.com',
    gender: 'masculino'
  }

  response.json(user);
});

App.listen(3333);