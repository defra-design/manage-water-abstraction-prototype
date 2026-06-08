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

// Render history version detail page
router.get("/internal/licence/history-version", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.versionIndex) {
		req.session.data.currentVersionIndex = parseInt(req.query.versionIndex);
	}
	res.render("internal/licence/history-version");
});

// Capture customer ID from query parameter
router.get("/internal/customer", (req, res) => {
	if (req.query.customerID) {
		req.session.data.customerID = parseInt(req.query.customerID);
	}
	res.render("internal/customer");
});

// Capture customer ID from query parameter for the contacts page
router.get("/internal/customer/customer-contacts", (req, res) => {
	if (req.query.customerID) {
		req.session.data.customerID = parseInt(req.query.customerID);
	}
	res.render("internal/customer/customer-contacts");
});

// Capture customer ID and optional licence ID for add contact page
router.get("/internal/contact/add-contact", (req, res) => {
	if (req.query.customerID) {
		req.session.data.customerID = parseInt(req.query.customerID);
	}
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	res.render("internal/contact/add-contact");
});

// Create a new contact and redirect to edit-contact page
router.post("/internal/contact/add-contact", (req, res) => {
	const fullName = req.body.fullName || "";
	const customerID = parseInt(req.query.customerID ?? req.session.data.customerID, 10);
	const customerName = req.session.data.customers[customerID]?.name || "";
	
	// Parse firstName and lastName from fullName
	const nameParts = fullName.trim().split(/\s+/);
	const firstName = nameParts[0] || "";
	const lastName = nameParts.slice(1).join(" ") || "";
	
	// Ensure contacts array exists
	if (!Array.isArray(req.session.data.contacts)) {
		req.session.data.contacts = [];
	}
	
	// Create new contact object with same structure as other contacts
	const newContact = {
		wrls: "true",
		name: fullName,
		email: "",
		phone: "",
		type: "person",
		firstName: firstName,
		lastName: lastName,
		customers: [
			{
				role: "Contact",
				notices: [],
				customer: customerName,
			},
		],
	};
	
	// Add the new contact to the contacts array
	req.session.data.contacts.push(newContact);
	
	// Get the index of the newly created contact
	const contactID = req.session.data.contacts.length - 1;
	
	// Redirect to edit-contact page
	const query = new URLSearchParams({
		customerID: String(customerID),
		contactID: String(contactID),
	});
	
	if (req.session.data.ID) {
		query.append("ID", String(req.session.data.ID));
	}
	
	return res.redirect(`/internal/contact/edit-contact?${query.toString()}`);
});

// Capture selected contact and optional licence ID from query parameters
router.get("/internal/contact", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.contactID) {
		req.session.data.contactID = parseInt(req.query.contactID);
	}
	if (req.query.customerID) {
		req.session.data.customerID = parseInt(req.query.customerID);
	}
	res.render("internal/contact");
});

// Capture selected contact and optional licence ID for the edit contact page
router.get("/internal/contact/edit-contact", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.contactID) {
		req.session.data.contactID = parseInt(req.query.contactID);
	}
	if (req.query.customerID) {
		req.session.data.customerID = parseInt(req.query.customerID);
	}
	res.render("internal/contact/edit-contact");
});

// Capture selected contact and optional context for delete contact page
router.get("/internal/contact/delete-contact", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.contactID) {
		req.session.data.contactID = parseInt(req.query.contactID);
	}
	if (req.query.customerID) {
		req.session.data.customerID = parseInt(req.query.customerID);
	}
	if (req.query.from) {
		req.session.data.from = req.query.from;
	}
	res.render("internal/contact/delete-contact");
});

