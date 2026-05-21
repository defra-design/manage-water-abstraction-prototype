//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Expose current path to templates for active navigation states.
router.use('/internal', (req, res, next) => {
  res.locals.currentPath = req.originalUrl.split('?')[0]
  next()
})

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
