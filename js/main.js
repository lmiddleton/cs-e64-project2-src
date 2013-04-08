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
function drawMap(year, gunType, dataObject) {
	//clear map div so map is not duplicated
	$("#map1").empty();

	//do all necessary calculations of data here - may need to factor this out if multiple fill schemas? - may need to do these calulations in python and put them in the JSON object if we want to reference them in the tooltip - maybe can just modify the data object variable as they are calculated!
	for(state in dataObject) {
		if (!dataObject.hasOwnProperty(state)){
			continue;
		}
		var gunMurdersPer100K = gunMurdersPer(dataObject, state, year, gunType, 100000);
		var gunMurdersPer100Kshort = gunMurdersPer100K.toFixed(2);
		//stick the shortened figure in the JSON object for use in the tooltip
		dataObject[state][year]["Gun Murders Per 100K"] = gunMurdersPer100Kshort;

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
	var newTemplate = '<div class="hoverinfo"><strong><%= geography.properties.name %></strong> <% if (data[' + year + ']["Total murders1"]) { %><hr/>  Total Homicides: <%= data[' + year + ']["Total murders1"] %> <% } %><br/>Total Firearm Homicides: <%= data[' + year + ']["Total firearms"] %><br/>Population: <%= data[' + year + ']["Population"] %><br/><strong>Firearm Homicides Per 100K People:</strong> <%= data[' + year + ']["Gun Murders Per 100K"] %></div>';

	//set up map variable
	map = new Map({
		scope: 'usa',
		el: $('#map1'),
      	geography_config: { 
        	borderColor: '#d7d7d7',
        	highlightBorderColor: '#FFFF00',
        	highlightOnHover: true,
        	popupTemplate: _.template(newTemplate)
      },
		fills: { //ultimately include all fills to be used, then just reference whichever ones you want in above calculations
			'LEV1': '#EDF8FB',
			'LEV2': '#BFD3E6',
			'LEV3': '#9EBCDA',
			'LEV4': '#8C96C6',
			'LEV5': '#8856A7',
			'LEV6': '#810F7C',
			'NODATA': '#EFEFEF',
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
        //change the border color of the clicked state
        $('body').find('path').each(function() {
        	if($(this).css("stroke-width") == "2px"){
        		console.log("yellow stroke");
        		$(this).css("stroke", "red");
				$(this).css("fill", "red");
				//var id = this.id;
				//console.log(id);
				//$(this).addClass("active-state");
				$(this).mouseout(function() {
					$(this).addClass("active-state");
					console.log(this);
				});
        		//$(this).css("opacity")
        	}
        });

        //console.log($('path [style*=stroke:#FFFF00]')); //.css("stroke", "red");
        //$(this).addClass("active-state");
        if (data.geography.id == "FL") {
		$(".container").empty();
		$("#bars").empty();
		$("#linetitle").text("No data for Florida");
		$("#bartitle").empty();
	}
	else {
		console.log(data.geography.id);
		$(".container").empty();
		drawGraph(data.geography.id);
		//_YEAR = "2006";
		_STATE = data.geography.id;
		$("#linetitle").text(state_data_JSON[_STATE]["Name"] + " Firearm Homicides by Year");
		$("#bartitle").text(state_data_JSON[_STATE]["Name"] + " Homicides by Firearm Type - " + yearShown);
		$("#bars").empty();
		drawBars(data.geography.id,yearShown);	
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

	//how to access data in JSON object
	//var test = state_data_JSON["AK"]["2006"]["Handguns"];
	//console.log(test);

	//to then modify the object (aka change the fill)
	//state_data_JSON["AK"]["fillKey"] = "TEST1";
	//console.log(state_data_JSON);



	//parseCsv("/data/raw/fbi_murder_by_state_by_weapon_table20/2006_fbi_murder_by_state_by_weapon_cleaned.csv");
	//map.options.data = byState2006;
	//map.options.data = {
	//	"AZ": {
     //       "fillKey": "REP",
    //        "electoralVotes": 5
    //    },
	//};
	//map.render();
	

	//$('#map1').click(function(event){
	  //alert(event.target.id);
	//});



	//for testing
	alert("javascript is working.");

}