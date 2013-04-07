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
      data: state_data_JSON
    });
    
    // Re-render the graph ever time a state is clicked
    myMap.$el.bind("map-click", function(e, data) {
        console.log(data.geography.id);
        $(".container").empty();
        drawGraph(data.geography.id);
        //$('.container').html(data.data["Name"] + ":<br>Handguns:" + data.data["2006"]["Handguns"]);
    })

   myMap.render();
   

    
    
    
    
    
    