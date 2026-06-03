//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

// Expose current path to templates for active navigation states.
router.use("/internal", (req, res, next) => {
	res.locals.currentPath = req.originalUrl.split("?")[0];
	next();
});

// Capture licence ID from query parameter
router.get("/internal/licence", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.customerID) {
		req.session.data.customerID = parseInt(req.query.customerID);
	}
	res.render("internal/licence");
});

// Capture licence ID from query parameter for the purposes page
router.get("/internal/licence/purposes", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	res.render("internal/licence/purposes");
});

// Capture customer ID from query parameter
router.get("/internal/customer", (req, res) => {
	if (req.query.customerID) {
		req.session.data.customerID = parseInt(req.query.customerID);
	}
	res.render("internal/customer");
});

// Capture selected contact and optional licence ID from query parameters
router.get("/internal/contact", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.contactID) {
		req.session.data.contactID = parseInt(req.query.contactID);
	}
	res.render("internal/contact");
});
