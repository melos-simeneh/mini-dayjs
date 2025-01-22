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

```javascript
const dayjs = require('mini-dayjs');

// Create a new instance for the current date
const now = dayjs();

// Create a new instance for a specific date
const specificDate = dayjs('2025-01-01');

console.log(now.format('YYYY-MM-DD'));  // Output: Current date in "YYYY-MM-DD" format
console.log(specificDate.format('YYYY-MM-DD'));  // Output: 2025-01-01
```

### Date Formatting

You can format dates using the format() method. Here's an example:

```javascript
const formattedDate = dayjs('2025-01-01').format('MMMM DD, YYYY');
console.log(formattedDate);  // Output: January 01, 2025
```

#### Supported Format Tokens

- **YYYY**– Full year (e.g., 2025)
- **YY**– Short year (e.g., 25)
- **MMMM**– Full month name (e.g., January)
- **MMM**– Abbreviated month name (e.g., Jan)
- **DD**– Day of the month (e.g., 01)

### Adding and Subtracting Time

You can easily add or subtract time (e.g., days, months, years) to/from a date:

```javascript
const futureDate = dayjs().add(3, 'day');  // Adds 3 days
const pastDate = dayjs().subtract(2, 'month');  // Subtracts 2 months

console.log(futureDate.format('YYYY-MM-DD'));  // Output: 3 days from now
console.log(pastDate.format('YYYY-MM-DD'));  // Output: 2 months ago
```

### Comparing Dates

You can compare dates using isBefore() and isAfter():

```javascript
const date1 = dayjs('2025-01-01');
const date2 = dayjs('2025-01-02');

console.log(date1.isBefore(date2));  // Output: true
console.log(date1.isAfter(date2));   // Output: false
```

### Time Ago (Relative Time)

You can display the relative time (e.g., "2 days ago") using the fromNow() method:

```javascript
const pastDate = dayjs('2025-01-01');
console.log(pastDate.fromNow());  // Output: "X days ago" (depends on the current date)
```

### Methods Overview

Here’s a quick overview of the main methods available in MiniDayjs:

- **add(amount, unit)**: Adds a specified amount of time (e.g., days, months, years).
- **subtract(amount, unit)**: Subtracts a specified amount of time.
- **format(formatString)**: Formats the date in a human-readable format.
- **isBefore(date)**: Checks if the current date is before the specified date.
- **isAfter(date)**: Checks if the current date is after the specified date.
- **fromNow()**: Returns the relative time from the current date (e.g., "2 days ago").
- **toDate()**: Returns the underlying JavaScript Date object.

### Example

Here’s a full example that demonstrates creating a MiniDayjs instance, formatting dates, adding/subtracting time, and comparing dates:

```javascript
const dayjs = require('mini-dayjs');

// Create a new instance for today
const today = dayjs();

// Create a new instance for New Year's Day 2025
const newYear = dayjs('2025-01-01');

// Add 5 days to the current date
const fiveDaysLater = today.add(5, 'day');
console.log(fiveDaysLater.format('YYYY-MM-DD'));  // Output: 5 days from today

// Subtract 3 months from the current date
const threeMonthsAgo = today.subtract(3, 'month');
console.log(threeMonthsAgo.format('YYYY-MM-DD'));  // Output: 3 months ago

// Compare two dates
console.log(newYear.isBefore(today));  // Output: true (if New Year's Day 2025 is before today)
console.log(newYear.isAfter(today));   // Output: false

// Show relative time from now
console.log(newYear.fromNow());  // Output: "1 year ago" (depends on the current date)
```