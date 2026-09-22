const govukPrototypeKit = require("govuk-prototype-kit");
const router = govukPrototypeKit.requests.setupRouter();

const ensureSelectedLicenceHolder = (req) => {
	if (!req.session.data.selectedLicenceHolder) {
		req.session.data.selectedLicenceHolder = "Bottled Water Plc";
	}
};

const normaliseContactRole = (role) => {
	const value = String(role ?? "").trim();
	if (value === "Primary user" || value === "Primary-contact") {
		return "Primary contact";
	}
	if (value === "Contact") {
		return "Contact";
	}
	return value;
};

const captureRouteContext = (
	req,
	{ ID = false, contactID = false, customerID = false, from = false } = {},
) => {
	if (ID && req.query.ID) {
		req.session.data.ID = Number.parseInt(req.query.ID, 10);
	}
	if (contactID && req.query.contactID) {
		req.session.data.contactID = Number.parseInt(req.query.contactID, 10);
	}
	if (customerID && req.query.customerID) {
		req.session.data.customerID = Number.parseInt(req.query.customerID, 10);
	}
	if (from && req.query.from) {
		req.session.data.from = req.query.from;
	}
};

const getContactRouteContext = (req) => ({
	id: Number.parseInt(req.query.ID ?? req.session.data.ID, 10),
	contactID: Number.parseInt(
		req.query.contactID ?? req.session.data.contactID,
		10,
	),
	customerID: Number.parseInt(
		req.query.customerID ?? req.session.data.customerID,
		10,
	),
	from: String(req.query.from ?? req.session.data.from ?? "").trim(),
});

const ensurePendingChanges = (req) => {
	if (!req.session.data.pendingChanges) {
		req.session.data.pendingChanges = {};
	}
};

const setContactUpdateSuccess = (req, message) => {
	req.session.data.contactUpdateSuccess = true;
	req.session.data.contactUpdateSuccessMessage = message;
};

const buildEditContactQuery = (
	req,
	{ id, contactID, customerID, from },
	{
		includeCustomerID = true,
		includeFrom = true,
		alwaysIncludeID = false,
	} = {},
) => {
	const queryParams = {
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
	};

	if (Number.isInteger(id)) {
		queryParams.ID = String(id);
	} else if (alwaysIncludeID) {
		queryParams.ID = String(req.session.data.ID ?? "");
	}

	if (includeCustomerID && Number.isInteger(customerID)) {
		queryParams.customerID = String(customerID);
	}

	if (includeFrom && from.length > 0) {
		queryParams.from = from;
	}

	return new URLSearchParams(queryParams).toString();
};

const normaliseSelectedValues = (selected) => {
	const rawSelected = Array.isArray(selected)
		? selected
		: selected
			? [selected]
			: [];

	return rawSelected.filter((v) => !String(v).endsWith("_unchecked"));
};

const getCustomerNameForContactContext = (
	req,
	{ id, contactID, customerID, from },
) => {
	const selectedCustomerName =
		from === "customer" && Number.isInteger(customerID)
			? req.session.data.customers[customerID]?.name
			: undefined;

	return (
		selectedCustomerName ||
		req.session.data.licences[id]?.holder ||
		req.session.data.contacts[contactID]?.customers?.[0]?.customer
	);
};

const updateNoticeSelection = (
	customerEntry,
	{ noticeType, selection, selectedLicences },
) => {
	if (!customerEntry) {
		return false;
	}

	if (!Array.isArray(customerEntry.notices)) {
		customerEntry.notices = [];
	}

	const noticeIndex = customerEntry.notices.findIndex(
		(notice) => notice.type === noticeType,
	);

	if (selection === "noLicences") {
		if (noticeIndex >= 0) {
			customerEntry.notices.splice(noticeIndex, 1);
			return true;
		}
		return false;
	}

	if (selection === "allLicences") {
		if (noticeIndex >= 0) {
			customerEntry.notices[noticeIndex].licences = "all";
		} else {
			customerEntry.notices.push({
				type: noticeType,
				licences: "all",
			});
		}
		return true;
	}

	if (selectedLicences !== undefined) {
		if (noticeIndex >= 0) {
			customerEntry.notices[noticeIndex].licences = selectedLicences;
		} else {
			customerEntry.notices.push({
				type: noticeType,
				licences: selectedLicences,
			});
		}
		return true;
	}

	return false;
};

