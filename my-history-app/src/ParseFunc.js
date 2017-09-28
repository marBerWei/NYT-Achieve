const ParseFunc = function(){

  let todaysDate = new Date().toString()
  let todayArray = todaysDate.split(" ")
  const dates = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  // // "20130102"
  let mon = (dates.indexOf(todayArray[1])) + 1

  function parseMonth(mon){
    return mon < 10 ? `0${mon}` : `${mon}`
  }

  parseMonth(mon)

  let todays_date_formatted = todayArray[3] + parseMonth(mon) + todayArray[2]


  return todays_date_formatted
}


export default ParseFunc