// Delete selected contact and return to customer contacts
router.post("/internal/contact/delete-contact", (req, res) => {
	const contactID = Number.parseInt(
		req.query.contactID ?? req.session.data.contactID,
		10,
	);
	let customerID = Number.parseInt(
		req.query.customerID ?? req.session.data.customerID,
		10,
	);

	if (
		Number.isInteger(contactID) &&
		Array.isArray(req.session.data.contacts) &&
		req.session.data.contacts[contactID]
	) {
		if (!Number.isInteger(customerID)) {
			const customerName =
				req.session.data.contacts[contactID]?.customers?.[0]?.customer;
			if (customerName && Array.isArray(req.session.data.customers)) {
				customerID = req.session.data.customers.findIndex(
					(customer) => customer.name === customerName,
				);
			}
		}

		req.session.data.contacts.splice(contactID, 1);
	}

	delete req.session.data.contactID;

	if (Number.isInteger(customerID) && customerID >= 0) {
		req.session.data.customerID = customerID;
		return res.redirect(
			`/internal/customer/customer-contacts?customerID=${customerID}`,
		);
	}

	return res.redirect("/internal/customers");
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

// Render the select-waa page
router.get("/internal/contact/select-waa", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.contactID) {
		req.session.data.contactID = parseInt(req.query.contactID);
	}
	if (req.query.customerID) {
		req.session.data.customerID = parseInt(req.query.customerID);
	}
	if (req.query.from) {
		req.session.data.from = req.query.from;
	}
	res.render("internal/contact/select-waa");
});

// Render the select-returns page
router.get("/internal/contact/select-returns", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.contactID) {
		req.session.data.contactID = parseInt(req.query.contactID);
	}
	if (req.query.from) {
		req.session.data.from = req.query.from;
	}
	res.render("internal/contact/select-returns");
});

// Save WAA licence selection and return to edit-contact
router.post("/internal/contact/select-waa", (req, res) => {
	const id = Number.parseInt(req.query.ID ?? req.session.data.ID, 10);
	const contactID = Number.parseInt(
		req.query.contactID ?? req.session.data.contactID,
		10,
	);
	const customerID = Number.parseInt(
		req.query.customerID ?? req.session.data.customerID,
		10,
	);
	const from = String(req.query.from ?? req.session.data.from ?? "").trim();
	const selected = req.body.waaSelectionOptions;

	// Normalise to array and strip _unchecked sentinel values added by the prototype kit
	const rawSelected = Array.isArray(selected)
		? selected
		: selected
			? [selected]
			: [];
	if (!req.session.data.pendingChanges) {
		req.session.data.pendingChanges = {};
	}
	req.session.data.pendingChanges.waaLicences = rawSelected.filter(
		(v) => !String(v).endsWith("_unchecked"),
	);

	const queryParams = {
		ID: Number.isInteger(id) ? String(id) : String(req.session.data.ID ?? ""),
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
	};
	if (Number.isInteger(customerID)) {
		queryParams.customerID = String(customerID);
	}
	const query = new URLSearchParams(queryParams).toString();

	const queryWithFrom =
		from.length > 0 ? `${query}&from=${encodeURIComponent(from)}` : query;

	return res.redirect(`/internal/contact/edit-contact?${queryWithFrom}`);
});

// Save Returns licence selection and return to edit-contact
router.post("/internal/contact/select-returns", (req, res) => {
	const id = Number.parseInt(req.query.ID ?? req.session.data.ID, 10);
	const contactID = Number.parseInt(
		req.query.contactID ?? req.session.data.contactID,
		10,
	);
	const from = String(req.query.from ?? req.session.data.from ?? "").trim();
	const selected = req.body.returnsSelectionOptions;

	// Normalise to array and strip _unchecked sentinel values added by the prototype kit
	const rawSelected = Array.isArray(selected)
		? selected
		: selected
			? [selected]
			: [];
	if (!req.session.data.pendingChanges) {
		req.session.data.pendingChanges = {};
	}
	req.session.data.pendingChanges.returnsLicences = rawSelected.filter(
		(v) => !String(v).endsWith("_unchecked"),
	);

	const query = new URLSearchParams({
		ID: Number.isInteger(id) ? String(id) : String(req.session.data.ID ?? ""),
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
	}).toString();

	const queryWithFrom =
		from.length > 0 ? `${query}&from=${encodeURIComponent(from)}` : query;

	return res.redirect(`/internal/contact/edit-contact?${queryWithFrom}`);
});

// Clear stale WAA selection and render the edit-waa page
router.get("/internal/contact/edit-waa", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.contactID) {
		req.session.data.contactID = parseInt(req.query.contactID);
	}
	if (req.query.customerID) {
		req.session.data.customerID = parseInt(req.query.customerID);
	}
	if (req.query.from) {
		req.session.data.from = req.query.from;
	}
	// Clear stale selection so the template always derives from contact data
	delete req.session.data.waaSelection;
	res.render("internal/contact/edit-waa");
});

