function formatAMPM(d) {
  // Time stamp
  const date = new Date(d || new Date());

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

  // Formated date
  const strDate = dd + "/" + mm + "/" + yyyy;

  return `${strDate} ${strTime}`;
}

module.exports = formatAMPM;
