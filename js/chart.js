function drawGraph(state) {

    var margin = {top: 20, right: 50, bottom: 50, left: 50}, 
        width = 400 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;
        
    var parseDate = d3.time.format("%Y").parse;

    var x = d3.time.scale().range([0, width]);
    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg.axis().scale(x).orient("bottom");
    var yAxis = d3.svg.axis().scale(y).orient("left");

    var line = d3.svg.line()
        .x(function(d) { return x(d.x); })
        .y(function(d) { return y(d.y); });

    var svg = d3.select(".container").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        
    var mydata = state_data_JSON[state];
    
    data = []
    $.each(mydata, function(key, value) {
        //console.log(key + " " + value["Total murders1"])
        if (key != "Name") {
            //console.log(value["Population"]);
            //console.log(value["Total murders1"]);
            per100K = value["Total firearms"]*(100000.0/value["Population"]);
            //console.log("per100K:" + per100K);
            data.push({"x":key,"y":per100K});
            
        }
    });
    
    data.forEach(function (d) {
        d.x = parseDate(d.x);
        //console.log(d.x);
        d.y = parseFloat(d.y);
        //console.log(d.y);
    });
    
    x.domain(d3.extent(data, function(d) { return d.x; }));
    y.domain(d3.extent(data, function(d) { return d.y; }));
    
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
        .text("Firearm Homocides Per 100K")
        .attr("font-family", "Open Sans");

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);

    dots = svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "dots")
        .attr("cx", function(d) 
            { return x(d.x); })
        .attr("cy", function(d) 
            { return y(d.y); })
        .attr("r", 6);

    dots.on("mouseover", mouseover)
        .on("mouseout", mouseout);
    
}

function mouseover (d) {
     d3.select(this)
        .style("fill", "red")
        .attr("r", 7);
    
    $("#bars").empty();
    console.log(d.x.getFullYear());
    //yearShown = d.x.getFullYear();
    $("#bartitle").text(state_data_JSON[_STATE]["Name"] + " Firearm Homocides by Weapon - " + d.x.getFullYear());
    drawBars(_STATE,d.x.getFullYear());
    //$("#bars").empty();
    //drawBars(data.geography.id,_YEAR);
    /*
    var label = document.getElementById("container");
    var pTag = document.createElement("p");
    pTag.id = "label";
    pTag.style.fontWeight="400";
    pTag.innerHTML = "<b>Time: </b>" + d.x + "<br>" +
        "<b>Value: </b>" + d.y + "<br>";

    label.appendChild(pTag)
    */
};

function mouseout (d) {
    d3.select(this)
        .style("fill", "black")
        .attr("r", 6);

    /* 
    var label = document.getElementById("container");

    if (isInDocument(document.getElementById("label"))){
        label.removeChild(document.getElementById("label"));}
    */
};

function isInDocument (el) {
    var html = document.body.parentNode;
    while (el) {
        if (el === html) {
            return true;
        }
        
        el = el.parentNode;
    }
    return false;
};

function drawBars(state,year) {
    
    var mydata = state_data_JSON[state][year];
    
    data = []
    //$.each(mydata, function(key, value) {

        var total = mydata["Total firearms"];
        var unknown = (mydata["Firearms (type unknown)"]/total)*100;
        var hangun = (mydata["Handguns"]/total)*100;
        //var melee = (mydata["Hands, fists, feet, etc.2"]/total)*100;
        //var knives = (mydata["Knives or cutting instruments"]/total)*100;
        var rifles = (mydata["Rifles"]/total)*100;
        var shotguns = (mydata["Shotguns"]/total)*100;
        //var other = (mydata["Other weapons"]/total)*100;

        data.push({"label":"Unknown Type","score":unknown})
        data.push({"label":"Handguns","score":hangun})
        //data.push({"label":"Hands,feet,etc","score":melee})
        //data.push({"label":"Blades","score":knives})
        data.push({"label":"Rifles","score":rifles})
        data.push({"label":"Shotguns","score":shotguns})
        //data.push({"label":"Other","score":other})

    //});
    
    var chart = d3.select("#bars");
    var width = chart.attr("width");
    var height = chart.attr("height");
    
    var w = width;
    var h = 15;
    
    var x = d3.scale.linear()
      .domain([0, 80]) // changed from [0, 5]
      .range([0, w-150]);
    
    var y = d3.scale.linear()
      .domain([0, 1])
      .range([0, h]);
    
    var color = d3.scale.linear()
      .domain([0, 20, 40, 60, 80]) // from 1, 2, 3, 4, 5
      .range(["#FFB870", "#FF9933", "#FF3300", "#FF0000", "#CC0000"]);
    
    chart.selectAll("rect.data")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function(d, i) { return 150; })
      .attr("y", function(d, i) { return h*i + (height-(h*data.length))/(data.length+1)*(i+1); })
      .attr("width", 0)
      .attr("height", h)
      .attr("shape-rendering", "crispEdges")
      .attr("data-label", function(d) { return d.label})
      .attr("stroke-width", 0)
      .attr("fill", function(d, i) { return color(1); })
      .style("cursor", "pointer")
      .attr("class", "data")
      .transition()
      .duration(500)
      .attr("width", function(d) { return x(d.score); })
      .attr("fill", function(d) { return color(d.score); });
    
    
    chart.selectAll("text.label")
      .data(data)
      .enter()
      .append("text")
      .text(function(d) { return d.label; })
      .attr("text-anchor", "end")
      .attr("x", 90)
      .attr("y", function(d, i) { return h*i + (height-(h*data.length))/(data.length+1)*(i+1) + h - 3; })
      .attr("fill", "#333")
      .attr("font-size", "12px")
      .attr("font-family", "Arial")
      .attr("stroke-width", 0)
      .attr("data-label", function(d) { return d.label; })
      .attr("cursor", "pointer");
    
    chart.selectAll("text.score")
      .data(data)
      .enter()
      .append("text")
      .text(function(d) { return parseFloat(d.score).toFixed(1) + "%"; })
      .attr("x", function(d) { return 100; }) 
      .attr("y", function(d, i) { return h*i + (height-(h*data.length))/(data.length+1)*(i+1) + h - 3; })
      .attr("fill", "#333")
      .attr("font-size", "12px")
      .attr("font-family", "Arial")
      .attr("stroke-width", 0)
      .attr("data-label", function(d) { return d.label; })
      .attr("class", "score");
      //.style("cursor", "pointer");
    /*
    chart.selectAll("rect.cover")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function(d, i) { return 0; })
      .attr("y", function(d, i) { return h*i + (height-(h*data.length))/ (data.length+1)*(i+1) - (height-(h*data.length))/(data.length+1)/2; })
      .attr("width", width)
      .attr("height", h + (height-(h*data.length))/(data.length+1))
      .attr("shape-rendering", "crispEdges")
      .attr("data-label", function(d) { return d.label; })
      .attr("stroke-width", 0)
      .attr("fill", "#000")
      .style("cursor", "pointer")
      .style("opacity", 0)
      .attr("class", "cover");*/
    /*
    function update(data){
      chart.selectAll("rect.data")
        .data(data)
        .transition()
        .duration(500)
        .attr("width", function(d) { return x(d.score); })
        .attr("fill", function(d, i) { return color(d.score); });
    
      chart.selectAll("text.score")
        .data(data)
        .text(function(d) { return parseFloat(d.score).toFixed(2); });
    }   */
}






















