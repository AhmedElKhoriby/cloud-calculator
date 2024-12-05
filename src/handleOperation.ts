import { Request, Response } from 'express';

type OpCallback = (a: number, b: number) => number;
export const handleOperation =
  (Operation: string, callbak: OpCallback) => (req: Request, res: Response) => {
    const { a, b } = req.calcParams!;
    try {
      const result = callbak(a, b);
      res.status(200).json({
        num1: a,
        num2: b,
        Operation,
        result,
      });
    } catch (err) {
      res.status(404).json({ error: (err as Error).message });
    }
  };
