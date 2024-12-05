export class Calculator {
  static add(a: number, b: number): number {
    const result = a + b;
    return result;
  }
  static subtract = (a: number, b: number): number => {
    const result = a - b;
    return result;
  };
  static multiply = (a: number, b: number): number => {
    const result = a * b;
    return result;
  };
  static divide = (a: number, b: number): number => {
    if (b === 0) throw new Error('Division by zero is not allowed!');
    const result = a / b;
    return result;
  };
}
