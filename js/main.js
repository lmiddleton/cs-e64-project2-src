/*Project 2 functions*/

/*
var stateAbbr = [
	["Alabama", "AL"],
	["Alaska", "AK"],
	["Arizona", "AZ"],
	["Arkansas", "AR"],
	["California", "CA"],
	["Colorado", "CO"],
	["Connecticut", "CT"],
	["Delaware", "DE"],
	["Florida", "FL"],
	["Georgia", "GA"],
	["Hawaii", "HI"],
	["Idaho", "ID"],
	["Illinois", "IL"],
	["Indiana", "IN"],
	["Iowa", "IA"],
	["Kansas", "KS"],
	["Kentucky", "KY"],
	["Louisiana", "LA"],
	["Maine", "ME"],
	["Maryland", "MD"],
	["Massachusetts", "MA"],
	["Michigan", "MI"],
	["Minnesota", "MN"],
	["Mississippi", "MS"],
	["Missouri", "MO"],
	["Montana", "MT"],
	["Nebraska", "NE"],
	["Nevada", "NV"],
	["New Hampshire", "NH"],
	["New Jersey", "NJ"],
	["New Mexico", "NM"],
	["New York", "NY"],
	["North Carolina", "NC"],
	["North Dakota", "ND"],
	["Ohio", "OH"],
	["Oklahoma", "OK"],
	["Oregon", "OR"],
	["Pennsylvania", "PA"],
	["Rhode Island", "RI"],
	["South Carolina", "SC"],
	["South Dakota", "SD"],
	["Tennessee", "TN"],
	["Texas", "TX"],
	["Utah", "UT"],
	["Vermont", "VT"],
	["Virginia", "VA"],
	["Washington", "WA"],
	["West Virginia", "WV"],
	["Wisconsin", "WI"],
	["Wyoming", "WY"]
]

var byState2006 = {};

*/
/*
function parseCsv(filepath) {
	//csv test
	d3.csv(filepath, function(csv){
		csv.forEach(function(c) { //for (i=0; i<csv.length; i++) {
			var row = c;
			//figure out what the values should be in variables here
			var state = row.State;
			for (var i=0; i < stateAbbr.length; i++){
				var arrState = stateAbbr[i][0];
				if(arrState == state) {
					state = stateAbbr[i][1];
				}
				else{
					continue;
				}
			}
			var handguns = +row.Handguns;
			var fill = "";
			if(handguns > 10){
				fill = "TEST1";
			}
			else{
				fill = "TEST2";
			}
			byState2006[state] = {
				fillKey: fill,
				handguns: handguns
			}
		});
		//return byState2006;
		//console.log(byState2006);
	});
}
*/

/*re-renders the map for the selected year*/
function drawMap(year, dataObject, newTemplate) {
	//clear map div so map is not duplicated
	$("#map1").empty();

	console.log(year);
	var newTemplate = '<div class="hoverinfo"><strong><%= geography.properties.name %></strong> <% if (data[' + year + ']["Handguns"]) { %><hr/>  Total Handguns: <%= data[' + year + ']["Handguns"] %> <% } %></div>';

	var map = new Map({
		scope: 'usa',
		el: $('#map1'),
      	geography_config: { 
        	highlightBorderColor: '#FFFF00',
        	highlightOnHover: true,
        	popupTemplate: _.template(newTemplate)
      },
		fills: {
			'LEV1': '#c7a7e8',
			'LEV2': '#ae87d6',
			'LEV3': '#9364c2',
			'LEV4': '#7847ab',
			'LEV5': '#612f95',
			'LEV6': '#4c1a80',
			defaultFill: '#EFEFEF'
		},
		data: JSON_data
	});

	for(state in dataObject) {
		if (!dataObject.hasOwnProperty(state)){
			continue;
		}
		var gunMurdersPer100K = gunMurdersPer(dataObject, state, year, 100000);
		console.log(gunMurdersPer100K);
		if((gunMurdersPer100K >= 0) && (gunMurdersPer100K < 1)){
			//one color
			dataObject[state]["fillKey"] = "LEV1";
		}
		else if((gunMurdersPer100K >= 1) && (gunMurdersPer100K < 2)){
			//another color
			dataObject[state]["fillKey"] = "LEV2";
		}
		else if((gunMurdersPer100K >= 2) && (gunMurdersPer100K < 3)){
			//another color
			dataObject[state]["fillKey"] = "LEV3";
		}
		else if((gunMurdersPer100K >= 3) && (gunMurdersPer100K < 4)){
			//another color
			dataObject[state]["fillKey"] = "LEV4";
		}
		else if((gunMurdersPer100K >= 4) && (gunMurdersPer100K < 5)){
			//another color
			dataObject[state]["fillKey"] = "LEV5";
		}
		else if(gunMurdersPer100K >= 5){
			//another color
			dataObject[state]["fillKey"] = "LEV6";
		}
	}

	map.render();
	console.log("rendered!");
}

function setKey() {
	
}

/*year dropdown handler*/
function initYearSelect() {
	$("#year").change(function() {
		//find which year was selected
		var year = this.value;
		//redraw the map based on that year
		drawMap(year, JSON_data);

		alert(year);
	});
}

/*returns # of gun murders per given # of ppl in a given year for a given state*/
function gunMurdersPer(dataObject, state, year, per) {
	var pop = dataObject[state][year]["Population"];
	console.log(pop);
	var totalGunMurders = dataObject[state][year]["Total firearms"];
	console.log(totalGunMurders);
	var gunMurdersPer = (per * totalGunMurders)/pop;
	console.log("gunmurdersper: " + gunMurdersPer);
	return gunMurdersPer;
}

/********************************/

window.onload = function() {
	//init map 1
	drawMap("2006", JSON_data);

	//init year filter
	initYearSelect();

	//how to access data in JSON object
	var test = JSON_data["AK"]["2006"]["Handguns"];
	console.log(test);

	//to then modify the object (aka change the fill)
	//JSON_data["AK"]["fillKey"] = "TEST1";
	//console.log(JSON_data);



	//parseCsv("/data/raw/fbi_murder_by_state_by_weapon_table20/2006_fbi_murder_by_state_by_weapon_cleaned.csv");
	//map.options.data = byState2006;
	//map.options.data = {
	//	"AZ": {
     //       "fillKey": "REP",
    //        "electoralVotes": 5
    //    },
	//};
	//map.render();
	

	$('#map1').click(function(event){
	  alert(event.target.id);
	});

	//for testing
	alert("javascript is working.");

}