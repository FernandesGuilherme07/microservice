import express, { Request, Response, NextFunction}  from "express";

const app = express();

app.get('/', (req: Request, res: Response, next:NextFunction) => {
    res.status(200).send({ 
        foo: 'bar',
        name: 'Guilherme'
 })
});

app.listen(3001, () => {
    console.log("aplicação executando na porta 3000")
    console.log("CRTL + click: http://localhost:3001")
})