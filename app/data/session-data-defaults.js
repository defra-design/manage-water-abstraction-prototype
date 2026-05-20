module.exports = {

    //Customer/Company
    "customers": [{
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
    "id" : 1,
    "licences": [
      //licence 1
      {
        "number": "00/22/001/02",
        "name": "Lower Smith Road",
        "holder": "Irene Briton",
        "startDate": "1 June 1985",
        "endDate": "31 January 2020",
        "effectiveDate": "1 June 1985",
        "expired": "true",
        "billingRegion": "Midlands",

        //contacts on the licence
        "contacts": [{
          "type": "returns",
          "id": ['6'],
          "method": "letter",
          "addressID": "6"
        }],

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation","General machine washing"],
        "absPeriod": ["1 April to 31 October"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675343"],
        "gridRefs": [ "SK675124", "SK675126" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

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

                                "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "1985-06-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],

///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [
                { 

                    "number": "00/22/001/02",
        "name": "Lower Smith Road",
        "holder": "Irene Briton",
        "startDate": "1 June 1985",
        "endDate": "31 January 2020",
        "effectiveDate": "1 June 1985",
        "expired": "true",
        "billingRegion": "Midlands",

                     //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation","General machine washing"],
        "absPeriod": ["1 April to 31 October"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675343"],
        "gridRefs": [ "SK675124", "SK675126" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

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

                                "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "1985-06-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],
                }
              ],

              "returnsRequirements":  [{
                "startDate":"20180401",
                "endDate":"",
                "reason":"Major change",
                "status":"active",
                "additionalSubmissionOptions": ["none"],
                "username":"username@defra.gov.uk",
                "note":"",
                "requirements":[{
                                "id":823188,
                                "returnsCycle":"summer",
                                "description":"River Swale - Helperby",
                                "frequencyCollected":"daily",
                                "frequency":"daily",
                                "purpose":["Spray irrigation - direct"],
                                "points":["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                "periodStart":"0401",
                                "periodEnd":"1031",
                                "timeLimit": "No",
                                "settings":["none"],
                                  }]
                    },
                    {
                    "startDate":"20150401",
                    "endDate":"20180331",
                    "reason":"New licence",
                    "additionalSubmissionOptions": ["none"],
                    "status":"active",
                    "username":"username@defra.gov.uk",
                    "note":"",
                    "requirements":[{
                                    "id":823188,
                                    "returnsCycle":"summer",
                                    "description":"River Swale - Helperby",
                                    "frequencyCollected":"daily",
                                    "frequency":"daily",
                                    "purpose":["Spray irrigation - direct"],
                                    "points":["At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                    "periodStart":"0401",
                                    "periodEnd":"1031",
                                    "timeLimit": "No",
                                    "settings":["none"],
                                      }]
                        }
                  ],


                  "returns": [{
                                "id":823188,
                                "status": "due",
                                "underQuery": false,
                                "due": "20221128",
                                "returnsCycle":"summer",
                                "description":"River Swale - Helperby",
                                "frequency": "daily",
                                "purpose":["Spray irrigation - direct"],
                                "points":["At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                "periodStart":"0401",
                                "periodEnd":"1031",
                                "returnsPeriodStart":"20220401",
                                "returnsPeriodEnd":"20221031",
                                "versions": [],
                              }
                              ],

        "chargeInformation": [{
            "chargeStart": "22 April 2019",
            "chargeEnd": "31 January 2020",
            "chargeStatus": "CHARGEABLE",
            "chargeBilledDate": "31 March 2021",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "michael.babb@madeup.com"
          },
          {
            "chargeStart": "1 April 2017",
            "chargeEnd": "21 April 2019",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "michael.babb@madeup.com"
          },
          {
            "chargeStart": "1 April 2017",
            "chargeEnd": "21 April 2019",
            "chargeStatus": "INVALID",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "michael.babb@madeup.com"
          }
        ],

        "agreements": [{
          "agreement": "Two-part tariff (S127)",
          "agreementStartDay": "1",
          "agreementStartMonth": "4",
          "agreementStartYear": "2020",
          "agreementSignedStartDay": "1",
          "agreementSignedStartMonth": "10",
          "agreementSignedStartYear": "2020",
          "agreementEnded": "true",
          "agreementEndDay": "5",
          "agreementEndMonth": "5",
          "agreementEndYear": "2023",
        }],

        "communications": [{
            "type": "resume - Water abstraction alert",
            "date": "20200605",
            "sent": "5 June 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something1@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "date": "20200417",
            "sent": "17 April 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "date": "20200330",
            "sent": "30 March 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
        ],

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

        //contacts on the licence
        "contacts": [{
          "type": "returns",
          "id": ['3'],
          "method": "letter",
           "addressID": "6"
        }],

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation", "General machine washing"],
        "absPeriod": ["1 April to 31 October", "1 November to 31 March"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675126"],
        "gridRefs": [ "SK 67540 12640" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

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

                                "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "1985-06-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],

///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [
                {         
        "number": "03/28/60/0032",
        "name": "Glindenfold Lake",
        "holder": "Bottled Water Plc",
        "startDate": "1 June 1985",
        "endDate": "30 April 2022",
        "effectiveDate": "1 June 1985",
        "expired": "false",
        "billingRegion": "North West",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation", "General machine washing"],
        "absPeriod": ["1 April to 31 October", "1 November to 31 March"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675126"],
        "gridRefs": [ "SK 67540 12640" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

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
               }
              ],

              "returnsRequirements":  [{
                "startDate":"20180401",
                "endDate":"",
                "reason":"Major change",
                "status":"active",
                "additionalSubmissionOptions": ["none"],
                "username":"username@defra.gov.uk",
                "note":"",
                "requirements":[{
                                "id":323188,
                                "returnsCycle":"summer",
                                "description":"River Swale - Helperby",
                                "frequencyCollected":"daily",
                                "frequency":"daily",
                                "purpose":["Spray irrigation - direct"],
                                "points":["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                "periodStart":"0401",
                                "periodEnd":"1031",
                                "timeLimit": "No",
                                "settings":["none"],
                                  }]
                    },
                    {
                    "startDate":"20150401",
                    "endDate":"20180331",
                    "reason":"New licence",
                    "additionalSubmissionOptions": ["none"],
                    "status":"active",
                    "username":"username@defra.gov.uk",
                    "note":"",
                    "requirements":[{
                                    "id":323188,
                                    "returnsCycle":"summer",
                                    "description":"River Swale - Helperby",
                                    "frequencyCollected":"monthly",
                                    "frequency":"monthly",
                                    "purpose":["Spray irrigation - direct"],
                                    "points":["At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                    "periodStart":"0401",
                                    "periodEnd":"0331",
                                    "timeLimit": "No",
                                    "settings":["none"],
                                      }]
                        }
                  ],


                  "returns": [{
                                "id":323188,
                                "status": "completed",
                                "underQuery": false,
                                "due": "20230428",
                                "returnsCycle":"summer",
                                "description":"River Swale - Helperby",
                                "frequency": "monthly",
                                "purpose":["Spray irrigation - direct"],
                                "points":["At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                "periodStart":"0401",
                                "periodEnd":"0331",
                                "returnsPeriodStart":"20220401",
                                "returnsPeriodEnd":"20230331",
                                "versions": [{"id":0,
                                  "submittedBy":"testuser@gov.uk",
                                  "submittedDate":"20230425",
                                  "dateReturnReceived":"20230425",
                                  "units":"cm3",
                                  "readingsOrVolumes":"volumes",
                                  "nilReturn":false,
                                  "notes" : "",
                                  "meterDetails":{"make":"Powerflow","serialNumber":"7777777", "x10": false, "startReading": "", "endReading": ""},
                                  "lines":[{
                                    "date": "20220401",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20220501",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20220601",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20220701",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20220801",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20220901",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "202201001",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20221101",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20221201",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20230101",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20230201",
                                    "reading": "",
                                    "volume": "10"
                                  },
                                  {
                                    "date": "20230301",
                                    "reading": "",
                                    "volume": "10"
                                  }
                                ],
                                  "monthTotals":[{"month":"April","year":"2022","total":"10"},{"month":"May","year":"2022","total":"10"},{"month":"June","year":"2022","total":"10"},{"month":"July","year":"2022","total":"10"},{"month":"August","year":"2022","total":"10"},{"month":"September","year":"2022","total":"10"},{"month":"October","year":"2022","total":"10"},{"month":"November","year":"2022","total":"10"},{"month":"December","year":"2022","total":"10"},{"month":"January","year":"2023","total":"10"},{"month":"February","year":"2023","total":"10"},{"month":"March","year":"2023","total":"10"}]
                                }],
                              }
                              ],

        "chargeInformation": [{
            "chargeStart": "22 April 2021",
            "chargeEnd": "",
            "chargeStatus": "NOT APPROVED",
            "chargeBilledDate": "31 March 2022",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "rose.conelly@madeup.com"

          },
          {
            "chargeStart": "1 April 2017",
            "chargeEnd": "21 April 2021",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2022",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "rose.conelly@madeup.com"
          }
        ],

        "agreements": [{
          "agreement": "Two-part tariff (S127)",
          "agreementStartDay": "1",
          "agreementStartMonth": "4",
          "agreementStartYear": "2020",
          "agreementSignedStartDay": "1",
          "agreementSignedStartMonth": "10",
          "agreementSignedStartYear": "2020",
          "agreementEnded": "true",
          "agreementEndDay": "5",
          "agreementEndMonth": "5",
          "agreementEndYear": "2023",
        }],

        "communications": [{
            "type": "resume - Water abstraction alert",
            "date": "20200605",
            "sent": "5 June 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "date": "20200417",
            "sent": "17 April 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something2@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "date": "20200330",
            "sent": "30 March 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },

        ],

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

        //contacts on the licence
        "contacts": [{
          "type": "returns",
          "id": ['1'],
          "method": "letter",
          "addressID": "4"
        }],

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 April to 31 March"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675126"],
        "gridRefs": [ "SK675124", "SK675126" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY)"],
                "periodStart": "0401",
                "periodEnd": "0331",
                "amount":"125",
                "timeLimit": "No"
              }],

                                "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "2022-04-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],

///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [
                { 
                          "number": "03/28/61/029",
        "name": "Honeydew Crescent",
        "holder": "Big Smith Farms Ltd",
        "startDate": "1 April 2022",
        "endDate": "31 March 2034",
        "effectiveDate": "1 April 2022",
        "expired": "false",
        "billingRegion": "South West",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 April to 31 March"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675126"],
        "gridRefs": [ "SK675124", "SK675126" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY)"],
                "periodStart": "0401",
                "periodEnd": "0331",
                "amount":"125",
                "timeLimit": "No"
              }],

                                "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "2022-04-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],
                   }
              ],

        "returnsRequirements":  [],

        "returns": [],

        "chargeInformation": [
          //newLicence
        ],

        "agreements": [
          //newLicence
        ],

        "communications": [
          //newLicence
        ],

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

        //contacts on the licence
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
        },],

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 April to 31 October"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SU 190683", "At National Grid Reference SU 190679", "At National Grid Reference SU 188678", "At National Grid Reference SU 187680"],
        "gridRefs": [ "SU 19025 68308", "SU 19047 67983", "SU 18810 67869", "SU 18776 68078" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SU 190683 (Marlborough)", "At National Grid Reference SU 190679 (Marlborough)", "At National Grid Reference SU 188678 (Marlborough)", "At National Grid Reference SU 187680 (Marlborough)"],
                "periodStart": "0401",
                "periodEnd": "1031",
                "amount":"125",
                "timeLimit": "No"
              }],

                                "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "1985-06-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],

///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [
                { 
                          "number": "03/28/60/0035",
        "name": "George Furrow",
        "holder": "Bottled Water Plc",
        "startDate": "1 June 1985",
        "endDate": "15 September 2022",
        "effectiveDate": "1 June 1985",
        "expired": "false",
        "billingRegion": "North East",

        //contacts on the licence
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
        },],

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 April to 31 October"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SU 190683", "At National Grid Reference SU 190679", "At National Grid Reference SU 188678", "At National Grid Reference SU 187680"],
        "gridRefs": [ "SU 19025 68308", "SU 19047 67983", "SU 18810 67869", "SU 18776 68078" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SU 190683 (Marlborough)", "At National Grid Reference SU 190679 (Marlborough)", "At National Grid Reference SU 188678 (Marlborough)", "At National Grid Reference SU 187680 (Marlborough)"],
                "periodStart": "0401",
                "periodEnd": "1031",
                "amount":"125",
                "timeLimit": "No"
              }],

                                "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "1985-06-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],
                 }
              ],

        "returnsRequirements":  [{"startDate":"19850601","endDate":"","createdDate":"20241018","reason":"New licence","additionalSubmissionOptions":["none"],"status":"approved","username":"username@defra.gov.uk","note":"","requirements":[{"id":808621,"description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.","title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.","frequency":"monthly","frequencyCollected":"monthly","settings":["none"],"purpose":["Spray irrigation - direct"],"points":["At National Grid Reference SU 190683 (Marlborough)","At National Grid Reference SU 190679 (Marlborough)","At National Grid Reference SU 188678 (Marlborough)","At National Grid Reference SU 187680 (Marlborough)"],"periodStart":"0401","periodEnd":"1031","timeLimit":"No","returnsCycle":"summer","amount":"125"}]}],

        "returns": [{"id":558734,
          "status":"due",
          "underQuery": false,
          "due":"20241128",
          "returnsCycle":"summer",
          "description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
          "title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
          "frequency":"monthly",
          "settings":["none"],
          "purpose":["Spray irrigation - direct"],
          "points":["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
          "periodStart":"0401",
          "periodEnd":"1031",
          "returnsPeriodStart":"20231101",
          "returnsPeriodEnd":"20241031",
          "versions":[]
          },{"id":558735,
            "status":"due",
            "underQuery": false,
            "due":"20241128",
            "returnsCycle":"summer",
            "description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
            "title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
            "frequency":"monthly",
            "settings":["none"],
            "purpose":["Spray irrigation - direct"],
            "points":["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
            "periodStart":"0401",
            "periodEnd":"1031",
            "returnsPeriodStart":"20231101",
            "returnsPeriodEnd":"20241031",
            "versions":[]
            }],

        "chargeInformation": [{
            "chargeStart": "22 April 2019",
            "chargeEnd": "",
            "chargeStatus": "CHARGEABLE",
            "chargeBilledDate": "31 March 2021",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "barry.crampton@madeup.com",
            "elements": [{
              "purpose": "Spray irrigation - direct",
              "description": "Borehole A",
              "abstractionStartDay": "1",
              "abstractionStartMonth": "4",
              "abstractionEndDay": "31",
              "abstractionEndMonth": "3",
              "billableQuantity": "7.89",
              "authorisedQuantity": "7.89",
              "timeLimit": "No",
              "source": "Unsupported",
              "season": "Winter and all year",
              "loss": "High",
              },
              {
              "purpose": "Spray irrigation - direct",
              "description": "Borehole B",
              "abstractionStartDay": "1",
              "abstractionStartMonth": "4",
              "abstractionEndDay": "31",
              "abstractionEndMonth": "3",
              "billableQuantity": "7.89",
              "authorisedQuantity": "7.89",
              "timeLimit": "No",
              "source": "Unsupported",
              "season": "Winter and all year",
              "loss": "High",
              },
            ],
          },
          {
            "chargeStart": "1 June 1985",
            "chargeEnd": "21 April 2019",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "barry.crampton@madeup.com",
            "elements": [{
              "purpose": "Spray irrigation - direct",
              "description": "Borehole A",
              "abstractionStartDay": "1",
              "abstractionStartMonth": "4",
              "abstractionEndDay": "31",
              "abstractionEndMonth": "3",
              "billableQuantity": "2.89",
              "authorisedQuantity": "2.89",
              "timeLimit": "No",
              "source": "Unsupported",
              "season": "Winter and all year",
              "loss": "High",
              }],
          }
        ],

        "agreements": [
          //No agreements
        ],

        "communications": [{
            "type": "resume - Water abstraction alert",
            "date": "20200605",
            "sent": "5 June 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "date": "20200417",
            "sent": "17 April 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "date": "20200330",
            "sent": "30 March 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },

        ],

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

        //contacts on the licence
        "contacts": [{
          "type": "returns",
          "id": ['3'],
          "method": "letter",
          "addressID": "0"
        }],

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 November to 31 March"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 674125", "At National Grid Reference SK 675126"],
        "gridRefs": [ "SK 67443 12554", "SK 67540 12640" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
                "periodStart": "1101",
                "periodEnd": "0331",
                "amount":"125",
                "timeLimit": "No"
              }],


                  "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "1990-09-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],

                  ///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [
                { 
                          "number": "03/28/60/0033",
        "name": "Dale Barrow",
        "holder": "Bottled Water Plc",
        "startDate": "1 September 1990",
        "endDate": "15 September 2022",
        "effectiveDate": "1 September 1990",
        "expired": "false",
        "billingRegion": "Anglian",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 November to 31 March"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 674125", "At National Grid Reference SK 675126"],
        "gridRefs": [ "SK 67443 12554", "SK 67540 12640" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
                "periodStart": "1101",
                "periodEnd": "0331",
                "amount":"125",
                "timeLimit": "No"
              }],
                 }
              ],

        "returnsRequirements":  [{
                                "startDate":"19900901",
                                "endDate":"",
                                "createdDate":"19900901",
                                "reason":"Error correction",
                                "additionalSubmissionOptions":["none"],
                                "status":"approved",
                                "username":"username@defra.gov.uk",
                                "note":"Corrected error in frequency",
                                  "requirements":[{
                                                "id":660257,
                                                "description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                                                "title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                                                "frequency":"monthly",
                                                "frequencyCollected":"monthly",
                                                "settings":["none"],
                                                "purpose":["Spray irrigation - direct"],
                                                "points":["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
                                                "periodStart":"1101",
                                                "periodEnd":"0331",
                                                "timeLimit":"No",
                                                "returnsCycle":"winter and all year",
                                                "amount":"125"}
                                                ]},
                              {"startDate":"19900901",
                                "endDate":"",
                                "createdDate":"20240906",
                                "reason":"New licence",
                                "additionalSubmissionOptions":["none"],
                                "status":"replaced",
                                "username":"username@defra.gov.uk",
                                "note":"",
                                  "requirements":[{
                                                "id":660257,
                                                "description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                                                "title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                                                "frequency":"daily",
                                                "frequencyCollected":"daily",
                                                "settings":["none"],
                                                "purpose":["Spray irrigation - direct"],
                                                "points":["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
                                                "periodStart":"1101",
                                                "periodEnd":"0331",
                                                "timeLimit":"No",
                                                "returnsCycle":
                                                "winter and all year",
                                                "amount":"125"
                                                }]
                              }],

        "returns": [{"id":660257,
                    "status":"due",
                    "underQuery": false,
                    "due":"20230728",
                    "returnsCycle":"winter and all year",
                    "description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                    "title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                    "frequency":"monthly",
                    "settings":["none"],
                    "purpose":["Spray irrigation - direct"],
                    "points":["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
                    "periodStart":"1101",
                    "periodEnd":"0331",
                    "returnsPeriodStart":"20221101",
                    "returnsPeriodEnd":"20230331",
                    "versions":[]
                    },
                    {"id":660257,
                    "status":"void",
                    "underQuery": false,
                    "due":"20230428",
                    "returnsCycle":"winter and all year",
                    "description":"Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                    "title":"Spray irrigation - direct, Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
                    "frequency":"daily","settings":["none"],"purpose":["Spray irrigation - direct"],
                    "points":["At National Grid Reference SK 674125 (RIVER SWALE - HELPERBY)",
                      "At National Grid Reference SK 675126 (RIVER SWALE - HELPERBY)"],
                      "periodStart":"1101",
                      "periodEnd":"0331",
                      "returnsPeriodStart":"20221101",
                      "returnsPeriodEnd":"20230331",
                      "versions":[{
                                  "id":0,
                                  "submittedBy":
                                  "testuser@gov.uk",
                                  "submittedDate":"20230406",
                                  "dateReturnReceived":"20230406",
                                  "notes":"",
                                  "units":"cm3",
                                  "readingsOrVolumes":"volumes",
                                  "nilReturn":false,
                                  "meterDetails":{"make":"","serialNumber":"","x10":"","startReading":"","endReading":""},
                                  "lines":[ {"date":"20221101","reading":"","volume":123456},{"date":"20221102","reading":"","volume":""},{"date":"20221103","reading":"","volume":""},{"date":"20221104","reading":"","volume":""},{"date":"20221105","reading":"","volume":""},{"date":"20221106","reading":"","volume":""},{"date":"20221107","reading":"","volume":""},{"date":"20221108","reading":"","volume":""},{"date":"20221109","reading":"","volume":""},{"date":"20221110","reading":"","volume":""},{"date":"20221111","reading":"","volume":""},{"date":"20221112","reading":"","volume":""},{"date":"20221113","reading":"","volume":""},{"date":"20221114","reading":"","volume":""},{"date":"20221115","reading":"","volume":""},{"date":"20221116","reading":"","volume":""},{"date":"20221117","reading":"","volume":""},{"date":"20221118","reading":"","volume":""},{"date":"20221119","reading":"","volume":""},{"date":"20221120","reading":"","volume":""},{"date":"20221121","reading":"","volume":""},{"date":"20221122","reading":"","volume":""},{"date":"20221123","reading":"","volume":""},{"date":"20221124","reading":"","volume":""},{"date":"20221125","reading":"","volume":""},{"date":"20221126","reading":"","volume":""},{"date":"20221127","reading":"","volume":""},{"date":"20221128","reading":"","volume":""},{"date":"20221129","reading":"","volume":""},{"date":"20221130","reading":"","volume":""},
                                            {"date":"20221201","reading":"","volume":123456},{"date":"20221202","reading":"","volume":""},{"date":"20221203","reading":"","volume":""},{"date":"20221204","reading":"","volume":""},{"date":"20221205","reading":"","volume":""},{"date":"20221206","reading":"","volume":""},{"date":"20221207","reading":"","volume":""},{"date":"20221208","reading":"","volume":""},{"date":"20221209","reading":"","volume":""},{"date":"20221210","reading":"","volume":""},{"date":"20221211","reading":"","volume":""},{"date":"20221212","reading":"","volume":""},{"date":"20221213","reading":"","volume":""},{"date":"20221214","reading":"","volume":""},{"date":"20221215","reading":"","volume":""},{"date":"20221216","reading":"","volume":""},{"date":"20221217","reading":"","volume":""},{"date":"20221218","reading":"","volume":""},{"date":"20221219","reading":"","volume":""},{"date":"20221220","reading":"","volume":""},{"date":"20221221","reading":"","volume":""},{"date":"20221222","reading":"","volume":""},{"date":"20221223","reading":"","volume":""},{"date":"20221224","reading":"","volume":""},{"date":"20221225","reading":"","volume":""},{"date":"20221226","reading":"","volume":""},{"date":"20221227","reading":"","volume":""},{"date":"20221228","reading":"","volume":""},{"date":"20221229","reading":"","volume":""},{"date":"20221230","reading":"","volume":""},{"date":"20221231","reading":"","volume":""},
                                            {"date":"20230101","reading":"","volume":123456},{"date":"20230102","reading":"","volume":""},{"date":"20230103","reading":"","volume":""},{"date":"20230104","reading":"","volume":""},{"date":"20230105","reading":"","volume":""},{"date":"20230106","reading":"","volume":""},{"date":"20230107","reading":"","volume":""},{"date":"20230108","reading":"","volume":""},{"date":"20230109","reading":"","volume":""},{"date":"20230110","reading":"","volume":""},{"date":"20230111","reading":"","volume":""},{"date":"20230112","reading":"","volume":""},{"date":"20230113","reading":"","volume":""},{"date":"20230114","reading":"","volume":""},{"date":"20230115","reading":"","volume":""},{"date":"20230116","reading":"","volume":""},{"date":"20230117","reading":"","volume":""},{"date":"20230118","reading":"","volume":""},{"date":"20230119","reading":"","volume":""},{"date":"20230120","reading":"","volume":""},{"date":"20230121","reading":"","volume":""},{"date":"20230122","reading":"","volume":""},{"date":"20230123","reading":"","volume":""},{"date":"20230124","reading":"","volume":""},{"date":"20230125","reading":"","volume":""},{"date":"20230126","reading":"","volume":""},{"date":"20230127","reading":"","volume":""},{"date":"20230128","reading":"","volume":""},{"date":"20230129","reading":"","volume":""},{"date":"20230130","reading":"","volume":""},{"date":"20230131","reading":"","volume":""},
                                            {"date":"20230201","reading":"","volume":123456},{"date":"20230202","reading":"","volume":""},{"date":"20230203","reading":"","volume":""},{"date":"20230204","reading":"","volume":""},{"date":"20230205","reading":"","volume":""},{"date":"20230206","reading":"","volume":""},{"date":"20230207","reading":"","volume":""},{"date":"20230208","reading":"","volume":""},{"date":"20230209","reading":"","volume":""},{"date":"20230210","reading":"","volume":""},{"date":"20230211","reading":"","volume":""},{"date":"20230212","reading":"","volume":""},{"date":"20230213","reading":"","volume":""},{"date":"20230214","reading":"","volume":""},{"date":"20230215","reading":"","volume":""},{"date":"20230216","reading":"","volume":""},{"date":"20230217","reading":"","volume":""},{"date":"20230218","reading":"","volume":""},{"date":"20230219","reading":"","volume":""},{"date":"20230220","reading":"","volume":""},{"date":"20230221","reading":"","volume":""},{"date":"20230222","reading":"","volume":""},{"date":"20230223","reading":"","volume":""},{"date":"20230224","reading":"","volume":""},{"date":"20230225","reading":"","volume":""},{"date":"20230226","reading":"","volume":""},{"date":"20230227","reading":"","volume":""},{"date":"20230228","reading":"","volume":""},
                                            {"date":"20230301","reading":"","volume":123456},{"date":"20230302","reading":"","volume":""},{"date":"20230303","reading":"","volume":""},{"date":"20230304","reading":"","volume":""},{"date":"20230305","reading":"","volume":""},{"date":"20230306","reading":"","volume":""},{"date":"20230307","reading":"","volume":""},{"date":"20230308","reading":"","volume":""},{"date":"20230309","reading":"","volume":""},{"date":"20230310","reading":"","volume":""},{"date":"20230311","reading":"","volume":""},{"date":"20230312","reading":"","volume":""},{"date":"20230313","reading":"","volume":""},{"date":"20230314","reading":"","volume":""},{"date":"20230315","reading":"","volume":""},{"date":"20230316","reading":"","volume":""},{"date":"20230317","reading":"","volume":""},{"date":"20230318","reading":"","volume":""},{"date":"20230319","reading":"","volume":""},{"date":"20230320","reading":"","volume":""},{"date":"20230321","reading":"","volume":""},{"date":"20230322","reading":"","volume":""},{"date":"20230323","reading":"","volume":""},{"date":"20230324","reading":"","volume":""},{"date":"20230325","reading":"","volume":""},{"date":"20230326","reading":"","volume":""},{"date":"20230327","reading":"","volume":""},{"date":"20230328","reading":"","volume":""},{"date":"20230329","reading":"","volume":""},{"date":"20230330","reading":"","volume":""},{"date":"20230331","reading":"","volume":""}
                                          ],
                                          "monthTotals":[
                                            {"month":"November","year":"2022","total":123456},
                                            {"month":"December","year":"2022","total":123456},
                                            {"month":"January","year":"2023","total":123456},
                                            {"month":"February","year":"2023","total":123456},
                                            {"month":"March","year":"2023","total":123456}
                                          ]
                                }]
                    }],

        "chargeInformation": [{
            "chargeStart": "22 April 2019",
            "chargeEnd": "",
            "chargeStatus": "CHANGES",
            "chargeBilledDate": "31 March 2021",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "barry.crampton@madeup.com",
            "changeRequest": "Please change the abstraction start month to April"
          },
          {
            "chargeStart": "1 September 1990",
            "chargeEnd": "21 April 2019",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "barry.crampton@madeup.com"
          }
        ],

        "agreements": [{
          "agreement": "Two-part tariff (S127)",
          "agreementStartDay": "1",
          "agreementStartMonth": "4",
          "agreementStartYear": "2020",
          "agreementSignedStartDay": "1",
          "agreementSignedStartMonth": "10",
          "agreementSignedStartYear": "2020",
          "agreementEnded": "true",
          "agreementEndDay": "5",
          "agreementEndMonth": "5",
          "agreementEndYear": "2023",
        }],

        "communications": [{
            "type": "resume - Water abstraction alert",
            "date": "20200605",
            "sent": "5 June 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "date": "20200417",
            "sent": "17 April 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "date": "20200330",
            "sent": "30 March 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },

        ],

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

          //contacts on the licence
          "contacts": [{
            "type": "returns",
            "id": ['8'],
            "method": "letter",
            "addressID": "6"
          }],

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 April to 31 October"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675126"],
        "gridRefs": [ "SK675124", "SK675126" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                "periodStart": "0401",
                "periodEnd": "1031",
                "amount":"125",
                "timeLimit": "No"
              }],

                                "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "2015-04-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],

                  ///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [
                { 
        "number": "03/28/60/0726",
        "name": "River House",
        "holder": "Robin Vithlhem-Smith",
        "startDate": "1 April 2015",
        "endDate": "1 March 2023",
        "effectiveDate": "1 April 2015",
        "expired": "false",
        "billingRegion": "Midlands",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 April to 31 October"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675126"],
        "gridRefs": [ "SK675124", "SK675126" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                "periodStart": "0401",
                "periodEnd": "1031",
                "amount":"125",
                "timeLimit": "No"
              }],
                 }
              ],

        "returnsRequirements":  [{
                                "startDate":"20180401",
                                "endDate":"",
                                "reason":"Major change",
                                "status":"active",
                                "additionalSubmissionOptions": ["none"],
                                "username":"username@defra.gov.uk",
                                "note":"",
                                "requirements":[{
                                                "id":823187,
                                                "returnsCycle":"summer",
                                                "description":"River Swale - Helperby",
                                                "frequencyCollected":"daily",
                                                "frequency":"daily",
                                                "purpose":["Spray irrigation - direct"],
                                                "points":["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)","At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                                "periodStart":"0401",
                                                "periodEnd":"1031",
                                                "timeLimit": "No",
                                                "settings":["none"],
                                                  }]
                                    },
                                    {
                                    "startDate":"20150401",
                                    "endDate":"20180331",
                                    "reason":"New licence",
                                    "additionalSubmissionOptions": ["none"],
                                    "status":"active",
                                    "username":"username@defra.gov.uk",
                                    "note":"",
                                    "requirements":[{
                                                    "id":823187,
                                                    "returnsCycle":"summer",
                                                    "description":"River Swale - Helperby",
                                                    "frequencyCollected":"daily",
                                                    "frequency":"daily",
                                                    "purpose":["Spray irrigation - direct"],
                                                    "points":["At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                                    "periodStart":"0401",
                                                    "periodEnd":"1031",
                                                    "timeLimit": "No",
                                                    "settings":["none"],
                                                      }]
                                        }
                                  ],


                                  "returns": [{
                                                "id":823187,
                                                "status": "due",
                                                "underQuery": false,
                                                "due": "20221128",
                                                "returnsCycle":"summer",
                                                "description":"River Swale - Helperby",
                                                "frequency": "daily",
                                                "purpose":["Spray irrigation - direct"],
                                                "points":["At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                                                "periodStart":"0401",
                                                "periodEnd":"1031",
                                                "returnsPeriodStart":"20220401",
                                                "returnsPeriodEnd":"20221031",
                                                "versions": [],
                                              }
                                              ],

        "chargeInformation": [{
            "chargeStart": "1 April 2018",
            "chargeEnd": "",
            "chargeStatus": "CHARGEABLE",
            "chargeBilledDate": "31 March 2021",
            "free": "false",
            "reasonNewCharge": "Major change",
            "setUpBy": "	jo.langton@madeup.com",
          },
          {
            "chargeStart": "1 April 2015",
            "chargeEnd": "31 March 2018",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "	jo.langton@madeup.com"
          }
        ],

        "agreements": [{
          "agreement": "Two-part tariff (S127)",
          "agreementStartDay": "1",
          "agreementStartMonth": "4",
          "agreementStartYear": "2020",
          "agreementSignedStartDay": "1",
          "agreementSignedStartMonth": "10",
          "agreementSignedStartYear": "2020",
          "agreementEnded": "true",
          "agreementEndDay": "5",
          "agreementEndMonth": "5",
          "agreementEndYear": "2023",
        }],

        "communications": [{
            "type": "resume - Water abstraction alert",
            "date": "20200605",
            "sent": "5 June 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "date": "20200417",
            "sent": "17 April 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "date": "20200330",
            "sent": "30 March 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },

        ],
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

        //contacts on the licence
        "contacts": [{
          "type": "returns",
          "id": ['10'],
          "method": "letter",
          "addressID": "6"
        }],

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 November to 31 March"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675343"],
        "gridRefs": [ "SK675124", "SK675126" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                "periodStart": "1101",
                "periodEnd": "0331",
                "amount":"125",
              }],

                  "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "2016-10-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],


                  ///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [
                { 
                          "number": "11/22/32/02",
        "name": "",
        "holder": "D.B. Beecham-Smith",
        "startDate": "1 October 2016",
        "endDate": "30 September 2025",
        "effectiveDate": "1 October 2016",
        "expired": "false",
        "billingRegion": "South West",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of Mercia Mudstone at Anarea, Atown.",
        "purpose": ["Spray irrigation"],
        "absPeriod": ["1 November to 31 March"],
        "means": ["Unspecified pump"],

        "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675343"],
        "gridRefs": [ "SK675124", "SK675126" ],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "900 cubic metres per hour~1,250 cubic metres per day~1,250,000 cubic metres per year",

        "use": [{
                "purpose": "Spray irrigation - direct",
                "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY)", "At National Grid Reference SK 675 343 (RIVER SWALE - HELPERBY)"],
                "periodStart": "1101",
                "periodEnd": "0331",
                "amount":"125",
              }],
                 }
              ],

        "returnsRequirements":  [],

        "returns": [],

        "chargeInformation": [{
            "chargeStart": "22 April 2019",
            "chargeEnd": "",
            "chargeStatus": "CHARGEABLE",
            "chargeBilledDate": "31 March 2021",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "	jo.langton@madeup.com"
          },
          {
            "chargeStart": "1 April 2017",
            "chargeEnd": "21 April 2019",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "	jo.langton@madeup.com"
          },
          {
            "chargeStart": "1 April 2017",
            "chargeEnd": "21 April 2019",
            "chargeStatus": "INVALID",
            "chargeBilledDate": "31 March 2020",
            "free": "false",
            "reasonNewCharge": "Formal variation",
            "setUpBy": "	jo.langton@madeup.com"
          },
          {
            "chargeStart": "1 October 2016",
            "chargeEnd": "31 March 2019",
            "chargeStatus": "REPLACED",
            "chargeBilledDate": "31 March 2019",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "	jo.langton@madeup.com"
          },
          {
            "chargeStart": "1 October 2016",
            "chargeEnd": "31 March 2019",
            "chargeStatus": "INVALID",
            "chargeBilledDate": "31 March 2019",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "	jo.langton@madeup.com"
          }
        ],

        "agreements": [{
          "agreement": "Two-part tariff (S127)",
          "agreementStartDay": "1",
          "agreementStartMonth": "4",
          "agreementStartYear": "2020",
          "agreementSignedStartDay": "1",
          "agreementSignedStartMonth": "10",
          "agreementSignedStartYear": "2020",
          "agreementEnded": "true",
          "agreementEndDay": "5",
          "agreementEndMonth": "5",
          "agreementEndYear": "2023",
        }],

        "communications": [{
            "type": "resume - Water abstraction alert",
            "date": "20200605",
            "sent": "5 June 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "stop - Water abstraction alert",
            "date": "20200417",
            "sent": "17 April 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },
          {
            "type": "warning - Water abstraction alert",
            "date": "20200330",
            "sent": "30 March 2020",
            "sentBy": "tim.teace@defra.gov.uk",
            "method": "letter",
            "watercourse": "Hull",
            "gaugingStation": "Helmspholme",
            "flowThreshold": "45.5",
            "contactEmail": "something@somewhere.co.uk",
          },

        ],

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

        //contacts on the licence
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
        }],

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of chalk at An-area, A-town.",
        "purpose": ["Spray irrigation - Storage","General Farming & Domestic","Spray irrigation - Direct"],
        "absPeriod": ["1 April to 31 March"],

        "absPoints": ["At National Grid Reference SK 675124"],
        "gridRefs": [ "SK675124" ],
        "means": ["Unspecified pump"],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "Borehole A~4 cubic metres per hour~6 cubic metres per day~2,890 cubic metres per year~~Borehole B~25 cubic metres per hour~230 cubic metres per day~51,830 cubic metres per year",

        "use": [    {
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
                    },
            ],

                              "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "major variation",
                    "reasonText":  "Major variation increase to spray irrigation storage volume on SK 675124 and SK 675126",
                    "changedDate": "31 March 2025",
                    "startDate": "2025-04-01",
                    "endDate": "",
                    "changeType": "licence issued",
                    "changedBy": "admin@gov.uk",
                  },{
                    "type": "Licence version",
                    "reasonCreated": "minor variation",
                    "reasonText":  "Minor variation time limited increase for reservoir storage for subsequent spray irrigation volume on SK 675124 and SK 675126",
                    "changedDate": "31 March 2019",
                    "startDate": "2019-04-01",
                    "endDate": "2025-03-31",
                    "changeType": "no licence issued",
                    "changedBy": "admin@gov.uk",
                  },{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2017",
                    "startDate": "2017-04-01",
                    "changeType": "licence issued",
                    "endDate": "2019-03-31",
                    "changedBy": "admin@gov.uk",
                  }],

                                ///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [ {
        "number": "03/28/61/033",
        "name": "Cherry Tree Farm",
        "holder": "Big Smith Farms Ltd",
        "startDate": "1 April 2025",
        "effectiveDate": "1 August 2025",
        "endDate": "31 March 2037",
        "expired": "false",
        "billingRegion": "Midlands",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of chalk at An-area, A-town.",
        "purpose": ["Spray irrigation - Storage","General Farming & Domestic","Spray irrigation - Direct"],
        "absPeriod": ["1 April to 31 March"],

        "absPoints": ["At National Grid Reference SK 675124"],
        "gridRefs": [ "SK675124" ],
        "means": ["Unspecified pump"],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "Borehole A~4 cubic metres per hour~6 cubic metres per day~2,890 cubic metres per year~~Borehole B~25 cubic metres per hour~230 cubic metres per day~51,830 cubic metres per year",

        "use": [    {
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
                    },
                  ],
                },
                { 
                          "number": "03/28/61/033",
        "name": "Cherry Tree Farm",
        "holder": "Big Smith Farms Ltd",
        "startDate": "1 April 2019",
        "effectiveDate": "1 August 2019",
        "endDate": "31 March 2034",
        "expired": "false",
        "billingRegion": "Midlands",

        //licence Settings
        "multipleUpload": "no",
        "confidentiality": "public",

        "source": "Underground strata comprising of chalk at An-area, A-town.",
        "purpose": ["Trickle Irrigation - Storage","General Farming & Domestic","Spray irrigation - Direct"],
        "absPeriod": ["1 April to 31 March"],

        "absPoints": ["At National Grid Reference SK 675124"],
        "gridRefs": [ "SK675124" ],
        "means": ["Unspecified pump"],
        "absConditions": [
          {"type" : "general condition",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "",
           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
         },
         {"type" : "hands off flow condition (HOF)",
           "purposeIndex" : ["0"],
           "pointsIndex" : ["0"],
           "param1" : "Bourton Dickler",
           "param2" : "180Ml/d",
           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
         }
       ],
        "absQuantities": "Borehole A~4 cubic metres per hour~6 cubic metres per day~2,890 cubic metres per year~~Borehole B~25 cubic metres per hour~230 cubic metres per day~51,830 cubic metres per year",

        "use": [    {
                      "purpose": "Trickle Irrigation - Storage",
                      "points": ["At National Grid Reference SK 675 126 (Cherry tree farm - BOREHOLE B)"],
                      "periodStart": "0401",
                      "periodEnd": "0331",
                      "amount":"51,830",
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
                    },
            ],},
            {

                  //Changed
                  "changed": true,
                  "reasonCreated": "New Licence",
                  "reasonText":  "",
                  "changedDate": "31 July 2019",
                  "changedBy": "admin@gov.uk",

                  "number": "03/28/61/033",
                  "name": "Cherry Tree Farm",
                  "holder": "Big Smith Farms Ltd",
                  "startDate": "1 April 2017",
                  "effectiveDate": "1 April 2017",
                  "endDate": "31 July 2019",
                  "expired": "false",

                  //licence Settings
                  "multipleUpload": "no",
                  "confidentiality": "public",

                  "source": "Underground strata comprising of chalk at An-area, A-town.",
                  "purpose": ["Trickle Irrigation - Storage","General Farming & Domestic","Spray irrigation - Direct"],
                  "absPeriod": ["1 April to 31 March"],

                  "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675126"],
                  "means": ["Unspecified pump"],
                  "absConditions": [
                    {"type" : "general condition",
                     "purposeIndex" : ["0"],
                     "pointsIndex" : ["0"],
                     "param1" : "",
                     "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
                   },
                   {"type" : "hands off flow condition (HOF)",
                     "purposeIndex" : ["0"],
                     "pointsIndex" : ["0"],
                     "param1" : "Bourton Dickler",
                     "param2" : "180Ml/d",
                     "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
                   }
                 ],
                  "absQuantities": "Borehole A~5 cubic metres per hour~10 cubic metres per day~3,250 cubic metres per year~~Borehole B~30 cubic metres per hour~280 cubic metres per day~72,830 cubic metres per year",

                  "use": [    {
                                "purpose": "Trickle Irrigation - Storage",
                                "points": ["At National Grid Reference SK 675 126 (Cherry tree farm - BOREHOLE B)"],
                                "periodStart": "0401",
                                "periodEnd": "0331",
                                "amount":"51,830",
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
                              },
                      ],
              },

            ],


            //return requirements
            "returnsRequirements":  [{
                                    "startDate":"20190401",
                                    "endDate":"",
                                    "reason":"New licence",
                                    "status":"approved",
                                    "additionalSubmissionOptions": ["multiple upload"],
                                    "username":"username@defra.gov.uk",
                                    "note":"",
                                    "requirements":[{
                                                    "id":823187,
                                                    "returnsCycle":"winter and all year",
                                                    "description":"Cherry tree farm - BOREHOLE A",
                                                    "frequencyCollected":"monthly",
                                                    "frequency":"monthly",
                                                    "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                                                    "points":["At National Grid Reference SK 675 124 (Cherry tree farm - BOREHOLE A)"],
                                                    "periodStart":"0401",
                                                    "periodEnd":"0331",
                                                    "timeLimit": "No",
                                                    "settings":["none"],
                                                      }]
                                        }
                                      ],

              "returns": [
                          {
                            "id":823187,
                            "status": "due",
                            "underQuery": false,
                            "due": "20211128",
                            "returnsCycle":"winter and all year",
                            "description":"Cherry tree farm - BOREHOLE A",
                            "frequency": "monthly",
                            "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                            "points":["At National Grid Reference SK 675 124 (Cherry tree farm - BOREHOLE A)"],
                            "periodStart":"0401",
                            "periodEnd":"1031",
                            "returnsPeriodStart":"20210401",
                            "returnsPeriodEnd":"20211031",
                            "versions": [],
                          },
                          {
                            "id":823187,
                            "status": "due",
                            "underQuery": false,
                            "due": "20201128",
                            "returnsCycle":"winter and all year",
                            "description":"Cherry tree farm - BOREHOLE A",
                            "frequency": "monthly",
                            "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                            "points":["At National Grid Reference SK 675 124 (Cherry tree farm - BOREHOLE A)"],
                            "periodStart":"0401",
                            "periodEnd":"1031",
                            "returnsPeriodStart":"20200401",
                            "returnsPeriodEnd":"20201031",
                            "versions": [],
                          }
                          ],

        "chargeInformation": [{
            "chargeStart": "1 April 2019",
            "chargeEnd": "",
            "chargeStatus": "CHARGEABLE",
            "chargeBilledDate": "31 March 2021",
            "free": "false",
            "reasonNewCharge": "New licence",
            "setUpBy": "	jo.langton@madeup.com",
            "elements": [{
                          "purpose": "Spray irrigation - direct",
                          "description": "Borehole A",
                          "abstractionStartDay": "1",
                          "abstractionStartMonth": "4",
                          "abstractionEndDay": "31",
                          "abstractionEndMonth": "3",
                          "billableQuantity": "2.89",
                          "authorisedQuantity": "2.89",
                          "timeLimit": "No",
                          "source": "Unsupported",
                          "season": "Winter and all year",
                          "loss": "High",
                          }
            ],
          }
        ],

        "agreements": [],

        "communications": [
          //newLicence
        ],

      },
            //licence 9 //impoundment
            {
              "number": "11/22/32/03",
              "name": "",
              "holder": "Bottled Water Plc",
              "startDate": "1 April 2000",
              "effectiveDate": "1 April 2000",
              "endDate": "",
              "expired": "false",
              "billingRegion": "North West",

              //contacts on the licence
              "contacts": [{
                "type": "returns",
                "id": ['3'],
                "method": "letter",
                "addressID": "6"
              }],


              //licence Settings
              "multipleUpload": "no",
              "confidentiality": "public",

              "source": "Surface water",
              "purpose": ["Impounding (for any purpose excluding impounding for HEP)"],
              "absPeriod": ["1 January to 31 December"],


              "absPoints": ["At National Grid Reference SD 728565", "At National Grid Reference SD 717547", "At National Grid Reference SD 719545", "At National Grid Reference SD 736560",],
              "gridRefs": [ 'SD 72890 56537', 'SD 71770 54730', 'SD 71966 54510', 'SD 73652 56049' ],
              "means": ["Fixed weir"],
              "absConditions": [{"type" : "compensation release flow",
                                 "purposeIndex" : ["0"],
                                 "pointsIndex" : ["0"],
                                 "param1" : "",
                                 "text" : "The Licence Holder shall make a continuous release of compensation water of not less than 12.96 megalitres per day from the Helperby reservoir to the River Swale as National Grid Reference SE 437 684."
                                },
                                {"type" : "general condition",
                                 "purposeIndex" : ["0"],
                                 "pointsIndex" : ["0"],
                                 "param1" : "",
                                 "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
                                }
                        ],
              "absQuantities": "",

              "use": [{
                      "purpose": "Impounding (for any purpose excluding impounding for HEP)",
                      "points": ["At National Grid Reference SD 728565, SD 717547, SD 719545 and SD 736560 (STOCKS RESERVOIR - LANCASTER)"],
                      "periodStart": "0101",
                      "periodEnd": "1231",
                      "amount":"",
                      "timeLimit": "No"
                    }],

                                      "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "2000-04-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],

                                              ///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [
                {              
                  "number": "11/22/32/03",
              "name": "",
              "holder": "Bottled Water Plc",
              "startDate": "1 April 2000",
              "effectiveDate": "1 April 2000",
              "endDate": "",
              "expired": "false",
              "billingRegion": "North West",

              //contacts on the licence
              "contacts": [{
                "type": "returns",
                "id": ['3'],
                "method": "letter",
                "addressID": "6"
              }],


              //licence Settings
              "multipleUpload": "no",
              "confidentiality": "public",

              "source": "Surface water",
              "purpose": ["Impounding (for any purpose excluding impounding for HEP)"],
              "absPeriod": ["1 January to 31 December"],


              "absPoints": ["At National Grid Reference SD 728565", "At National Grid Reference SD 717547", "At National Grid Reference SD 719545", "At National Grid Reference SD 736560",],
              "gridRefs": [ 'SD 72890 56537', 'SD 71770 54730', 'SD 71966 54510', 'SD 73652 56049' ],
              "means": ["Fixed weir"],
              "absConditions": [{"type" : "compensation release flow",
                                 "purposeIndex" : ["0"],
                                 "pointsIndex" : ["0"],
                                 "param1" : "",
                                 "text" : "The Licence Holder shall make a continuous release of compensation water of not less than 12.96 megalitres per day from the Helperby reservoir to the River Swale as National Grid Reference SE 437 684."
                                },
                                {"type" : "general condition",
                                 "purposeIndex" : ["0"],
                                 "pointsIndex" : ["0"],
                                 "param1" : "",
                                 "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
                                }
                        ],
              "absQuantities": "",

              "use": [{
                      "purpose": "Impounding (for any purpose excluding impounding for HEP)",
                      "points": ["At National Grid Reference SD 728565, SD 717547, SD 719545 and SD 736560 (STOCKS RESERVOIR - LANCASTER)"],
                      "periodStart": "0101",
                      "periodEnd": "1231",
                      "amount":"",
                      "timeLimit": "No"
                    }],}
               ],

              "returnsRequirements":  [],

              "returns": [],

              "chargeInformation": [],

              "agreements": [],

              "communications": [],

            },
            //licence 10
            {
              "number": "03/28/61/044",
              "name": "Apple Tree Farm - Portsmouth",
              "holder": "Big Smith Farms Ltd",
              "startDate": "1 April 2023",
              "effectiveDate": "1 April 2023",
              "endDate": "31 March 2034",
              "expired": "false",
              "billingRegion": "South East",

                //contacts on the licence
                "contacts": [{
                  "type": "returns",
                  "id": ['1'],
                  "method": "letter",
                  "addressID": "6"
                }],

              //licence Settings
              "multipleUpload": "no",
              "confidentiality": "public",

              "source": "Underground strata comprising of chalk at Apple Tree Farm.",
              "purpose": ["Trickle Irrigation - Storage","General Farming & Domestic", "Trickle irrigation - Direct"],
              "absPeriod": ["1 April to 31 March"],

              "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675 126 "],
              "gridRefs": [ "SK675124", "SK675126" ],
              "means": ["Unspecified pump"],
              "absConditions": [
                {"type" : "general condition",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "",
                 "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
               },
               {"type" : "hands off flow condition (HOF)",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "Bourton Dickler",
                 "param2" : "180Ml/d",
                 "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
               }
             ],
              "absQuantities": "Borehole A~4 cubic metres per hour~6 cubic metres per day~2,890 cubic metres per year~~Borehole B~25 cubic metres per hour~230 cubic metres per day~51,830 cubic metres per year",

              "use": [    {
                            "purpose": "Trickle irrigation - storage",
                            "points": ["At National Grid Reference SK 675 126 (Cherry tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"51,830",
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
                            "purpose": "Trickle irrigation - direct",
                            "points": ["At National Grid Reference SK 675 126 (Cherry tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"51,830",
                            "timeLimit": "No"
                          }
                  ],


                                    "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "2022-04-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],

                                                              ///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [
                {  
                                "number": "03/28/61/044",
              "name": "Apple Tree Farm ",
              "holder": "Big Smith Farms Ltd",
              "startDate": "1 April 2023",
              "effectiveDate": "1 April 2023",
              "endDate": "31 March 2034",
              "expired": "false",
              "billingRegion": "South East",

                //contacts on the licence
                "contacts": [{
                  "type": "returns",
                  "id": ['1'],
                  "method": "letter",
                  "addressID": "6"
                }],

              //licence Settings
              "multipleUpload": "no",
              "confidentiality": "public",

              "source": "Underground strata comprising of chalk at Apple Tree Farm.",
              "purpose": ["Trickle Irrigation - Storage","General Farming & Domestic", "Trickle irrigation - Direct"],
              "absPeriod": ["1 April to 31 March"],

              "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675 126 "],
              "gridRefs": [ "SK675124", "SK675126" ],
              "means": ["Unspecified pump"],
              "absConditions": [
                {"type" : "general condition",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "",
                 "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SE 437 680 and SE 437 692."
               },
               {"type" : "hands off flow condition (HOF)",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "Bourton Dickler",
                 "param2" : "180Ml/d",
                 "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
               }
             ],
              "absQuantities": "Borehole A~4 cubic metres per hour~6 cubic metres per day~2,890 cubic metres per year~~Borehole B~25 cubic metres per hour~230 cubic metres per day~51,830 cubic metres per year",

              "use": [    {
                            "purpose": "Trickle irrigation - storage",
                            "points": ["At National Grid Reference SK 675 126 (Cherry tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"51,830",
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
                            "purpose": "Trickle irrigation - direct",
                            "points": ["At National Grid Reference SK 675 126 (Cherry tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"51,830",
                            "timeLimit": "No"
                          }
                  ],
                }
              ],


                  //return requirements
                  "returnsRequirements":  [],

                    "returns": [],

              "chargeInformation": [],

              "agreements": [],

              "communications": [],

            },
            //licence 11
            {
              "number": "03/28/61/055",
              "name": "Pear Tree Farm - Preston",
              "holder": "Big Smith Farms Ltd",
              "startDate": "1 April 2023", //the start date of the version
              "effectiveDate": "1 April 2019", //the start date of the licence that was issued. licence Sig date in NALD. This can be different if the version is an increment.
              "endDate": "31 March 2035",
              "expired": "false",
              "billingRegion": "Midlands",

              //contacts on the licence
              "contacts": [{
                "type": "returns",
                "id": ['1'],
                "method": "letter",
                "addressID": "6"
              },
              {"type": "returns",
                "id": ['1'],
                "method": "letter",
                "addressID": "6"
              }],

              //licence Settings
              "multipleUpload": "no",
              "confidentiality": "public",

              "source": "Underground strata comprising of chalk at An-area, A-town.",
              "purpose": ["Spray irrigation - Direct", "General Farming & Domestic","Spray irrigation - Storage"],
              "absPeriod": ["1 April to 31 March"],

              "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675 126"],
              "gridRefs": [ "SK675124", "SK675126" ],
              "means": ["Unspecified pump"],
              "absConditions": [
                {"type" : "general condition",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "",
                 "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SK 675124 and SK 675126."
               },
               {"type" : "hands off flow condition (HOF)",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "Bourton Dickler",
                 "param2" : "180Ml/d",
                 "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
               }
             ],
              "absQuantities": "Up to and including 31 March 2028~40 cubic metres per hour~450 cubic metres per day~89,000 cubic metres per year~~From 1 April 2028~25 cubic metres per hour~230 cubic metres per day~51,830 cubic metres per year",

              "use": [     {
                              "purpose": "Spray irrigation - direct",
                              "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                              "periodStart": "0401",
                              "periodEnd": "0331",
                              "amount":"89,000",
                              "timeLimit": "From 1 April 2023 to 31 March 2028"
                          },
                          {
                            "purpose": "General Farming & Domestic",
                            "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"89,000",
                            "timeLimit": "From 1 April 2023 to 31 March 2028"
                          },
                          {
                            "purpose": "Spray Irrigation - Storage",
                            "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)","At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"89,000",
                            "timeLimit": "From 1 April 2023 to 31 March 2028"
                          }, {
                            "purpose": "Spray irrigation - direct",
                            "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"51,830",
                            "timeLimit": "No"
                        },
                        {
                          "purpose": "General Farming & Domestic",
                          "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                          "periodStart": "0401",
                          "periodEnd": "0331",
                          "amount":"51,830",
                          "timeLimit": "No"
                        },

                  ],

                  "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "Change to return requirements April 2008 (Manual update)",
                    "reasonText":  "Minor variation time limited increase for reservoir storage for subsequent spray irrigation volume on SK 675124 and SK 675126",
                    "changedDate": "31 March 2023",
                    "startDate": "2023-04-01",
                    "endDate": "",
                    "changeType": "no licence issued",
                     "applicationNumber": "",
                    "changedBy": "admin@gov.uk",
                  },{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "2019-04-01",
                    "changeType": "licence issued",
                    "applicationNumber": "9238123",
                    "endDate": "2023-03-31",
                    "changedBy": "admin@gov.uk",
                  }],

                                                              ///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [
                {  

                                "number": "03/28/61/055",
              "name": "Pear Tree Farm",
              "holder": "Big Smith Farms Ltd",
              "startDate": "1 April 2023",
              "effectiveDate": "1 April 2019",
              "applicationNumber": "",
              "endDate": "31 March 2035",
              "expired": "false",
              "billingRegion": "Midlands",



              //licence Settings
              "multipleUpload": "no",
              "confidentiality": "public",

              "source": "Underground strata comprising of chalk at An-area, A-town.",
              "purpose": ["Spray irrigation - Direct", "General Farming & Domestic","Spray irrigation - Storage"],
              "absPeriod": ["1 April to 31 March"],

              "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675 126"],
              "gridRefs": [ "SK675124", "SK675126" ],
              "means": ["Unspecified pump"],
              "absConditions": [
                {"type" : "general condition",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "",
                 "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SK 675124 and SK 675126."
               },
               {"type" : "hands off flow condition (HOF)",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "Bourton Dickler",
                 "param2" : "180Ml/d",
                 "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
               }
             ],
              "absQuantities": "Up to and including 31 March 2028~40 cubic metres per hour~450 cubic metres per day~89,000 cubic metres per year~~From 1 April 2028~25 cubic metres per hour~230 cubic metres per day~51,830 cubic metres per year",

              "use": [     {
                              "purpose": "Spray irrigation - direct",
                              "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                              "periodStart": "0401",
                              "periodEnd": "0331",
                              "amount":"89,000",
                              "timeLimit": "From 1 April 2023 to 31 March 2028"
                          },
                          {
                            "purpose": "General Farming & Domestic",
                            "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"89,000",
                            "timeLimit": "From 1 April 2023 to 31 March 2028"
                          },
                          {
                            "purpose": "Spray Irrigation - Storage",
                            "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)","At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"89,000",
                            "timeLimit": "From 1 April 2023 to 31 March 2028"
                          }, {
                            "purpose": "Spray irrigation - direct",
                            "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"51,830",
                            "timeLimit": "No"
                        },
                        {
                          "purpose": "General Farming & Domestic",
                          "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                          "periodStart": "0401",
                          "periodEnd": "0331",
                          "amount":"51,830",
                          "timeLimit": "No"
                        },

                  ],},
                  {

                        //Changed
                        "changed": true,
                        "reasonCreated": "New Licence",
                        "reasonText":  "",
                        "changedDate": "31 March 2023",
                        "changedBy": "admin@gov.uk",

                        "number": "03/28/61/055",
                        "name": "Pear Tree Farm",
                        "holder": "Big Smith Farms Ltd",
                        "startDate": "1 April 2019",
                        "effectiveDate": "1 April 2019",
                        "applicationNumber": "9238123",
                        "endDate": "31 March 2023",
                        "expired": "false",

                        //licence Settings
                        "multipleUpload": "no",
                        "confidentiality": "public",

                        "source": "Underground strata comprising of chalk at An-area, A-town.",
                        "purpose": ["General Farming & Domestic","Spray irrigation - Direct"],
                        "absPeriod": ["1 April to 31 March"],

                        "absPoints": ["At National Grid Reference SK 675124"],
                        "means": ["Unspecified pump"],
                        "absConditions": [
                          {"type" : "general condition",
                           "purposeIndex" : ["0"],
                           "pointsIndex" : ["0"],
                           "param1" : "",
                           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SK 675124."
                         },
                         {"type" : "hands off flow condition (HOF)",
                           "purposeIndex" : ["0"],
                           "pointsIndex" : ["0"],
                           "param1" : "Bourton Dickler",
                           "param2" : "180Ml/d",
                           "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 180Ml/d."
                         }
                       ],
                        "absQuantities": "Borehole A~5 cubic metres per hour~10 cubic metres per day~3,250 cubic metres per year~~Borehole B~30 cubic metres per hour~280 cubic metres per day~72,830 cubic metres per year",

                        "use": [
                                    {
                                      "purpose": "General Farming & Domestic",
                                      "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                      "periodStart": "0401",
                                      "periodEnd": "0331",
                                      "amount":"51,830",
                                      "timeLimit": "No"
                                    },
                                    {
                                      "purpose": "Spray irrigation - direct",
                                      "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                      "periodStart": "0401",
                                      "periodEnd": "0331",
                                      "amount":"51,830",
                                      "timeLimit": "No"
                                    },
                            ],
                    }
                  ],


                  //return requirements
                  "returnsRequirements":  [{
                                          "startDate":"20190401",
                                          "endDate":"",
                                          "createdDate":"20190404",
                                          "reason":"New licence",
                                          "status":"approved",
                                          "additionalSubmissionOptions": ["none"],
                                          "username":"username@defra.gov.uk",
                                          "note":"",
                                          "requirements":[{
                                                          "id":323188,
                                                          "returnsCycle":"winter and all year",
                                                          "description":"Pear tree farm - BOREHOLE A and B",
                                                          "frequencyCollected":"monthly",
                                                          "frequency":"monthly",
                                                          "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                                                          "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                                          "periodStart":"0401",
                                                          "periodEnd":"0331",
                                                          "timeLimit": "No",
                                                          "settings":["none"],
                                                            }]
                                              }
                                            ],

                    "returns": [
                                {
                                  "id":323188,
                                  "status": "complete",
                                  "underQuery": false,
                                  "due": "20240428",
                                  "returnsCycle":"winter and all year",
                                  "description":"Pear tree farm - BOREHOLE A and B",
                                  "frequency": "daily",
                                  "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                                  "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                  "periodStart":"0401",
                                  "periodEnd":"1031",
                                  "returnsPeriodStart":"20240401",
                                  "returnsPeriodEnd":"20241031",
                                  "versions": [{"id":0,
                                                "submittedBy":"testuser@gov.uk",
                                                "submittedDate":"20240829",
                                                "dateReturnReceived":"20240829",
                                                "units":"cm3",
                                                "readingsOrVolumes":"readings",
                                                "nilReturn":false,
                                                "notes" : "",
                                                "meterDetails":{"make":"Powerflow","serialNumber":"7777777", "x10": false, "startReading": "118454", "endReading": "1235920"},
                                                "lines":[{
                                                  "date": "20240401",
                                                  "reading": "123456",
                                                  "volume": "5002"
                                                },
                                                {
                                                  "date": "20240402",
                                                  "reading": "128458",
                                                  "volume": "5022"
                                                },
                                                {
                                                  "date": "20240403",
                                                  "reading": "133480",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240404",
                                                  "reading": "138493",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240405",
                                                  "reading": "143506",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240406",
                                                  "reading": "148519",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240407",
                                                  "reading": "153532",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240408",
                                                  "reading": "158545",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240409",
                                                  "reading": "163558",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240410",
                                                  "reading": "168571",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240411",
                                                  "reading": "173584",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240412",
                                                  "reading": "178597",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240413",
                                                  "reading": "183610",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240414",
                                                  "reading": "188623",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240415",
                                                  "reading": "193636",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240416",
                                                  "reading": "198649",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240417",
                                                  "reading": "203662",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240418",
                                                  "reading": "208675",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240419",
                                                  "reading": "213688",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240420",
                                                  "reading": "218701",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240421",
                                                  "reading": "223714",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240422",
                                                  "reading": "228727",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240423",
                                                  "reading": "233740",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240424",
                                                  "reading": "238753",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240425",
                                                  "reading": "243766",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240426",
                                                  "reading": "248779",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240427",
                                                  "reading": "253792",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240428",
                                                  "reading": "258805",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240429",
                                                  "reading": "263818",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240430",
                                                  "reading": "268831",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240501",
                                                  "reading": "344016",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240502",
                                                  "reading": "349029",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240503",
                                                  "reading": "354042",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240504",
                                                  "reading": "359055",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240505",
                                                  "reading": "364068",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240506",
                                                  "reading": "369081",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240507",
                                                  "reading": "374094",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240508",
                                                  "reading": "379107",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240509",
                                                  "reading": "384120",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240510",
                                                  "reading": "389133",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240511",
                                                  "reading": "394146",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240512",
                                                  "reading": "399159",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240513",
                                                  "reading": "404172",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240514",
                                                  "reading": "409185",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240515",
                                                  "reading": "414198",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240516",
                                                  "reading": "419211",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240517",
                                                  "reading": "424224",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240518",
                                                  "reading": "429237",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240519",
                                                  "reading": "434250",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240520",
                                                  "reading": "439263",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240521",
                                                  "reading": "444276",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240522",
                                                  "reading": "449289",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240523",
                                                  "reading": "454302",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240524",
                                                  "reading": "459315",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240525",
                                                  "reading": "464328",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240526",
                                                  "reading": "469341",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240527",
                                                  "reading": "474354",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240528",
                                                  "reading": "479367",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240529",
                                                  "reading": "484380",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240530",
                                                  "reading": "489393",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240531",
                                                  "reading": "494406",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240601",
                                                  "reading": "494406",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240602",
                                                  "reading": "499419",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240603",
                                                  "reading": "504432",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240604",
                                                  "reading": "509445",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240605",
                                                  "reading": "514458",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240606",
                                                  "reading": "519471",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240607",
                                                  "reading": "524484",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240608",
                                                  "reading": "529497",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240609",
                                                  "reading": "534510",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240610",
                                                  "reading": "539523",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240611",
                                                  "reading": "544536",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240612",
                                                  "reading": "549549",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240613",
                                                  "reading": "554562",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240614",
                                                  "reading": "559575",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240615",
                                                  "reading": "564588",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240616",
                                                  "reading": "569601",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240617",
                                                  "reading": "574614",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240618",
                                                  "reading": "579627",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240619",
                                                  "reading": "584640",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240620",
                                                  "reading": "589653",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240621",
                                                  "reading": "594666",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240622",
                                                  "reading": "599679",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240623",
                                                  "reading": "604692",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240624",
                                                  "reading": "609705",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240625",
                                                  "reading": "614718",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240626",
                                                  "reading": "619731",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240627",
                                                  "reading": "624744",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240628",
                                                  "reading": "629757",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240629",
                                                  "reading": "634770",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240630",
                                                  "reading": "639783",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240701",
                                                  "reading": "639783",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240702",
                                                  "reading": "644796",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240703",
                                                  "reading": "649809",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240704",
                                                  "reading": "654822",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240705",
                                                  "reading": "659835",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240706",
                                                  "reading": "664848",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240707",
                                                  "reading": "669861",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240708",
                                                  "reading": "674874",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240709",
                                                  "reading": "679887",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240710",
                                                  "reading": "684900",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240711",
                                                  "reading": "689913",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240712",
                                                  "reading": "694926",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240713",
                                                  "reading": "699939",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240714",
                                                  "reading": "704952",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240715",
                                                  "reading": "709965",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240716",
                                                  "reading": "714978",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240717",
                                                  "reading": "719991",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240718",
                                                  "reading": "724904",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240719",
                                                  "reading": "729917",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240720",
                                                  "reading": "734930",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240721",
                                                  "reading": "739943",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240722",
                                                  "reading": "744956",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240723",
                                                  "reading": "749969",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240724",
                                                  "reading": "754982",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240725",
                                                  "reading": "759995",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240726",
                                                  "reading": "764908",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240727",
                                                  "reading": "769921",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240728",
                                                  "reading": "774934",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240729",
                                                  "reading": "779947",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240730",
                                                  "reading": "784960",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240731",
                                                  "reading": "789973",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240801",
                                                  "reading": "789973",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240802",
                                                  "reading": "794986",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240803",
                                                  "reading": "799999",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240804",
                                                  "reading": "805012",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240805",
                                                  "reading": "810025",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240806",
                                                  "reading": "815038",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240807",
                                                  "reading": "820051",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240808",
                                                  "reading": "825064",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240809",
                                                  "reading": "830077",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240810",
                                                  "reading": "835090",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240811",
                                                  "reading": "840103",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240812",
                                                  "reading": "845116",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240813",
                                                  "reading": "850129",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240814",
                                                  "reading": "855142",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240815",
                                                  "reading": "860155",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240816",
                                                  "reading": "865168",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240817",
                                                  "reading": "870181",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240818",
                                                  "reading": "875194",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240819",
                                                  "reading": "880207",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240820",
                                                  "reading": "885220",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240821",
                                                  "reading": "890233",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240822",
                                                  "reading": "895246",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240823",
                                                  "reading": "900259",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240824",
                                                  "reading": "905272",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240825",
                                                  "reading": "910285",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240826",
                                                  "reading": "915298",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240827",
                                                  "reading": "920311",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240828",
                                                  "reading": "925324",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240829",
                                                  "reading": "930337",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240830",
                                                  "reading": "935350",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240831",
                                                  "reading": "940363",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240901",
                                                  "reading": "940363",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240902",
                                                  "reading": "945376",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240903",
                                                  "reading": "950389",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240904",
                                                  "reading": "955402",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240905",
                                                  "reading": "960415",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240906",
                                                  "reading": "965428",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240907",
                                                  "reading": "970441",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240908",
                                                  "reading": "975454",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240909",
                                                  "reading": "980467",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240910",
                                                  "reading": "985480",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240911",
                                                  "reading": "990493",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240912",
                                                  "reading": "995506",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240913",
                                                  "reading": "1000519",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240914",
                                                  "reading": "1005532",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240915",
                                                  "reading": "1010545",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240916",
                                                  "reading": "1015558",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240917",
                                                  "reading": "1020571",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240918",
                                                  "reading": "1025584",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240919",
                                                  "reading": "1030597",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240920",
                                                  "reading": "1035610",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240921",
                                                  "reading": "1040623",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240922",
                                                  "reading": "1045636",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240923",
                                                  "reading": "1050649",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240924",
                                                  "reading": "1055662",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240925",
                                                  "reading": "1060675",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240926",
                                                  "reading": "1065688",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240927",
                                                  "reading": "1070701",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240928",
                                                  "reading": "1075714",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240929",
                                                  "reading": "1080727",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20240930",
                                                  "reading": "1085740",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241001",
                                                  "reading": "1085740",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241002",
                                                  "reading": "1090753",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241003",
                                                  "reading": "1095766",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241004",
                                                  "reading": "1100779",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241005",
                                                  "reading": "1105792",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241006",
                                                  "reading": "1110805",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241007",
                                                  "reading": "1115818",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241008",
                                                  "reading": "1120831",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241009",
                                                  "reading": "1125844",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241010",
                                                  "reading": "1130857",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241011",
                                                  "reading": "1135870",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241012",
                                                  "reading": "1140883",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241013",
                                                  "reading": "1145896",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241014",
                                                  "reading": "1150909",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241015",
                                                  "reading": "1155922",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241016",
                                                  "reading": "1160935",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241017",
                                                  "reading": "1165948",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241018",
                                                  "reading": "1170961",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241019",
                                                  "reading": "1175974",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241020",
                                                  "reading": "1180987",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241021",
                                                  "reading": "1185990",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241022",
                                                  "reading": "1190903",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241023",
                                                  "reading": "1195916",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241024",
                                                  "reading": "1200929",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241025",
                                                  "reading": "1205942",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241026",
                                                  "reading": "1210955",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241027",
                                                  "reading": "1215968",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241028",
                                                  "reading": "1220981",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241029",
                                                  "reading": "1225994",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241030",
                                                  "reading": "1230907",
                                                  "volume": "5013"
                                                },
                                                {
                                                  "date": "20241031",
                                                  "reading": "1235920",
                                                  "volume": "5013"
                                                }
                                              ],
                                                "monthTotals":[{"month":"April","year":"2024","total":"150388"},{"month":"May","year":"2024","total":"155403"},{"month":"June","year":"2024","total":"150390"},{"month":"July","year":"2024","total":"155403"},{"month":"August","year":"2024","total":"155403"},{"month":"September","year":"2024","total":"150390"},{"month":"October","year":"2024","total":"155403"}]
                                              }
                                ],
                                },
                                {
                                  "id":323188,
                                  "status": "due",
                                  "underQuery": false,
                                  "due": "20240428",
                                  "returnsCycle":"winter and all year",
                                  "description":"Pear tree farm - BOREHOLE A and B",
                                  "frequency": "daily",
                                  "purpose":["Spray irrigation - direct", "General Farming & Domestic"],
                                  "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                  "periodStart":"0401",
                                  "periodEnd":"1031",
                                  "returnsPeriodStart":"20230401",
                                  "returnsPeriodEnd":"20241031",
                                  "versions": [],
                                }
                                ],

              "chargeInformation": [{
                  "chargeStart": "1 April 2019",
                  "chargeEnd": "",
                  "chargeStatus": "CHARGEABLE",
                  "chargeBilledDate": "31 March 2023",
                  "free": "false",
                  "reasonNewCharge": "New licence",
                  "setUpBy": "	jo.langton@madeup.com",
                  "elements": [{
                                "purpose": "Spray irrigation - direct",
                                "description": "Borehole A and B",
                                "abstractionStartDay": "1",
                                "abstractionStartMonth": "4",
                                "abstractionEndDay": "31",
                                "abstractionEndMonth": "3",
                                "billableQuantity": "51,830",
                                "authorisedQuantity": "51,830",
                                "timeLimit": "No",
                                "source": "Unsupported",
                                "season": "Winter and all year",
                                "loss": "High",
                                }
                  ],
                }
              ],

              "agreements": [],

              "communications": [
                //newLicence
              ],

            },


            //licence 11
            {
              "number": "03/28/61/065",
              "name": "Lemon Tree Farm",
              "holder": "Big Smith Farms Ltd",
              "startDate": "1 April 2019",
              "effectiveDate": "1 April 2023",
              "endDate": "31 March 2035",
              "expired": "false",
              "billingRegion": "Anglian",

                            //contacts on the licence
                            "contacts": [{
                              "type": "returns",
                              "id": ['1'],
                               "method": "letter",
                              "addressID": "6"
                            }],

              //licence Settings
              "multipleUpload": "no",
              "confidentiality": "public",

              "source": "Underground strata comprising of chalk at Lemon Tree Farm.",
              "purpose":  ["Spray irrigation - Storage", "Spray irrigation - Direct", "General Farming & Domestic"],
              "absPeriod": ["1 November to 31 March", "1 April to 31 October", "1 April to 31 March"],

              "absPoints": ["At National Grid Reference SK 675124"],
              "gridRefs": [ "SK675124" ],
              "means": ["Unspecified pump"],
              "absConditions": [
                {"type" : "general condition",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "",
                 "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SK 675124."
               },
             ],
              "absQuantities": "Spray irrigation - Storage~40 cubic metres per hour~450 cubic metres per day~89,000 cubic metres per year~~Spray irrigation - Direct~40 cubic metres per hour~450 cubic metres per day~89,000 cubic metres per year~~General farming and agriculture~25 cubic metres per hour~230 cubic metres per day~51,830 cubic metres per year",

              "use": [     {
                              "purpose": "Spray Irrigation - Storage",
                              "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)"],
                              "periodStart": "1101",
                              "periodEnd": "0331",
                              "amount":"89,000",
                              "timeLimit": "No",
                          },
                          {
                              "purpose": "Spray irrigation - direct",
                              "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)",],
                              "periodStart": "0401",
                              "periodEnd": "1031",
                              "amount":"89,000",
                              "timeLimit": "No",
                          },
                          {
                            "purpose": "General Farming & Domestic",
                            "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"51,830",
                            "timeLimit": "No",
                          },
                  ],

                                    "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "Normal variation",
                    "reasonText":  "Licence varied to add agriculture purpose to the licence",
                    "changedDate": "31 March 2023",
                    "startDate": "2023-04-01",
                    "endDate": "",
                    "changeType": "licence issued",
                    "changedBy": "admin@gov.uk",
                  },{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "2019-04-01",
                    "changeType": "licence issued",
                    "endDate": "2023-03-31",
                    "changedBy": "admin@gov.uk",
                  }],

                                                              ///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [
                {  
              "number": "03/28/61/065",
              "name": "Lemon Tree Farm",
              "holder": "Big Smith Farms Ltd",
              "startDate": "1 April 2023",
              "effectiveDate": "1 April 2023",
              "endDate": "31 March 2035",
              "expired": "false",
              "billingRegion": "Anglian",

              //licence Settings
              "multipleUpload": "no",
              "confidentiality": "public",

              "source": "Underground strata comprising of chalk at Lemon Tree Farm.",
              "purpose":  ["Spray irrigation - Storage", "Spray irrigation - Direct", "General Farming & Domestic"],
              "absPeriod": ["1 November to 31 March", "1 April to 31 October", "1 April to 31 March"],

              "absPoints": ["At National Grid Reference SK 675124"],
              "gridRefs": [ "SK675124" ],
              "means": ["Unspecified pump"],
              "absConditions": [
                {"type" : "general condition",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "",
                 "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SK 675124."
               },
             ],
              "absQuantities": "Spray irrigation - Storage~40 cubic metres per hour~450 cubic metres per day~89,000 cubic metres per year~~Spray irrigation - Direct~40 cubic metres per hour~450 cubic metres per day~89,000 cubic metres per year~~General farming and agriculture~25 cubic metres per hour~230 cubic metres per day~51,830 cubic metres per year",

              "use": [     {
                              "purpose": "Spray Irrigation - Storage",
                              "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)"],
                              "periodStart": "1101",
                              "periodEnd": "0331",
                              "amount":"89,000",
                              "timeLimit": "No",
                          },
                          {
                              "purpose": "Spray irrigation - direct",
                              "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)",],
                              "periodStart": "0401",
                              "periodEnd": "1031",
                              "amount":"89,000",
                              "timeLimit": "No",
                          },
                          {
                            "purpose": "General Farming & Domestic",
                            "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)"],
                            "periodStart": "0401",
                            "periodEnd": "0331",
                            "amount":"51,830",
                            "timeLimit": "No",
                          },
                  ],
                },{

                        //Changed
                        "changed": true,
                        "reasonCreated": "New Licence",
                        "reasonText":  "",
                        "changedDate": "1 April 2023",
                        "changedBy": "admin@gov.uk",

                        "number": "03/28/61/065",
                        "name": "Lemon Tree Farm",
                        "holder": "Big Smith Farms Ltd",
                        "startDate": "1 April 2019",
                        "effectiveDate": "1 April 2019",
                        "endDate": "31 March 2023",
                        "expired": "false",

                        //licence Settings
                        "multipleUpload": "no",
                        "confidentiality": "public",

                        "source": "Underground strata comprising of chalk at Lemon Tree Farm.",
                        "purpose": ["Spray Irrigation - Storage","Spray irrigation - Direct"],
                        "absPeriod": ["1 November to 31 March", "1 April to 31 October"],

                        "absPoints": ["At National Grid Reference SK 675124"],
                        "means": ["Unspecified pump"],
                        "absConditions": [
                          {"type" : "general condition",
                           "purposeIndex" : ["0"],
                           "pointsIndex" : ["0"],
                           "param1" : "",
                           "text" : "The Licence Holder shall use staff gauges to measure the water level in Helperby reservoir at National Grid References  SK 675124."
                         },
                       ],
                       "absQuantities": "Spray irrigation - Storage~40 cubic metres per hour~450 cubic metres per day~89,000 cubic metres per year~~Spray irrigation - Direct~40 cubic metres per hour~450 cubic metres per day~89,000 cubic metres per year",

                        "use": [
                                      {
                                        "purpose": "Spray Irrigation - Storage",
                                        "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)"],
                                        "periodStart": "1101",
                                        "periodEnd": "0331",
                                        "amount":"89,000",
                                        "timeLimit": ""
                                    },
                                    {
                                      "purpose": "Spray irrigation - direct",
                                      "points": ["At National Grid Reference SK 675 124 (Pear tree farm - BOREHOLE A)", "At National Grid Reference SK 675 126 (Pear tree farm - BOREHOLE B)"],
                                      "periodStart": "0401",
                                      "periodEnd": "0331",
                                      "amount":"89,000",
                                      "timeLimit": "No"
                                    },
                            ],
                    }
                  ],


                  //return requirements
                  "returnsRequirements":  [{
                                          "startDate":"20190401",
                                          "endDate":"",
                                          "reason":"New licence",
                                          "status":"approved",
                                          "additionalSubmissionOptions": ["none"],
                                          "username":"username@defra.gov.uk",
                                          "note":"",
                                          "requirements":[{
                                                          "id":823187,
                                                          "returnsCycle":"winter and all year",
                                                          "title":"Spray irrigation - storage, Reservoir storage at Lemon tree farm - BOREHOLE A",
                                                          "description":"Reservoir storage at Lemon tree farm - BOREHOLE A",
                                                          "frequencyCollected":"monthly",
                                                          "frequency":"monthly",
                                                          "purpose":["Spray irrigation - storage",],
                                                          "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                                                          "periodStart":"1101",
                                                          "periodEnd":"0331",
                                                          "timeLimit": "No",
                                                          "settings":["none"],
                                                            },
                                                            {
                                                              "id":823188,
                                                              "returnsCycle":"summer",
                                                              "title":"Spray irrigation - direct, Spray irrigation at Lemon tree farm - BOREHOLE A",
                                                              "description":"Spray irrigation at Lemon tree farm - BOREHOLE A",
                                                              "frequencyCollected":"monthly",
                                                              "frequency":"monthly",
                                                              "purpose":["Spray irrigation - direct"],
                                                              "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                                                              "periodStart":"0401",
                                                              "periodEnd":"1031",
                                                              "timeLimit": "No",
                                                              "settings":["none"],
                                                                }]
                                              }
                                            ],

                    "returns": [  {
                      "id":823187,
                      "status": "due",
                      "underQuery": false,
                      "due": "20241128",
                      "returnsCycle":"winter and all year",
                      "description":"Reservoir storage at Lemon tree farm - BOREHOLE A",
                      "frequency": "monthly",
                      "purpose":["Spray irrigation - storage"],
                      "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                      "periodStart":"1101",
                      "periodEnd":"0331",
                      "returnsPeriodStart":"20230401",
                      "returnsPeriodEnd":"20240331",
                      "versions": [],
                    },{
                      "id":823188,
                      "status": "due",
                      "underQuery": false,
                      "due": "20240428",
                      "returnsCycle":"summer",
                      "description":"Spray irrigation at Lemon tree farm - BOREHOLE A",
                      "frequency": "monthly",
                      "purpose":["Spray irrigation - direct"],
                      "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                      "periodStart":"0401",
                      "periodEnd":"1031",
                      "returnsPeriodStart":"20230401",
                      "returnsPeriodEnd":"20240331",
                      "versions": [],
                    },   {
                      "id":823187,
                      "status": "completed",
                      "underQuery": false,
                      "due": "20231128",
                      "returnsCycle":"winter and all year",
                      "description":"Reservoir storage at Lemon tree farm - BOREHOLE A",
                      "frequency": "monthly",
                      "purpose":["Spray irrigation - storage"],
                      "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                      "periodStart":"1101",
                      "periodEnd":"0331",
                      "returnsPeriodStart":"20220401",
                      "returnsPeriodEnd":"20230331",
                      "versions": [],
                    },{
                      "id":823188,
                      "status": "completed",
                      "underQuery": false,
                      "due": "20230428",
                      "returnsCycle":"summer",
                      "description":"Spray irrigation at Lemon tree farm - BOREHOLE A",
                      "frequency": "monthly",
                      "purpose":["Spray irrigation - direct"],
                      "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                      "periodStart":"0401",
                      "periodEnd":"1031",
                      "returnsPeriodStart":"20220401",
                      "returnsPeriodEnd":"20230331",
                      "versions": [],
                    },
                      {
                        "id":823187,
                        "status": "completed",
                        "underQuery": false,
                        "due": "20221128",
                        "returnsCycle":"winter and all year",
                        "description":"Reservoir storage at Lemon tree farm - BOREHOLE A",
                        "frequency": "monthly",
                        "purpose":["Spray irrigation - storage"],
                        "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                        "periodStart":"1101",
                        "periodEnd":"0331",
                        "returnsPeriodStart":"20210401",
                        "returnsPeriodEnd":"20220331",
                        "versions": [],
                      },{
                        "id":823188,
                        "status": "completed",
                        "underQuery": false,
                        "due": "20220428",
                        "returnsCycle":"summer",
                        "description":"Spray irrigation at Lemon tree farm - BOREHOLE A",
                        "frequency": "monthly",
                        "purpose":["Spray irrigation - direct"],
                        "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                        "periodStart":"0401",
                        "periodEnd":"1031",
                        "returnsPeriodStart":"20210401",
                        "returnsPeriodEnd":"20220331",
                        "versions": [],
                      },
                      {
                        "id":823187,
                        "status": "completed",
                        "underQuery": false,
                        "due": "20211128",
                        "returnsCycle":"winter and all year",
                        "description":"Reservoir storage at Lemon tree farm - BOREHOLE A",
                        "frequency": "monthly",
                        "purpose":["Spray irrigation - storage"],
                        "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                        "periodStart":"1101",
                        "periodEnd":"0331",
                        "returnsPeriodStart":"20200401",
                        "returnsPeriodEnd":"20210331",
                        "versions": [],
                      },{
                        "id":823188,
                        "status": "completed",
                        "underQuery": false,
                        "due": "20210428",
                        "returnsCycle":"summer",
                        "description":"Spray irrigation at Lemon tree farm - BOREHOLE A",
                        "frequency": "monthly",
                        "purpose":["Spray irrigation - direct"],
                        "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                        "periodStart":"0401",
                        "periodEnd":"1031",
                        "returnsPeriodStart":"20200401",
                        "returnsPeriodEnd":"20210331",
                        "versions": [],
                      },
                      {
                        "id":823187,
                        "status": "completed",
                        "underQuery": false,
                        "due": "20201128",
                        "returnsCycle":"winter and all year",
                        "description":"Reservoir storage at Lemon tree farm - BOREHOLE A",
                        "frequency": "monthly",
                        "purpose":["Spray irrigation - storage"],
                        "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                        "periodStart":"1101",
                        "periodEnd":"0331",
                        "returnsPeriodStart":"20190401",
                        "returnsPeriodEnd":"20200331",
                        "versions": [],
                      },{
                        "id":823188,
                        "status": "completed",
                        "underQuery": false,
                        "due": "20200428",
                        "returnsCycle":"summer",
                        "description":"Spray irrigation at Lemon tree farm - BOREHOLE A",
                        "frequency": "monthly",
                        "purpose":["Spray irrigation - direct"],
                        "points": ["At National Grid Reference SK 675 124 (Lemon tree farm - BOREHOLE A)"],
                        "periodStart":"0401",
                        "periodEnd":"1031",
                        "returnsPeriodStart":"20190401",
                        "returnsPeriodEnd":"20200331",
                        "versions": [],
                      },
                                ],

              "chargeInformation": [{
                  "chargeStart": "1 April 2019",
                  "chargeEnd": "",
                  "chargeStatus": "CHARGEABLE",
                  "chargeBilledDate": "31 March 2023",
                  "free": "false",
                  "reasonNewCharge": "New licence",
                  "setUpBy": "	jo.langton@madeup.com",
                  "elements": [{
                                "purpose": "Spray irrigation - storage",
                                "description": "Borehole A",
                                "abstractionStartDay": "1",
                                "abstractionStartMonth": "11",
                                "abstractionEndDay": "31",
                                "abstractionEndMonth": "3",
                                "billableQuantity": "89,000",
                                "authorisedQuantity": "89,000",
                                "timeLimit": "No",
                                "source": "Unsupported",
                                "season": "Winter and all year",
                                "loss": "High",
                                },
                                {
                                  "purpose": "Spray irrigation - direct",
                                  "description": "Borehole A",
                                  "abstractionStartDay": "1",
                                  "abstractionStartMonth": "4",
                                  "abstractionEndDay": "31",
                                  "abstractionEndMonth": "10",
                                  "billableQuantity": "89,000",
                                  "authorisedQuantity": "89,000",
                                  "timeLimit": "No",
                                  "source": "Unsupported",
                                  "season": "Summer",
                                  "loss": "High",
                                  }
                  ],
                }
              ],

              "agreements": [],

              "communications": [
                //newLicence
              ],

            },
            //licence 12 
            //ID11
            {
              "number": "100/22/33/0123",
              "name": "",
              "holder": "Public Water Plc",
              "startDate": "19 January 2018",
              "endDate": "30 March 2030",
              "effectiveDate": "19 January 2018",
              "expired": "false",
              "billingRegion": "Southern",

              //contacts on the licence
              "contacts": [{
                "type": "returns",
                "id": ['10'],
                 "method": "letter",
                "addressID": "6"
              }],
      
              //licence Settings
              "multipleUpload": "yes",
              "confidentiality": "public",
      
              "source": "Groundwater.",
              "purpose": ["Potable Water Supply - Direct"],
              "absPeriod": ["1 April to 31 October"],
              "means": ["Unspecified pump"],
      
              "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675126", "At National Grid Reference SK 675130", "At National Grid Reference SK 675135"],
              "gridRefs": [ "SK675124", "SK675126", "SK 675130", "SK 675135"],
              "absConditions": [
               {"type" : "hands off flow condition (HOF)",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0", "1", "2", "3"],
                 "param1" : "Bourton Dickler",
                 "param2" : "73.4Ml/d",
                 "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 73.4Ml/d."
               }
             ],
              "absQuantities": "6000000.00 cubic metres per year~30000.00 cubic metres per day",
      
              "use": [{
                      "purpose": "Potable Water Supply - Direct",
                      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY SP2)", "At National Grid Reference SK 675130 (RIVER SWALE - HELPERBY SP3)", "At National Grid Reference SK 675135 (RIVER SWALE - HELPERBY SP4)"],
                      "periodStart": "0401",
                      "periodEnd": "0331",
                      "amount":"12271.581",
                      "timeLimit": "No"
                    }],

                                     "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "2018-01-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],
      
                                                              ///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [
                {              "number": "100/22/33/0123",
              "name": "",
              "holder": "Public Water Plc",
              "startDate": "19 January 2018",
              "endDate": "30 March 2030",
              "effectiveDate": "19 January 2018",
              "expired": "false",
              "billingRegion": "Southern",
      
              //licence Settings
              "multipleUpload": "yes",
              "confidentiality": "public",
      
              "source": "Groundwater.",
              "purpose": ["Potable Water Supply - Direct"],
              "absPeriod": ["1 April to 31 October"],
              "means": ["Unspecified pump"],
      
              "absPoints": ["At National Grid Reference SK 675124", "At National Grid Reference SK 675126", "At National Grid Reference SK 675130", "At National Grid Reference SK 675135"],
              "gridRefs": [ "SK675124", "SK675126", "SK 675130", "SK 675135"],
              "absConditions": [
               {"type" : "hands off flow condition (HOF)",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0", "1", "2", "3"],
                 "param1" : "Bourton Dickler",
                 "param2" : "73.4Ml/d",
                 "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 73.4Ml/d."
               }
             ],
              "absQuantities": "6000000.00 cubic metres per year~30000.00 cubic metres per day",
      
              "use": [{
                      "purpose": "Potable Water Supply - Direct",
                      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY SP2)", "At National Grid Reference SK 675130 (RIVER SWALE - HELPERBY SP3)", "At National Grid Reference SK 675135 (RIVER SWALE - HELPERBY SP4)"],
                      "periodStart": "0401",
                      "periodEnd": "0331",
                      "amount":"12271.581",
                      "timeLimit": "No"
                    }],  }
                    ],
      
              "returnsRequirements":  [{
                                      "startDate":"20180119",
                                      "endDate":"",
                                      "reason":"New licence",
                                      "status":"approved",
                                      "additionalSubmissionOptions": ["multiple upload", "quarterly return submissions"],
                                      "username":"username@defra.gov.uk",
                                      "note":"",
                                      "requirements":[{
                                                      "id":772318,
                                                      "returnsCycle":"winter and all year",
                                                      "description":"River Swale - Helperby SP1,2,3,4,5 (GW)",
                                                      "frequencyCollected":"daily",
                                                      "frequency":"daily",
                                                      "purpose":["Potable Water Supply Direct"],
                                                      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY SP2)", "At National Grid Reference SK 675130 (RIVER SWALE - HELPERBY SP3)", "At National Grid Reference SK 675135 (RIVER SWALE - HELPERBY SP4)"],
                                                      "periodStart":"0401",
                                                      "periodEnd":"0331",
                                                      "timeLimit": "No",
                                                      "settings":["none"],
                                                      "versions": [],
                                                        }]
                                          },
                                        ],
      
      
                                        "returns": [{
                                                    "id":772318,
                                                    "status": "due",
                                                    "underQuery": false,
                                                    "due": "20241028",
                                                    "returnsCycle":"winter and all year",
                                                    "description":"River Swale - Helperby SP1,2,3,4,5 (GW)",
                                                    "frequency": "daily",
                                                    "purpose":["Potable Water Supply Direct"],
                                                    "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY SP2)", "At National Grid Reference SK 675130 (RIVER SWALE - HELPERBY SP3)", "At National Grid Reference SK 675135 (RIVER SWALE - HELPERBY SP4)"],
                                                    "periodStart":"0401",
                                                    "periodEnd":"0331",
                                                    "returnsPeriodStart":"20240701",
                                                    "returnsPeriodEnd":"20240930",
                                                    "versions": []
                                                    },
                                                    {
                                                      "id":772318,
                                                      "status": "complete",
                                                      "underQuery": false,
                                                      "due": "20240728",
                                                      "returnsCycle":"winter and all year",
                                                      "description":"River Swale - Helperby SP1,2,3,4,5 (GW)",
                                                      "frequency": "daily",
                                                      "purpose":["Potable Water Supply Direct"],
                                                      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY SP2)", "At National Grid Reference SK 675130 (RIVER SWALE - HELPERBY SP3)", "At National Grid Reference SK 675135 (RIVER SWALE - HELPERBY SP4)"],
                                                      "periodStart":"0401",
                                                      "periodEnd":"0331",
                                                      "returnsPeriodStart":"20240401",
                                                      "returnsPeriodEnd":"20240630",
                                                      "versions": [{
                                                        "id":0,
                                                        "submittedBy":"testuser@gov.uk",
                                                        "submittedDate":"20240816",
                                                        "dateReturnReceived":"20240816",
                                                        "units":"cm3",
                                                        "notes" : "",
                                                        "readingsOrVolumes": "volumes",
                                                        "nilReturn":false,
                                                        "meterDetails":{"make":"Powerflow","serialNumber":"2222222", "x10": false, "startReading": "", "endReading": ""},
                                                        "lines":[
                                                          {"date":"20240401","reading":"","volume":"5002"},
                                                          {"date":"20240402","reading":"","volume":"5022"},
                                                          {"date":"20240403","reading":"","volume":"5013"},
                                                          {"date":"20240404","reading":"","volume":"5013"},
                                                          {"date":"20240405","reading":"","volume":"5013"},
                                                          {"date":"20240406","reading":"","volume":"5013"},
                                                          {"date":"20240407","reading":"","volume":"5013"},
                                                          {"date":"20240408","reading":"","volume":"5013"},
                                                          {"date":"20240409","reading":"","volume":"5013"},
                                                          {"date":"20240410","reading":"","volume":"5013"},
                                                          {"date":"20240411","reading":"","volume":"5013"},
                                                          {"date":"20240412","reading":"","volume":"5013"},
                                                          {"date":"20240413","reading":"","volume":"5013"},
                                                          {"date":"20240414","reading":"","volume":"5013"},
                                                          {"date":"20240415","reading":"","volume":"5013"},
                                                          {"date":"20240416","reading":"","volume":"5013"},
                                                          {"date":"20240417","reading":"","volume":"5013"},
                                                          {"date":"20240418","reading":"","volume":"5013"},
                                                          {"date":"20240419","reading":"","volume":"5013"},
                                                          {"date":"20240420","reading":"","volume":"5013"},
                                                          {"date":"20240421","reading":"","volume":"5013"},
                                                          {"date":"20240422","reading":"","volume":"5013"},
                                                          {"date":"20240423","reading":"","volume":"5013"},
                                                          {"date":"20240424","reading":"","volume":"5013"},
                                                          {"date":"20240425","reading":"","volume":"5013"},
                                                          {"date":"20240426","reading":"","volume":"5013"},
                                                          {"date":"20240427","reading":"","volume":"5013"},
                                                          {"date":"20240428","reading":"","volume":"5013"},
                                                          {"date":"20240429","reading":"","volume":"5013"},
                                                          {"date":"20240430","reading":"","volume":"5013"},
                                                          {"date":"20240501","reading":"","volume":"5013"},
                                                          {"date":"20240502","reading":"","volume":"5013"},
                                                          {"date":"20240503","reading":"","volume":"5013"},
                                                          {"date":"20240504","reading":"","volume":"5013"},
                                                          {"date":"20240505","reading":"","volume":"5013"},
                                                          {"date":"20240506","reading":"","volume":"5013"},
                                                          {"date":"20240507","reading":"","volume":"5013"},
                                                          {"date":"20240508","reading":"","volume":"5013"},
                                                          {"date":"20240509","reading":"","volume":"5013"},
                                                          {"date":"20240510","reading":"","volume":"5013"},
                                                          {"date":"20240511","reading":"","volume":"5013"},
                                                          {"date":"20240512","reading":"","volume":"5013"},
                                                          {"date":"20240513","reading":"","volume":"5013"},
                                                          {"date":"20240514","reading":"","volume":"5013"},
                                                          {"date":"20240515","reading":"","volume":"5013"},
                                                          {"date":"20240516","reading":"","volume":"5013"},
                                                          {"date":"20240517","reading":"","volume":"5013"},
                                                          {"date":"20240518","reading":"","volume":"5013"},
                                                          {"date":"20240519","reading":"","volume":"5013"},
                                                          {"date":"20240520","reading":"","volume":"5013"},
                                                          {"date":"20240521","reading":"","volume":"5013"},
                                                          {"date":"20240522","reading":"","volume":"5013"},
                                                          {"date":"20240523","reading":"","volume":"5013"},
                                                          {"date":"20240524","reading":"","volume":"5013"},
                                                          {"date":"20240525","reading":"","volume":"5013"},
                                                          {"date":"20240526","reading":"","volume":"5013"},
                                                          {"date":"20240527","reading":"","volume":"5013"},
                                                          {"date":"20240528","reading":"","volume":"5013"},
                                                          {"date":"20240529","reading":"","volume":"5013"},
                                                          {"date":"20240530","reading":"","volume":"5013"},
                                                          {"date":"20240531","reading":"","volume":"5013"},
                                                          {"date":"20240601","reading":"","volume":"5013"},
                                                          {"date":"20240602","reading":"","volume":"5013"},
                                                          {"date":"20240603","reading":"","volume":"5013"},
                                                          {"date":"20240604","reading":"","volume":"5013"},
                                                          {"date":"20240605","reading":"","volume":"5013"},
                                                          {"date":"20240606","reading":"","volume":"5013"},
                                                          {"date":"20240607","reading":"","volume":"5013"},
                                                          {"date":"20240608","reading":"","volume":"5013"},
                                                          {"date":"20240609","reading":"","volume":"5013"},
                                                          {"date":"20240610","reading":"","volume":"5013"},
                                                          {"date":"20240611","reading":"","volume":"5013"},
                                                          {"date":"20240612","reading":"","volume":"5013"},
                                                          {"date":"20240613","reading":"","volume":"5013"},
                                                          {"date":"20240614","reading":"","volume":"5013"},
                                                          {"date":"20240615","reading":"","volume":"5013"},
                                                          {"date":"20240616","reading":"","volume":"5013"},
                                                          {"date":"20240617","reading":"","volume":"5013"},
                                                          {"date":"20240618","reading":"","volume":"5013"},
                                                          {"date":"20240619","reading":"","volume":"5013"},
                                                          {"date":"20240620","reading":"","volume":"5013"},
                                                          {"date":"20240621","reading":"","volume":"5013"},
                                                          {"date":"20240622","reading":"","volume":"5013"},
                                                          {"date":"20240623","reading":"","volume":"5013"},
                                                          {"date":"20240624","reading":"","volume":"5013"},
                                                          {"date":"20240625","reading":"","volume":"5013"},
                                                          {"date":"20240626","reading":"","volume":"5013"},
                                                          {"date":"20240627","reading":"","volume":"5013"},
                                                          {"date":"20240628","reading":"","volume":"5013"},
                                                          {"date":"20240629","reading":"","volume":"5013"},
                                                          {"date":"20240630","reading":"","volume":"5013"}
                                                        ],
                                                        "monthTotals":[
                                                          {"month":"April","year":"2024","total":"150388"},
                                                          {"month":"May","year":"2024","total":"155403"},
                                                          {"month":"June","year":"2024","total":"155403"}
                                                        ]
                                                                    }]
                                                    },
                                                    ],
      
              "chargeInformation": [{
                  "chargeStart": "19 January 2018",
                  "chargeEnd": "",
                  "chargeStatus": "CHARGEABLE",
                  "chargeBilledDate": "31 March 2021",
                  "free": "false",
                  "reasonNewCharge": "New licence",
                  "setUpBy": "	jo.langton@madeup.com",
                },
              ],
      
              "agreements": [],
      
              "communications": [{
                  "type": "resume - Water abstraction alert",
                  "date": "20200605",
                  "sent": "5 June 2020",
                  "sentBy": "tim.teace@defra.gov.uk",
                  "method": "letter",
                  "watercourse": "Hull",
                  "gaugingStation": "Helmspholme",
                  "flowThreshold": "45.5",
                  "contactEmail": "something@somewhere.co.uk",
                },
                {
                  "type": "stop - Water abstraction alert",
                  "date": "20200417",
                  "sent": "17 April 2020",
                  "sentBy": "tim.teace@defra.gov.uk",
                  "method": "letter",
                  "watercourse": "Hull",
                  "gaugingStation": "Helmspholme",
                  "flowThreshold": "45.5",
                  "contactEmail": "something@somewhere.co.uk",
                },
                {
                  "type": "warning - Water abstraction alert",
                  "date": "20200330",
                  "sent": "30 March 2020",
                  "sentBy": "tim.teace@defra.gov.uk",
                  "method": "letter",
                  "watercourse": "Hull",
                  "gaugingStation": "Helmspholme",
                  "flowThreshold": "45.5",
                  "contactEmail": "something@somewhere.co.uk",
                },
      
              ],
            },
            //licence 13 
            //ID12
            {
              "number": "200/20/23/0111",
              "name": "",
              "holder": "Public Water Plc",
              "startDate": "1 April 2024",
              "endDate": "31 March 2032",
              "effectiveDate": "1 April 2024",
              "expired": "false",
              "billingRegion": "Southern",
      
              //contacts on the licence
              "contacts": [{
                "type": "returns",
                "id": ['10'],
                "method": "letter",
                "addressID": "6"
              }],

              //licence Settings
              "multipleUpload": "yes",
              "confidentiality": "public",
      
              "source": "Inland water known as the River Swale at Helperby",
              "purpose": ["Potable Water Supply - Direct"],
              "absPeriod": ["1 April to 31 October"],
              "means": ["Unspecified pump"],
      
              "absPoints": ["At National Grid Reference SK 675124"],
              "gridRefs": [ "SK675124"],
              "absConditions": [
               {"type" : "hands off flow condition (HOF)",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "Bourton Dickler",
                 "param2" : "73.4Ml/d",
                 "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 73.4Ml/d."
               }
             ],
              "absQuantities": "6000000.00 cubic metres per year~30000.00 cubic metres per day",
      
              "use": [{
                      "purpose": "Potable Water Supply - Direct",
                      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)"],
                      "periodStart": "0401",
                      "periodEnd": "0331",
                      "amount":"12271.581",
                      "timeLimit": "No"
                    }],

                                     "changeLog": [{
                    "type": "Licence version",
                    "reasonCreated": "new Licence",
                    "reasonText":  "",
                    "changedDate": "1 April 2019",
                    "startDate": "2024-04-01",
                    "changeType": "licence issued",
                    "endDate": "",
                    "changedBy": "admin@gov.uk",
                  }],
      
                                                              ///////////////////// //All the versions of the licence data ////////////////////////
               "abstractionVersions": [
                {                "number": "200/20/23/0111",
              "name": "",
              "holder": "Public Water Plc",
              "startDate": "1 April 2024",
              "endDate": "31 March 2032",
              "effectiveDate": "1 April 2024",
              "expired": "false",
              "billingRegion": "Southern",
      
              //licence Settings
              "multipleUpload": "yes",
              "confidentiality": "public",
      
              "source": "Inland water known as the River Swale at Helperby",
              "purpose": ["Potable Water Supply - Direct"],
              "absPeriod": ["1 April to 31 October"],
              "means": ["Unspecified pump"],
      
              "absPoints": ["At National Grid Reference SK 675124"],
              "gridRefs": [ "SK675124"],
              "absConditions": [
               {"type" : "hands off flow condition (HOF)",
                 "purposeIndex" : ["0"],
                 "pointsIndex" : ["0"],
                 "param1" : "Bourton Dickler",
                 "param2" : "73.4Ml/d",
                 "text" : "No abstraction shall take place from the River Dikler when the water flow in the Dickler as measured at Bourton Dickler (1029TH) is at or below 73.4Ml/d."
               }
             ],
              "absQuantities": "6000000.00 cubic metres per year~30000.00 cubic metres per day",
      
              "use": [{
                      "purpose": "Potable Water Supply - Direct",
                      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)"],
                      "periodStart": "0401",
                      "periodEnd": "0331",
                      "amount":"12271.581",
                      "timeLimit": "No"
                    }], }
                    ],
      
