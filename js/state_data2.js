  /* Adapted from  http://bl.ocks.org/markmarkoh/4127517 */
  /* This is a great start for my Project 2 visualization */
  /* Using the data from here: http://usliberals.about.com/od/Election2012Factors/a/Gun-Owners-As-Percentage-Of-Each-States-Population.htm*/

  
  
  var myMap = new Map({
      scope: 'usa',
      el: $('#container1'),
      geography_config: { 
        highlightBorderColor: '#FFFF00',
        highlightOnHover: true,
        popupTemplate: _.template('<div class="hoverinfo"><strong><%= geography.properties.name %></strong> <% if (data["2006"]["Total murders1"]) { %><hr/>  Total Murders: <%= data["2006"]["Total murders1"] %> <% } %></div>')
      },
      
      fills: {
        'EX_HIGH': '#CC4731',
        'HIGH': '#CA5E5B',
        'MEDIAN': '#E68080',
        'LOW': 	'#F0D1E0',
        defaultFill: '#EDDC4E'
      },
      data: {
    "AK": {
        "2006": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "15.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "8.0",
            "Other weapons": "2.0",
            "Population": "677325",
            "Rifles": "5.0",
            "Shotguns": "1.0",
            "Total firearms": "22.0",
            "Total murders1": "35.0"
        },
        "2007": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "13.0",
            "Hands, fists, feet, etc.2": "12.0",
            "Knives or cutting instruments": "5.0",
            "Other weapons": "5.0",
            "Population": "682297",
            "Rifles": "4.0",
            "Shotguns": "3.0",
            "Total firearms": "21.0",
            "Total murders1": "43.0"
        },
        "2008": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "9.0",
            "Hands, fists, feet, etc.2": "7.0",
            "Knives or cutting instruments": "1.0",
            "Other weapons": "6.0",
            "Population": "688125",
            "Rifles": "1.0",
            "Shotguns": "3.0",
            "Total firearms": "13.0",
            "Total murders1": "27.0"
        },
        "2009": {
            "Firearms (type unknown)": "12.0",
            "Handguns": "1.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "3.0",
            "Population": "698473",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "13.0",
            "Total murders1": "22.0"
        },
        "2010": {
            "Firearms (type unknown)": "10.0",
            "Handguns": "3.0",
            "Hands, fists, feet, etc.2": "4.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "4.0",
            "Population": "Alaska",
            "Rifles": "5.0",
            "Shotguns": "1.0",
            "Total firearms": "19.0",
            "Total murders1": "31.0"
        },
        "2011": {
            "Firearms (type unknown)": "8.0",
            "Handguns": "5.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "6.0",
            "Other weapons": "5.0",
            "Population": "710231",
            "Rifles": "0.0",
            "Shotguns": "3.0",
            "Total firearms": "16.0",
            "Total murders1": "29.0"
        },
        "2012": {
            "Population": "714046"
        },
        "Name": "Alaska"
    },
    "AL": {
        "2006": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "226.0",
            "Hands, fists, feet, etc.2": "16.0",
            "Knives or cutting instruments": "35.0",
            "Other weapons": "51.0",
            "Population": "4597688",
            "Rifles": "0.0",
            "Shotguns": "21.0",
            "Total firearms": "247.0",
            "Total murders1": "349.0"
        },
        "2007": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "262.0",
            "Hands, fists, feet, etc.2": "15.0",
            "Knives or cutting instruments": "38.0",
            "Other weapons": "47.0",
            "Population": "4637904",
            "Rifles": "7.0",
            "Shotguns": "16.0",
            "Total firearms": "285.0",
            "Total murders1": "385.0"
        },
        "2008": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "241.0",
            "Hands, fists, feet, etc.2": "17.0",
            "Knives or cutting instruments": "24.0",
            "Other weapons": "35.0",
            "Population": "4677464",
            "Rifles": "1.0",
            "Shotguns": "20.0",
            "Total firearms": "262.0",
            "Total murders1": "338.0"
        },
        "2009": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "196.0",
            "Hands, fists, feet, etc.2": "20.0",
            "Knives or cutting instruments": "29.0",
            "Other weapons": "40.0",
            "Population": "4708708",
            "Rifles": "1.0",
            "Shotguns": "32.0",
            "Total firearms": "229.0",
            "Total murders1": "318.0"
        },
        "2010": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "112.0",
            "Hands, fists, feet, etc.2": "17.0",
            "Knives or cutting instruments": "23.0",
            "Other weapons": "24.0",
            "Population": "Alabama",
            "Rifles": "0.0",
            "Shotguns": "23.0",
            "Total firearms": "135.0",
            "Total murders1": "199.0"
        },
        "2011": {
            "Population": "4779745"
        },
        "2012": {
            "Population": "4784762"
        },
        "Name": "Alabama"
    },
    "AR": {
        "2006": {
            "Firearms (type unknown)": "27.0",
            "Handguns": "82.0",
            "Hands, fists, feet, etc.2": "11.0",
            "Knives or cutting instruments": "22.0",
            "Other weapons": "34.0",
            "Population": "2815097",
            "Rifles": "15.0",
            "Shotguns": "10.0",
            "Total firearms": "134.0",
            "Total murders1": "201.0"
        },
        "2007": {
            "Firearms (type unknown)": "21.0",
            "Handguns": "92.0",
            "Hands, fists, feet, etc.2": "12.0",
            "Knives or cutting instruments": "20.0",
            "Other weapons": "29.0",
            "Population": "2842194",
            "Rifles": "7.0",
            "Shotguns": "10.0",
            "Total firearms": "130.0",
            "Total murders1": "191.0"
        },
        "2008": {
            "Firearms (type unknown)": "35.0",
            "Handguns": "65.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "17.0",
            "Other weapons": "25.0",
            "Population": "2867764",
            "Rifles": "1.0",
            "Shotguns": "9.0",
            "Total firearms": "110.0",
            "Total murders1": "157.0"
        },
        "2009": {
            "Firearms (type unknown)": "43.0",
            "Handguns": "54.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "21.0",
            "Other weapons": "38.0",
            "Population": "2889450",
            "Rifles": "5.0",
            "Shotguns": "5.0",
            "Total firearms": "107.0",
            "Total murders1": "171.0"
        },
        "2010": {
            "Firearms (type unknown)": "33.0",
            "Handguns": "49.0",
            "Hands, fists, feet, etc.2": "4.0",
            "Knives or cutting instruments": "12.0",
            "Other weapons": "21.0",
            "Population": "Arkansas",
            "Rifles": "7.0",
            "Shotguns": "4.0",
            "Total firearms": "93.0",
            "Total murders1": "130.0"
        },
        "2011": {
            "Firearms (type unknown)": "48.0",
            "Handguns": "52.0",
            "Hands, fists, feet, etc.2": "4.0",
            "Knives or cutting instruments": "22.0",
            "Other weapons": "17.0",
            "Population": "2915919",
            "Rifles": "4.0",
            "Shotguns": "6.0",
            "Total firearms": "110.0",
            "Total murders1": "153.0"
        },
        "2012": {
            "Population": "2922750"
        },
        "Name": "Arkansas"
    },
    "AZ": {
        "2006": {
            "Firearms (type unknown)": "27.0",
            "Handguns": "269.0",
            "Hands, fists, feet, etc.2": "20.0",
            "Knives or cutting instruments": "53.0",
            "Other weapons": "46.0",
            "Population": "6192100",
            "Rifles": "33.0",
            "Shotguns": "14.0",
            "Total firearms": "343.0",
            "Total murders1": "462.0"
        },
        "2007": {
            "Firearms (type unknown)": "12.0",
            "Handguns": "265.0",
            "Hands, fists, feet, etc.2": "30.0",
            "Knives or cutting instruments": "44.0",
            "Other weapons": "67.0",
            "Population": "6362241",
            "Rifles": "35.0",
            "Shotguns": "11.0",
            "Total firearms": "323.0",
            "Total murders1": "464.0"
        },
        "2008": {
            "Firearms (type unknown)": "16.0",
            "Handguns": "243.0",
            "Hands, fists, feet, etc.2": "25.0",
            "Knives or cutting instruments": "45.0",
            "Other weapons": "45.0",
            "Population": "6499377",
            "Rifles": "15.0",
            "Shotguns": "16.0",
            "Total firearms": "290.0",
            "Total murders1": "405.0"
        },
        "2009": {
            "Firearms (type unknown)": "13.0",
            "Handguns": "164.0",
            "Hands, fists, feet, etc.2": "17.0",
            "Knives or cutting instruments": "61.0",
            "Other weapons": "53.0",
            "Population": "6595778",
            "Rifles": "10.0",
            "Shotguns": "10.0",
            "Total firearms": "197.0",
            "Total murders1": "328.0"
        },
        "2010": {
            "Firearms (type unknown)": "56.0",
            "Handguns": "152.0",
            "Hands, fists, feet, etc.2": "7.0",
            "Knives or cutting instruments": "51.0",
            "Other weapons": "62.0",
            "Population": "Arizona",
            "Rifles": "14.0",
            "Shotguns": "10.0",
            "Total firearms": "232.0",
            "Total murders1": "352.0"
        },
        "2011": {
            "Firearms (type unknown)": "34.0",
            "Handguns": "165.0",
            "Hands, fists, feet, etc.2": "9.0",
            "Knives or cutting instruments": "49.0",
            "Other weapons": "59.0",
            "Population": "6392015",
            "Rifles": "14.0",
            "Shotguns": "9.0",
            "Total firearms": "222.0",
            "Total murders1": "339.0"
        },
        "2012": {
            "Population": "6410810"
        },
        "Name": "Arizona"
    },
    "CA": {
        "2006": {
            "Firearms (type unknown)": "56.0",
            "Handguns": "1623.0",
            "Hands, fists, feet, etc.2": "130.0",
            "Knives or cutting instruments": "315.0",
            "Other weapons": "218.0",
            "Population": "35979208",
            "Rifles": "74.0",
            "Shotguns": "69.0",
            "Total firearms": "1822.0",
            "Total murders1": "2485.0"
        },
        "2007": {
            "Firearms (type unknown)": "106.0",
            "Handguns": "1374.0",
            "Hands, fists, feet, etc.2": "118.0",
            "Knives or cutting instruments": "298.0",
            "Other weapons": "228.0",
            "Population": "36226122",
            "Rifles": "51.0",
            "Shotguns": "74.0",
            "Total firearms": "1605.0",
            "Total murders1": "2249.0"
        },
        "2008": {
            "Firearms (type unknown)": "219.0",
            "Handguns": "1156.0",
            "Hands, fists, feet, etc.2": "120.0",
            "Knives or cutting instruments": "294.0",
            "Other weapons": "241.0",
            "Population": "36580371",
            "Rifles": "48.0",
            "Shotguns": "64.0",
            "Total firearms": "1487.0",
            "Total murders1": "2142.0"
        },
        "2009": {
            "Firearms (type unknown)": "244.0",
            "Handguns": "1022.0",
            "Hands, fists, feet, etc.2": "107.0",
            "Knives or cutting instruments": "291.0",
            "Other weapons": "214.0",
            "Population": "36961664",
            "Rifles": "45.0",
            "Shotguns": "49.0",
            "Total firearms": "1360.0",
            "Total murders1": "1972.0"
        },
        "2010": {
            "Firearms (type unknown)": "201.0",
            "Handguns": "953.0",
            "Hands, fists, feet, etc.2": "103.0",
            "Knives or cutting instruments": "250.0",
            "Other weapons": "201.0",
            "Population": "California",
            "Rifles": "59.0",
            "Shotguns": "44.0",
            "Total firearms": "1257.0",
            "Total murders1": "1811.0"
        },
        "2011": {
            "Firearms (type unknown)": "259.0",
            "Handguns": "866.0",
            "Hands, fists, feet, etc.2": "101.0",
            "Knives or cutting instruments": "261.0",
            "Other weapons": "208.0",
            "Population": "37253956",
            "Rifles": "45.0",
            "Shotguns": "50.0",
            "Total firearms": "1220.0",
            "Total murders1": "1790.0"
        },
        "2012": {
            "Population": "37334410"
        },
        "Name": "California"
    },
    "CO": {
        "2006": {
            "Firearms (type unknown)": "39.0",
            "Handguns": "38.0",
            "Hands, fists, feet, etc.2": "20.0",
            "Knives or cutting instruments": "35.0",
            "Other weapons": "16.0",
            "Population": "4753044",
            "Rifles": "0.0",
            "Shotguns": "8.0",
            "Total firearms": "85.0",
            "Total murders1": "156.0"
        },
        "2007": {
            "Firearms (type unknown)": "27.0",
            "Handguns": "56.0",
            "Hands, fists, feet, etc.2": "17.0",
            "Knives or cutting instruments": "23.0",
            "Other weapons": "25.0",
            "Population": "4842259",
            "Rifles": "0.0",
            "Shotguns": "2.0",
            "Total firearms": "85.0",
            "Total murders1": "150.0"
        },
        "2008": {
            "Firearms (type unknown)": "31.0",
            "Handguns": "50.0",
            "Hands, fists, feet, etc.2": "17.0",
            "Knives or cutting instruments": "31.0",
            "Other weapons": "17.0",
            "Population": "4935213",
            "Rifles": "3.0",
            "Shotguns": "2.0",
            "Total firearms": "86.0",
            "Total murders1": "151.0"
        },
        "2009": {
            "Firearms (type unknown)": "27.0",
            "Handguns": "55.0",
            "Hands, fists, feet, etc.2": "20.0",
            "Knives or cutting instruments": "23.0",
            "Other weapons": "30.0",
            "Population": "5024748",
            "Rifles": "6.0",
            "Shotguns": "6.0",
            "Total firearms": "94.0",
            "Total murders1": "167.0"
        },
        "2010": {
            "Firearms (type unknown)": "27.0",
            "Handguns": "34.0",
            "Hands, fists, feet, etc.2": "11.0",
            "Knives or cutting instruments": "20.0",
            "Other weapons": "21.0",
            "Population": "Colorado",
            "Rifles": "0.0",
            "Shotguns": "4.0",
            "Total firearms": "65.0",
            "Total murders1": "117.0"
        },
        "2011": {
            "Firearms (type unknown)": "26.0",
            "Handguns": "39.0",
            "Hands, fists, feet, etc.2": "21.0",
            "Knives or cutting instruments": "22.0",
            "Other weapons": "31.0",
            "Population": "5029196",
            "Rifles": "3.0",
            "Shotguns": "5.0",
            "Total firearms": "73.0",
            "Total murders1": "147.0"
        },
        "2012": {
            "Population": "5048472"
        },
        "Name": "Colorado"
    },
    "CT": {
        "2006": {
            "Firearms (type unknown)": "6.0",
            "Handguns": "57.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "18.0",
            "Other weapons": "12.0",
            "Population": "3485162",
            "Rifles": "0.0",
            "Shotguns": "2.0",
            "Total firearms": "65.0",
            "Total murders1": "100.0"
        },
        "2007": {
            "Firearms (type unknown)": "16.0",
            "Handguns": "37.0",
            "Hands, fists, feet, etc.2": "4.0",
            "Knives or cutting instruments": "14.0",
            "Other weapons": "20.0",
            "Population": "3488633",
            "Rifles": "0.0",
            "Shotguns": "4.0",
            "Total firearms": "57.0",
            "Total murders1": "95.0"
        },
        "2008": {
            "Firearms (type unknown)": "24.0",
            "Handguns": "46.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "27.0",
            "Other weapons": "11.0",
            "Population": "3502932",
            "Rifles": "1.0",
            "Shotguns": "0.0",
            "Total firearms": "71.0",
            "Total murders1": "112.0"
        },
        "2009": {
            "Firearms (type unknown)": "17.0",
            "Handguns": "51.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "17.0",
            "Other weapons": "14.0",
            "Population": "3518288",
            "Rifles": "0.0",
            "Shotguns": "2.0",
            "Total firearms": "70.0",
            "Total murders1": "107.0"
        },
        "2010": {
            "Firearms (type unknown)": "24.0",
            "Handguns": "72.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "20.0",
            "Other weapons": "8.0",
            "Population": "Connecticut",
            "Rifles": "0.0",
            "Shotguns": "1.0",
            "Total firearms": "97.0",
            "Total murders1": "131.0"
        },
        "2011": {
            "Firearms (type unknown)": "38.0",
            "Handguns": "54.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "18.0",
            "Other weapons": "10.0",
            "Population": "3574097",
            "Rifles": "1.0",
            "Shotguns": "1.0",
            "Total firearms": "94.0",
            "Total murders1": "128.0"
        },
        "2012": {
            "Population": "3576616"
        },
        "Name": "Connecticut"
    },
    "DE": {
        "2006": {
            "Firearms (type unknown)": "10.0",
            "Handguns": "14.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "7.0",
            "Other weapons": "6.0",
            "Population": "853022",
            "Rifles": "0.0",
            "Shotguns": "3.0",
            "Total firearms": "27.0",
            "Total murders1": "41.0"
        },
        "2007": {
            "Firearms (type unknown)": "3.0",
            "Handguns": "19.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "6.0",
            "Other weapons": "8.0",
            "Population": "864896",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "22.0",
            "Total murders1": "37.0"
        },
        "2008": {
            "Firearms (type unknown)": "13.0",
            "Handguns": "29.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "6.0",
            "Other weapons": "5.0",
            "Population": "876211",
            "Rifles": "0.0",
            "Shotguns": "2.0",
            "Total firearms": "44.0",
            "Total murders1": "57.0"
        },
        "2009": {
            "Firearms (type unknown)": "9.0",
            "Handguns": "20.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "6.0",
            "Other weapons": "1.0",
            "Population": "885122",
            "Rifles": "2.0",
            "Shotguns": "0.0",
            "Total firearms": "31.0",
            "Total murders1": "41.0"
        },
        "2010": {
            "Firearms (type unknown)": "11.0",
            "Handguns": "25.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "8.0",
            "Other weapons": "0.0",
            "Population": "Delaware",
            "Rifles": "0.0",
            "Shotguns": "2.0",
            "Total firearms": "38.0",
            "Total murders1": "48.0"
        },
        "2011": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "18.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "8.0",
            "Other weapons": "2.0",
            "Population": "897934",
            "Rifles": "0.0",
            "Shotguns": "3.0",
            "Total firearms": "28.0",
            "Total murders1": "41.0"
        },
        "2012": {
            "Population": "899824"
        },
        "Name": "Delaware"
    },
    "FL": {
        "2006": {
            "Population": "18088505"
        },
        "2007": {
            "Population": "18277888"
        },
        "2008": {
            "Population": "18423878"
        },
        "2009": {
            "Population": "18537969"
        },
        "2010": {
            "Population": "Florida"
        },
        "2011": {
            "Population": "18802690"
        },
        "2012": {
            "Population": "18845967"
        },
        "Name": "Florida"
    },
    "GA": {
        "2006": {
            "Firearms (type unknown)": "20.0",
            "Handguns": "351.0",
            "Hands, fists, feet, etc.2": "14.0",
            "Knives or cutting instruments": "64.0",
            "Other weapons": "67.0",
            "Population": "9330086",
            "Rifles": "13.0",
            "Shotguns": "19.0",
            "Total firearms": "403.0",
            "Total murders1": "548.0"
        },
        "2007": {
            "Firearms (type unknown)": "30.0",
            "Handguns": "401.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "84.0",
            "Other weapons": "99.0",
            "Population": "9533761",
            "Rifles": "24.0",
            "Shotguns": "30.0",
            "Total firearms": "485.0",
            "Total murders1": "674.0"
        },
        "2008": {
            "Firearms (type unknown)": "31.0",
            "Handguns": "371.0",
            "Hands, fists, feet, etc.2": "8.0",
            "Knives or cutting instruments": "73.0",
            "Other weapons": "98.0",
            "Population": "9697838",
            "Rifles": "20.0",
            "Shotguns": "13.0",
            "Total firearms": "435.0",
            "Total murders1": "614.0"
        },
        "2009": {
            "Firearms (type unknown)": "19.0",
            "Handguns": "323.0",
            "Hands, fists, feet, etc.2": "12.0",
            "Knives or cutting instruments": "56.0",
            "Other weapons": "97.0",
            "Population": "9829211",
            "Rifles": "17.0",
            "Shotguns": "19.0",
            "Total firearms": "378.0",
            "Total murders1": "543.0"
        },
        "2010": {
            "Firearms (type unknown)": "21.0",
            "Handguns": "315.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "64.0",
            "Other weapons": "85.0",
            "Population": "Georgia",
            "Rifles": "19.0",
            "Shotguns": "21.0",
            "Total firearms": "376.0",
            "Total murders1": "527.0"
        },
        "2011": {
            "Firearms (type unknown)": "12.0",
            "Handguns": "326.0",
            "Hands, fists, feet, etc.2": "8.0",
            "Knives or cutting instruments": "61.0",
            "Other weapons": "83.0",
            "Population": "9687663",
            "Rifles": "16.0",
            "Shotguns": "16.0",
            "Total firearms": "370.0",
            "Total murders1": "522.0"
        },
        "2012": {
            "Population": "9714748"
        },
        "Name": "Georgia"
    },
    "HI": {
        "2006": {
            "Firearms (type unknown)": "2.0",
            "Handguns": "5.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "3.0",
            "Other weapons": "6.0",
            "Population": "1275599",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "7.0",
            "Total murders1": "21.0"
        },
        "2007": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "3.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "3.0",
            "Other weapons": "1.0",
            "Population": "1276832",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "3.0",
            "Total murders1": "12.0"
        },
        "2008": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "7.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "8.0",
            "Other weapons": "0.0",
            "Population": "1287481",
            "Rifles": "1.0",
            "Shotguns": "2.0",
            "Total firearms": "11.0",
            "Total murders1": "25.0"
        },
        "2009": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "4.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "3.0",
            "Other weapons": "4.0",
            "Population": "1295178",
            "Rifles": "2.0",
            "Shotguns": "1.0",
            "Total firearms": "8.0",
            "Total murders1": "21.0"
        },
        "2010": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "6.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "6.0",
            "Other weapons": "5.0",
            "Population": "Hawaii",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "7.0",
            "Total murders1": "24.0"
        },
        "2011": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "0.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "2.0",
            "Other weapons": "1.0",
            "Population": "1360301",
            "Rifles": "1.0",
            "Shotguns": "0.0",
            "Total firearms": "1.0",
            "Total murders1": "7.0"
        },
        "2012": {
            "Population": "1364274"
        },
        "Name": "Hawaii"
    },
    "IA": {
        "2006": {
            "Firearms (type unknown)": "9.0",
            "Handguns": "8.0",
            "Hands, fists, feet, etc.2": "7.0",
            "Knives or cutting instruments": "13.0",
            "Other weapons": "11.0",
            "Population": "2964391",
            "Rifles": "1.0",
            "Shotguns": "5.0",
            "Total firearms": "23.0",
            "Total murders1": "54.0"
        },
        "2007": {
            "Firearms (type unknown)": "5.0",
            "Handguns": "4.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "11.0",
            "Other weapons": "8.0",
            "Population": "2978719",
            "Rifles": "2.0",
            "Shotguns": "1.0",
            "Total firearms": "12.0",
            "Total murders1": "36.0"
        },
        "2008": {
            "Firearms (type unknown)": "6.0",
            "Handguns": "13.0",
            "Hands, fists, feet, etc.2": "13.0",
            "Knives or cutting instruments": "16.0",
            "Other weapons": "20.0",
            "Population": "2993987",
            "Rifles": "2.0",
            "Shotguns": "4.0",
            "Total firearms": "25.0",
            "Total murders1": "74.0"
        },
        "2009": {
            "Firearms (type unknown)": "4.0",
            "Handguns": "3.0",
            "Hands, fists, feet, etc.2": "9.0",
            "Knives or cutting instruments": "8.0",
            "Other weapons": "6.0",
            "Population": "3007856",
            "Rifles": "1.0",
            "Shotguns": "3.0",
            "Total firearms": "11.0",
            "Total murders1": "34.0"
        },
        "2010": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "9.0",
            "Hands, fists, feet, etc.2": "4.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "9.0",
            "Population": "Iowa",
            "Rifles": "1.0",
            "Shotguns": "4.0",
            "Total firearms": "21.0",
            "Total murders1": "38.0"
        },
        "2011": {
            "Firearms (type unknown)": "10.0",
            "Handguns": "7.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "10.0",
            "Other weapons": "10.0",
            "Population": "3046857",
            "Rifles": "0.0",
            "Shotguns": "2.0",
            "Total firearms": "19.0",
            "Total murders1": "44.0"
        },
        "2012": {
            "Population": "3050321"
        },
        "Name": "Iowa"
    },
    "ID": {
        "2006": {
            "Firearms (type unknown)": "9.0",
            "Handguns": "9.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "6.0",
            "Other weapons": "5.0",
            "Population": "1464413",
            "Rifles": "2.0",
            "Shotguns": "2.0",
            "Total firearms": "22.0",
            "Total murders1": "36.0"
        },
        "2007": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "11.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "5.0",
            "Other weapons": "14.0",
            "Population": "1499245",
            "Rifles": "6.0",
            "Shotguns": "1.0",
            "Total firearms": "25.0",
            "Total murders1": "49.0"
        },
        "2008": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "9.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "0.0",
            "Other weapons": "3.0",
            "Population": "1527506",
            "Rifles": "2.0",
            "Shotguns": "3.0",
            "Total firearms": "14.0",
            "Total murders1": "23.0"
        },
        "2009": {
            "Firearms (type unknown)": "2.0",
            "Handguns": "3.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "3.0",
            "Other weapons": "9.0",
            "Population": "1545801",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "5.0",
            "Total murders1": "22.0"
        },
        "2010": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "12.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "2.0",
            "Population": "Idaho",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "12.0",
            "Total murders1": "21.0"
        },
        "2011": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "15.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "8.0",
            "Population": "1567652",
            "Rifles": "1.0",
            "Shotguns": "0.0",
            "Total firearms": "17.0",
            "Total murders1": "32.0"
        },
        "2012": {
            "Population": "1570784"
        },
        "Name": "Idaho"
    },
    "IL": {
        "2006": {
            "Firearms (type unknown)": "2.0",
            "Handguns": "380.0",
            "Hands, fists, feet, etc.2": "14.0",
            "Knives or cutting instruments": "46.0",
            "Other weapons": "35.0",
            "Population": "12718011",
            "Rifles": "4.0",
            "Shotguns": "6.0",
            "Total firearms": "392.0",
            "Total murders1": "487.0"
        },
        "2007": {
            "Firearms (type unknown)": "3.0",
            "Handguns": "330.0",
            "Hands, fists, feet, etc.2": "10.0",
            "Knives or cutting instruments": "53.0",
            "Other weapons": "57.0",
            "Population": "12779417",
            "Rifles": "4.0",
            "Shotguns": "6.0",
            "Total firearms": "343.0",
            "Total murders1": "463.0"
        },
        "2008": {
            "Firearms (type unknown)": "5.0",
            "Handguns": "412.0",
            "Hands, fists, feet, etc.2": "11.0",
            "Knives or cutting instruments": "48.0",
            "Other weapons": "50.0",
            "Population": "12842954",
            "Rifles": "3.0",
            "Shotguns": "1.0",
            "Total firearms": "421.0",
            "Total murders1": "530.0"
        },
        "2009": {
            "Firearms (type unknown)": "13.0",
            "Handguns": "360.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "39.0",
            "Other weapons": "48.0",
            "Population": "12910409",
            "Rifles": "5.0",
            "Shotguns": "8.0",
            "Total firearms": "386.0",
            "Total murders1": "479.0"
        },
        "2010": {
            "Firearms (type unknown)": "5.0",
            "Handguns": "355.0",
            "Hands, fists, feet, etc.2": "16.0",
            "Knives or cutting instruments": "30.0",
            "Other weapons": "43.0",
            "Population": "Illinois",
            "Rifles": "3.0",
            "Shotguns": "1.0",
            "Total firearms": "364.0",
            "Total murders1": "453.0"
        },
        "2011": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "364.0",
            "Hands, fists, feet, etc.2": "17.0",
            "Knives or cutting instruments": "29.0",
            "Other weapons": "29.0",
            "Population": "12830632",
            "Rifles": "1.0",
            "Shotguns": "5.0",
            "Total firearms": "377.0",
            "Total murders1": "452.0"
        },
        "2012": {
            "Population": "12840459"
        },
        "Name": "Illinois"
    },
    "IN": {
        "2006": {
            "Firearms (type unknown)": "38.0",
            "Handguns": "171.0",
            "Hands, fists, feet, etc.2": "19.0",
            "Knives or cutting instruments": "36.0",
            "Other weapons": "45.0",
            "Population": "6301700",
            "Rifles": "20.0",
            "Shotguns": "10.0",
            "Total firearms": "239.0",
            "Total murders1": "339.0"
        },
        "2007": {
            "Firearms (type unknown)": "50.0",
            "Handguns": "160.0",
            "Hands, fists, feet, etc.2": "20.0",
            "Knives or cutting instruments": "38.0",
            "Other weapons": "44.0",
            "Population": "6346113",
            "Rifles": "12.0",
            "Shotguns": "9.0",
            "Total firearms": "231.0",
            "Total murders1": "333.0"
        },
        "2008": {
            "Firearms (type unknown)": "66.0",
            "Handguns": "134.0",
            "Hands, fists, feet, etc.2": "19.0",
            "Knives or cutting instruments": "28.0",
            "Other weapons": "39.0",
            "Population": "6388309",
            "Rifles": "16.0",
            "Shotguns": "4.0",
            "Total firearms": "220.0",
            "Total murders1": "306.0"
        },
        "2009": {
            "Firearms (type unknown)": "51.0",
            "Handguns": "136.0",
            "Hands, fists, feet, etc.2": "10.0",
            "Knives or cutting instruments": "34.0",
            "Other weapons": "40.0",
            "Population": "6423113",
            "Rifles": "8.0",
            "Shotguns": "14.0",
            "Total firearms": "209.0",
            "Total murders1": "293.0"
        },
        "2010": {
            "Firearms (type unknown)": "41.0",
            "Handguns": "83.0",
            "Hands, fists, feet, etc.2": "12.0",
            "Knives or cutting instruments": "19.0",
            "Other weapons": "25.0",
            "Population": "Indiana",
            "Rifles": "11.0",
            "Shotguns": "7.0",
            "Total firearms": "142.0",
            "Total murders1": "198.0"
        },
        "2011": {
            "Firearms (type unknown)": "47.0",
            "Handguns": "115.0",
            "Hands, fists, feet, etc.2": "22.0",
            "Knives or cutting instruments": "36.0",
            "Other weapons": "43.0",
            "Population": "6483800",
            "Rifles": "9.0",
            "Shotguns": "12.0",
            "Total firearms": "183.0",
            "Total murders1": "284.0"
        },
        "2012": {
            "Population": "6489856"
        },
        "Name": "Indiana"
    },
    "KS": {
        "2006": {
            "Firearms (type unknown)": "27.0",
            "Handguns": "33.0",
            "Hands, fists, feet, etc.2": "9.0",
            "Knives or cutting instruments": "14.0",
            "Other weapons": "33.0",
            "Population": "2755700",
            "Rifles": "6.0",
            "Shotguns": "4.0",
            "Total firearms": "70.0",
            "Total murders1": "126.0"
        },
        "2007": {
            "Firearms (type unknown)": "26.0",
            "Handguns": "29.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "12.0",
            "Other weapons": "23.0",
            "Population": "2775586",
            "Rifles": "5.0",
            "Shotguns": "3.0",
            "Total firearms": "63.0",
            "Total murders1": "104.0"
        },
        "2008": {
            "Firearms (type unknown)": "15.0",
            "Handguns": "41.0",
            "Hands, fists, feet, etc.2": "17.0",
            "Knives or cutting instruments": "15.0",
            "Other weapons": "17.0",
            "Population": "2797375",
            "Rifles": "2.0",
            "Shotguns": "3.0",
            "Total firearms": "61.0",
            "Total murders1": "110.0"
        },
        "2009": {
            "Firearms (type unknown)": "38.0",
            "Handguns": "38.0",
            "Hands, fists, feet, etc.2": "8.0",
            "Knives or cutting instruments": "14.0",
            "Other weapons": "11.0",
            "Population": "2818747",
            "Rifles": "9.0",
            "Shotguns": "0.0",
            "Total firearms": "85.0",
            "Total murders1": "118.0"
        },
        "2010": {
            "Firearms (type unknown)": "28.0",
            "Handguns": "30.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "13.0",
            "Other weapons": "18.0",
            "Population": "Kansas",
            "Rifles": "4.0",
            "Shotguns": "1.0",
            "Total firearms": "63.0",
            "Total murders1": "100.0"
        },
        "2011": {
            "Firearms (type unknown)": "34.0",
            "Handguns": "31.0",
            "Hands, fists, feet, etc.2": "10.0",
            "Knives or cutting instruments": "11.0",
            "Other weapons": "16.0",
            "Population": "2853116",
            "Rifles": "3.0",
            "Shotguns": "5.0",
            "Total firearms": "73.0",
            "Total murders1": "110.0"
        },
        "2012": {
            "Population": "2858837"
        },
        "Name": "Kansas"
    },
    "KY": {
        "2006": {
            "Firearms (type unknown)": "6.0",
            "Handguns": "78.0",
            "Hands, fists, feet, etc.2": "14.0",
            "Knives or cutting instruments": "22.0",
            "Other weapons": "16.0",
            "Population": "4219374",
            "Rifles": "6.0",
            "Shotguns": "8.0",
            "Total firearms": "98.0",
            "Total murders1": "150.0"
        },
        "2007": {
            "Firearms (type unknown)": "4.0",
            "Handguns": "111.0",
            "Hands, fists, feet, etc.2": "19.0",
            "Knives or cutting instruments": "19.0",
            "Other weapons": "27.0",
            "Population": "4256278",
            "Rifles": "5.0",
            "Shotguns": "11.0",
            "Total firearms": "131.0",
            "Total murders1": "196.0"
        },
        "2008": {
            "Firearms (type unknown)": "22.0",
            "Handguns": "78.0",
            "Hands, fists, feet, etc.2": "9.0",
            "Knives or cutting instruments": "25.0",
            "Other weapons": "27.0",
            "Population": "4287931",
            "Rifles": "8.0",
            "Shotguns": "13.0",
            "Total firearms": "121.0",
            "Total murders1": "182.0"
        },
        "2009": {
            "Firearms (type unknown)": "11.0",
            "Handguns": "90.0",
            "Hands, fists, feet, etc.2": "9.0",
            "Knives or cutting instruments": "22.0",
            "Other weapons": "27.0",
            "Population": "4314113",
            "Rifles": "5.0",
            "Shotguns": "6.0",
            "Total firearms": "112.0",
            "Total murders1": "170.0"
        },
        "2010": {
            "Firearms (type unknown)": "18.0",
            "Handguns": "76.0",
            "Hands, fists, feet, etc.2": "20.0",
            "Knives or cutting instruments": "19.0",
            "Other weapons": "25.0",
            "Population": "Kentucky",
            "Rifles": "6.0",
            "Shotguns": "16.0",
            "Total firearms": "116.0",
            "Total murders1": "180.0"
        },
        "2011": {
            "Firearms (type unknown)": "12.0",
            "Handguns": "77.0",
            "Hands, fists, feet, etc.2": "13.0",
            "Knives or cutting instruments": "13.0",
            "Other weapons": "24.0",
            "Population": "4339357",
            "Rifles": "6.0",
            "Shotguns": "5.0",
            "Total firearms": "100.0",
            "Total murders1": "150.0"
        },
        "2012": {
            "Population": "4346655"
        },
        "Name": "Kentucky"
    },
    "LA": {
        "2006": {
            "Firearms (type unknown)": "25.0",
            "Handguns": "335.0",
            "Hands, fists, feet, etc.2": "20.0",
            "Knives or cutting instruments": "35.0",
            "Other weapons": "37.0",
            "Population": "4240327",
            "Rifles": "29.0",
            "Shotguns": "7.0",
            "Total firearms": "396.0",
            "Total murders1": "488.0"
        },
        "2007": {
            "Firearms (type unknown)": "70.0",
            "Handguns": "339.0",
            "Hands, fists, feet, etc.2": "22.0",
            "Knives or cutting instruments": "45.0",
            "Other weapons": "55.0",
            "Population": "4376122",
            "Rifles": "31.0",
            "Shotguns": "15.0",
            "Total firearms": "455.0",
            "Total murders1": "577.0"
        },
        "2008": {
            "Firearms (type unknown)": "36.0",
            "Handguns": "241.0",
            "Hands, fists, feet, etc.2": "14.0",
            "Knives or cutting instruments": "33.0",
            "Other weapons": "34.0",
            "Population": "4451513",
            "Rifles": "20.0",
            "Shotguns": "12.0",
            "Total firearms": "309.0",
            "Total murders1": "390.0"
        },
        "2009": {
            "Firearms (type unknown)": "41.0",
            "Handguns": "330.0",
            "Hands, fists, feet, etc.2": "15.0",
            "Knives or cutting instruments": "32.0",
            "Other weapons": "37.0",
            "Population": "4492076",
            "Rifles": "20.0",
            "Shotguns": "11.0",
            "Total firearms": "402.0",
            "Total murders1": "486.0"
        },
        "2010": {
            "Firearms (type unknown)": "58.0",
            "Handguns": "263.0",
            "Hands, fists, feet, etc.2": "13.0",
            "Knives or cutting instruments": "42.0",
            "Other weapons": "31.0",
            "Population": "Louisiana",
            "Rifles": "19.0",
            "Shotguns": "11.0",
            "Total firearms": "351.0",
            "Total murders1": "437.0"
        },
        "2011": {
            "Firearms (type unknown)": "12.0",
            "Handguns": "372.0",
            "Hands, fists, feet, etc.2": "26.0",
            "Knives or cutting instruments": "28.0",
            "Other weapons": "29.0",
            "Population": "4533372",
            "Rifles": "10.0",
            "Shotguns": "8.0",
            "Total firearms": "402.0",
            "Total murders1": "485.0"
        },
        "2012": {
            "Population": "4544125"
        },
        "Name": "Louisiana"
    },
    "MA": {
        "2006": {
            "Firearms (type unknown)": "40.0",
            "Handguns": "66.0",
            "Hands, fists, feet, etc.2": "4.0",
            "Knives or cutting instruments": "42.0",
            "Other weapons": "28.0",
            "Population": "6466399",
            "Rifles": "2.0",
            "Shotguns": "3.0",
            "Total firearms": "111.0",
            "Total murders1": "185.0"
        },
        "2007": {
            "Firearms (type unknown)": "45.0",
            "Handguns": "65.0",
            "Hands, fists, feet, etc.2": "14.0",
            "Knives or cutting instruments": "31.0",
            "Other weapons": "23.0",
            "Population": "6499275",
            "Rifles": "1.0",
            "Shotguns": "3.0",
            "Total firearms": "114.0",
            "Total murders1": "182.0"
        },
        "2008": {
            "Firearms (type unknown)": "28.0",
            "Handguns": "59.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "49.0",
            "Other weapons": "23.0",
            "Population": "6543595",
            "Rifles": "2.0",
            "Shotguns": "0.0",
            "Total firearms": "89.0",
            "Total murders1": "164.0"
        },
        "2009": {
            "Firearms (type unknown)": "43.0",
            "Handguns": "47.0",
            "Hands, fists, feet, etc.2": "7.0",
            "Knives or cutting instruments": "40.0",
            "Other weapons": "29.0",
            "Population": "6593587",
            "Rifles": "2.0",
            "Shotguns": "1.0",
            "Total firearms": "93.0",
            "Total murders1": "169.0"
        },
        "2010": {
            "Firearms (type unknown)": "65.0",
            "Handguns": "52.0",
            "Hands, fists, feet, etc.2": "10.0",
            "Knives or cutting instruments": "50.0",
            "Other weapons": "31.0",
            "Population": "Massachusetts",
            "Rifles": "0.0",
            "Shotguns": "1.0",
            "Total firearms": "118.0",
            "Total murders1": "209.0"
        },
        "2011": {
            "Firearms (type unknown)": "69.0",
            "Handguns": "52.0",
            "Hands, fists, feet, etc.2": "9.0",
            "Knives or cutting instruments": "30.0",
            "Other weapons": "22.0",
            "Population": "6547629",
            "Rifles": "0.0",
            "Shotguns": "1.0",
            "Total firearms": "122.0",
            "Total murders1": "183.0"
        },
        "2012": {
            "Population": "6563259"
        },
        "Name": "Massachusetts"
    },
    "MD": {
        "2006": {
            "Firearms (type unknown)": "9.0",
            "Handguns": "372.0",
            "Hands, fists, feet, etc.2": "25.0",
            "Knives or cutting instruments": "72.0",
            "Other weapons": "46.0",
            "Population": "5612196",
            "Rifles": "5.0",
            "Shotguns": "17.0",
            "Total firearms": "403.0",
            "Total murders1": "546.0"
        },
        "2007": {
            "Firearms (type unknown)": "6.0",
            "Handguns": "388.0",
            "Hands, fists, feet, etc.2": "23.0",
            "Knives or cutting instruments": "53.0",
            "Other weapons": "63.0",
            "Population": "5634242",
            "Rifles": "9.0",
            "Shotguns": "11.0",
            "Total firearms": "414.0",
            "Total murders1": "553.0"
        },
        "2008": {
            "Firearms (type unknown)": "8.0",
            "Handguns": "328.0",
            "Hands, fists, feet, etc.2": "28.0",
            "Knives or cutting instruments": "61.0",
            "Other weapons": "51.0",
            "Population": "5658655",
            "Rifles": "4.0",
            "Shotguns": "13.0",
            "Total firearms": "353.0",
            "Total murders1": "493.0"
        },
        "2009": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "297.0",
            "Hands, fists, feet, etc.2": "18.0",
            "Knives or cutting instruments": "58.0",
            "Other weapons": "57.0",
            "Population": "5699478",
            "Rifles": "2.0",
            "Shotguns": "6.0",
            "Total firearms": "305.0",
            "Total murders1": "438.0"
        },
        "2010": {
            "Firearms (type unknown)": "6.0",
            "Handguns": "272.0",
            "Hands, fists, feet, etc.2": "19.0",
            "Knives or cutting instruments": "59.0",
            "Other weapons": "53.0",
            "Population": "Maryland",
            "Rifles": "3.0",
            "Shotguns": "12.0",
            "Total firearms": "293.0",
            "Total murders1": "424.0"
        },
        "2011": {
            "Firearms (type unknown)": "3.0",
            "Handguns": "262.0",
            "Hands, fists, feet, etc.2": "17.0",
            "Knives or cutting instruments": "75.0",
            "Other weapons": "34.0",
            "Population": "5773552",
            "Rifles": "2.0",
            "Shotguns": "5.0",
            "Total firearms": "272.0",
            "Total murders1": "398.0"
        },
        "2012": {
            "Population": "5787998"
        },
        "Name": "Maryland"
    },
    "ME": {
        "2006": {
            "Firearms (type unknown)": "2.0",
            "Handguns": "7.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "1.0",
            "Other weapons": "8.0",
            "Population": "1314963",
            "Rifles": "2.0",
            "Shotguns": "1.0",
            "Total firearms": "12.0",
            "Total murders1": "23.0"
        },
        "2007": {
            "Firearms (type unknown)": "5.0",
            "Handguns": "3.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "6.0",
            "Other weapons": "4.0",
            "Population": "1317308",
            "Rifles": "0.0",
            "Shotguns": "1.0",
            "Total firearms": "9.0",
            "Total murders1": "21.0"
        },
        "2008": {
            "Firearms (type unknown)": "3.0",
            "Handguns": "6.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "10.0",
            "Other weapons": "4.0",
            "Population": "1319691",
            "Rifles": "2.0",
            "Shotguns": "0.0",
            "Total firearms": "11.0",
            "Total murders1": "31.0"
        },
        "2009": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "4.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "6.0",
            "Other weapons": "6.0",
            "Population": "1318301",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "11.0",
            "Total murders1": "26.0"
        },
        "2010": {
            "Firearms (type unknown)": "4.0",
            "Handguns": "4.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "6.0",
            "Other weapons": "1.0",
            "Population": "Maine",
            "Rifles": "2.0",
            "Shotguns": "1.0",
            "Total firearms": "11.0",
            "Total murders1": "24.0"
        },
        "2011": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "3.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "7.0",
            "Population": "1328361",
            "Rifles": "1.0",
            "Shotguns": "1.0",
            "Total firearms": "12.0",
            "Total murders1": "25.0"
        },
        "2012": {
            "Population": "1327585"
        },
        "Name": "Maine"
    },
    "MI": {
        "2006": {
            "Firearms (type unknown)": "236.0",
            "Handguns": "208.0",
            "Hands, fists, feet, etc.2": "29.0",
            "Knives or cutting instruments": "50.0",
            "Other weapons": "134.0",
            "Population": "10082438",
            "Rifles": "29.0",
            "Shotguns": "25.0",
            "Total firearms": "498.0",
            "Total murders1": "711.0"
        },
        "2007": {
            "Firearms (type unknown)": "209.0",
            "Handguns": "180.0",
            "Hands, fists, feet, etc.2": "30.0",
            "Knives or cutting instruments": "64.0",
            "Other weapons": "134.0",
            "Population": "10050847",
            "Rifles": "29.0",
            "Shotguns": "26.0",
            "Total firearms": "444.0",
            "Total murders1": "672.0"
        },
        "2008": {
            "Firearms (type unknown)": "186.0",
            "Handguns": "165.0",
            "Hands, fists, feet, etc.2": "27.0",
            "Knives or cutting instruments": "40.0",
            "Other weapons": "94.0",
            "Population": "10002486",
            "Rifles": "16.0",
            "Shotguns": "8.0",
            "Total firearms": "375.0",
            "Total murders1": "536.0"
        },
        "2009": {
            "Firearms (type unknown)": "154.0",
            "Handguns": "239.0",
            "Hands, fists, feet, etc.2": "29.0",
            "Knives or cutting instruments": "47.0",
            "Other weapons": "112.0",
            "Population": "9969727",
            "Rifles": "25.0",
            "Shotguns": "19.0",
            "Total firearms": "437.0",
            "Total murders1": "625.0"
        },
        "2010": {
            "Firearms (type unknown)": "135.0",
            "Handguns": "239.0",
            "Hands, fists, feet, etc.2": "31.0",
            "Knives or cutting instruments": "43.0",
            "Other weapons": "71.0",
            "Population": "Michigan",
            "Rifles": "25.0",
            "Shotguns": "14.0",
            "Total firearms": "413.0",
            "Total murders1": "558.0"
        },
        "2011": {
            "Firearms (type unknown)": "139.0",
            "Handguns": "267.0",
            "Hands, fists, feet, etc.2": "31.0",
            "Knives or cutting instruments": "43.0",
            "Other weapons": "89.0",
            "Population": "9883635",
            "Rifles": "29.0",
            "Shotguns": "15.0",
            "Total firearms": "450.0",
            "Total murders1": "613.0"
        },
        "2012": {
            "Population": "9877670"
        },
        "Name": "Michigan"
    },
    "MN": {
        "2006": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "67.0",
            "Hands, fists, feet, etc.2": "13.0",
            "Knives or cutting instruments": "20.0",
            "Other weapons": "9.0",
            "Population": "5148346",
            "Rifles": "1.0",
            "Shotguns": "7.0",
            "Total firearms": "75.0",
            "Total murders1": "117.0"
        },
        "2007": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "52.0",
            "Hands, fists, feet, etc.2": "11.0",
            "Knives or cutting instruments": "15.0",
            "Other weapons": "20.0",
            "Population": "5191206",
            "Rifles": "7.0",
            "Shotguns": "2.0",
            "Total firearms": "61.0",
            "Total murders1": "107.0"
        },
        "2008": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "51.0",
            "Hands, fists, feet, etc.2": "8.0",
            "Knives or cutting instruments": "22.0",
            "Other weapons": "22.0",
            "Population": "5230567",
            "Rifles": "1.0",
            "Shotguns": "2.0",
            "Total firearms": "54.0",
            "Total murders1": "106.0"
        },
        "2009": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "35.0",
            "Hands, fists, feet, etc.2": "12.0",
            "Knives or cutting instruments": "14.0",
            "Other weapons": "8.0",
            "Population": "5266214",
            "Rifles": "1.0",
            "Shotguns": "1.0",
            "Total firearms": "38.0",
            "Total murders1": "72.0"
        },
        "2010": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "43.0",
            "Hands, fists, feet, etc.2": "8.0",
            "Knives or cutting instruments": "14.0",
            "Other weapons": "16.0",
            "Population": "Minnesota",
            "Rifles": "2.0",
            "Shotguns": "8.0",
            "Total firearms": "53.0",
            "Total murders1": "91.0"
        },
        "2011": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "36.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "12.0",
            "Other weapons": "12.0",
            "Population": "5303925",
            "Rifles": "3.0",
            "Shotguns": "3.0",
            "Total firearms": "43.0",
            "Total murders1": "70.0"
        },
        "2012": {
            "Population": "5310737"
        },
        "Name": "Minnesota"
    },
    "MO": {
        "2006": {
            "Firearms (type unknown)": "123.0",
            "Handguns": "96.0",
            "Hands, fists, feet, etc.2": "11.0",
            "Knives or cutting instruments": "36.0",
            "Other weapons": "41.0",
            "Population": "5861572",
            "Rifles": "13.0",
            "Shotguns": "14.0",
            "Total firearms": "246.0",
            "Total murders1": "334.0"
        },
        "2007": {
            "Firearms (type unknown)": "127.0",
            "Handguns": "92.0",
            "Hands, fists, feet, etc.2": "15.0",
            "Knives or cutting instruments": "34.0",
            "Other weapons": "55.0",
            "Population": "5909824",
            "Rifles": "18.0",
            "Shotguns": "10.0",
            "Total firearms": "247.0",
            "Total murders1": "351.0"
        },
        "2008": {
            "Firearms (type unknown)": "137.0",
            "Handguns": "172.0",
            "Hands, fists, feet, etc.2": "12.0",
            "Knives or cutting instruments": "41.0",
            "Other weapons": "53.0",
            "Population": "5956335",
            "Rifles": "25.0",
            "Shotguns": "15.0",
            "Total firearms": "349.0",
            "Total murders1": "455.0"
        },
        "2009": {
            "Firearms (type unknown)": "87.0",
            "Handguns": "170.0",
            "Hands, fists, feet, etc.2": "15.0",
            "Knives or cutting instruments": "40.0",
            "Other weapons": "50.0",
            "Population": "5987580",
            "Rifles": "8.0",
            "Shotguns": "11.0",
            "Total firearms": "276.0",
            "Total murders1": "381.0"
        },
        "2010": {
            "Firearms (type unknown)": "102.0",
            "Handguns": "189.0",
            "Hands, fists, feet, etc.2": "14.0",
            "Knives or cutting instruments": "35.0",
            "Other weapons": "49.0",
            "Population": "Missouri",
            "Rifles": "26.0",
            "Shotguns": "4.0",
            "Total firearms": "321.0",
            "Total murders1": "419.0"
        },
        "2011": {
            "Firearms (type unknown)": "96.0",
            "Handguns": "158.0",
            "Hands, fists, feet, etc.2": "18.0",
            "Knives or cutting instruments": "28.0",
            "Other weapons": "42.0",
            "Population": "5988924",
            "Rifles": "13.0",
            "Shotguns": "9.0",
            "Total firearms": "276.0",
            "Total murders1": "364.0"
        },
        "2012": {
            "Population": "5996092"
        },
        "Name": "Missouri"
    },
    "MS": {
        "2006": {
            "Firearms (type unknown)": "16.0",
            "Handguns": "93.0",
            "Hands, fists, feet, etc.2": "10.0",
            "Knives or cutting instruments": "18.0",
            "Other weapons": "24.0",
            "Population": "2897150",
            "Rifles": "5.0",
            "Shotguns": "7.0",
            "Total firearms": "121.0",
            "Total murders1": "173.0"
        },
        "2007": {
            "Firearms (type unknown)": "3.0",
            "Handguns": "102.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "15.0",
            "Other weapons": "12.0",
            "Population": "2921723",
            "Rifles": "5.0",
            "Shotguns": "9.0",
            "Total firearms": "119.0",
            "Total murders1": "152.0"
        },
        "2008": {
            "Firearms (type unknown)": "12.0",
            "Handguns": "115.0",
            "Hands, fists, feet, etc.2": "7.0",
            "Knives or cutting instruments": "15.0",
            "Other weapons": "20.0",
            "Population": "2940212",
            "Rifles": "4.0",
            "Shotguns": "11.0",
            "Total firearms": "142.0",
            "Total murders1": "184.0"
        },
        "2009": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "83.0",
            "Hands, fists, feet, etc.2": "9.0",
            "Knives or cutting instruments": "22.0",
            "Other weapons": "15.0",
            "Population": "2951996",
            "Rifles": "9.0",
            "Shotguns": "6.0",
            "Total firearms": "105.0",
            "Total murders1": "151.0"
        },
        "2010": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "98.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "21.0",
            "Other weapons": "19.0",
            "Population": "Mississippi",
            "Rifles": "3.0",
            "Shotguns": "12.0",
            "Total firearms": "120.0",
            "Total murders1": "165.0"
        },
        "2011": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "121.0",
            "Hands, fists, feet, etc.2": "9.0",
            "Knives or cutting instruments": "26.0",
            "Other weapons": "14.0",
            "Population": "2967299",
            "Rifles": "6.0",
            "Shotguns": "4.0",
            "Total firearms": "138.0",
            "Total murders1": "187.0"
        },
        "2012": {
            "Population": "2969137"
        },
        "Name": "Mississippi"
    },
    "MT": {
        "2006": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "4.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "3.0",
            "Other weapons": "7.0",
            "Population": "946230",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "4.0",
            "Total murders1": "17.0"
        },
        "2007": {
            "Firearms (type unknown)": "3.0",
            "Handguns": "5.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "2.0",
            "Other weapons": "1.0",
            "Population": "957225",
            "Rifles": "0.0",
            "Shotguns": "2.0",
            "Total firearms": "10.0",
            "Total murders1": "14.0"
        },
        "2008": {
            "Firearms (type unknown)": "2.0",
            "Handguns": "5.0",
            "Hands, fists, feet, etc.2": "4.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "4.0",
            "Population": "968035",
            "Rifles": "3.0",
            "Shotguns": "1.0",
            "Total firearms": "11.0",
            "Total murders1": "23.0"
        },
        "2009": {
            "Firearms (type unknown)": "3.0",
            "Handguns": "9.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "2.0",
            "Population": "974989",
            "Rifles": "2.0",
            "Shotguns": "5.0",
            "Total firearms": "19.0",
            "Total murders1": "28.0"
        },
        "2010": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "6.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "3.0",
            "Other weapons": "5.0",
            "Population": "Montana",
            "Rifles": "2.0",
            "Shotguns": "4.0",
            "Total firearms": "12.0",
            "Total murders1": "21.0"
        },
        "2011": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "2.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "5.0",
            "Population": "989417",
            "Rifles": "3.0",
            "Shotguns": "1.0",
            "Total firearms": "7.0",
            "Total murders1": "18.0"
        },
        "2012": {
            "Population": "990735"
        },
        "Name": "Montana"
    },
    "NC": {
        "2006": {
            "Firearms (type unknown)": "60.0",
            "Handguns": "227.0",
            "Hands, fists, feet, etc.2": "58.0",
            "Knives or cutting instruments": "59.0",
            "Other weapons": "75.0",
            "Population": "8866977",
            "Rifles": "23.0",
            "Shotguns": "28.0",
            "Total firearms": "338.0",
            "Total murders1": "530.0"
        },
        "2007": {
            "Firearms (type unknown)": "76.0",
            "Handguns": "252.0",
            "Hands, fists, feet, etc.2": "40.0",
            "Knives or cutting instruments": "63.0",
            "Other weapons": "83.0",
            "Population": "9064074",
            "Rifles": "17.0",
            "Shotguns": "24.0",
            "Total firearms": "369.0",
            "Total murders1": "555.0"
        },
        "2008": {
            "Firearms (type unknown)": "54.0",
            "Handguns": "261.0",
            "Hands, fists, feet, etc.2": "68.0",
            "Knives or cutting instruments": "54.0",
            "Other weapons": "102.0",
            "Population": "9247134",
            "Rifles": "22.0",
            "Shotguns": "25.0",
            "Total firearms": "362.0",
            "Total murders1": "586.0"
        },
        "2009": {
            "Firearms (type unknown)": "55.0",
            "Handguns": "243.0",
            "Hands, fists, feet, etc.2": "32.0",
            "Knives or cutting instruments": "49.0",
            "Other weapons": "64.0",
            "Population": "9380884",
            "Rifles": "17.0",
            "Shotguns": "20.0",
            "Total firearms": "335.0",
            "Total murders1": "480.0"
        },
        "2010": {
            "Firearms (type unknown)": "52.0",
            "Handguns": "188.0",
            "Hands, fists, feet, etc.2": "31.0",
            "Knives or cutting instruments": "56.0",
            "Other weapons": "72.0",
            "Population": "North Carolina",
            "Rifles": "21.0",
            "Shotguns": "25.0",
            "Total firearms": "286.0",
            "Total murders1": "445.0"
        },
        "2011": {
            "Firearms (type unknown)": "55.0",
            "Handguns": "235.0",
            "Hands, fists, feet, etc.2": "37.0",
            "Knives or cutting instruments": "60.0",
            "Other weapons": "57.0",
            "Population": "9535471",
            "Rifles": "26.0",
            "Shotguns": "19.0",
            "Total firearms": "335.0",
            "Total murders1": "489.0"
        },
        "2012": {
            "Population": "9559048"
        },
        "Name": "North Carolina"
    },
    "ND": {
        "2006": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "1.0",
            "Hands, fists, feet, etc.2": "0.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "3.0",
            "Population": "636771",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "1.0",
            "Total murders1": "8.0"
        },
        "2007": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "3.0",
            "Hands, fists, feet, etc.2": "4.0",
            "Knives or cutting instruments": "1.0",
            "Other weapons": "4.0",
            "Population": "638202",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "3.0",
            "Total murders1": "12.0"
        },
        "2008": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "0.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "2.0",
            "Other weapons": "0.0",
            "Population": "641421",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "0.0",
            "Total murders1": "3.0"
        },
        "2009": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "1.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "0.0",
            "Other weapons": "3.0",
            "Population": "646844",
            "Rifles": "1.0",
            "Shotguns": "1.0",
            "Total firearms": "3.0",
            "Total murders1": "9.0"
        },
        "2010": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "3.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "0.0",
            "Other weapons": "4.0",
            "Population": "North Dakota",
            "Rifles": "0.0",
            "Shotguns": "1.0",
            "Total firearms": "4.0",
            "Total murders1": "9.0"
        },
        "2011": {
            "Firearms (type unknown)": "3.0",
            "Handguns": "3.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "0.0",
            "Population": "672591",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "6.0",
            "Total murders1": "12.0"
        },
        "2012": {
            "Population": "674363"
        },
        "Name": "North Dakota"
    },
    "NE": {
        "2006": {
            "Firearms (type unknown)": "2.0",
            "Handguns": "2.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "2.0",
            "Other weapons": "7.0",
            "Population": "1760435",
            "Rifles": "1.0",
            "Shotguns": "0.0",
            "Total firearms": "5.0",
            "Total murders1": "16.0"
        },
        "2007": {
            "Firearms (type unknown)": "2.0",
            "Handguns": "7.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "2.0",
            "Other weapons": "6.0",
            "Population": "1769912",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "9.0",
            "Total murders1": "22.0"
        },
        "2008": {
            "Firearms (type unknown)": "5.0",
            "Handguns": "1.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "8.0",
            "Population": "1781949",
            "Rifles": "1.0",
            "Shotguns": "2.0",
            "Total firearms": "9.0",
            "Total murders1": "22.0"
        },
        "2009": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "22.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "8.0",
            "Other weapons": "4.0",
            "Population": "1796619",
            "Rifles": "1.0",
            "Shotguns": "0.0",
            "Total firearms": "23.0",
            "Total murders1": "40.0"
        },
        "2010": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "29.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "8.0",
            "Other weapons": "5.0",
            "Population": "Nebraska",
            "Rifles": "1.0",
            "Shotguns": "2.0",
            "Total firearms": "32.0",
            "Total murders1": "51.0"
        },
        "2011": {
            "Firearms (type unknown)": "4.0",
            "Handguns": "35.0",
            "Hands, fists, feet, etc.2": "7.0",
            "Knives or cutting instruments": "7.0",
            "Other weapons": "9.0",
            "Population": "1826341",
            "Rifles": "2.0",
            "Shotguns": "1.0",
            "Total firearms": "42.0",
            "Total murders1": "65.0"
        },
        "2012": {
            "Population": "1829696"
        },
        "Name": "Nebraska"
    },
    "NH": {
        "2006": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "2.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "6.0",
            "Other weapons": "1.0",
            "Population": "1311894",
            "Rifles": "0.0",
            "Shotguns": "1.0",
            "Total firearms": "3.0",
            "Total murders1": "12.0"
        },
        "2007": {
            "Firearms (type unknown)": "2.0",
            "Handguns": "5.0",
            "Hands, fists, feet, etc.2": "0.0",
            "Knives or cutting instruments": "2.0",
            "Other weapons": "2.0",
            "Population": "1317343",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "7.0",
            "Total murders1": "11.0"
        },
        "2008": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "1.0",
            "Hands, fists, feet, etc.2": "0.0",
            "Knives or cutting instruments": "3.0",
            "Other weapons": "7.0",
            "Population": "1321872",
            "Rifles": "1.0",
            "Shotguns": "0.0",
            "Total firearms": "2.0",
            "Total murders1": "12.0"
        },
        "2009": {
            "Firearms (type unknown)": "3.0",
            "Handguns": "1.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "3.0",
            "Other weapons": "2.0",
            "Population": "1324575",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "4.0",
            "Total murders1": "10.0"
        },
        "2010": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "2.0",
            "Hands, fists, feet, etc.2": "0.0",
            "Knives or cutting instruments": "5.0",
            "Other weapons": "3.0",
            "Population": "New Hampshire",
            "Rifles": "0.0",
            "Shotguns": "2.0",
            "Total firearms": "5.0",
            "Total murders1": "13.0"
        },
        "2011": {
            "Firearms (type unknown)": "2.0",
            "Handguns": "1.0",
            "Hands, fists, feet, etc.2": "0.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "6.0",
            "Population": "1316469",
            "Rifles": "2.0",
            "Shotguns": "1.0",
            "Total firearms": "6.0",
            "Total murders1": "16.0"
        },
        "2012": {
            "Population": "1316843"
        },
        "Name": "New Hampshire"
    },
    "NJ": {
        "2006": {
            "Firearms (type unknown)": "12.0",
            "Handguns": "270.0",
            "Hands, fists, feet, etc.2": "23.0",
            "Knives or cutting instruments": "69.0",
            "Other weapons": "47.0",
            "Population": "8623721",
            "Rifles": "0.0",
            "Shotguns": "7.0",
            "Total firearms": "289.0",
            "Total murders1": "428.0"
        },
        "2007": {
            "Firearms (type unknown)": "10.0",
            "Handguns": "244.0",
            "Hands, fists, feet, etc.2": "37.0",
            "Knives or cutting instruments": "46.0",
            "Other weapons": "37.0",
            "Population": "8636043",
            "Rifles": "1.0",
            "Shotguns": "5.0",
            "Total firearms": "260.0",
            "Total murders1": "380.0"
        },
        "2008": {
            "Firearms (type unknown)": "30.0",
            "Handguns": "202.0",
            "Hands, fists, feet, etc.2": "34.0",
            "Knives or cutting instruments": "67.0",
            "Other weapons": "39.0",
            "Population": "8663398",
            "Rifles": "1.0",
            "Shotguns": "3.0",
            "Total firearms": "236.0",
            "Total murders1": "376.0"
        },
        "2009": {
            "Firearms (type unknown)": "22.0",
            "Handguns": "189.0",
            "Hands, fists, feet, etc.2": "19.0",
            "Knives or cutting instruments": "44.0",
            "Other weapons": "36.0",
            "Population": "8707739",
            "Rifles": "3.0",
            "Shotguns": "6.0",
            "Total firearms": "220.0",
            "Total murders1": "319.0"
        },
        "2010": {
            "Firearms (type unknown)": "21.0",
            "Handguns": "216.0",
            "Hands, fists, feet, etc.2": "28.0",
            "Knives or cutting instruments": "50.0",
            "Other weapons": "39.0",
            "Population": "New Jersey",
            "Rifles": "7.0",
            "Shotguns": "2.0",
            "Total firearms": "246.0",
            "Total murders1": "363.0"
        },
        "2011": {
            "Firearms (type unknown)": "25.0",
            "Handguns": "238.0",
            "Hands, fists, feet, etc.2": "18.0",
            "Knives or cutting instruments": "51.0",
            "Other weapons": "41.0",
            "Population": "8791898",
            "Rifles": "1.0",
            "Shotguns": "5.0",
            "Total firearms": "269.0",
            "Total murders1": "379.0"
        },
        "2012": {
            "Population": "8803388"
        },
        "Name": "New Jersey"
    },
    "NM": {
        "2006": {
            "Firearms (type unknown)": "3.0",
            "Handguns": "48.0",
            "Hands, fists, feet, etc.2": "14.0",
            "Knives or cutting instruments": "21.0",
            "Other weapons": "7.0",
            "Population": "1942608",
            "Rifles": "3.0",
            "Shotguns": "3.0",
            "Total firearms": "57.0",
            "Total murders1": "99.0"
        },
        "2007": {
            "Firearms (type unknown)": "4.0",
            "Handguns": "66.0",
            "Hands, fists, feet, etc.2": "21.0",
            "Knives or cutting instruments": "20.0",
            "Other weapons": "26.0",
            "Population": "1968731",
            "Rifles": "10.0",
            "Shotguns": "1.0",
            "Total firearms": "81.0",
            "Total murders1": "148.0"
        },
        "2008": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "70.0",
            "Hands, fists, feet, etc.2": "11.0",
            "Knives or cutting instruments": "22.0",
            "Other weapons": "13.0",
            "Population": "1986763",
            "Rifles": "4.0",
            "Shotguns": "7.0",
            "Total firearms": "88.0",
            "Total murders1": "134.0"
        },
        "2009": {
            "Firearms (type unknown)": "19.0",
            "Handguns": "54.0",
            "Hands, fists, feet, etc.2": "13.0",
            "Knives or cutting instruments": "24.0",
            "Other weapons": "29.0",
            "Population": "2009671",
            "Rifles": "2.0",
            "Shotguns": "3.0",
            "Total firearms": "78.0",
            "Total murders1": "144.0"
        },
        "2010": {
            "Firearms (type unknown)": "23.0",
            "Handguns": "36.0",
            "Hands, fists, feet, etc.2": "7.0",
            "Knives or cutting instruments": "29.0",
            "Other weapons": "15.0",
            "Population": "New Mexico",
            "Rifles": "6.0",
            "Shotguns": "2.0",
            "Total firearms": "67.0",
            "Total murders1": "118.0"
        },
        "2011": {
            "Firearms (type unknown)": "11.0",
            "Handguns": "45.0",
            "Hands, fists, feet, etc.2": "8.0",
            "Knives or cutting instruments": "21.0",
            "Other weapons": "32.0",
            "Population": "2059180",
            "Rifles": "2.0",
            "Shotguns": "2.0",
            "Total firearms": "60.0",
            "Total murders1": "121.0"
        },
        "2012": {
            "Population": "2064767"
        },
        "Name": "New Mexico"
    },
    "NV": {
        "2006": {
            "Firearms (type unknown)": "32.0",
            "Handguns": "88.0",
            "Hands, fists, feet, etc.2": "12.0",
            "Knives or cutting instruments": "34.0",
            "Other weapons": "45.0",
            "Population": "2493405",
            "Rifles": "4.0",
            "Shotguns": "9.0",
            "Total firearms": "133.0",
            "Total murders1": "224.0"
        },
        "2007": {
            "Firearms (type unknown)": "20.0",
            "Handguns": "92.0",
            "Hands, fists, feet, etc.2": "12.0",
            "Knives or cutting instruments": "25.0",
            "Other weapons": "32.0",
            "Population": "2567752",
            "Rifles": "7.0",
            "Shotguns": "4.0",
            "Total firearms": "123.0",
            "Total murders1": "192.0"
        },
        "2008": {
            "Firearms (type unknown)": "26.0",
            "Handguns": "60.0",
            "Hands, fists, feet, etc.2": "8.0",
            "Knives or cutting instruments": "27.0",
            "Other weapons": "35.0",
            "Population": "2615772",
            "Rifles": "1.0",
            "Shotguns": "6.0",
            "Total firearms": "93.0",
            "Total murders1": "163.0"
        },
        "2009": {
            "Firearms (type unknown)": "21.0",
            "Handguns": "66.0",
            "Hands, fists, feet, etc.2": "13.0",
            "Knives or cutting instruments": "25.0",
            "Other weapons": "27.0",
            "Population": "2643085",
            "Rifles": "1.0",
            "Shotguns": "3.0",
            "Total firearms": "91.0",
            "Total murders1": "156.0"
        },
        "2010": {
            "Firearms (type unknown)": "16.0",
            "Handguns": "57.0",
            "Hands, fists, feet, etc.2": "18.0",
            "Knives or cutting instruments": "22.0",
            "Other weapons": "34.0",
            "Population": "Nevada",
            "Rifles": "5.0",
            "Shotguns": "6.0",
            "Total firearms": "84.0",
            "Total murders1": "158.0"
        },
        "2011": {
            "Firearms (type unknown)": "26.0",
            "Handguns": "46.0",
            "Hands, fists, feet, etc.2": "9.0",
            "Knives or cutting instruments": "20.0",
            "Other weapons": "25.0",
            "Population": "2700552",
            "Rifles": "2.0",
            "Shotguns": "1.0",
            "Total firearms": "75.0",
            "Total murders1": "129.0"
        },
        "2012": {
            "Population": "2703758"
        },
        "Name": "Nevada"
    },
    "NY": {
        "2006": {
            "Firearms (type unknown)": "70.0",
            "Handguns": "308.0",
            "Hands, fists, feet, etc.2": "29.0",
            "Knives or cutting instruments": "141.0",
            "Other weapons": "351.0",
            "Population": "19356564",
            "Rifles": "14.0",
            "Shotguns": "8.0",
            "Total firearms": "400.0",
            "Total murders1": "921.0"
        },
        "2007": {
            "Firearms (type unknown)": "366.0",
            "Handguns": "113.0",
            "Hands, fists, feet, etc.2": "34.0",
            "Knives or cutting instruments": "142.0",
            "Other weapons": "124.0",
            "Population": "19422777",
            "Rifles": "12.0",
            "Shotguns": "9.0",
            "Total firearms": "500.0",
            "Total murders1": "800.0"
        },
        "2008": {
            "Firearms (type unknown)": "336.0",
            "Handguns": "107.0",
            "Hands, fists, feet, etc.2": "29.0",
            "Knives or cutting instruments": "184.0",
            "Other weapons": "147.0",
            "Population": "19467789",
            "Rifles": "12.0",
            "Shotguns": "20.0",
            "Total firearms": "475.0",
            "Total murders1": "835.0"
        },
        "2009": {
            "Firearms (type unknown)": "343.0",
            "Handguns": "117.0",
            "Hands, fists, feet, etc.2": "23.0",
            "Knives or cutting instruments": "166.0",
            "Other weapons": "109.0",
            "Population": "19541453",
            "Rifles": "8.0",
            "Shotguns": "13.0",
            "Total firearms": "481.0",
            "Total murders1": "779.0"
        },
        "2010": {
            "Firearms (type unknown)": "364.0",
            "Handguns": "135.0",
            "Hands, fists, feet, etc.2": "22.0",
            "Knives or cutting instruments": "173.0",
            "Other weapons": "148.0",
            "Population": "New York",
            "Rifles": "6.0",
            "Shotguns": "12.0",
            "Total firearms": "517.0",
            "Total murders1": "860.0"
        },
        "2011": {
            "Firearms (type unknown)": "30.0",
            "Handguns": "394.0",
            "Hands, fists, feet, etc.2": "26.0",
            "Knives or cutting instruments": "160.0",
            "Other weapons": "143.0",
            "Population": "19378104",
            "Rifles": "5.0",
            "Shotguns": "16.0",
            "Total firearms": "445.0",
            "Total murders1": "774.0"
        },
        "2012": {
            "Population": "19399242"
        },
        "Name": "New York"
    },
    "OH": {
        "2006": {
            "Firearms (type unknown)": "90.0",
            "Handguns": "233.0",
            "Hands, fists, feet, etc.2": "29.0",
            "Knives or cutting instruments": "40.0",
            "Other weapons": "84.0",
            "Population": "11492495",
            "Rifles": "3.0",
            "Shotguns": "8.0",
            "Total firearms": "334.0",
            "Total murders1": "487.0"
        },
        "2007": {
            "Firearms (type unknown)": "91.0",
            "Handguns": "187.0",
            "Hands, fists, feet, etc.2": "41.0",
            "Knives or cutting instruments": "45.0",
            "Other weapons": "101.0",
            "Population": "11520815",
            "Rifles": "6.0",
            "Shotguns": "15.0",
            "Total firearms": "299.0",
            "Total murders1": "486.0"
        },
        "2008": {
            "Firearms (type unknown)": "108.0",
            "Handguns": "175.0",
            "Hands, fists, feet, etc.2": "39.0",
            "Knives or cutting instruments": "38.0",
            "Other weapons": "90.0",
            "Population": "11528072",
            "Rifles": "5.0",
            "Shotguns": "5.0",
            "Total firearms": "293.0",
            "Total murders1": "460.0"
        },
        "2009": {
            "Firearms (type unknown)": "107.0",
            "Handguns": "193.0",
            "Hands, fists, feet, etc.2": "44.0",
            "Knives or cutting instruments": "52.0",
            "Other weapons": "95.0",
            "Population": "11542645",
            "Rifles": "2.0",
            "Shotguns": "9.0",
            "Total firearms": "311.0",
            "Total murders1": "502.0"
        },
        "2010": {
            "Firearms (type unknown)": "125.0",
            "Handguns": "176.0",
            "Hands, fists, feet, etc.2": "17.0",
            "Knives or cutting instruments": "40.0",
            "Other weapons": "93.0",
            "Population": "Ohio",
            "Rifles": "7.0",
            "Shotguns": "2.0",
            "Total firearms": "310.0",
            "Total murders1": "460.0"
        },
        "2011": {
            "Firearms (type unknown)": "136.0",
            "Handguns": "187.0",
            "Hands, fists, feet, etc.2": "20.0",
            "Knives or cutting instruments": "44.0",
            "Other weapons": "80.0",
            "Population": "11536502",
            "Rifles": "8.0",
            "Shotguns": "13.0",
            "Total firearms": "344.0",
            "Total murders1": "488.0"
        },
        "2012": {
            "Population": "11538290"
        },
        "Name": "Ohio"
    },
    "OK": {
        "2006": {
            "Firearms (type unknown)": "24.0",
            "Handguns": "85.0",
            "Hands, fists, feet, etc.2": "21.0",
            "Knives or cutting instruments": "18.0",
            "Other weapons": "35.0",
            "Population": "3574334",
            "Rifles": "12.0",
            "Shotguns": "12.0",
            "Total firearms": "133.0",
            "Total murders1": "207.0"
        },
        "2007": {
            "Firearms (type unknown)": "10.0",
            "Handguns": "105.0",
            "Hands, fists, feet, etc.2": "19.0",
            "Knives or cutting instruments": "35.0",
            "Other weapons": "36.0",
            "Population": "3612186",
            "Rifles": "9.0",
            "Shotguns": "8.0",
            "Total firearms": "132.0",
            "Total murders1": "222.0"
        },
        "2008": {
            "Firearms (type unknown)": "6.0",
            "Handguns": "106.0",
            "Hands, fists, feet, etc.2": "23.0",
            "Knives or cutting instruments": "33.0",
            "Other weapons": "28.0",
            "Population": "3644025",
            "Rifles": "6.0",
            "Shotguns": "10.0",
            "Total firearms": "128.0",
            "Total murders1": "212.0"
        },
        "2009": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "104.0",
            "Hands, fists, feet, etc.2": "30.0",
            "Knives or cutting instruments": "45.0",
            "Other weapons": "25.0",
            "Population": "3687050",
            "Rifles": "10.0",
            "Shotguns": "4.0",
            "Total firearms": "125.0",
            "Total murders1": "225.0"
        },
        "2010": {
            "Firearms (type unknown)": "10.0",
            "Handguns": "86.0",
            "Hands, fists, feet, etc.2": "21.0",
            "Knives or cutting instruments": "24.0",
            "Other weapons": "32.0",
            "Population": "Oklahoma",
            "Rifles": "8.0",
            "Shotguns": "7.0",
            "Total firearms": "111.0",
            "Total murders1": "188.0"
        },
        "2011": {
            "Firearms (type unknown)": "15.0",
            "Handguns": "99.0",
            "Hands, fists, feet, etc.2": "26.0",
            "Knives or cutting instruments": "26.0",
            "Other weapons": "21.0",
            "Population": "3751354",
            "Rifles": "8.0",
            "Shotguns": "9.0",
            "Total firearms": "131.0",
            "Total murders1": "204.0"
        },
        "2012": {
            "Population": "3759482"
        },
        "Name": "Oklahoma"
    },
    "OR": {
        "2006": {
            "Firearms (type unknown)": "22.0",
            "Handguns": "16.0",
            "Hands, fists, feet, etc.2": "7.0",
            "Knives or cutting instruments": "22.0",
            "Other weapons": "12.0",
            "Population": "3677545",
            "Rifles": "4.0",
            "Shotguns": "2.0",
            "Total firearms": "44.0",
            "Total murders1": "85.0"
        },
        "2007": {
            "Firearms (type unknown)": "17.0",
            "Handguns": "15.0",
            "Hands, fists, feet, etc.2": "4.0",
            "Knives or cutting instruments": "12.0",
            "Other weapons": "18.0",
            "Population": "3732957",
            "Rifles": "2.0",
            "Shotguns": "4.0",
            "Total firearms": "38.0",
            "Total murders1": "72.0"
        },
        "2008": {
            "Firearms (type unknown)": "19.0",
            "Handguns": "24.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "16.0",
            "Other weapons": "18.0",
            "Population": "3782991",
            "Rifles": "2.0",
            "Shotguns": "2.0",
            "Total firearms": "47.0",
            "Total murders1": "82.0"
        },
        "2009": {
            "Firearms (type unknown)": "20.0",
            "Handguns": "9.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "21.0",
            "Other weapons": "19.0",
            "Population": "3825657",
            "Rifles": "2.0",
            "Shotguns": "10.0",
            "Total firearms": "41.0",
            "Total murders1": "83.0"
        },
        "2010": {
            "Firearms (type unknown)": "13.0",
            "Handguns": "20.0",
            "Hands, fists, feet, etc.2": "9.0",
            "Knives or cutting instruments": "16.0",
            "Other weapons": "17.0",
            "Population": "Oregon",
            "Rifles": "1.0",
            "Shotguns": "2.0",
            "Total firearms": "36.0",
            "Total murders1": "78.0"
        },
        "2011": {
            "Firearms (type unknown)": "24.0",
            "Handguns": "13.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "22.0",
            "Other weapons": "10.0",
            "Population": "3831073",
            "Rifles": "1.0",
            "Shotguns": "2.0",
            "Total firearms": "40.0",
            "Total murders1": "77.0"
        },
        "2012": {
            "Population": "3838212"
        },
        "Name": "Oregon"
    },
    "PA": {
        "2006": {
            "Firearms (type unknown)": "55.0",
            "Handguns": "474.0",
            "Hands, fists, feet, etc.2": "27.0",
            "Knives or cutting instruments": "51.0",
            "Other weapons": "87.0",
            "Population": "12471142",
            "Rifles": "14.0",
            "Shotguns": "11.0",
            "Total firearms": "554.0",
            "Total murders1": "719.0"
        },
        "2007": {
            "Firearms (type unknown)": "60.0",
            "Handguns": "439.0",
            "Hands, fists, feet, etc.2": "23.0",
            "Knives or cutting instruments": "81.0",
            "Other weapons": "88.0",
            "Population": "12522531",
            "Rifles": "18.0",
            "Shotguns": "10.0",
            "Total firearms": "527.0",
            "Total murders1": "719.0"
        },
        "2008": {
            "Firearms (type unknown)": "92.0",
            "Handguns": "398.0",
            "Hands, fists, feet, etc.2": "27.0",
            "Knives or cutting instruments": "66.0",
            "Other weapons": "86.0",
            "Population": "12566368",
            "Rifles": "15.0",
            "Shotguns": "16.0",
            "Total firearms": "521.0",
            "Total murders1": "700.0"
        },
        "2009": {
            "Firearms (type unknown)": "71.0",
            "Handguns": "373.0",
            "Hands, fists, feet, etc.2": "24.0",
            "Knives or cutting instruments": "66.0",
            "Other weapons": "100.0",
            "Population": "12604767",
            "Rifles": "13.0",
            "Shotguns": "11.0",
            "Total firearms": "468.0",
            "Total murders1": "658.0"
        },
        "2010": {
            "Firearms (type unknown)": "71.0",
            "Handguns": "367.0",
            "Hands, fists, feet, etc.2": "28.0",
            "Knives or cutting instruments": "67.0",
            "Other weapons": "94.0",
            "Population": "Pennsylvania",
            "Rifles": "8.0",
            "Shotguns": "11.0",
            "Total firearms": "457.0",
            "Total murders1": "646.0"
        },
        "2011": {
            "Firearms (type unknown)": "64.0",
            "Handguns": "379.0",
            "Hands, fists, feet, etc.2": "27.0",
            "Knives or cutting instruments": "73.0",
            "Other weapons": "66.0",
            "Population": "12702379",
            "Rifles": "8.0",
            "Shotguns": "19.0",
            "Total firearms": "470.0",
            "Total murders1": "636.0"
        },
        "2012": {
            "Population": "12711308"
        },
        "Name": "Pennsylvania"
    },
    "RI": {
        "2006": {
            "Firearms (type unknown)": "4.0",
            "Handguns": "3.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "8.0",
            "Other weapons": "11.0",
            "Population": "1060196",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "7.0",
            "Total murders1": "28.0"
        },
        "2007": {
            "Firearms (type unknown)": "6.0",
            "Handguns": "3.0",
            "Hands, fists, feet, etc.2": "0.0",
            "Knives or cutting instruments": "7.0",
            "Other weapons": "3.0",
            "Population": "1055009",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "9.0",
            "Total murders1": "19.0"
        },
        "2008": {
            "Firearms (type unknown)": "9.0",
            "Handguns": "9.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "6.0",
            "Other weapons": "4.0",
            "Population": "1053502",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "18.0",
            "Total murders1": "29.0"
        },
        "2009": {
            "Firearms (type unknown)": "18.0",
            "Handguns": "0.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "6.0",
            "Other weapons": "5.0",
            "Population": "1053209",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "18.0",
            "Total murders1": "31.0"
        },
        "2010": {
            "Firearms (type unknown)": "12.0",
            "Handguns": "2.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "5.0",
            "Other weapons": "6.0",
            "Population": "Rhode Island",
            "Rifles": "1.0",
            "Shotguns": "1.0",
            "Total firearms": "16.0",
            "Total murders1": "29.0"
        },
        "2011": {
            "Firearms (type unknown)": "4.0",
            "Handguns": "1.0",
            "Hands, fists, feet, etc.2": "0.0",
            "Knives or cutting instruments": "5.0",
            "Other weapons": "4.0",
            "Population": "1052567",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "5.0",
            "Total murders1": "14.0"
        },
        "2012": {
            "Population": "1052769"
        },
        "Name": "Rhode Island"
    },
    "SC": {
        "2006": {
            "Firearms (type unknown)": "66.0",
            "Handguns": "163.0",
            "Hands, fists, feet, etc.2": "20.0",
            "Knives or cutting instruments": "44.0",
            "Other weapons": "42.0",
            "Population": "4339399",
            "Rifles": "10.0",
            "Shotguns": "14.0",
            "Total firearms": "253.0",
            "Total murders1": "359.0"
        },
        "2007": {
            "Firearms (type unknown)": "67.0",
            "Handguns": "144.0",
            "Hands, fists, feet, etc.2": "14.0",
            "Knives or cutting instruments": "40.0",
            "Other weapons": "60.0",
            "Population": "4424232",
            "Rifles": "6.0",
            "Shotguns": "18.0",
            "Total firearms": "235.0",
            "Total murders1": "349.0"
        },
        "2008": {
            "Firearms (type unknown)": "54.0",
            "Handguns": "125.0",
            "Hands, fists, feet, etc.2": "24.0",
            "Knives or cutting instruments": "31.0",
            "Other weapons": "43.0",
            "Population": "4503280",
            "Rifles": "9.0",
            "Shotguns": "18.0",
            "Total firearms": "206.0",
            "Total murders1": "304.0"
        },
        "2009": {
            "Firearms (type unknown)": "66.0",
            "Handguns": "115.0",
            "Hands, fists, feet, etc.2": "20.0",
            "Knives or cutting instruments": "28.0",
            "Other weapons": "41.0",
            "Population": "4561242",
            "Rifles": "4.0",
            "Shotguns": "12.0",
            "Total firearms": "197.0",
            "Total murders1": "286.0"
        },
        "2010": {
            "Firearms (type unknown)": "56.0",
            "Handguns": "136.0",
            "Hands, fists, feet, etc.2": "17.0",
            "Knives or cutting instruments": "22.0",
            "Other weapons": "34.0",
            "Population": "South Carolina",
            "Rifles": "8.0",
            "Shotguns": "7.0",
            "Total firearms": "207.0",
            "Total murders1": "280.0"
        },
        "2011": {
            "Firearms (type unknown)": "75.0",
            "Handguns": "126.0",
            "Hands, fists, feet, etc.2": "18.0",
            "Knives or cutting instruments": "38.0",
            "Other weapons": "40.0",
            "Population": "4625364",
            "Rifles": "10.0",
            "Shotguns": "12.0",
            "Total firearms": "223.0",
            "Total murders1": "319.0"
        },
        "2012": {
            "Population": "4635835"
        },
        "Name": "South Carolina"
    },
    "SD": {
        "2006": {
            "Firearms (type unknown)": "2.0",
            "Handguns": "0.0",
            "Hands, fists, feet, etc.2": "0.0",
            "Knives or cutting instruments": "2.0",
            "Other weapons": "4.0",
            "Population": "788519",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "2.0",
            "Total murders1": "8.0"
        },
        "2007": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "2.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "3.0",
            "Other weapons": "6.0",
            "Population": "797035",
            "Rifles": "1.0",
            "Shotguns": "1.0",
            "Total firearms": "4.0",
            "Total murders1": "15.0"
        },
        "2008": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "4.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "1.0",
            "Other weapons": "7.0",
            "Population": "804532",
            "Rifles": "0.0",
            "Shotguns": "2.0",
            "Total firearms": "13.0",
            "Total murders1": "22.0"
        },
        "2009": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "0.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "5.0",
            "Other weapons": "1.0",
            "Population": "812383",
            "Rifles": "1.0",
            "Shotguns": "2.0",
            "Total firearms": "4.0",
            "Total murders1": "11.0"
        },
        "2010": {
            "Firearms (type unknown)": "4.0",
            "Handguns": "3.0",
            "Hands, fists, feet, etc.2": "0.0",
            "Knives or cutting instruments": "2.0",
            "Other weapons": "4.0",
            "Population": "South Dakota",
            "Rifles": "0.0",
            "Shotguns": "1.0",
            "Total firearms": "8.0",
            "Total murders1": "14.0"
        },
        "2011": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "3.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "3.0",
            "Population": "814180",
            "Rifles": "1.0",
            "Shotguns": "0.0",
            "Total firearms": "5.0",
            "Total murders1": "15.0"
        },
        "2012": {
            "Population": "816223"
        },
        "Name": "South Dakota"
    },
    "TN": {
        "2006": {
            "Firearms (type unknown)": "37.0",
            "Handguns": "211.0",
            "Hands, fists, feet, etc.2": "24.0",
            "Knives or cutting instruments": "43.0",
            "Other weapons": "71.0",
            "Population": "6089453",
            "Rifles": "11.0",
            "Shotguns": "12.0",
            "Total firearms": "271.0",
            "Total murders1": "409.0"
        },
        "2007": {
            "Firearms (type unknown)": "40.0",
            "Handguns": "190.0",
            "Hands, fists, feet, etc.2": "23.0",
            "Knives or cutting instruments": "50.0",
            "Other weapons": "72.0",
            "Population": "6172862",
            "Rifles": "11.0",
            "Shotguns": "11.0",
            "Total firearms": "252.0",
            "Total murders1": "397.0"
        },
        "2008": {
            "Firearms (type unknown)": "40.0",
            "Handguns": "170.0",
            "Hands, fists, feet, etc.2": "24.0",
            "Knives or cutting instruments": "53.0",
            "Other weapons": "91.0",
            "Population": "6240456",
            "Rifles": "11.0",
            "Shotguns": "19.0",
            "Total firearms": "240.0",
            "Total murders1": "408.0"
        },
        "2009": {
            "Firearms (type unknown)": "60.0",
            "Handguns": "200.0",
            "Hands, fists, feet, etc.2": "29.0",
            "Knives or cutting instruments": "45.0",
            "Other weapons": "92.0",
            "Population": "6296254",
            "Rifles": "13.0",
            "Shotguns": "22.0",
            "Total firearms": "295.0",
            "Total murders1": "461.0"
        },
        "2010": {
            "Firearms (type unknown)": "50.0",
            "Handguns": "146.0",
            "Hands, fists, feet, etc.2": "19.0",
            "Knives or cutting instruments": "35.0",
            "Other weapons": "83.0",
            "Population": "Tennessee",
            "Rifles": "12.0",
            "Shotguns": "11.0",
            "Total firearms": "219.0",
            "Total murders1": "356.0"
        },
        "2011": {
            "Firearms (type unknown)": "52.0",
            "Handguns": "172.0",
            "Hands, fists, feet, etc.2": "16.0",
            "Knives or cutting instruments": "51.0",
            "Other weapons": "62.0",
            "Population": "6346113",
            "Rifles": "7.0",
            "Shotguns": "13.0",
            "Total firearms": "244.0",
            "Total murders1": "373.0"
        },
        "2012": {
            "Population": "6356673"
        },
        "Name": "Tennessee"
    },
    "TX": {
        "2006": {
            "Firearms (type unknown)": "114.0",
            "Handguns": "711.0",
            "Hands, fists, feet, etc.2": "87.0",
            "Knives or cutting instruments": "162.0",
            "Other weapons": "183.0",
            "Population": "23369024",
            "Rifles": "53.0",
            "Shotguns": "71.0",
            "Total firearms": "949.0",
            "Total murders1": "1381.0"
        },
        "2007": {
            "Firearms (type unknown)": "101.0",
            "Handguns": "727.0",
            "Hands, fists, feet, etc.2": "93.0",
            "Knives or cutting instruments": "177.0",
            "Other weapons": "203.0",
            "Population": "23837701",
            "Rifles": "58.0",
            "Shotguns": "60.0",
            "Total firearms": "946.0",
            "Total murders1": "1419.0"
        },
        "2008": {
            "Firearms (type unknown)": "79.0",
            "Handguns": "706.0",
            "Hands, fists, feet, etc.2": "107.0",
            "Knives or cutting instruments": "230.0",
            "Other weapons": "140.0",
            "Population": "24304290",
            "Rifles": "58.0",
            "Shotguns": "52.0",
            "Total firearms": "895.0",
            "Total murders1": "1372.0"
        },
        "2009": {
            "Firearms (type unknown)": "88.0",
            "Handguns": "661.0",
            "Hands, fists, feet, etc.2": "113.0",
            "Knives or cutting instruments": "197.0",
            "Other weapons": "153.0",
            "Population": "24782302",
            "Rifles": "55.0",
            "Shotguns": "58.0",
            "Total firearms": "862.0",
            "Total murders1": "1325.0"
        },
        "2010": {
            "Firearms (type unknown)": "142.0",
            "Handguns": "581.0",
            "Hands, fists, feet, etc.2": "109.0",
            "Knives or cutting instruments": "202.0",
            "Other weapons": "130.0",
            "Population": "Texas",
            "Rifles": "34.0",
            "Shotguns": "48.0",
            "Total firearms": "805.0",
            "Total murders1": "1246.0"
        },
        "2011": {
            "Firearms (type unknown)": "117.0",
            "Handguns": "497.0",
            "Hands, fists, feet, etc.2": "81.0",
            "Knives or cutting instruments": "175.0",
            "Other weapons": "134.0",
            "Population": "25145561",
            "Rifles": "37.0",
            "Shotguns": "48.0",
            "Total firearms": "699.0",
            "Total murders1": "1089.0"
        },
        "2012": {
            "Population": "25242683"
        },
        "Name": "Texas"
    },
    "UT": {
        "2006": {
            "Firearms (type unknown)": "9.0",
            "Handguns": "9.0",
            "Hands, fists, feet, etc.2": "10.0",
            "Knives or cutting instruments": "6.0",
            "Other weapons": "9.0",
            "Population": "2583724",
            "Rifles": "1.0",
            "Shotguns": "2.0",
            "Total firearms": "21.0",
            "Total murders1": "46.0"
        },
        "2007": {
            "Firearms (type unknown)": "16.0",
            "Handguns": "22.0",
            "Hands, fists, feet, etc.2": "5.0",
            "Knives or cutting instruments": "5.0",
            "Other weapons": "10.0",
            "Population": "2663796",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "38.0",
            "Total murders1": "58.0"
        },
        "2008": {
            "Firearms (type unknown)": "3.0",
            "Handguns": "16.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "8.0",
            "Other weapons": "8.0",
            "Population": "2727343",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "19.0",
            "Total murders1": "41.0"
        },
        "2009": {
            "Firearms (type unknown)": "5.0",
            "Handguns": "15.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "8.0",
            "Other weapons": "2.0",
            "Population": "2784572",
            "Rifles": "0.0",
            "Shotguns": "5.0",
            "Total firearms": "25.0",
            "Total murders1": "37.0"
        },
        "2010": {
            "Firearms (type unknown)": "5.0",
            "Handguns": "16.0",
            "Hands, fists, feet, etc.2": "11.0",
            "Knives or cutting instruments": "7.0",
            "Other weapons": "12.0",
            "Population": "Utah",
            "Rifles": "0.0",
            "Shotguns": "1.0",
            "Total firearms": "22.0",
            "Total murders1": "52.0"
        },
        "2011": {
            "Firearms (type unknown)": "6.0",
            "Handguns": "15.0",
            "Hands, fists, feet, etc.2": "11.0",
            "Knives or cutting instruments": "5.0",
            "Other weapons": "9.0",
            "Population": "2763885",
            "Rifles": "4.0",
            "Shotguns": "1.0",
            "Total firearms": "26.0",
            "Total murders1": "51.0"
        },
        "2012": {
            "Population": "2775093"
        },
        "Name": "Utah"
    },
    "VA": {
        "2006": {
            "Firearms (type unknown)": "103.0",
            "Handguns": "142.0",
            "Hands, fists, feet, etc.2": "15.0",
            "Knives or cutting instruments": "49.0",
            "Other weapons": "70.0",
            "Population": "7646996",
            "Rifles": "6.0",
            "Shotguns": "13.0",
            "Total firearms": "264.0",
            "Total murders1": "398.0"
        },
        "2007": {
            "Firearms (type unknown)": "109.0",
            "Handguns": "163.0",
            "Hands, fists, feet, etc.2": "20.0",
            "Knives or cutting instruments": "48.0",
            "Other weapons": "51.0",
            "Population": "7719749",
            "Rifles": "5.0",
            "Shotguns": "10.0",
            "Total firearms": "287.0",
            "Total murders1": "406.0"
        },
        "2008": {
            "Firearms (type unknown)": "94.0",
            "Handguns": "121.0",
            "Hands, fists, feet, etc.2": "11.0",
            "Knives or cutting instruments": "54.0",
            "Other weapons": "61.0",
            "Population": "7795424",
            "Rifles": "12.0",
            "Shotguns": "13.0",
            "Total firearms": "240.0",
            "Total murders1": "366.0"
        },
        "2009": {
            "Firearms (type unknown)": "106.0",
            "Handguns": "108.0",
            "Hands, fists, feet, etc.2": "22.0",
            "Knives or cutting instruments": "41.0",
            "Other weapons": "55.0",
            "Population": "7882590",
            "Rifles": "8.0",
            "Shotguns": "7.0",
            "Total firearms": "229.0",
            "Total murders1": "347.0"
        },
        "2010": {
            "Firearms (type unknown)": "92.0",
            "Handguns": "137.0",
            "Hands, fists, feet, etc.2": "22.0",
            "Knives or cutting instruments": "47.0",
            "Other weapons": "50.0",
            "Population": "Virginia",
            "Rifles": "9.0",
            "Shotguns": "12.0",
            "Total firearms": "250.0",
            "Total murders1": "369.0"
        },
        "2011": {
            "Firearms (type unknown)": "73.0",
            "Handguns": "110.0",
            "Hands, fists, feet, etc.2": "21.0",
            "Knives or cutting instruments": "33.0",
            "Other weapons": "41.0",
            "Population": "8001031",
            "Rifles": "10.0",
            "Shotguns": "15.0",
            "Total firearms": "208.0",
            "Total murders1": "303.0"
        },
        "2012": {
            "Population": "8025105"
        },
        "Name": "Virginia"
    },
    "VT": {
        "2006": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "7.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "1.0",
            "Other weapons": "2.0",
            "Population": "619985",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "7.0",
            "Total murders1": "12.0"
        },
        "2007": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "5.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "2.0",
            "Other weapons": "0.0",
            "Population": "620460",
            "Rifles": "2.0",
            "Shotguns": "1.0",
            "Total firearms": "9.0",
            "Total murders1": "12.0"
        },
        "2008": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "4.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "0.0",
            "Other weapons": "6.0",
            "Population": "621049",
            "Rifles": "3.0",
            "Shotguns": "0.0",
            "Total firearms": "8.0",
            "Total murders1": "17.0"
        },
        "2009": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "0.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "4.0",
            "Other weapons": "1.0",
            "Population": "621760",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "0.0",
            "Total murders1": "7.0"
        },
        "2010": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "1.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "1.0",
            "Other weapons": "2.0",
            "Population": "Vermont",
            "Rifles": "1.0",
            "Shotguns": "0.0",
            "Total firearms": "2.0",
            "Total murders1": "7.0"
        },
        "2011": {
            "Firearms (type unknown)": "2.0",
            "Handguns": "2.0",
            "Hands, fists, feet, etc.2": "0.0",
            "Knives or cutting instruments": "2.0",
            "Other weapons": "2.0",
            "Population": "625741",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "4.0",
            "Total murders1": "8.0"
        },
        "2012": {
            "Population": "625916"
        },
        "Name": "Vermont"
    },
    "WA": {
        "2006": {
            "Firearms (type unknown)": "2.0",
            "Handguns": "90.0",
            "Hands, fists, feet, etc.2": "20.0",
            "Knives or cutting instruments": "31.0",
            "Other weapons": "28.0",
            "Population": "6372243",
            "Rifles": "3.0",
            "Shotguns": "12.0",
            "Total firearms": "107.0",
            "Total murders1": "186.0"
        },
        "2007": {
            "Firearms (type unknown)": "10.0",
            "Handguns": "78.0",
            "Hands, fists, feet, etc.2": "15.0",
            "Knives or cutting instruments": "27.0",
            "Other weapons": "29.0",
            "Population": "6464979",
            "Rifles": "5.0",
            "Shotguns": "6.0",
            "Total firearms": "99.0",
            "Total murders1": "170.0"
        },
        "2008": {
            "Firearms (type unknown)": "16.0",
            "Handguns": "82.0",
            "Hands, fists, feet, etc.2": "23.0",
            "Knives or cutting instruments": "32.0",
            "Other weapons": "25.0",
            "Population": "6566073",
            "Rifles": "2.0",
            "Shotguns": "10.0",
            "Total firearms": "110.0",
            "Total murders1": "190.0"
        },
        "2009": {
            "Firearms (type unknown)": "6.0",
            "Handguns": "75.0",
            "Hands, fists, feet, etc.2": "19.0",
            "Knives or cutting instruments": "35.0",
            "Other weapons": "14.0",
            "Population": "6664195",
            "Rifles": "16.0",
            "Shotguns": "4.0",
            "Total firearms": "101.0",
            "Total murders1": "169.0"
        },
        "2010": {
            "Firearms (type unknown)": "14.0",
            "Handguns": "73.0",
            "Hands, fists, feet, etc.2": "12.0",
            "Knives or cutting instruments": "24.0",
            "Other weapons": "22.0",
            "Population": "Washington",
            "Rifles": "4.0",
            "Shotguns": "2.0",
            "Total firearms": "93.0",
            "Total murders1": "151.0"
        },
        "2011": {
            "Firearms (type unknown)": "17.0",
            "Handguns": "58.0",
            "Hands, fists, feet, etc.2": "17.0",
            "Knives or cutting instruments": "29.0",
            "Other weapons": "36.0",
            "Population": "6724543",
            "Rifles": "1.0",
            "Shotguns": "3.0",
            "Total firearms": "79.0",
            "Total murders1": "161.0"
        },
        "2012": {
            "Population": "6743636"
        },
        "Name": "Washington"
    },
    "WI": {
        "2006": {
            "Firearms (type unknown)": "17.0",
            "Handguns": "72.0",
            "Hands, fists, feet, etc.2": "16.0",
            "Knives or cutting instruments": "23.0",
            "Other weapons": "29.0",
            "Population": "5571680",
            "Rifles": "3.0",
            "Shotguns": "3.0",
            "Total firearms": "95.0",
            "Total murders1": "163.0"
        },
        "2007": {
            "Firearms (type unknown)": "21.0",
            "Handguns": "86.0",
            "Hands, fists, feet, etc.2": "16.0",
            "Knives or cutting instruments": "18.0",
            "Other weapons": "27.0",
            "Population": "5601571",
            "Rifles": "9.0",
            "Shotguns": "5.0",
            "Total firearms": "121.0",
            "Total murders1": "182.0"
        },
        "2008": {
            "Firearms (type unknown)": "19.0",
            "Handguns": "51.0",
            "Hands, fists, feet, etc.2": "19.0",
            "Knives or cutting instruments": "25.0",
            "Other weapons": "22.0",
            "Population": "5627610",
            "Rifles": "7.0",
            "Shotguns": "3.0",
            "Total firearms": "80.0",
            "Total murders1": "146.0"
        },
        "2009": {
            "Firearms (type unknown)": "18.0",
            "Handguns": "65.0",
            "Hands, fists, feet, etc.2": "14.0",
            "Knives or cutting instruments": "22.0",
            "Other weapons": "13.0",
            "Population": "5654774",
            "Rifles": "3.0",
            "Shotguns": "9.0",
            "Total firearms": "95.0",
            "Total murders1": "144.0"
        },
        "2010": {
            "Firearms (type unknown)": "23.0",
            "Handguns": "63.0",
            "Hands, fists, feet, etc.2": "19.0",
            "Knives or cutting instruments": "13.0",
            "Other weapons": "22.0",
            "Population": "Wisconsin",
            "Rifles": "5.0",
            "Shotguns": "6.0",
            "Total firearms": "97.0",
            "Total murders1": "151.0"
        },
        "2011": {
            "Firearms (type unknown)": "10.0",
            "Handguns": "60.0",
            "Hands, fists, feet, etc.2": "21.0",
            "Knives or cutting instruments": "21.0",
            "Other weapons": "13.0",
            "Population": "5686986",
            "Rifles": "7.0",
            "Shotguns": "3.0",
            "Total firearms": "80.0",
            "Total murders1": "135.0"
        },
        "2012": {
            "Population": "5689591"
        },
        "Name": "Wisconsin"
    },
    "WV": {
        "2006": {
            "Firearms (type unknown)": "11.0",
            "Handguns": "24.0",
            "Hands, fists, feet, etc.2": "4.0",
            "Knives or cutting instruments": "9.0",
            "Other weapons": "18.0",
            "Population": "1807237",
            "Rifles": "4.0",
            "Shotguns": "1.0",
            "Total firearms": "40.0",
            "Total murders1": "71.0"
        },
        "2007": {
            "Firearms (type unknown)": "11.0",
            "Handguns": "18.0",
            "Hands, fists, feet, etc.2": "10.0",
            "Knives or cutting instruments": "5.0",
            "Other weapons": "7.0",
            "Population": "1811198",
            "Rifles": "7.0",
            "Shotguns": "1.0",
            "Total firearms": "37.0",
            "Total murders1": "59.0"
        },
        "2008": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "14.0",
            "Hands, fists, feet, etc.2": "4.0",
            "Knives or cutting instruments": "5.0",
            "Other weapons": "13.0",
            "Population": "1814873",
            "Rifles": "2.0",
            "Shotguns": "10.0",
            "Total firearms": "33.0",
            "Total murders1": "55.0"
        },
        "2009": {
            "Firearms (type unknown)": "13.0",
            "Handguns": "20.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "19.0",
            "Other weapons": "13.0",
            "Population": "1819777",
            "Rifles": "2.0",
            "Shotguns": "3.0",
            "Total firearms": "38.0",
            "Total murders1": "76.0"
        },
        "2010": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "16.0",
            "Hands, fists, feet, etc.2": "8.0",
            "Knives or cutting instruments": "11.0",
            "Other weapons": "9.0",
            "Population": "West Virginia",
            "Rifles": "0.0",
            "Shotguns": "4.0",
            "Total firearms": "27.0",
            "Total murders1": "55.0"
        },
        "2011": {
            "Firearms (type unknown)": "7.0",
            "Handguns": "23.0",
            "Hands, fists, feet, etc.2": "7.0",
            "Knives or cutting instruments": "11.0",
            "Other weapons": "13.0",
            "Population": "1852999",
            "Rifles": "10.0",
            "Shotguns": "3.0",
            "Total firearms": "43.0",
            "Total murders1": "74.0"
        },
        "2012": {
            "Population": "1854019"
        },
        "Name": "West Virginia"
    },
    "WY": {
        "2006": {
            "Firearms (type unknown)": "0.0",
            "Handguns": "2.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "3.0",
            "Other weapons": "0.0",
            "Population": "512841",
            "Rifles": "2.0",
            "Shotguns": "1.0",
            "Total firearms": "5.0",
            "Total murders1": "9.0"
        },
        "2007": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "2.0",
            "Hands, fists, feet, etc.2": "6.0",
            "Knives or cutting instruments": "2.0",
            "Other weapons": "1.0",
            "Population": "523414",
            "Rifles": "2.0",
            "Shotguns": "2.0",
            "Total firearms": "7.0",
            "Total murders1": "16.0"
        },
        "2008": {
            "Firearms (type unknown)": "2.0",
            "Handguns": "2.0",
            "Hands, fists, feet, etc.2": "2.0",
            "Knives or cutting instruments": "3.0",
            "Other weapons": "1.0",
            "Population": "532981",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "4.0",
            "Total murders1": "10.0"
        },
        "2009": {
            "Firearms (type unknown)": "1.0",
            "Handguns": "7.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "1.0",
            "Other weapons": "1.0",
            "Population": "544270",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "8.0",
            "Total murders1": "11.0"
        },
        "2010": {
            "Firearms (type unknown)": "3.0",
            "Handguns": "0.0",
            "Hands, fists, feet, etc.2": "1.0",
            "Knives or cutting instruments": "1.0",
            "Other weapons": "1.0",
            "Population": "Wyoming",
            "Rifles": "2.0",
            "Shotguns": "0.0",
            "Total firearms": "5.0",
            "Total murders1": "8.0"
        },
        "2011": {
            "Firearms (type unknown)": "4.0",
            "Handguns": "7.0",
            "Hands, fists, feet, etc.2": "3.0",
            "Knives or cutting instruments": "0.0",
            "Other weapons": "1.0",
            "Population": "563626",
            "Rifles": "0.0",
            "Shotguns": "0.0",
            "Total firearms": "11.0",
            "Total murders1": "15.0"
        },
        "2012": {
            "Population": "564367"
        },
        "Name": "Wyoming"
    }
}
    });
  

    // Axis for the graph                              
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 500 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;
    
    var parseDate = d3.time.format("%Y-%m-%d").parse;
    
    var x = d3.time.scale()
        .range([0, width]);
    
    var y = d3.scale.linear()
        .range([height, 0]);
    
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");
    
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");
    
    var line = d3.svg.line()
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.close); });
    
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    // Re-render the graph ever time a state is clicked
    myMap.$el.bind("map-click", function(e, data) {
        //$('#gunstats').html(data.data["Name"] + ":<br>Handguns:" + data.data["2006"]["Handguns"]);
        
        var fJSON = data.data;
        console.log(fJSON);
        var myData = fJSON["2006"].map(function(d) {
        return {
           date: parseDate(d),
           close: d["Total murders1"]
        };
      
        });
    
      x.domain(d3.extent(myData, function(d) { return d.date; }));
      y.domain(d3.extent(myData, function(d) { return d.close; }));

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);
          
      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Price ($)");

      svg.append("path")
          .datum(myData)
          .attr("class", "line")
          .attr("d", line); 
    })
    

    //$('div').click(function(event){
    //    alert(event.target.id);
    //});  

   myMap.render();