// Clear stale Returns selection and render the edit-returns page
router.get("/internal/contact/edit-returns", (req, res) => {
	if (req.query.ID) {
		req.session.data.ID = parseInt(req.query.ID);
	}
	if (req.query.contactID) {
		req.session.data.contactID = parseInt(req.query.contactID);
	}
	if (req.query.from) {
		req.session.data.from = req.query.from;
	}
	// Clear stale selection so the template always derives from contact data
	delete req.session.data.returnsSelection;
	res.render("internal/contact/edit-returns");
});

// Save WAA selection and route to the next step
router.post("/internal/contact/edit-waa", (req, res) => {
	const id = Number.parseInt(req.query.ID ?? req.session.data.ID, 10);
	const contactID = Number.parseInt(
		req.query.contactID ?? req.session.data.contactID,
		10,
	);
	const customerID = Number.parseInt(
		req.query.customerID ?? req.session.data.customerID,
		10,
	);
	const from = String(req.query.from ?? req.session.data.from ?? "").trim();
	const waaSelection = String(req.body.waaSelection ?? "").trim();

	req.session.data.waaSelection = waaSelection;

	// Save as pending change so edit-contact shows the updated value before confirming
	if (!req.session.data.pendingChanges) {
		req.session.data.pendingChanges = {};
	}
	req.session.data.pendingChanges.waaSelection = waaSelection;
	// Clear any stale licence list if moving away from someLicences
	if (waaSelection !== "someLicences") {
		delete req.session.data.pendingChanges.waaLicences;
	}

	const queryParams = {
		ID: Number.isInteger(id) ? String(id) : String(req.session.data.ID ?? ""),
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
	};
	if (Number.isInteger(customerID)) {
		queryParams.customerID = String(customerID);
	}
	const query = new URLSearchParams(queryParams).toString();

	const queryWithFrom =
		from.length > 0 ? `${query}&from=${encodeURIComponent(from)}` : query;

	if (waaSelection === "someLicences") {
		return res.redirect(`/internal/contact/select-waa?${queryWithFrom}`);
	}

	return res.redirect(`/internal/contact/edit-contact?${queryWithFrom}`);
});

