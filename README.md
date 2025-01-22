# MiniDayjs

**MiniDayjs** is a lightweight JavaScript library for date manipulation, inspired by [Dayjs](https://day.js.org/). It provides a simple and efficient API to handle common date operations such as formatting, adding, subtracting, and comparing dates, all while keeping the bundle size small.

## Installation

You can install **MiniDayjs** via npm:

```bash
npm install mini-dayjs
```

Alternatively, if you're using Yarn:

```bash
yarn add mini-dayjs
```

## Usage

Here's how you can start using MiniDayjs in your project:

### Basic Date Creation

You can create a MiniDayjs instance for the current date or a specific date:

const dayjs = require('mini-dayjs');

// Create a new instance for the current date
const now = dayjs();

// Create a new instance for a specific date
const specificDate = dayjs('2025-01-01');

console.log(now.format('YYYY-MM-DD'));  // Output: Current date in "YYYY-MM-DD" format
console.log(specificDate.format('YYYY-MM-DD'));  // Output: 2025-01-01
