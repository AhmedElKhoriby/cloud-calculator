import express, { NextFunction, Request, Response } from 'express';
import { Calculator } from './calculator';
import { handleOperation } from './handleOperation';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to Cloud Calculator!',
    usage:
      'Use routes: /add, /subtract, /multiply, /divide with query params a and b',
    example: 'http://localhost:3000/add?a=3&b=6',
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  const a = parseFloat(req.query.a as string);
  const b = parseFloat(req.query.b as string);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({
      error: 'Invalid input. Both a and b must be numbers.',
    });
    return;
  }

  req.calcParams = { a, b };

  next();
});

app.get('/add', handleOperation('add', Calculator.add));
app.get('/multiply', handleOperation('multiply', Calculator.multiply));
app.get('/subtract', handleOperation('subtract', Calculator.subtract));
app.get('/divide', handleOperation('divide', Calculator.divide));

const PORT: number = parseInt(process.env.PORT || '5000', 10);
app.listen(PORT, () => {
  console.log(`Cloud Calculator is running on port ${PORT}...`);
});

declare global {
  namespace Express {
    interface Request {
      calcParams?: {
        a: number;
        b: number;
      };
    }
  }
}