const registerPendingContactFieldRoute = ({
	routePath,
	bodyField,
	pendingField,
	normalise = (value) => String(value ?? "").trim(),
}) => {
	router.post(routePath, (req, res) => {
		const { id, contactID } = getContactRouteContext(req);
		const value = normalise(req.body[bodyField]);

		// Store as pending edit, not permanent
		ensurePendingChanges(req);
		req.session.data.pendingChanges[pendingField] = value;

		const query = new URLSearchParams({
			ID: Number.isInteger(id) ? String(id) : String(req.session.data.ID ?? ""),
			contactID: Number.isInteger(contactID)
				? String(contactID)
				: String(req.session.data.contactID ?? ""),
		}).toString();

		res.redirect(`/internal/contact/edit-contact?${query}`);
	});
};

const getNoPageLayoutTemplate = (req) => {
	if (req.path.startsWith("/internal/")) {
		return "layouts/main-internal.html";
	}

	if (req.path.startsWith("/external/")) {
		return "layouts/main-external.html";
	}

	const referer = req.get("referer") || "";
	if (referer.includes("/internal/")) {
		return "layouts/main-internal.html";
	}

	if (referer.includes("/external/")) {
		return "layouts/main-external.html";
	}

	return "layouts/main-external.html";
};

const renderNoPage = (req, res) => {
	res.render("no-page", {
		layoutTemplate: getNoPageLayoutTemplate(req),
	});
};

router.get("/no-page", renderNoPage);
router.get("/no-page.html", renderNoPage);
router.get("/internal/no-page", renderNoPage);
router.get("/internal/no-page.html", renderNoPage);
router.get("/external/no-page", renderNoPage);
router.get("/external/no-page.html", renderNoPage);

// Expose current path to templates for active navigation states.
router.use("/internal", (req, res, next) => {
	res.locals.currentPath = req.originalUrl.split("?")[0];
	next();
});

// Capture licence ID from query parameter
router.get("/internal/licence", (req, res) => {
	captureRouteContext(req, { ID: true, customerID: true });
	res.render("internal/licence");
});

// Capture licence ID from query parameter for the purposes page
router.get("/internal/licence/purposes", (req, res) => {
	captureRouteContext(req, { ID: true });
	res.render("internal/licence/purposes");
});

// Render history version detail page
router.get("/internal/licence/history-version", (req, res) => {
	captureRouteContext(req, { ID: true });
	if (req.query.versionIndex) {
		req.session.data.currentVersionIndex = parseInt(req.query.versionIndex);
	}
	res.render("internal/licence/history-version");
});

// Capture customer ID from query parameter
router.get("/internal/customer", (req, res) => {
	captureRouteContext(req, { customerID: true });
	res.render("internal/customer");
});

// Capture customer ID from query parameter for the contacts page
router.get("/internal/customer/customer-contacts", (req, res) => {
	captureRouteContext(req, { customerID: true });

	const showContactRemovedBanner =
		req.session.data.contactRemovedSuccess === true;
	if (showContactRemovedBanner) {
		req.session.data.contactRemovedSuccess = false;
	}

	res.render("internal/customer/customer-contacts", {
		showContactRemovedBanner,
	});
});

// Capture customer ID and optional licence ID for add contact page
router.get("/internal/contact/select-role", (req, res) => {
	captureRouteContext(req, {
		ID: true,
		contactID: true,
		customerID: true,
		from: true,
	});

	const isExplicitNewContactFlow = String(req.query.newContact ?? "") === "1";
	const hasQueryContactID =
		typeof req.query.contactID !== "undefined" &&
		String(req.query.contactID).trim().length > 0;
	const isNewContactFlow = isExplicitNewContactFlow || !hasQueryContactID;
	req.session.data.newContactFlow = isNewContactFlow;

	if (isNewContactFlow) {
		delete req.session.data.contactID;
	}

	res.render("internal/contact/select-role", {
		isNewContactFlow,
	});
});

// Capture customer ID and optional licence ID for add contact page
router.get("/internal/contact/add-contact", (req, res) => {
	captureRouteContext(req, { ID: true, customerID: true, from: true });
	if (req.query.contactRole) {
		req.session.data.contactRole = normaliseContactRole(req.query.contactRole);
	}
	res.render("internal/contact/add-contact");
});

