# 🧮 Cloud Calculator API

## Overview

Cloud Calculator is a lightweight, RESTful calculator API built with Express and TypeScript. It provides simple arithmetic operations through a clean, intuitive HTTP interface.

## Features

- ➕ Addition
- ➖ Subtraction
- ✖️ Multiplication
- ➗ Division
- Robust error handling
- TypeScript support

## Prerequisites

- Node.js (v14 or later)
- npm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AhmedElKhoriby/cloud-calculator.git
cd cloud-calculator
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

### Development Mode

```bash
npm run start:dev
```

### Production Build

```bash
npm run build
npm start
```

## API Endpoints

### Base URL

`http://localhost:3000`

### Available Routes

- **Addition**: `/add?a={num1}&b={num2}`

  - Example: `http://localhost:3000/add?a=3&b=6`
  - Returns: `{"operation":"add","a":3,"b":6,"result":9}`

- **Subtraction**: `/subtract?a={num1}&b={num2}`

  - Example: `http://localhost:3000/subtract?a=10&b=4`
  - Returns: `{"operation":"subtract","a":10,"b":4,"result":6}`

- **Multiplication**: `/multiply?a={num1}&b={num2}`

  - Example: `http://localhost:3000/multiply?a=5&b=3`
  - Returns: `{"operation":"multiply","a":5,"b":3,"result":15}`

- **Division**: `/divide?a={num1}&b={num2}`
  - Example: `http://localhost:3000/divide?a=15&b=3`
  - Returns: `{"operation":"divide","a":15,"b":3,"result":5}`

## Error Handling

- Invalid numeric inputs return a 400 Bad Request error
- Division by zero returns a 500 Internal Server Error

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Name - ahmedelkhoriby010@gmail.com

Project Link: [https://github.com/AhmedElKhoriby/cloud-calculator](https://github.com/AhmedElKhoriby/cloud-calculator.git)
