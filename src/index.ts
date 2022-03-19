import express, { Request, Response } from 'express';
import statusRoute from './routes/statusRoute';
import usersRoute from './routes/usersRoute';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRoute);
app.use(statusRoute);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({ foo: 'sucesso' });
});

app.listen(3001, () => {
  console.log('aplicação executando na porta 3001');
  console.log('CRTL + click: http://localhost:3001');
});