// Create a new contact and redirect to edit-contact page
router.post("/internal/contact/add-contact", (req, res) => {
	const fullName = req.body.fullName || "";
	const customerID = parseInt(
		req.query.customerID ?? req.session.data.customerID,
		10,
	);
	const customerName = req.session.data.customers[customerID]?.name || "";
	const selectedRole =
		normaliseContactRole(
			req.query.contactRole ?? req.session.data.contactRole ?? "Contact",
		) || "Contact";
	const from = String(req.query.from ?? req.session.data.from ?? "").trim();

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
		name: fullName,
		email: "",
		phone: "",
		firstName: firstName,
		lastName: lastName,
		dateCreated: new Date().toISOString().slice(0, 10),
		customers: [
			{
				role: selectedRole,
				notices:
					selectedRole === "Primary contact"
						? [
								{ type: "Water abstraction alerts by email", licences: "all" },
								{ type: "Returns by email", licences: "all" },
								{ type: "Bills by post", licences: "all" },
							]
						: [],
				customer: customerName,
			},
		],
	};

	// Add the new contact to the contacts array
	req.session.data.contacts.push(newContact);

	// Get the index of the newly created contact
	const contactID = req.session.data.contacts.length - 1;

	// Flag so Cancel can remove this contact if the user does not confirm
	req.session.data.pendingNewContactID = contactID;

	// Redirect to edit-contact page
	const query = new URLSearchParams({
		customerID: String(customerID),
		contactID: String(contactID),
	});

	if (req.session.data.ID) {
		query.append("ID", String(req.session.data.ID));
	}
	if (from.length > 0) {
		query.append("from", from);
	}

	delete req.session.data.contactRole;
	delete req.session.data.newContactFlow;

	return res.redirect(`/internal/contact/edit-contact?${query.toString()}`);
});

// Render select-licence-holder page
router.get("/internal/contact/select-licence-holder", (req, res) => {
	captureRouteContext(req, {
		ID: true,
		contactID: true,
		customerID: true,
		from: true,
	});
	const { id, contactID, customerID, from } = getContactRouteContext(req);
	const customerName = getCustomerNameForContactContext(req, {
		id,
		contactID,
		customerID,
		from,
	});
	res.render("internal/contact/select-licence-holder", { customerName });
});

// Handle licence holder selection and redirect back to contact page
router.post("/internal/contact/select-licence-holder", (req, res) => {
	const { contactID, from } = getContactRouteContext(req);
	const selectedCustomerName = req.body.licenceHolder;

	const newCustomerID = req.session.data.customers.findIndex(
		(c) => c.name === selectedCustomerName,
	);

	if (newCustomerID >= 0) {
		req.session.data.customerID = newCustomerID;
	}

	const resolvedCustomerID =
		newCustomerID >= 0 ? newCustomerID : req.session.data.customerID;
	const query = new URLSearchParams({
		contactID: String(contactID),
		customerID: String(resolvedCustomerID),
		from: from || "customer",
	}).toString();

	return res.redirect(`/internal/contact?${query}`);
});

// Capture selected contact and optional licence ID from query parameters
router.get("/internal/contact", (req, res) => {
	captureRouteContext(req, {
		ID: true,
		contactID: true,
		customerID: true,
		from: true,
	});

	const { contactID } = getContactRouteContext(req);
	const contact = req.session.data.contacts?.[contactID];
	const selectedCustomerName = Number.isInteger(req.session.data.customerID)
		? req.session.data.customers?.[req.session.data.customerID]?.name
		: undefined;

	if (contact?.customers?.length > 0) {
		const defaultCustomerName =
			selectedCustomerName || contact.customers[0].customer;
		const matchedCustomerIndex = req.session.data.customers.findIndex(
			(customer) => customer.name === defaultCustomerName,
		);

		if (matchedCustomerIndex >= 0) {
			req.session.data.customerID = matchedCustomerIndex;
		}
	}

	// Pass the success flag to the template if set, then clear it
	const showSuccessBanner = req.session.data.contactUpdateSuccess === true;
	const successBannerText =
		req.session.data.contactUpdateSuccessMessage ||
		"Contact details updated";
	if (showSuccessBanner) {
		req.session.data.contactUpdateSuccess = false;
		delete req.session.data.contactUpdateSuccessMessage;
	}

	const showNewContactBanner = req.session.data.newContactSuccess === true;
	if (showNewContactBanner) {
		req.session.data.newContactSuccess = false;
	}

	res.render("internal/contact", {
		showSuccessBanner,
		successBannerText,
		showNewContactBanner,
	});
});

