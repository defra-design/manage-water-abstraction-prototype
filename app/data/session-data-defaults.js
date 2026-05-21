module.exports = {

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
  //licence 1 - cleaned data from the Prototype UI
  {
    "name": "Lower Smith Road",
    "number": "00/22/001/08",
    "holder": "Irene Briton",
    "startDate": "1 June 1985",
    "effectiveDate": "1 June 1985",
    "endDate": "31 January 2020",
    "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
    "purpose": ["Spray irrigation","General machine washing"],
    "periodStart": "0401",
    "periodEnd": "1031",
    "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675343"],
    "monitoringStation": "Bourton Dickler",
    "conditions": ["General condition","Hands off flow condition (HOF)"],
    "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",
    "billingRegion": "Midlands",
    "expired": "true"
  },        
  //licence 2
  {
    "number": "03/28/60/0032",
    "name": "Glindenfold Lake",
    "holder": "Bottled Water Plc",
    "startDate": "1 June 1985",
    "endDate": "30 April 2022",
    "effectiveDate": "1 June 1985",
    "expired": "false",
    "billingRegion": "North West",
    "contacts": [{
      "type": "returns",
      "id": ['3'],
      "method": "letter",
      "addressID": "6"
    }],
  },
  //licence 3
  {
    "number": "03/28/61/029",
    "name": "Honeydew Crescent",
    "holder": "Big Smith Farms Ltd",
    "startDate": "1 April 2022",
    "endDate": "31 March 2034",
    "effectiveDate": "1 April 2022",
    "expired": "false",
    "billingRegion": "South West",
    "contacts": [{
      "type": "returns",
      "id": ['1'],
      "method": "letter",
      "addressID": "4"
    }],
  },
  //licence 4
  {
    "number": "03/28/60/0035",
    "name": "George Furrow",
    "holder": "Bottled Water Plc",
    "startDate": "1 June 1985",
    "endDate": "15 September 2022",
    "effectiveDate": "1 June 1985",
    "expired": "false",
    "billingRegion": "North East",
    "contacts": [{
      "type": "returns",
      "id": ['3'],
      "method": "letter",
      "addressID": "1"
    }],
  },
  //licence 5
  {
    "number": "03/28/60/0033",
    "name": "Dale Barrow",
    "holder": "Bottled Water Plc",
    "startDate": "1 September 1990",
    "endDate": "15 September 2022",
    "effectiveDate": "1 September 1990",
    "expired": "false",
    "billingRegion": "Anglian",
    "contacts": [{
      "type": "returns",
      "id": ['3'],
      "method": "letter",
      "addressID": "0"
    }],
  },
  //licence 6
  {
    "number": "03/28/60/0726",
    "name": "River House",
    "holder": "Robin Vithlhem-Smith",
    "startDate": "1 April 2015",
    "endDate": "1 March 2023",
    "effectiveDate": "1 April 2015",
    "expired": "false",
    "billingRegion": "Midlands",
    "contacts": [{
      "type": "returns",
      "id": ['8'],
      "method": "letter",
      "addressID": "6"
    }],
  },
  //licence 7
  {
    "number": "11/22/32/02",
    "name": "",
    "holder": "D.B. Beecham-Smith",
    "startDate": "1 October 2016",
    "endDate": "30 September 2025",
    "effectiveDate": "1 October 2016",
    "expired": "false",
    "billingRegion": "South West",
    "contacts": [{
      "type": "returns",
      "id": ['10'],
      "method": "letter",
      "addressID": "6"
    }],
  },
  //licence 8
  {
    "number": "03/28/61/033",
    "name": "Cherry Tree Farm",
    "holder": "Big Smith Farms Ltd",
    "startDate": "1 April 2025",
    "effectiveDate": "1 August 2025",
    "endDate": "31 March 2037",
    "expired": "false",
    "billingRegion": "Midlands",
    "contacts": [{
      "type": "returns",
      "id": ['1'],
      "method": "letter",
      "addressID": "6"
    }]
  }
  ]
  
  }
