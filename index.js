function formatAMPM(inputDate, monthName = false) {
  // Check if supplied date is valid
  var timestamp = Date.parse(inputDate);
  // If invalid, consider current date
  const date = isNaN(timestamp) ? new Date() : new Date(inputDate);

  // Getting hours and minutes
  let hours = date.getHours();
  let minutes = date.getMinutes();

  // Determine whether it's am || pm
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Formated time
  const strTime = hours + ":" + minutes + " " + ampm;

  // Get current date in the format dd/mm/yyyy
  const yyyy = date.getFullYear();
  let mm = date.getMonth() + 1; // Months start at 0!
  let dd = date.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  // Date| "2022-04-07T12:19:26.377Z"

  // Formated date 1 | 07/04/2022 3:19 pm
  const strDate1 = dd + "/" + mm + "/" + yyyy;

  // Formated date 2 | 07 April 2022 3:19 pm
  const mmm = date.toLocaleString("default", { month: "long" });
  const strDate2 = dd + " " + mmm + " " + yyyy;

  // 18/06/2021 2:33 pm
  // 07 April 2022 2:29 pm

  return `${monthName ? strDate2 : strDate1} ${strTime}`;
}

module.exports = formatAMPM;