router.post("/internal/contact", (req, res) => {
	const { ID, contactID, from } = getContactRouteContext(req);
	const selectedCustomerName = String(
		req.body.selectedCustomerName || req.body.licenceHolder || "",
	).trim();

	const contact = req.session.data.contacts?.[contactID];
	const matchedCustomer = contact?.customers?.find(
		(customerEntry) => customerEntry.customer === selectedCustomerName,
	);

	let nextCustomerID = req.session.data.customerID;
	if (matchedCustomer && Array.isArray(req.session.data.customers)) {
		nextCustomerID = req.session.data.customers.findIndex(
			(customer) => customer.name === matchedCustomer.customer,
		);
	}

	if (Number.isInteger(nextCustomerID) && nextCustomerID >= 0) {
		req.session.data.customerID = nextCustomerID;
	}

	const query = new URLSearchParams({
		contactID: Number.isInteger(contactID) ? String(contactID) : "",
		customerID: Number.isInteger(req.session.data.customerID)
			? String(req.session.data.customerID)
			: "0",
	});

	if (Number.isInteger(ID)) {
		query.append("ID", String(ID));
	}
	if (from.length > 0) {
		query.append("from", from);
	}

	return res.redirect(`/internal/contact?${query.toString()}`);
});

// Capture selected contact and optional licence ID for the edit contact page
router.get("/internal/contact/edit-contact", (req, res) => {
	captureRouteContext(req, { ID: true, contactID: true, customerID: true });
	const isNewContact = Number.isInteger(req.session.data.pendingNewContactID);
	res.render("internal/contact/edit-contact", { isNewContact });
});

// Capture selected contact and optional context for delete contact page
router.get("/internal/contact/delete-contact", (req, res) => {
	captureRouteContext(req, {
		ID: true,
		contactID: true,
		customerID: true,
		from: true,
	});
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

		const contact = req.session.data.contacts[contactID];
		const customerName = req.session.data.customers[customerID]?.name;

		if (contact.customers && contact.customers.length > 1 && customerName) {
			// Only remove the association with this licence holder
			contact.customers = contact.customers.filter(
				(entry) => entry.customer !== customerName,
			);
		} else {
			req.session.data.contacts.splice(contactID, 1);
		}
	}

	delete req.session.data.contactID;

	if (Number.isInteger(customerID) && customerID >= 0) {
		req.session.data.customerID = customerID;
		req.session.data.contactRemovedSuccess = true;
		return res.redirect(
			`/internal/customer/customer-contacts?customerID=${customerID}`,
		);
	}

	return res.redirect("/internal/customers");
});

// Capture selected contact and optional licence ID for editing contact name
router.get("/internal/contact/edit-name", (req, res) => {
	captureRouteContext(req, { ID: true, contactID: true });
	res.render("internal/contact/edit-name");
});

// Capture selected contact and optional licence ID for editing contact email
router.get("/internal/contact/edit-email", (req, res) => {
	captureRouteContext(req, { ID: true, contactID: true });
	res.render("internal/contact/edit-email");
});

// Capture selected contact and optional licence ID for editing contact address
router.get("/internal/contact/edit-address", (req, res) => {
	captureRouteContext(req, { ID: true, contactID: true });
	res.render("internal/contact/edit-address");
});

// Capture selected contact and optional licence ID for editing contact phone
router.get("/internal/contact/edit-phone", (req, res) => {
	captureRouteContext(req, { ID: true, contactID: true });
	res.render("internal/contact/edit-phone");
});

// Render the select-waa page
router.get("/internal/contact/select-waa", (req, res) => {
	captureRouteContext(req, {
		ID: true,
		contactID: true,
		customerID: true,
		from: true,
	});
	res.render("internal/contact/select-waa");
});

// Render the select-returns page
router.get("/internal/contact/select-returns", (req, res) => {
	captureRouteContext(req, {
		ID: true,
		contactID: true,
		customerID: true,
		from: true,
	});
	res.render("internal/contact/select-returns");
});

