const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

addFilter('mmddToDate', function(x) {
  let dd = x.slice(-2);
  dd = parseInt(dd, 10);
  let mm = x.slice(-4, -2)
  mm = parseInt(mm, 10);
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  mm = monthNames[mm - 1]
  const today = `${dd} ${mm}`;
  return x.replace(/\w+/g, today)
})

addFilter("newLine", (array) => {
    return array.toString().replace(/,/g, "<br>")
  });

addFilter("bracketedText", (e) => {
  return e.toString().replace(/(^.*\(|\).*$)/g, '')
})

addFilter("push", (array, item) => {
  array.push(item)
  return array
})

addFilter("unitsToWords", (e) => {
    if (e == "Ml/d") {
      return "millilitres per day"
    } else if (e == "l") {
      return "litres"
    } else if (e == "g") {
      return "gallons"
    } else {
      return "cubic metres"
    } 
})

addFilter("changeTypeColour", (e) => {
  if (e === "licence issued") {
    return "govuk-tag--green"
  } else {
    return "govuk-tag--blue"
  }
})