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

