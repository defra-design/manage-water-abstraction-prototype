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

// Capture selected contact and optional licence ID for the moved contact edit page
router.get("/internal/contact/edit-contact", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.contactID) {
		req.session.data.contactID = parseInt(req.query.contactID);
	}
	res.render("internal/contact/edit-contact");
});

// Capture selected contact and optional licence ID for editing contact name
router.get("/internal/contact/edit-name", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.contactID) {
		req.session.data.contactID = parseInt(req.query.contactID);
	}
	res.render("internal/contact/edit-name");
});

// Capture selected contact and optional licence ID for editing contact email
router.get("/internal/contact/edit-email", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.contactID) {
		req.session.data.contactID = parseInt(req.query.contactID);
	}
	res.render("internal/contact/edit-email");
});

// Capture selected contact and optional licence ID for editing contact address
router.get("/internal/contact/edit-address", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.contactID) {
		req.session.data.contactID = parseInt(req.query.contactID);
	}
	res.render("internal/contact/edit-address");
});

// Capture selected contact and optional licence ID for editing contact phone
router.get("/internal/contact/edit-phone", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.contactID) {
		req.session.data.contactID = parseInt(req.query.contactID);
	}
	res.render("internal/contact/edit-phone");
});

// Save pending name change to session and return to update contact page
router.post("/internal/contact/edit-name", (req, res) => {
	const id = Number.parseInt(req.query.ID ?? req.session.data.ID, 10);
	const contactID = Number.parseInt(
		req.query.contactID ?? req.session.data.contactID,
		10,
	);
	const fullName = String(req.body.fullName ?? "").trim();

	// Store as pending edit, not permanent
	if (!req.session.data.pendingChanges) {
		req.session.data.pendingChanges = {};
	}
	req.session.data.pendingChanges.name = fullName;

	const query = new URLSearchParams({
		ID: Number.isInteger(id) ? String(id) : String(req.session.data.ID ?? ""),
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
	}).toString();

	res.redirect(`/internal/contact/edit-contact?${query}`);
});

// Save pending email change to session and return to update contact page
router.post("/internal/contact/edit-email", (req, res) => {
	const id = Number.parseInt(req.query.ID ?? req.session.data.ID, 10);
	const contactID = Number.parseInt(
		req.query.contactID ?? req.session.data.contactID,
		10,
	);
	const email = String(req.body.email ?? "").trim();

	// Store as pending edit, not permanent
	if (!req.session.data.pendingChanges) {
		req.session.data.pendingChanges = {};
	}
	req.session.data.pendingChanges.email = email;

	const query = new URLSearchParams({
		ID: Number.isInteger(id) ? String(id) : String(req.session.data.ID ?? ""),
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
	}).toString();

	res.redirect(`/internal/contact/edit-contact?${query}`);
});

// Save pending address change to session and return to update contact page
router.post("/internal/contact/edit-address", (req, res) => {
	const id = Number.parseInt(req.query.ID ?? req.session.data.ID, 10);
	const contactID = Number.parseInt(
		req.query.contactID ?? req.session.data.contactID,
		10,
	);
	const address = String(req.body.address ?? "").trim();

	// Store as pending edit, not permanent
	if (!req.session.data.pendingChanges) {
		req.session.data.pendingChanges = {};
	}
	req.session.data.pendingChanges.address = address;

	const query = new URLSearchParams({
		ID: Number.isInteger(id) ? String(id) : String(req.session.data.ID ?? ""),
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
	}).toString();

	res.redirect(`/internal/contact/edit-contact?${query}`);
});

// Save pending phone change to session and return to update contact page
router.post("/internal/contact/edit-phone", (req, res) => {
	const id = Number.parseInt(req.query.ID ?? req.session.data.ID, 10);
	const contactID = Number.parseInt(
		req.query.contactID ?? req.session.data.contactID,
		10,
	);
	const phone = String(req.body.phone ?? "").trim();

	// Store as pending edit, not permanent
	if (!req.session.data.pendingChanges) {
		req.session.data.pendingChanges = {};
	}
	req.session.data.pendingChanges.phone = phone;

	const query = new URLSearchParams({
		ID: Number.isInteger(id) ? String(id) : String(req.session.data.ID ?? ""),
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
	}).toString();

	res.redirect(`/internal/contact/edit-contact?${query}`);
});

router.post("/internal/contact/edit-contact", (req, res) => {
	const id = Number.parseInt(req.query.ID ?? req.session.data.ID, 10);
	const contactID = Number.parseInt(
		req.query.contactID ?? req.session.data.contactID,
		10,
	);

	// Apply any pending changes
	if (
		req.session.data.pendingChanges &&
		Number.isInteger(contactID) &&
		Array.isArray(req.session.data.contacts) &&
		req.session.data.contacts[contactID]
	) {
		if (req.session.data.pendingChanges.name) {
			req.session.data.contacts[contactID].name =
				req.session.data.pendingChanges.name;
		}
		if (req.session.data.pendingChanges.email) {
			req.session.data.contacts[contactID].email =
				req.session.data.pendingChanges.email;
		}
		if (req.session.data.pendingChanges.address) {
			req.session.data.contacts[contactID].address =
				req.session.data.pendingChanges.address;
		}
		if (req.session.data.pendingChanges.phone) {
			req.session.data.contacts[contactID].phone =
				req.session.data.pendingChanges.phone;
		}
		// Clear pending changes after applying
		req.session.data.pendingChanges = {};
	}

	const query = new URLSearchParams({
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
		ID: Number.isInteger(id) ? String(id) : String(req.session.data.ID ?? ""),
	}).toString();

	res.redirect(`/internal/contact?${query}`);
});

// Cancel editing - clear pending changes and return to contact page
router.get("/internal/contact/cancel", (req, res) => {
	const id = Number.parseInt(req.query.ID ?? req.session.data.ID, 10);
	const contactID = Number.parseInt(
		req.query.contactID ?? req.session.data.contactID,
		10,
	);

	// Clear any pending changes
	req.session.data.pendingChanges = {};

	const query = new URLSearchParams({
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
		ID: Number.isInteger(id) ? String(id) : String(req.session.data.ID ?? ""),
	}).toString();

	res.redirect(`/internal/contact?${query}`);
});

// Redirect legacy contact edit URL to the new nested route
router.get("/internal/contact-edit", (req, res) => {
	const query = new URLSearchParams(req.query).toString();
	const destination = query
		? `/internal/contact/edit-contact?${query}`
		: "/internal/contact/edit-contact";
	res.redirect(destination);
});