// Render confirm role page and capture context from query params
router.get("/internal/contact/confirm-role.html", (req, res) => {
	captureRouteContext(req, {
		ID: true,
		contactID: true,
		customerID: true,
		from: true,
	});

	const { id, contactID, customerID, from } = getContactRouteContext(req);
	const requestedRole = normaliseContactRole(req.query.contactRole);

	if (requestedRole) {
		req.session.data.contactRole = requestedRole;
	}

	const contact =
		Number.isInteger(contactID) && Array.isArray(req.session.data.contacts)
			? req.session.data.contacts[contactID]
			: null;
	const customerName =
		Number.isInteger(customerID) && Array.isArray(req.session.data.customers)
			? req.session.data.customers[customerID]?.name
			: req.session.data.licences?.[id]?.holder ||
				contact?.customers?.[0]?.customer;

	let currentRole = "Contact";
	if (contact?.customers && customerName) {
		const matchingEntry = contact.customers.find(
			(customerEntry) => customerEntry.customer === customerName,
		);
		if (matchingEntry?.role) {
			currentRole = normaliseContactRole(matchingEntry.role);
		}
	}

	if (requestedRole && requestedRole === currentRole) {
		const query = buildEditContactQuery(req, {
			id,
			contactID,
			customerID,
			from,
		});
		return res.redirect(`/internal/contact/edit-contact?${query}`);
	}

	res.render("internal/contact/confirm-role");
});

// Confirm selected role and return to the contact page with the updated role visible
router.post("/internal/contact/confirm-role.html", (req, res) => {
	const { id, contactID, customerID, from } = getContactRouteContext(req);
	const requestedRole = normaliseContactRole(
		req.query.contactRole ?? req.session.data.contactRole ?? "",
	);

	const contact =
		Number.isInteger(contactID) && Array.isArray(req.session.data.contacts)
			? req.session.data.contacts[contactID]
			: null;
	const customerName =
		Number.isInteger(customerID) && Array.isArray(req.session.data.customers)
			? req.session.data.customers[customerID]?.name
			: req.session.data.licences?.[id]?.holder ||
				contact?.customers?.[0]?.customer;

	if (requestedRole && customerName && contact?.customers) {
		const customerEntry = contact.customers.find(
			(entry) => entry.customer === customerName,
		);
		if (customerEntry) {
			customerEntry.role = requestedRole;

			if (requestedRole === "Primary contact") {
				if (!Array.isArray(customerEntry.notices)) {
					customerEntry.notices = [];
				}
				for (const noticeType of [
					"Water abstraction alerts by email",
					"Returns by email",
					"Bills by post",
				]) {
					const existing = customerEntry.notices.find(
						(notice) => notice.type === noticeType,
					);
					if (existing) {
						existing.licences = "all";
					} else {
						customerEntry.notices.push({
							type: noticeType,
							licences: "all",
						});
					}
				}
			}
		}
	}

	if (req.session.data.pendingChanges) {
		delete req.session.data.pendingChanges.contactRole;
	}
	delete req.session.data.contactRole;
	const successMessage = `Contact settings updated for ${customerName || "licence holder"}`;
	setContactUpdateSuccess(req, successMessage);

	const query = new URLSearchParams();
	if (Number.isInteger(contactID)) {
		query.append("contactID", String(contactID));
	}
	if (Number.isInteger(customerID)) {
		query.append("customerID", String(customerID));
	}
	if (Number.isInteger(id)) {
		query.append("ID", String(id));
	}
	if (from.length > 0) {
		query.append("from", from);
	}

	return res.redirect(`/internal/contact?${query.toString()}`);
});

// Cancel role change and return to edit-contact with no pending role change
router.get("/internal/contact/cancel-role", (req, res) => {
	const { id, contactID, customerID, from } = getContactRouteContext(req);

	if (req.session.data.pendingChanges) {
		delete req.session.data.pendingChanges.contactRole;
	}
	delete req.session.data.contactRole;

	const query = buildEditContactQuery(req, {
		id,
		contactID,
		customerID,
		from,
	});
	return res.redirect(`/internal/contact/edit-contact?${query}`);
});

// Save WAA licence selection and return to the contact page
router.post("/internal/contact/select-waa", (req, res) => {
	const { id, contactID, customerID, from } = getContactRouteContext(req);
	const selected = req.body.waaSelectionOptions;
	const contact =
		Number.isInteger(contactID) && Array.isArray(req.session.data.contacts)
			? req.session.data.contacts[contactID]
			: null;
	const customerName = getCustomerNameForContactContext(req, {
		id,
		contactID,
		customerID,
		from,
	});

	if (customerName && contact?.customers) {
		const customerEntry = contact.customers.find(
			(entry) => entry.customer === customerName,
		);
		updateNoticeSelection(customerEntry, {
			noticeType: "Water abstraction alerts by email",
			selection: "someLicences",
			selectedLicences: normaliseSelectedValues(selected),
		});
	}

	const query = new URLSearchParams({
		contactID: Number.isInteger(contactID) ? String(contactID) : "",
		customerID: Number.isInteger(customerID) ? String(customerID) : "",
	});
	if (Number.isInteger(id)) {
		query.append("ID", String(id));
	}
	if (from.length > 0) {
		query.append("from", from);
	}
	setContactUpdateSuccess(
		req,
		`Contact settings updated for ${customerName || "licence holder"}`,
	);

	return res.redirect(`/internal/contact?${query.toString()}`);
});

