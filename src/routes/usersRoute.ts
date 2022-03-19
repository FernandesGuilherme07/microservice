import { Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

// GET /users

usersRoute.get('/users', (req: Request, res: Response) => {
  const users = [{
    name: 'Guilherme',
    lastName: 'Fernandes',
    age: '20',
  }];
  res.status(StatusCodes.OK).json({ users });
});

// GET /users/:uuid

usersRoute.get('/users/:uuid', (req: Request, res: Response) => {
  const { uuid } = req.params;
  res.status(StatusCodes.OK).send({ uuid });
});

// POST /users

usersRoute.post('/users/', (req: Request, res: Response) => {
  const newUser = req.body;
  console.log(newUser);

  res.status(StatusCodes.CREATED).send(newUser);
});

// PUT /users

usersRoute.put('/users/:uuid', (req: Request, res: Response) => {
  const { uuid } = req.params;
  res.status(StatusCodes.OK).send({ uuid });
});

// DELETE /users

usersRoute.delete('/users/:uuid', (req: Request, res: Response) => {
  res.status(StatusCodes.OK);
});

export default usersRoute;
