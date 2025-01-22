
class Dayjs {
  constructor(date) {
    if (date) {
      this.date = new Date(date);
    } else {
      this.date = new Date();
    }
  }

  add(amount, unit) {
    let newDate = new Date(this.date);
    switch (unit) {
      case "day":
        newDate.setDate(this.date.getDate() + amount);
        break;
      case "month":
        newDate.setMonth(this.date.getMonth() + amount);
        break;
      case "year":
        newDate.setFullYear(this.date.getFullYear() + amount);
        break;
      default:
        throw new Error(`Unsupported unit: ${unit}`);
    }
    this.date = newDate;
    return this;
  }

  subtract(amount, unit) {
    return this.add(-amount, unit);
  }

  format(formatString) {
    // Format the date based on the provided format string
    const date = this.date;

    const padZero = (num) => num.toString().padStart(2, "0");

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthShortNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const replacements = {
      YYYY: date.getFullYear(),
      YY: date.getFullYear().toString().slice(-2), // Last 2 digits of the year
      MM: padZero(date.getMonth() + 1), // Months are 0-indexed, so add 1
      DD: padZero(date.getDate()),
      HH: padZero(date.getHours()),
      mm: padZero(date.getMinutes()),
      ss: padZero(date.getSeconds()),
      SSS: date.getMilliseconds(),
      MMMM: monthNames[date.getMonth()], // Full month name
      MMM: monthShortNames[date.getMonth()], // Short month name
    };

    // Replace all format placeholders with the corresponding date values
    return formatString.replace(
      /YYYY|YY|MMMM|MMM|MM|DD|HH|mm|ss|SSS/g,
      (match) => replacements[match]
    );
  }

  isBefore(date) {
    return this.date < new Date(date);
  }

  isAfter(date) {
    return this.date > new Date(date);
  }

  fromNow() {
    const now = new Date();
    const diffInSeconds = (now - this.date) / 1000;

    if (diffInSeconds < 60) {
      return `${Math.floor(diffInSeconds)} seconds ago`;
    } else if (diffInSeconds < 3600) {
      return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    } else if (diffInSeconds < 86400) {
      return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    } else if (diffInSeconds < 2592000) {
      return `${Math.floor(diffInSeconds / 86400)} days ago`;
    } else if (diffInSeconds < 31536000) {
      return `${Math.floor(diffInSeconds / 2592000)} months ago`;
    } else {
      return `${Math.floor(diffInSeconds / 31536000)} years ago`;
    }
  }

  toDate() {
    return this.date;
  }
}

// The entry point function will now be `dayjs`
function dayjs(date) {
  return new Dayjs(date);
}

module.exports = dayjs;
