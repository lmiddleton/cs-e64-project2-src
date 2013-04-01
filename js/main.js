/*Project 2 functions*/

window.onload = function() {
	//init map 1
	$('#map1').datamap({
		scope: 'usa',
		fills: {
			'MA': '#000000',
			defaultFill: '#EFEFEF'
		},
		//data: parseCsv("/data/raw/fbi_murder_by_state_by_weapon_table20/2006_fbi_murder_by_state_by_weapon_cleaned.csv")
	});

	parseCsv("/data/raw/fbi_murder_by_state_by_weapon_table20/2006_fbi_murder_by_state_by_weapon_cleaned.csv");

	//for testing
	alert("javascript is working.");
}

function parseCsv(filepath) {
	//csv test
	d3.csv(filepath, function(csv){
		var byState2006 = {};
		for (i=0; i<csv.length; i++) {
			//figure out what the values should be in variables here
			//console.log(csv[i]);
			var handguns = csv[i].Handguns;
			//console.log(handguns);
			byState2006["MA"] = {
				fillKey: "MA",
				handguns: handguns
			}
		}
		return byState2006;
		//console.log(byState2006);
	});
}