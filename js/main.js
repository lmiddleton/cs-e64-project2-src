/*Project 2 functions*/

/*re-renders the map for the selected year*/
function drawMap(year, gunType, dataObject) {
	//clear map div so map is not duplicated
	$("#map1").empty();

	//do all necessary calculations of data here
	for(state in dataObject) {
		if (!dataObject.hasOwnProperty(state)){
			continue;
		}
		var gunMurdersPer100K = gunMurdersPer(dataObject, state, year, gunType, 100000);
		var gunMurdersPer100Kshort = gunMurdersPer100K.toFixed(2);
		//stick the shortened figure in the JSON object for use in the tooltip
		dataObject[state][year]["GunMurdersPer100K"] = gunMurdersPer100Kshort;

		//console.log(gunMurdersPer100K);
		if(state == "FL"){
			dataObject[state]["fillKey"] = "NODATA";
		}
		else if((gunMurdersPer100K >= 0) && (gunMurdersPer100K < 1)){
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

	//set up popup tmeplate
	var newTemplate = '<div class="hoverinfo"><strong><%= geography.properties.name %></strong> <% if (data[' + year + ']["Total murders1"]) { %><hr/>  Total Homicides: <%= data[' + year + ']["Total murders1"] %> <% } %><br/>Total Firearm Homicides: <%= data[' + year + ']["Total firearms"] %><br/>Population: <%= data[' + year + ']["Population"] %><br/><strong>Firearm Homicides Per 100K People:</strong> <%= data[' + year + ']["GunMurdersPer100K"] %></div>';

	//set up map variable
	map = new Map({
		scope: 'usa',
		el: $('#map1'),
      	geography_config: { 
        	borderColor: '#d7d7d7',
        	highlightBorderColor: '#333333',
        	highlightOnHover: true,
        	popupTemplate: _.template(newTemplate)
      },
		fills: {
			'LEV1': '#EDF8FB',
			'LEV2': '#BFD3E6',
			'LEV3': '#9EBCDA',
			'LEV4': '#8C96C6',
			'LEV5': '#8856A7',
			'LEV6': '#810F7C',
			'NODATA': '#EFEFEF',
			'ACTIVE': '#BADA55',
			defaultFill: '#EFEFEF'
		},
		data: state_data_JSON
	});

	//render the map
	map.render();

	//update globals
	yearShown = year;
	gunTypeShown = gunType;
	
	// Re-render the graph ever time a state is clicked
    map.$el.bind("map-click", function(e, data) {
        console.log(data.geography.id);
        
        if (data.geography.id == "FL") {
			$(".container").empty();
			$("#bars").empty();
			$("#linetitle").text("No data for Florida");
			$("#bartitle").empty();
		}
		else {
			console.log(data.geography.id);
			$(".container").empty();
			_STATE = data.geography.id;
			drawGraph(_STATE);
			//_YEAR = "2006";
			$("#linetitle").text(state_data_JSON[_STATE]["Name"] + " Firearm Homicides by Year");
			$("#bartitle").text(state_data_JSON[_STATE]["Name"] + " Homicides by Firearm Type - " + yearShown);
			$("#bars").empty();
			drawBars(_STATE,yearShown);	
		}
    });
	
	
}

function setKey() {

}

/*year dropdown handler*/
function initYearSelect() {
	$("#year").change(function() {
		//find which year was selected
		var year = this.value;
		//redraw the map based on that year
		drawMap(year, gunTypeShown, state_data_JSON);
	});
}

/*gun type dropdown handler*/
function initGunTypeSelect() {
	$("#gun-type").change(function() {
		//find which was selected
		var gunType = this.value;
		//redraw map
		drawMap(yearShown, gunType, state_data_JSON);
	});
}

/*returns # of gun murders per given # of ppl in a given year for a given state*/
function gunMurdersPer(dataObject, state, year, gunType, per) {
	//figure out which gun type to use
	var gunTypeData = "";
	if(gunType == "all"){
		gunTypeData = "Total firearms";
	}
	else if(gunType == "handguns"){
		gunTypeData = "Handguns";
	}
	else if(gunType == "rifles"){
		gunTypeData = "Rifles";
	}
	else if(gunType == "shotguns"){
		gunTypeData = "Shotguns";
	}
	else if(gunType == "unknown") {
		gunTypeData = "Firearms (type unknown)";
	}

	var pop = dataObject[state][year]["Population"];
	//console.log(pop);
	var totalGunMurders = dataObject[state][year][gunTypeData];
	console.log(gunTypeData);
	//console.log(totalGunMurders);
	var gunMurdersPer = (per * totalGunMurders)/pop;
	//console.log("gunmurdersper: " + gunMurdersPer);
	return gunMurdersPer;
}

/********************************/

//init global variables
var map;
var gunTypeShown = "all";
var yearShown = "2006";

window.onload = function() {
	//init map 1
	drawMap(yearShown, gunTypeShown, state_data_JSON);

	//init filters
	initYearSelect();
	initGunTypeSelect();

	//for testing
	//alert("javascript is working.");

}