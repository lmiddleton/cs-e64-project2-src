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
			'TEST1': '#000000',
			'TEST2': '#FFFFFF',
			defaultFill: '#EFEFEF'
		},
		data: JSON_data
	});

	for(state in dataObject) {
		if (!dataObject.hasOwnProperty(state)){
			continue;
		}
		var totalMurders = dataObject[state][year]["Total murders1"];
		//console.log(totalMurders);
		if(totalMurders >= 40){
			//one color
			dataObject[state]["fillKey"] = "TEST1";
		}
		else {
			//another color
			dataObject[state]["fillKey"] = "TEST2";
		}
	}

	map.render();
	console.log("rendered!");
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

/********************************/

window.onload = function() {
	//init map 1
	

	//how to access data in JSON object
	var test = JSON_data["AK"]["2006"]["Handguns"];
	console.log(test);

	drawMap("2006", JSON_data);

	//newTemplate = '<div class="hoverinfo"><strong><%= geography.properties.name %></strong> <% if (data["2007"]["Handguns"]) { %><hr/>  Total Handguns: <%= data["2007"]["Handguns"] %> <% } %></div>';

	initYearSelect();

	//to then modify the object (aka change the fill)
	//JSON_data["AK"]["fillKey"] = "TEST1";
	//console.log(JSON_data);

	//to change the popupTemplate (ex. for a different year)
	
	//map.render;


	//map.options.geography_config.popupTemplate.template = newTemplate;
	//console.log(map.options.geography_config.popupTemplate.template);
	//map.render();
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