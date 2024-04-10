function calculateOccurrences(timeInterval, ratePerHour) {
  // Convert rate from per hour to per millisecond
  const ratePerMillisecond = ratePerHour / (60 * 60 * 1000);
  // Calculate the number of occurrences
  const occurrences = timeInterval * ratePerMillisecond;
  return occurrences;
}

// Example usage:
const timeInterval = 3600000; // 1 hour in milliseconds
const ratePerHour = 5; // 5 occurrences per hour
const result = calculateOccurrences(timeInterval, ratePerHour);
console.log(`Total occurrences in the given time interval: ${result}`);