// Save Returns licence selection and return to the contact page
router.post("/internal/contact/select-returns", (req, res) => {
	const { id, contactID, customerID, from } = getContactRouteContext(req);
	const selected = req.body.returnsSelectionOptions;
	const contact =
		Number.isInteger(contactID) && Array.isArray(req.session.data.contacts)
			? req.session.data.contacts[contactID]
			: null;
	const customerName = getCustomerNameForContactContext(req, {
		id,
		contactID,
		customerID,
		from,
	});

	if (customerName && contact?.customers) {
		const customerEntry = contact.customers.find(
			(entry) => entry.customer === customerName,
		);
		updateNoticeSelection(customerEntry, {
			noticeType: "Returns by email",
			selection: "someLicences",
			selectedLicences: normaliseSelectedValues(selected),
		});
	}

	const query = new URLSearchParams({
		contactID: Number.isInteger(contactID) ? String(contactID) : "",
		customerID: Number.isInteger(customerID) ? String(customerID) : "",
	});
	if (Number.isInteger(id)) {
		query.append("ID", String(id));
	}
	if (from.length > 0) {
		query.append("from", from);
	}
	setContactUpdateSuccess(
		req,
		`Contact settings updated for ${customerName || "licence holder"}`,
	);

	return res.redirect(`/internal/contact?${query.toString()}`);
});

// Clear stale WAA selection and render the edit-waa page
router.get("/internal/contact/edit-waa", (req, res) => {
	captureRouteContext(req, {
		ID: true,
		contactID: true,
		customerID: true,
		from: true,
	});
	// Clear stale selection so the template always derives from contact data
	delete req.session.data.waaSelection;
	res.render("internal/contact/edit-waa");
});

// Clear stale Returns selection and render the edit-returns page
router.get("/internal/contact/edit-returns", (req, res) => {
	captureRouteContext(req, {
		ID: true,
		contactID: true,
		customerID: true,
		from: true,
	});
	// Clear stale selection so the template always derives from contact data
	delete req.session.data.returnsSelection;
	res.render("internal/contact/edit-returns");
});

// Save WAA selection and return to the contact page
router.post("/internal/contact/edit-waa", (req, res) => {
	const { id, contactID, customerID, from } = getContactRouteContext(req);
	const waaSelection = String(req.body.waaSelection ?? "").trim();
	const contact =
		Number.isInteger(contactID) && Array.isArray(req.session.data.contacts)
			? req.session.data.contacts[contactID]
			: null;
	const customerName = getCustomerNameForContactContext(req, {
		id,
		contactID,
		customerID,
		from,
	});

	if (customerName && contact?.customers) {
		const customerEntry = contact.customers.find(
			(entry) => entry.customer === customerName,
		);
		updateNoticeSelection(customerEntry, {
			noticeType: "Water abstraction alerts by email",
			selection: waaSelection,
			selectedLicences: undefined,
		});
	}

	const query = new URLSearchParams({
		contactID: Number.isInteger(contactID) ? String(contactID) : "",
		customerID: Number.isInteger(customerID) ? String(customerID) : "",
	});
	if (Number.isInteger(id)) {
		query.append("ID", String(id));
	}
	if (from.length > 0) {
		query.append("from", from);
	}
	setContactUpdateSuccess(
		req,
		`Contact settings updated for ${customerName || "licence holder"}`,
	);

	if (waaSelection === "someLicences") {
		return res.redirect(`/internal/contact/select-waa?${query.toString()}`);
	}

	return res.redirect(`/internal/contact?${query.toString()}`);
});

