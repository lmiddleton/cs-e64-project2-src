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
function drawMapForYear(map, year, dataObject) {
	for(state in dataObject) {
		if (!dataObject.hasOwnProperty(state)){
			continue;
		}
		var totalMurders = dataObject[state][year]["Total murders1"];
		console.log(totalMurders);
		if(totalMurders >= 50){
			//one color
			dataObject[state]["fillKey"] = "TEST1";
		}
		else {
			//another color
			dataObject[state]["fillKey"] = "TEST2";
		}
	}

	map.render();
}

/********************************/

window.onload = function() {
	//init map 1
	var map = new Map({
		scope: 'usa',
		el: $('#map1'),
      	geography_config: { 
        	highlightBorderColor: '#FFFF00',
        	highlightOnHover: true,  // For reason I don't understand you don't reference by state //It's just a temp hack, I couldn't get it to work w/o putting in something there, not sure why it's working in yours, maybe b/c you copied the JSON object right into data and I'm referencing a variable?
        	popupTemplate: _.template('<div class="hoverinfo"><strong><%= geography.properties.name %></strong> <% if (JSON_data["AK"]["2006"]["Total murders1"]) { %><hr/>  Total Murders: <%= JSON_data["AK"]["2006"]["Total murders1"] %> <% } %></div>')
      },
		fills: {
			'TEST1': '#000000',
			'TEST2': '#FFFFFF',
			defaultFill: '#EFEFEF'
		},
		data: JSON_data
	});

	//how to access data in JSON object
	var test = JSON_data["AK"]["2006"]["Handguns"];
	console.log(test);

	drawMapForYear(map, "2006", JSON_data);

	//to then modify the object (aka change the fill)
	//JSON_data["AK"]["fillKey"] = "TEST1";
	//console.log(JSON_data);

	//to change the popupTemplate (ex. for a different year)
	//var template = map.geography_config;
	//console.log(template);

	

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