function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                       "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
}

function greeting(date, greetString) {
  if (greetString) {
    return `${greetString} ${dayName(date)}`;
  } else {
    return `Greetings on this fine ${dayName(date)}`;
  }
}