// Save Returns selection and return to the contact page
router.post("/internal/contact/edit-returns", (req, res) => {
	const { id, contactID, customerID, from } = getContactRouteContext(req);
	const returnsSelection = String(req.body.returnsSelection ?? "").trim();
	const contact =
		Number.isInteger(contactID) && Array.isArray(req.session.data.contacts)
			? req.session.data.contacts[contactID]
			: null;
	const customerName = getCustomerNameForContactContext(req, {
		id,
		contactID,
		customerID,
		from,
	});

	if (customerName && contact?.customers) {
		const customerEntry = contact.customers.find(
			(entry) => entry.customer === customerName,
		);
		updateNoticeSelection(customerEntry, {
			noticeType: "Returns by email",
			selection: returnsSelection,
			selectedLicences: undefined,
		});
	}

	const query = new URLSearchParams({
		contactID: Number.isInteger(contactID) ? String(contactID) : "",
		customerID: Number.isInteger(customerID) ? String(customerID) : "",
	});
	if (Number.isInteger(id)) {
		query.append("ID", String(id));
	}
	if (from.length > 0) {
		query.append("from", from);
	}
	setContactUpdateSuccess(
		req,
		`Contact settings updated for ${customerName || "licence holder"}`,
	);

	if (returnsSelection === "someLicences") {
		return res.redirect(`/internal/contact/select-returns?${query.toString()}`);
	}

	return res.redirect(`/internal/contact?${query.toString()}`);
});

registerPendingContactFieldRoute({
	routePath: "/internal/contact/edit-name",
	bodyField: "fullName",
	pendingField: "name",
});

registerPendingContactFieldRoute({
	routePath: "/internal/contact/edit-email",
	bodyField: "email",
	pendingField: "email",
});

registerPendingContactFieldRoute({
	routePath: "/internal/contact/edit-address",
	bodyField: "address",
	pendingField: "address",
});

registerPendingContactFieldRoute({
	routePath: "/internal/contact/edit-phone",
	bodyField: "phone",
	pendingField: "phone",
});

