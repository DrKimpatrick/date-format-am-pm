# date-format-am-pm
Outputs date in am or pm

#### Install

`npm i date-format-am-pm`

#### Description

    - When presented with a date/timestamp the package out puts the full date in am and pm format

#### API

    - Current date is considered if date param is not passed in
    - If date param is invalid, current date is considered
    - Possible output date formats (1). dd/mm/yyyy || (2). dd mm yyyy
    - The function accepts an optional parameter true || false
    - If false you get the date in this format (1). dd/mm/yyyy e.g 07/04/2022 3:19 pm
    - If true, you get the date with the name of the month (2). dd mm yyyy e.g 07 April 2022 3:19 pm

#### Example

- Getting date in format (1). dd/mm/yyyy

  ```
  const formatAMPM = require('date-format-am-pm');

  const date = formatAMPM("2022-04-07T12:19:26.377Z");

  // Output
  07/04/2022 3:19 pm

  ```

- Getting date in format (2). dd mm yyyy

  ```
  const formatAMPM = require('date-format-am-pm');

  const date = formatAMPM("2022-04-07T12:19:26.377Z", true);

  // Output
  07 April 2022 3:19 pm

  ```