// Save Returns selection and route to the next step
router.post("/internal/contact/edit-returns", (req, res) => {
	const id = Number.parseInt(req.query.ID ?? req.session.data.ID, 10);
	const contactID = Number.parseInt(
		req.query.contactID ?? req.session.data.contactID,
		10,
	);
	const from = String(req.query.from ?? req.session.data.from ?? "").trim();
	const returnsSelection = String(req.body.returnsSelection ?? "").trim();

	req.session.data.returnsSelection = returnsSelection;

	// Save as pending change so edit-contact shows the updated value before confirming
	if (!req.session.data.pendingChanges) {
		req.session.data.pendingChanges = {};
	}
	req.session.data.pendingChanges.returnsSelection = returnsSelection;
	// Clear any stale licence list if moving away from someLicences
	if (returnsSelection !== "someLicences") {
		delete req.session.data.pendingChanges.returnsLicences;
	}

	const query = new URLSearchParams({
		ID: Number.isInteger(id) ? String(id) : String(req.session.data.ID ?? ""),
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
	}).toString();

	const queryWithFrom =
		from.length > 0 ? `${query}&from=${encodeURIComponent(from)}` : query;

	if (returnsSelection === "someLicences") {
		return res.redirect(`/internal/contact/select-returns?${queryWithFrom}`);
	}

	return res.redirect(`/internal/contact/edit-contact?${queryWithFrom}`);
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
		const waaSelection = req.session.data.pendingChanges.waaSelection;
		const waaLicences = req.session.data.pendingChanges.waaLicences;
		if (waaSelection || waaLicences !== undefined) {
			const selectedCustomerName =
				Number.isInteger(req.session.data.customerID)
					? req.session.data.customers[req.session.data.customerID]?.name
					: undefined;
			const customerName =
				selectedCustomerName ||
				req.session.data.licences[id]?.holder ||
				req.session.data.contacts[contactID]?.customers?.[0]?.customer;
			const contact = req.session.data.contacts[contactID];
			if (customerName && contact?.customers) {
				const customerEntry = contact.customers.find(
					(c) => c.customer === customerName,
				);
				if (customerEntry) {
					const noticeIndex = customerEntry.notices.findIndex(
						(n) => n.type === "Water abstraction alerts by email",
					);
					if (waaSelection === "noLicences") {
						// Remove the notice entirely
						if (noticeIndex >= 0) {
							customerEntry.notices.splice(noticeIndex, 1);
						}
					} else if (waaSelection === "allLicences") {
						if (noticeIndex >= 0) {
							customerEntry.notices[noticeIndex].licences = "all";
						} else {
							customerEntry.notices.push({
								type: "Water abstraction alerts by email",
								licences: "all",
							});
						}
					} else if (waaLicences !== undefined) {
						if (noticeIndex >= 0) {
							customerEntry.notices[noticeIndex].licences = waaLicences;
						} else {
							customerEntry.notices.push({
								type: "Water abstraction alerts by email",
								licences: waaLicences,
							});
						}
					}
				}
			}
		}
		const returnsSelection = req.session.data.pendingChanges.returnsSelection;
		const returnsLicences = req.session.data.pendingChanges.returnsLicences;
		if (returnsSelection || returnsLicences !== undefined) {
			const customerName =
				req.session.data.licences[id]?.holder ||
				req.session.data.contacts[contactID]?.customers?.[0]?.customer;
			const contact = req.session.data.contacts[contactID];
			if (customerName && contact?.customers) {
				const customerEntry = contact.customers.find(
					(c) => c.customer === customerName,
				);
				if (customerEntry) {
					const noticeIndex = customerEntry.notices.findIndex(
						(n) => n.type === "Returns by email",
					);
					if (returnsSelection === "noLicences") {
						if (noticeIndex >= 0) {
							customerEntry.notices.splice(noticeIndex, 1);
						}
					} else if (returnsSelection === "allLicences") {
						if (noticeIndex >= 0) {
							customerEntry.notices[noticeIndex].licences = "all";
						} else {
							customerEntry.notices.push({
								type: "Returns by email",
								licences: "all",
							});
						}
					} else if (returnsLicences !== undefined) {
						if (noticeIndex >= 0) {
							customerEntry.notices[noticeIndex].licences = returnsLicences;
						} else {
							customerEntry.notices.push({
								type: "Returns by email",
								licences: returnsLicences,
							});
						}
					}
				}
			}
		}
		// Clear pending changes after applying
		req.session.data.pendingChanges = {};
	}

	const customerID = Number.parseInt(
		req.query.customerID ?? req.session.data.customerID,
		10,
	);

	// If coming from customer context, redirect to customer-contacts
	if (Number.isInteger(customerID)) {
		const customerQuery = new URLSearchParams({
			customerID: String(customerID),
		}).toString();
		return res.redirect(`/internal/customer/customer-contacts?${customerQuery}`);
	}

	// Otherwise, redirect to contact page (licence context)
	const query = new URLSearchParams({
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
		ID: Number.isInteger(id) ? String(id) : String(req.session.data.ID ?? ""),
	}).toString();

	res.redirect(`/internal/contact?${query}`);
});

// Cancel editing - clear pending changes and return to contact page or customer contacts
router.get("/internal/contact/cancel", (req, res) => {
	const id = Number.parseInt(req.query.ID ?? req.session.data.ID, 10);
	const contactID = Number.parseInt(
		req.query.contactID ?? req.session.data.contactID,
		10,
	);
	const customerID = Number.parseInt(
		req.query.customerID ?? req.session.data.customerID,
		10,
	);

	// Clear any pending changes
	req.session.data.pendingChanges = {};

	// If coming from customer context, redirect to customer-contacts
	if (Number.isInteger(customerID)) {
		const customerQuery = new URLSearchParams({
			customerID: String(customerID),
		}).toString();
		return res.redirect(`/internal/customer/customer-contacts?${customerQuery}`);
	}

	// Otherwise, redirect to contact page (licence context)
	const query = new URLSearchParams({
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
		ID: Number.isInteger(id) ? String(id) : String(req.session.data.ID ?? ""),
	}).toString();

	res.redirect(`/internal/contact?${query}`);
});