router.post("/internal/contact/edit-contact", (req, res) => {
	const { id, contactID, customerID, from } = getContactRouteContext(req);

	let changesWereMade = false;

	// Apply any pending changes
	if (
		req.session.data.pendingChanges &&
		Number.isInteger(contactID) &&
		Array.isArray(req.session.data.contacts) &&
		req.session.data.contacts[contactID]
	) {
		const customerName = getCustomerNameForContactContext(req, {
			id,
			contactID,
			customerID,
			from,
		});
		if (req.session.data.pendingChanges.name) {
			req.session.data.contacts[contactID].name =
				req.session.data.pendingChanges.name;
			changesWereMade = true;
		}
		if (req.session.data.pendingChanges.email) {
			req.session.data.contacts[contactID].email =
				req.session.data.pendingChanges.email;
			changesWereMade = true;
		}
		if (req.session.data.pendingChanges.address) {
			req.session.data.contacts[contactID].post =
				req.session.data.pendingChanges.address;
			changesWereMade = true;
		}
		if (req.session.data.pendingChanges.phone) {
			req.session.data.contacts[contactID].phone =
				req.session.data.pendingChanges.phone;
			changesWereMade = true;
		}
		if (req.session.data.pendingChanges.contactRole) {
			const pendingRole = normaliseContactRole(
				req.session.data.pendingChanges.contactRole,
			);
			const contact = req.session.data.contacts[contactID];
			if (customerName && contact?.customers) {
				const customerEntry = contact.customers.find(
					(c) => c.customer === customerName,
				);
				if (customerEntry && customerEntry.role !== pendingRole) {
					customerEntry.role = pendingRole;
					changesWereMade = true;

					if (pendingRole === "Primary contact") {
						if (!Array.isArray(customerEntry.notices)) {
							customerEntry.notices = [];
						}
						const allNoticeTypes = [
							"Water abstraction alerts by email",
							"Returns by email",
							"Bills by post",
						];
						for (const noticeType of allNoticeTypes) {
							const existing = customerEntry.notices.find(
								(n) => n.type === noticeType,
							);
							if (existing) {
								existing.licences = "all";
							} else {
								customerEntry.notices.push({
									type: noticeType,
									licences: "all",
								});
							}
						}
					}
				}
			}
		}
		const waaSelection = req.session.data.pendingChanges.waaSelection;
		const waaLicences = req.session.data.pendingChanges.waaLicences;
		if (waaSelection || waaLicences !== undefined) {
			const contact = req.session.data.contacts[contactID];
			if (customerName && contact?.customers) {
				const customerEntry = contact.customers.find(
					(c) => c.customer === customerName,
				);
				changesWereMade =
					updateNoticeSelection(customerEntry, {
						noticeType: "Water abstraction alerts by email",
						selection: waaSelection,
						selectedLicences: waaLicences,
					}) || changesWereMade;
			}
		}
		const returnsSelection = req.session.data.pendingChanges.returnsSelection;
		const returnsLicences = req.session.data.pendingChanges.returnsLicences;
		if (returnsSelection || returnsLicences !== undefined) {
			const contact = req.session.data.contacts[contactID];
			if (customerName && contact?.customers) {
				const customerEntry = contact.customers.find(
					(c) => c.customer === customerName,
				);
				changesWereMade =
					updateNoticeSelection(customerEntry, {
						noticeType: "Returns by email",
						selection: returnsSelection,
						selectedLicences: returnsLicences,
					}) || changesWereMade;
			}
		}
		// Clear pending changes after applying
		req.session.data.pendingChanges = {};
		if (Number.isInteger(req.session.data.pendingNewContactID)) {
			req.session.data.newContactSuccess = true;
		}
		delete req.session.data.pendingNewContactID;
	}

	// Set success flag if changes were made
	if (changesWereMade) {
		setContactUpdateSuccess(req, "Contact details updated for all licences");
	}

	// Redirect to contact page, preserving all available context
	const queryParams = {
		contactID: Number.isInteger(contactID)
			? String(contactID)
			: String(req.session.data.contactID ?? ""),
	};
	if (Number.isInteger(id)) {
		queryParams.ID = String(id);
	}
	if (from === "customer" && Number.isInteger(customerID)) {
		queryParams.customerID = String(customerID);
		queryParams.from = "customer";
	} else if (from.length > 0) {
		queryParams.from = from;
	}
	const query = new URLSearchParams(queryParams).toString();
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

	// Remove the contact if it was never confirmed
	const pendingNewContactID = req.session.data.pendingNewContactID;
	if (
		Number.isInteger(pendingNewContactID) &&
		Array.isArray(req.session.data.contacts)
	) {
		req.session.data.contacts.splice(pendingNewContactID, 1);
		delete req.session.data.contactID;
	}
	delete req.session.data.pendingNewContactID;

	// If coming from customer context, redirect to customer-contacts
	if (Number.isInteger(customerID)) {
		const customerQuery = new URLSearchParams({
			customerID: String(customerID),
		}).toString();
		return res.redirect(
			`/internal/customer/customer-contacts?${customerQuery}`,
		);
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

// External licences list with default licence holder selection
router.get("/external/licences", (req, res) => {
	ensureSelectedLicenceHolder(req);
	res.render("external/licences");
});

// External choose licence holder page
router.get("/external/choose-a-licence-holder", (req, res) => {
	ensureSelectedLicenceHolder(req);
	res.render("external/choose-a-licence-holder");
});

// Save selected licence holder and return to licences page
router.post("/external/choose-a-licence-holder", (req, res) => {
	const selectedLicenceHolder = String(req.body.licenceHolder || "").trim();
	req.session.data.selectedLicenceHolder =
		selectedLicenceHolder || "Bottled Water Plc";
	res.redirect("/external/licences");
});

// Legacy external URLs redirected to nested licence pages
router.get("/external/name-licence", (req, res) => {
	res.redirect("/external/licence/name-licence");
});

router.get("/external/licence-contacts", (req, res) => {
	res.redirect("/external/licence/licence-contacts");
});

router.get("/external/abstraction-details", (req, res) => {
	res.redirect("/external/licence/abstraction-details");
});

router.get("/external/abstraction-points", (req, res) => {
	res.redirect("/external/licence/abstraction-points");
});

router.get("/external/abstraction-conditions", (req, res) => {
	res.redirect("/external/licence/abstraction-conditions");
});

const saveExternalLicenceName = (req, res) => {
	const id = parseInt(req.session.data.ID, 10);
	const licenceName = String(req.body.licenceName || "").trim();
	if (
		Number.isInteger(id) &&
		req.session.data.licences &&
		req.session.data.licences[id]
	) {
		req.session.data.licences[id].name = licenceName;
	}
	res.redirect("/external/licence");
};

// Save licence name to session data
router.post("/external/name-licence", saveExternalLicenceName);
router.post("/external/licence/name-licence", saveExternalLicenceName);

// Capture licence ID from query parameter for external licence detail page
router.get("/external/licence", (req, res) => {
	captureRouteContext(req, { ID: true });
	res.render("external/licence");
});
