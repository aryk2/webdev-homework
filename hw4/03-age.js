const getDate = (date) => {
  try {
    let dateFormatted = ''
    if ( date.length === 3 ) {
      dateFormatted = new Date(date[0], date[1], date[2])

      if (dateFormatted !== 'Invalid Date')
        return dateFormatted
        
      throw error
    }
    dateFormatted = new Date(date)

    if (dateFormatted.toString() !== 'Invalid Date')
      return dateFormatted
    throw error
  } catch (e) {
    return -1
  }
}

const calculateAge = (date1, date2) => {
  let time1 = getDate(date1)
  let time2 = getDate(date2)

  if (time1 === -1 || time2 === -1)
    return 'Error: Invalid input provided.'

  time1 = time1.getTime()
  time2 = time2.getTime()

  let delta = 0

  if (time1 > time2)
    delta = time1 - time2
  else 
    delta = time2 - time1

  monthIsh = (1000 * 3600 * 24 * 30)

  let yearCount = 0
  let monthCount = 0

  while ( delta > monthIsh * 12) {
    delta = delta - (monthIsh * 12)
    yearCount += 1
  }

  while ( delta > monthIsh ) {
    delta = delta - monthIsh
    monthCount += 1
  }

  let result = ''
  if (yearCount) result += String(yearCount)+' years, '
  if (monthCount) result += String(monthCount)+' months'

  return result
};

// Date() formats:
// new Date('December 1, 1995')
// new Date('2008-1-11')
// new Date(2020, 3, 16)
// new Date(628021800000)

console.log(calculateAge(1635176171332, 'May 1, 1995'));
// Age: 26 years, 5 months
console.log(calculateAge(1635176171332, '1975-8-11'));
// Age: 46 years, 2 months
console.log(calculateAge(1635176171332, [2021, 5, 23]));
// Age: 5 months
console.log(calculateAge(1635176171332, 1031814000000));
// Age: 19 years, 1 month
console.log(calculateAge(1635176171332, 'birthdate'));
// Error: Invalid input provided.