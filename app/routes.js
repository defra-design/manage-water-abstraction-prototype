//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Capture licence ID from query parameter
router.get('/internal/licence', (req, res) => {
  if (req.query.ID) {
    req.session.data.ID = parseInt(req.query.ID)
  }
  res.render('internal/licence')
})

// Capture customer ID from query parameter
router.get('/internal/customer', (req, res) => {
  if (req.query.customerID) {
    req.session.data.customerID = parseInt(req.query.customerID)
  }
  res.render('internal/customer')
})
