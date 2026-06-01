module.exports = {

  //Default licence (Lower Smith Road 00/22/001/08)
  "ID": 0,

  //Default customer (Irene Briton)
  "customerID": 2,

  //Customer/Company
  "customers": [
    {
      "name": "Bottled Water Plc",
      "WAA": "post",
    },
    {
      "name": "Big Smith Farms Ltd",
      "WAA": "email",
    },
    {
      "name": "Irene Briton",
      "WAA": "post",
    },
    {
      "name": "Robin Vithlhem-Smith",
      "WAA": "post",
    },
    {
      "name": "D.B. Beecham-Smith",
      "WAA": "post",
    },
    {
      "name": "Public Water Plc",
      "WAA": "post",
    }
  ],

  //licences
  "licences": [
  // licence 1 – Lower Smith Road 00/22/001/08
  // Licence summary
  {
    "name": "Lower Smith Road",
    "number": "00/22/001/08",
    "holder": "Irene Briton",
    "startDate": "1 June 1985",
    "effectiveDate": "1 June 1985",
    "endDate": "31 January 2020",
    "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
    "purpose": ["Spray irrigation","General machine washing"],
    "periodStart": "1 April",
    "periodEnd": "31 October",
    "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675343"],
    "monitoringStation": "Bourton Dickler",
    "conditions": ["General condition","Hands off flow condition (HOF)"],
    "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
    "billingRegion": "Midlands",
    "expired": "true",

    // Purposes, periods and amounts, Points, Conditions
    "use": [{
      "purpose": "Spray irrigation - direct",
      "points": ["At National Grid Reference SK 675 124(RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
      "periodStart": "0401",
      "periodEnd": "1031",
      "amount":"125",
      "timeLimit": "No"
    },
    {
      "purpose": "General machine washing",
      "points": ["At National Grid Reference SE 437 682 (RIVER SWALE - HELPERBY)"],
      "periodStart": "0401",
      "periodEnd": "1031",
      "amount": "20",
      "timeLimit": "No"
    }],
    "means": ["Unspecified pump"],
    "sourceType": "Surface water",
    "absConditions": [
      {"type" : "General condition",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "",
        "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
      },
      {"type" : "Hands off flow condition (HOF)",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "Bourton Dickler",
        "param2" : "180 millilitres per day",
        "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180 millilitres per day."
      }
    ],

    // History
    "changeLog": [
      {
      "type": "Licence version",
      "reasonCreated": "Testing 3",
      "reasonText":  "Special Agreement - Change",
      "changedDate": "1 April 2015",
      "startDate": "2005-04-01",
      "changeType": "no licence issued",
      "endDate": "2010-03-31",
      "changedBy": "admin@gov.uk"
      },
      {
      "type": "Licence version",
      "reasonCreated": "Testing 2",
      "reasonText":  "Changes to Returns requirements",
      "changedDate": "1 November 2002",
      "startDate": "2002-04-01",
      "changeType": "no licence issued",
      "endDate": "2005-04-01",
      "changedBy": "admin@gov.uk"
      },
      {
      "type": "Licence version",
      "reasonCreated": "Testing 1",
      "reasonText":  "Changes to Returns requirements",
      "changedDate": "1 April 1995",
      "startDate": "1995-04-01",
      "changeType": "no licence issued",
      "endDate": "2002-03-31",
      "changedBy": "admin@gov.uk"
      },
      {
      "type": "Licence version",
      "reasonCreated": "new Licence",
      "reasonText":  "",
      "changedDate": "",
      "startDate": "1985-06-01",
      "changeType": "licence issued",
      "endDate": "",
      "changedBy": "admin@gov.uk"
      }
    ],

    // Licence contacts
    "contacts": [{
      "type": "returns",
      "id": ['6'],
      "method": "letter",
      "addressID": "6"
    }]

  },      

  // licence 2 – Glindenfold Lake 03/28/60/0032
  // Licence summary
  {
    "name": "Glindenfold Lake",
    "number": "03/28/60/0032",
    "holder": "Bottled Water Plc",
    "startDate": "1 June 1985",
    "effectiveDate": "1 June 1985",
    "endDate": "30 April 2022",
    "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
    "purpose": ["Spray irrigation", "General machine washing"],
    "periodStart": "1 April",
    "periodEnd": "31 October",
    "absPoints": ["At National Grid Reference SK 675126"],
    "monitoringStation": "Bourton Dickler",
    "conditions": ["General condition", "Hands off flow condition (HOF)"],
    "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
    "billingRegion": "North West",
    "expired": "false",
    
    // Purposes, periods and amounts, Points, Conditions
    "use": [{
      "purpose": "Spray irrigation - direct",
      "points": ["At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
      "periodStart": "0401",
      "periodEnd": "1031",
      "amount":"125",
      "timeLimit": "No"
    },
    {
      "purpose": "Spray irrigation - direct",
      "points": ["At National Grid Reference SK 675126(RIVER SWALE - HELPERBY)"],
      "periodStart": "1101",
      "periodEnd": "0331",
      "amount":"125",
      "timeLimit": "No"
    },
    {
      "purpose": "General machine washing",
      "points": ["At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
      "periodStart": "0401",
      "periodEnd": "1031",
      "amount": "20",
      "timeLimit": "No"
    }],
    "means": ["Unspecified pump"],
    "sourceType": "Surface water",
    "absConditions": [
      {"type" : "General condition",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "",
        "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
      },
      {"type" : "Hands off flow condition (HOF)",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "Bourton Dickler",
        "param2" : "180 millilitres per day",
        "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180 millilitres per day."
      }
    ],

    // History
    "changeLog": [
      {
        "type": "Licence version",
        "reasonCreated": "new Licence",
        "reasonText": "",
        "changedDate": "1 April 2019",
        "startDate": "1985-06-01",
        "changeType": "licence issued",
        "endDate": "",
        "changedBy": "admin@gov.uk"
      }
    ],

    // Licence contacts
    "contacts": [{
      "type": "returns",
      "id": ['3'],
      "method": "letter",
      "addressID": "6"
    }]
  },

  // licence 3 - Honeydew Crescent 03/28/61/029
  // Licence summary
  {
    "name": "Honeydew Crescent",
    "number": "03/28/61/029",
    "holder": "Big Smith Farms Ltd",
    "startDate": "1 April 2022",
    "effectiveDate": "1 April 2022",
    "endDate": "31 March 2034",
    "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
    "purpose": ["Spray irrigation"],
    "periodStart": "1 April",
    "periodEnd": "31 March",
    "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675126"],
    "monitoringStation": "Bourton Dickler",
    "conditions": ["General condition", "Hands off flow condition (HOF)"],
    "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
    "billingRegion": "South West",
    "expired": "false",

    // Purposes, periods and amounts, Points, Conditions
    "use": [{
      "purpose": "Spray irrigation - direct",
      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY)"],
      "periodStart": "0401",
      "periodEnd": "0331",
      "amount":"125",
      "timeLimit": "No"
    }], 
    "means": ["Unspecified pump"],
    "sourceType": "Surface water",
    "absConditions": [
      {"type" : "General condition",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "",
        "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
      },
      {"type" : "Hands off flow condition (HOF)",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "Bourton Dickler",
        "param2" : "180 millilitres per day",
        "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180 millilitres per day."
      }
    ],

    // History
    "changeLog": [
      {
        "type": "Licence version",
        "reasonCreated": "new Licence",
        "reasonText": "",
        "changedDate": "1 April 2019",
        "startDate": "2022-04-01",
        "changeType": "licence issued",
        "endDate": "",
        "changedBy": "admin@gov.uk"
      }
    ],

    // Licence contacts
    "contacts": [{
      "type": "returns",
      "id": ['1'],
      "method": "letter",
      "addressID": "4"
    }]
  },

  // licence 4 - George Furrow 03/28/60/0035
  // licence summary
  {
    "name": "George Furrow",
    "number": "03/28/60/0035",
    "holder": "Bottled Water Plc",
    "startDate": "1 June 1985",
    "effectiveDate": "1 June 1985",
    "endDate": "15 September 2022",
    "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
    "purpose": ["Spray irrigation"],
    "periodStart": "1 April",
    "periodEnd": "31 October",
    "absPoints": ["At National Grid Reference SU 190683", "At National Grid Reference SU 190679", "At National Grid Reference SU 188678", "At National Grid Reference SU 187680"],
    "monitoringStation": "Bourton Dickler",
    "conditions": ["General condition", "Hands off flow condition (HOF)"],
    "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
    "billingRegion": "North East",
    "expired": "false",

    // Purposes, periods and amounts, Points, Conditions
    "use": [{
      "purpose": "Spray irrigation - direct",
      "points": ["At National Grid Reference SU 190683 (Marlborough)", "At National Grid Reference SU 190679 (Marlborough)", "At National Grid Reference SU 188678 (Marlborough)", "At National Grid Reference SU 187680 (Marlborough)"],
      "periodStart": "0401",
      "periodEnd": "1031",
      "amount":"125",
      "timeLimit": "No"
      }],
    "means": ["Unspecified pump"],
    "sourceType": "Surface water",
    "absConditions": [
      {"type" : "General condition",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "",
        "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
      },
      {"type" : "Hands off flow condition (HOF)",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "Bourton Dickler",
        "param2" : "180 millilitres per day",
        "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180 millilitres per day."
      }
    ],

    // History
    "changeLog": [
      {
        "type": "Licence version",
        "reasonCreated": "new Licence",
        "reasonText": "",
        "changedDate": "1 April 2019",
        "startDate": "1985-06-01",
        "changeType": "licence issued",
        "endDate": "",
        "changedBy": "admin@gov.uk"
      }
    ],

    // Licence contacts
    "contacts": [{
      "type": "returns",
      "id": ['3'],
      "method": "letter",
      "addressID": "1"
    },{
      "type": "returns",
      "id": ['2'],
      "method": "email",
      "addressID": "1"
    }]
  },

  // licence 5 - Dale Barrow 03/28/60/0033
  // licence summary
  {
    "name": "Dale Barrow",
    "number": "03/28/60/0033",
    "holder": "Bottled Water Plc",
    "startDate": "1 September 1990",
    "effectiveDate": "1 September 1990",
    "endDate": "15 September 2022",
    "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
    "purpose": ["Spray irrigation"],
    "periodStart": "1 November",
    "periodEnd": "31 March",
    "absPoints": ["At National Grid Reference SK 674125", "At National Grid Reference SK 675126"],
    "monitoringStation": "Bourton Dickler",
    "conditions": ["General condition", "Hands off flow condition (HOF)"],
    "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
    "billingRegion": "Anglian",
    "expired": "false",

    // Purposes, periods and amounts, Points, Conditions
    "use": [{
      "purpose": "Spray irrigation - direct",
      "points": ["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
      "periodStart": "1101",
      "periodEnd": "0331",
      "amount":"125",
      "timeLimit": "No"
    }],
    "means": ["Unspecified pump"],
  "sourceType": "Surface water",
    "absConditions": [
      {"type" : "General condition",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "",
        "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
      },
      {"type" : "Hands off flow condition (HOF)",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "Bourton Dickler",
        "param2" : "180 millilitres per day",
        "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180 millilitres per day."
      }
    ],

    // History
    "changeLog": [
      {
        "type": "Licence version",
        "reasonCreated": "new Licence",
        "reasonText": "",
        "changedDate": "1 April 2019",
        "startDate": "1990-09-01",
        "changeType": "licence issued",
        "endDate": "",
        "changedBy": "admin@gov.uk"
      }
    ],

    // Licence contacts
    "contacts": [{
      "type": "returns",
      "id": ['3'],
      "method": "letter",
      "addressID": "1"
    },{
      "type": "returns",
      "id": ['2'],
      "method": "email",
      "addressID": "1"
    }]
  },

  // licence 6 - River House 03/28/60/0726
  // licence summary
  {
    "name": "River House",
    "number": "03/28/60/0726",
    "holder": "Robin Vithlhem-Smith",
    "startDate": "1 April 2015",
    "effectiveDate": "1 April 2015",
    "endDate": "1 March 2023",
    "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
    "purpose": ["Spray irrigation"],
    "periodStart": "1 April",
    "periodEnd": "31 October",
    "absPoints": ["At National Grid Reference ST 456789"],
    "monitoringStation": "Bourton Dickler",
    "conditions": ["General condition", "Hands off flow condition (HOF)"],
    "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
    "billingRegion": "Midlands",
    "expired": "false",

    // Purposes, periods and amounts, Points, Conditions
    "use": [{
      "purpose": "Spray irrigation - direct",
      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
      "periodStart": "0401",
      "periodEnd": "1031",
      "amount":"125",
      "timeLimit": "No"
    }], 
    "means": ["Unspecified pump"],
    "sourceType": "Surface water",
    "absConditions": [
      {"type" : "General condition",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "",
        "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
      },
      {"type" : "Hands off flow condition (HOF)",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "Bourton Dickler",
        "param2" : "180 millilitres per day",
        "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180 millilitres per day."
      }
    ],

    // History
    "changeLog": [
      {
        "type": "Licence version",
        "reasonCreated": "new Licence",
        "reasonText": "",
        "changedDate": "1 April 2019",
        "startDate": "2015-04-01",
        "changeType": "licence issued",
        "endDate": "",
        "changedBy": "admin@gov.uk"
      }
    ],

    // Licence contacts
    "contacts": [{
      "type": "returns",
      "id": ['3'],
      "method": "letter",
      "addressID": "0"
    }]
  },
  // licence 7 - [No name] 11/22/32/02
  // licence summary
  {
    "name": "",
    "number": "11/22/32/02",
    "holder": "D.B. Beecham-Smith",
    "startDate": "1 October 2016",
    "effectiveDate": "1 October 2016",
    "endDate": "30 September 2025",
    "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
    "purpose": ["Spray irrigation"],
    "periodStart": "1 April",
    "periodEnd": "31 October",
    "absPoints": ["At National Grid Reference SO 123456"],
    "monitoringStation": "Bourton Dickler",
    "conditions": ["General condition", "Hands off flow condition (HOF)"],
    "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
    "billingRegion": "South West",
    "expired": "false",

    // Purposes, periods and amounts, Points, Conditions
    "use": [{
      "purpose": "Spray irrigation - direct",
      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
      "periodStart": "1101",
      "periodEnd": "0331",
      "amount":"125",
    }],
    "means": ["Unspecified pump"],
    "sourceType": "Surface water",
    "absConditions": [
      {"type" : "General condition",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "",
        "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
      },
      {"type" : "Hands off flow condition (HOF)",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "Bourton Dickler",
        "param2" : "180Ml/d",
        "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
      }
    ],

    // History
    "changeLog": [
      {
        "type": "Licence version",
        "reasonCreated": "new Licence",
        "reasonText": "",
        "changedDate": "1 April 2019",
        "startDate": "2016-10-01",
        "changeType": "licence issued",
        "endDate": "",
        "changedBy": "admin@gov.uk"
      }
    ],

    // Licence contacts
    "contacts": [{
      "type": "returns",
      "id": ['8'],
      "method": "letter",
      "addressID": "6"
    }]
  },

  // licence 8 - Cherry Tree Farm 03/28/61/033
  // licence summary
  {
    "name": "Cherry Tree Farm",
    "number": "03/28/61/033",
    "holder": "Big Smith Farms Ltd",
    "startDate": "1 April 2025",
    "effectiveDate": "1 August 2025",
    "endDate": "31 March 2037",
    "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
    "purpose": ["Spray irrigation"],
    "periodStart": "1 April",
    "periodEnd": "31 March",
    "absPoints": ["At National Grid Reference SP 654321"],
    "monitoringStation": "Bourton Dickler",
    "conditions": ["General condition", "Hands off flow condition (HOF)"],
    "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
    "billingRegion": "Midlands",
    "expired": "false",

    // Purposes, periods and amounts, Points, Conditions
    "use": [{
      "purpose": "Spray Irrigation - Storage",
      "points": ["At National Grid Reference SK 675 126 (Cherry tree farm - BOREHOLE B)"],
      "periodStart": "0401",
      "periodEnd": "0331",
      "amount":"80,000",
      "timeLimit": "No"
    },
    {
      "purpose": "General Farming & Domestic",
      "points": ["At National Grid Reference SK 675 124 (Cherry tree farm - BOREHOLE A)"],
      "periodStart": "0401",
      "periodEnd": "0331",
      "amount":"2,890",
      "timeLimit": "No"
    },
    {
      "purpose": "Spray irrigation - direct",
      "points": ["At National Grid Reference SK 675 124 (Cherry tree farm - BOREHOLE A)"],
      "periodStart": "0401",
      "periodEnd": "0331",
      "amount":"2,890",
      "timeLimit": "No"
    }], 
    "means": ["Unspecified pump"],
    "sourceType": "Surface water",
    "absConditions": [
      {"type" : "General condition",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "",
        "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
      },
      {"type" : "Hands off flow condition (HOF)",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "Bourton Dickler",
        "param2" : "180 millilitres per day",
        "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180 millilitres per day."
      }
    ],

    // History
    "changeLog": [
      {
        "type": "Licence version",
        "reasonCreated": "major variation",
        "reasonText": "Major variation increase to spray irrigation storage volume on SK 675124 and SK 675126",
        "changedDate": "31 March 2025",
        "startDate": "2025-04-01",
        "endDate": "",
        "changeType": "licence issued",
        "changedBy": "admin@gov.uk"
      },
      {
        "type": "Licence version",
        "reasonCreated": "minor variation",
        "reasonText": "Minor variation time limited increase for reservoir storage for subsequent spray irrigation volume on SK 675124 and SK 675126",
        "changedDate": "31 March 2019",
        "startDate": "2019-04-01",
        "endDate": "2025-03-31",
        "changeType": "no licence issued",
        "changedBy": "admin@gov.uk"
      },
      {
        "type": "Licence version",
        "reasonCreated": "new Licence",
        "reasonText": "",
        "changedDate": "1 April 2017",
        "startDate": "2017-04-01",
        "changeType": "licence issued",
        "endDate": "2019-03-31",
        "changedBy": "admin@gov.uk"
      }
    ],

    // Licence contacts
    "contacts": [{
      "type": "returns",
      "id": ['1'],
      "method": "letter",
      "addressID": "6"
    },{
      "type": "returns",
      "id": ['2'],
      "method": "email",
      "addressID": ""
    }]
  },

  // licence 9 - [No name] 100/22/33/0123
  // licence summary
  {
    "name": "",
    "number": "100/22/33/0123",
    "holder": "Public Water Plc",
    "startDate": "19 January 2018",
    "effectiveDate": "19 January 2018",
    "endDate": "30 March 2030",
    "source": "Groundwater.",
    "purpose": ["Potable Water Supply - Direct"],
    "periodStart": "31 October",
    "periodEnd": "31 March",
    "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675126", "At National Grid Reference SK 675130", "At National Grid Reference SK 675135"],
    "monitoringStation": "Bourton Dickler",
    "conditions": ["Hands off flow condition (HOF)"],
    "absQuantities": "6000000.00 cubic metres per year~30000.00 cubic metres per day",
    "billingRegion": "Southern",
    "expired": "false",

    // Purposes, periods and amounts, Points, Conditions
    "use": [{
      "purpose": "Potable Water Supply - Direct",
      "sourceType": "Surface water",
      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY SP2)", "At National Grid Reference SK 675130 (RIVER SWALE - HELPERBY SP3)", "At National Grid Reference SK 675135 (RIVER SWALE - HELPERBY SP4)"],
      "periodStart": "0401",
      "periodEnd": "0331",
      "amount":"12271.581",
      "timeLimit": "No"
    }], 
    "means": ["Unspecified pump"],
    "absConditions": [
      {"type" : "Hands off flow condition (HOF)",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0", "1", "2", "3"],
        "param1" : "Bourton Dickler",
        "param2" : "73.4 millilitres per day",
        "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 73.4 millilitres per day."
      }
    ],

    // History
    "changeLog": [
      {
        "type": "Licence version",
        "reasonCreated": "new Licence",
        "reasonText": "",
        "changedDate": "1 April 2019",
        "startDate": "2018-01-01",
        "changeType": "licence issued",
        "endDate": "",
        "changedBy": "admin@gov.uk"
      }
    ],

  },

  // licence 10 - River Swale Intake 200/20/23/0111
  // licence summary
  {
    "name": "River Swale Intake",
    "number": "200/20/23/0111",
    "holder": "Public Water Plc",
    "startDate": "1 April 2024",
    "effectiveDate": "1 April 2024",
    "endDate": "31 March 2032",
    "source": "Inland water known as the River Swale at Helperby",
    "purpose": ["Potable Water Supply - Direct"],
    "periodStart": "1 April",
    "periodEnd": "31 March",
    "absPoints": ["At National Grid Reference SK 675124"],
    "monitoringStation": "Bourton Dickler",
    "conditions": ["Hands off flow condition (HOF)"],
    "absQuantities": "6000000.00 cubic metres per year~30000.00 cubic metres per day",
    "billingRegion": "Southern",
    "expired": "false",

    // Purposes, periods and amounts, Points, Conditions
    "use": [{
      "purpose": "Potable Water Supply - Direct",
      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)"],
      "periodStart": "0401",
      "periodEnd": "0331",
      "amount":"12271.581",
      "timeLimit": "No"
    }],
    "means": ["Unspecified pump"],
    "sourceType": "Surface water",
    "absConditions": [
      {"type" : "Hands off flow condition (HOF)",
        "purposeIndex" : ["0"],
        "pointsIndex" : ["0"],
        "param1" : "Bourton Dickler",
        "param2" : "73.4 millilitres per day",
        "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 73.4 millilitres per day."
      }
    ],

    // Licence contacts
    "contacts": [{
      "type": "returns",
      "id": ['10'],
      "method": "letter",
      "addressID": "6"
    }],

    // History
    "changeLog": [
      {
        "type": "Licence version",
        "reasonCreated": "new Licence",
        "reasonText": "",
        "changedDate": "1 April 2019",
        "startDate": "2024-04-01",
        "changeType": "licence issued",
        "endDate": "",
        "changedBy": "admin@gov.uk"
      }
    ],


  }
  ]
  
}