"returnsRequirements":  [{
                                      "startDate":"20180119",
                                      "endDate":"",
                                      "reason":"New licence",
                                      "status":"approved",
                                      "additionalSubmissionOptions": ["multiple upload", "quarterly return submissions"],
                                      "username":"username@defra.gov.uk",
                                      "note":"",
                                      "requirements":[{
                                                      "id":772318,
                                                      "returnsCycle":"winter and all year",
                                                      "description":"River Swale - Helperby SP1,2,3,4,5 (GW)",
                                                      "frequencyCollected":"daily",
                                                      "frequency":"daily",
                                                      "purpose":["Potable Water Supply Direct"],
                                                      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY SP2)", "At National Grid Reference SK 675130 (RIVER SWALE - HELPERBY SP3)", "At National Grid Reference SK 675135 (RIVER SWALE - HELPERBY SP4)"],
                                                      "periodStart":"0401",
                                                      "periodEnd":"0331",
                                                      "timeLimit": "No",
                                                      "settings":["none"],
                                                      "versions": [],
                                                        }]
                                          },
                                        ],
      
      
                                        "returns": [{
                                                    "id":772319,
                                                    "status": "due",
                                                    "underQuery": false,
                                                    "due": "20261028",
                                                    "returnsCycle":"winter and all year",
                                                    "description":"River Swale - Helperby SP1,2,3,4,5 (GW)",
                                                    "frequency": "daily",
                                                    "purpose":["Potable Water Supply Direct"],
                                                    "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY SP2)", "At National Grid Reference SK 675130 (RIVER SWALE - HELPERBY SP3)", "At National Grid Reference SK 675135 (RIVER SWALE - HELPERBY SP4)"],
                                                    "periodStart":"0401",
                                                    "periodEnd":"0331",
                                                    "returnsPeriodStart":"20240701",
                                                    "returnsPeriodEnd":"20240930",
                                                    "versions": []
                                                    },
                                                    {
                                                      "id":772319,
                                                      "status": "complete",
                                                      "underQuery": false,
                                                      "due": "20250728",
                                                      "returnsCycle":"winter and all year",
                                                      "description":"River Swale - Helperby SP1,2,3,4,5 (GW)",
                                                      "frequency": "daily",
                                                      "purpose":["Potable Water Supply Direct"],
                                                      "points": ["At National Grid Reference SK 675 124 (RIVER SWALE - HELPERBY SP1)", "At National Grid Reference SK 675 126 (RIVER SWALE - HELPERBY SP2)", "At National Grid Reference SK 675130 (RIVER SWALE - HELPERBY SP3)", "At National Grid Reference SK 675135 (RIVER SWALE - HELPERBY SP4)"],
                                                      "periodStart":"0401",
                                                      "periodEnd":"0331",
                                                      "returnsPeriodStart":"20240401",
                                                      "returnsPeriodEnd":"20240630",
                                                      "versions": [{
                                                        "id":0,
                                                        "submittedBy":"	jvoss@pwplc.co.uk",
                                                        "submittedDate":"20250916",
                                                        "dateReturnReceived":"20250916",
                                                        "units":"cm3",
                                                        "notes" : "",
                                                        "readingsOrVolumes": "volumes",
                                                        "nilReturn":false,
                                                        "meterDetails":{"make":"Powerflow","serialNumber":"2222222", "x10": false, "startReading": "", "endReading": ""},
                                                        "lines":[
                                                          {"date":"20240401","reading":"","volume":"5002"},
                                                          {"date":"20240402","reading":"","volume":"5022"},
                                                          {"date":"20240403","reading":"","volume":"5013"},
                                                          {"date":"20240404","reading":"","volume":"5013"},
                                                          {"date":"20240405","reading":"","volume":"5013"},
                                                          {"date":"20240406","reading":"","volume":"5013"},
                                                          {"date":"20240407","reading":"","volume":"5013"},
                                                          {"date":"20240408","reading":"","volume":"5013"},
                                                          {"date":"20240409","reading":"","volume":"5013"},
                                                          {"date":"20240410","reading":"","volume":"5013"},
                                                          {"date":"20240411","reading":"","volume":"5013"},
                                                          {"date":"20240412","reading":"","volume":"5013"},
                                                          {"date":"20240413","reading":"","volume":"5013"},
                                                          {"date":"20240414","reading":"","volume":"5013"},
                                                          {"date":"20240415","reading":"","volume":"5013"},
                                                          {"date":"20240416","reading":"","volume":"5013"},
                                                          {"date":"20240417","reading":"","volume":"5013"},
                                                          {"date":"20240418","reading":"","volume":"5013"},
                                                          {"date":"20240419","reading":"","volume":"5013"},
                                                          {"date":"20240420","reading":"","volume":"5013"},
                                                          {"date":"20240421","reading":"","volume":"5013"},
                                                          {"date":"20240422","reading":"","volume":"5013"},
                                                          {"date":"20240423","reading":"","volume":"5013"},
                                                          {"date":"20240424","reading":"","volume":"5013"},
                                                          {"date":"20240425","reading":"","volume":"5013"},
                                                          {"date":"20240426","reading":"","volume":"5013"},
                                                          {"date":"20240427","reading":"","volume":"5013"},
                                                          {"date":"20240428","reading":"","volume":"5013"},
                                                          {"date":"20240429","reading":"","volume":"5013"},
                                                          {"date":"20240430","reading":"","volume":"5013"},
                                                          {"date":"20240501","reading":"","volume":"5013"},
                                                          {"date":"20240502","reading":"","volume":"5013"},
                                                          {"date":"20240503","reading":"","volume":"5013"},
                                                          {"date":"20240504","reading":"","volume":"5013"},
                                                          {"date":"20240505","reading":"","volume":"5013"},
                                                          {"date":"20240506","reading":"","volume":"5013"},
                                                          {"date":"20240507","reading":"","volume":"5013"},
                                                          {"date":"20240508","reading":"","volume":"5013"},
                                                          {"date":"20240509","reading":"","volume":"5013"},
                                                          {"date":"20240510","reading":"","volume":"5013"},
                                                          {"date":"20240511","reading":"","volume":"5013"},
                                                          {"date":"20240512","reading":"","volume":"5013"},
                                                          {"date":"20240513","reading":"","volume":"5013"},
                                                          {"date":"20240514","reading":"","volume":"5013"},
                                                          {"date":"20240515","reading":"","volume":"5013"},
                                                          {"date":"20240516","reading":"","volume":"5013"},
                                                          {"date":"20240517","reading":"","volume":"5013"},
                                                          {"date":"20240518","reading":"","volume":"5013"},
                                                          {"date":"20240519","reading":"","volume":"5013"},
                                                          {"date":"20240520","reading":"","volume":"5013"},
                                                          {"date":"20240521","reading":"","volume":"5013"},
                                                          {"date":"20240522","reading":"","volume":"5013"},
                                                          {"date":"20240523","reading":"","volume":"5013"},
                                                          {"date":"20240524","reading":"","volume":"5013"},
                                                          {"date":"20240525","reading":"","volume":"5013"},
                                                          {"date":"20240526","reading":"","volume":"5013"},
                                                          {"date":"20240527","reading":"","volume":"5013"},
                                                          {"date":"20240528","reading":"","volume":"5013"},
                                                          {"date":"20240529","reading":"","volume":"5013"},
                                                          {"date":"20240530","reading":"","volume":"5013"},
                                                          {"date":"20240531","reading":"","volume":"5013"},
                                                          {"date":"20240601","reading":"","volume":"5013"},
                                                          {"date":"20240602","reading":"","volume":"5013"},
                                                          {"date":"20240603","reading":"","volume":"5013"},
                                                          {"date":"20240604","reading":"","volume":"5013"},
                                                          {"date":"20240605","reading":"","volume":"5013"},
                                                          {"date":"20240606","reading":"","volume":"5013"},
                                                          {"date":"20240607","reading":"","volume":"5013"},
                                                          {"date":"20240608","reading":"","volume":"5013"},
                                                          {"date":"20240609","reading":"","volume":"5013"},
                                                          {"date":"20240610","reading":"","volume":"5013"},
                                                          {"date":"20240611","reading":"","volume":"5013"},
                                                          {"date":"20240612","reading":"","volume":"5013"},
                                                          {"date":"20240613","reading":"","volume":"5013"},
                                                          {"date":"20240614","reading":"","volume":"5013"},
                                                          {"date":"20240615","reading":"","volume":"5013"},
                                                          {"date":"20240616","reading":"","volume":"5013"},
                                                          {"date":"20240617","reading":"","volume":"5013"},
                                                          {"date":"20240618","reading":"","volume":"5013"},
                                                          {"date":"20240619","reading":"","volume":"5013"},
                                                          {"date":"20240620","reading":"","volume":"5013"},
                                                          {"date":"20240621","reading":"","volume":"5013"},
                                                          {"date":"20240622","reading":"","volume":"5013"},
                                                          {"date":"20240623","reading":"","volume":"5013"},
                                                          {"date":"20240624","reading":"","volume":"5013"},
                                                          {"date":"20240625","reading":"","volume":"5013"},
                                                          {"date":"20240626","reading":"","volume":"5013"},
                                                          {"date":"20240627","reading":"","volume":"5013"},
                                                          {"date":"20240628","reading":"","volume":"5013"},
                                                          {"date":"20240629","reading":"","volume":"5013"},
                                                          {"date":"20240630","reading":"","volume":"5013"}
                                                        ],
                                                        "monthTotals":[
                                                          {"month":"April","year":"2024","total":"150388"},
                                                          {"month":"May","year":"2024","total":"155403"},
                                                          {"month":"June","year":"2024","total":"155403"}
                                                        ]
                                                                    }]
                                                    },
                                                    ],
      
      
              "chargeInformation": [{
                  "chargeStart": "1 April 2024",
                  "chargeEnd": "",
                  "chargeStatus": "CHARGEABLE",
                  "chargeBilledDate": "31 March 2025",
                  "free": "false",
                  "reasonNewCharge": "New licence",
                  "setUpBy": "	jo.langton@madeup.com",
                  "elements": [{
                                "purpose": "Potable Water Supply - Direct",
                                "description":"River Swale - Helperby SP1",
                                "abstractionStartDay": "1",
                                "abstractionStartMonth": "4",
                                "abstractionEndDay": "31",
                                "abstractionEndMonth": "3",
                                "billableQuantity": "12271.581",
                                "authorisedQuantity": "12271.581",
                                "timeLimit": "No",
                                "source": "Unsupported",
                                "season": "Winter and all year",
                                "loss": "High",
                                }
                  ],
                },
              ],
      
              "agreements": [],
      
              "communications": [{
                  "type": "Returns: invitation",
                  "date": "20250831",
                  "sent": "31 August 2025",
                  "sentBy": "jim.pearce@defra.gov.uk",
                  "method": "email",
                  "watercourse": "",
                  "gaugingStation": "",
                  "flowThreshold": "",
                  "contactEmail": "jvoss@pwplc.co.uk",
                },],
            },
    ],

}
