import * as d3 from 'd3';
import * as $ from 'jquery';
// export let boxPlot = (id) =>

// Inspired by http://informationandvisualization.de/blog/box-plot
export let box = function () {
  let width = 1,
    height = 1,
    duration = 0,
    domain = null,
    value = Number,
    whiskers = boxWhiskers,
    quartiles = boxQuartiles,
    showLabels = true, // whether or not to show text labels
    tickFormat = null;

  // For each small multiple…
  function box(g) {
    g.each(function (data, i) {
      let fillColor = data[2];
      let d = data[1].sort(d3.ascending);
      let g = d3.select(this),
        n = d.length,
        min = d[0],
        max = d[n - 1];

      // Compute quartiles. Must return exactly 3 elements.
      let quartileData = d.quartiles = quartiles(d);

      // Compute whiskers. Must return exactly 2 elements, or null.
      let whiskerIndices = whiskers && whiskers.call(this, d, i),
        whiskerData = whiskerIndices && whiskerIndices.map(function (i) {
          return d[i];
        });

      // Compute outliers. If no whiskers are specified, all data are "outliers".
      // We compute the outliers as indices, so that we can join across transitions!
      let outlierIndices = whiskerIndices
        ? d3.range(0, whiskerIndices[0]).concat(d3.range(whiskerIndices[1] + 1, n))
        : d3.range(n);

      // Compute the new x-scale.
      let x1 = d3.scale.linear()
        .domain(domain && domain.call(this, d, i) || [min, max])
        .range([height, 0]);

      // Retrieve the old x-scale, if this is an update.
      let x0 = this.__chart__ || d3.scale.linear()
        .domain([0, Infinity])
        // .domain([0, max])
        .range(x1.range());

      // Stash the new scale.
      this.__chart__ = x1;

      // Note: the box, median, and box tick elements are fixed in number,
      // so we only have to handle enter and update. In contrast, the outliers
      // and other elements are letiable, so we need to exit them! letiable
      // elements also fade in and out.

      // Update center line: the vertical line spanning the whiskers.
      let center = g.selectAll("line.center")
        .data(whiskerData ? [whiskerData] : []);

      //vertical line
      center.enter().insert("line", "rect")
        .attr("class", "center")
        .attr("x1", width / 2)
        .attr("y1", function (d) {
          return x0(d[0]);
        })
        .attr("x2", width / 2)
        .attr("y2", function (d) {
          return x0(d[1]);
        })
        .style("opacity", 1e-6)
        .transition()
        .duration(duration)
        .style("opacity", 1)
        .attr("y1", function (d) {
          return x1(d[0]);
        })
        .attr("y2", function (d) {
          return x1(d[1]);
        });

      center.transition()
        .duration(duration)
        .style("opacity", 1)
        .attr("y1", function (d) {
          return x1(d[0]);
        })
        .attr("y2", function (d) {
          return x1(d[1]);
        });

      center.exit().transition()
        .duration(duration)
        .style("opacity", 1e-6)
        .attr("y1", function (d) {
          return x1(d[0]);
        })
        .attr("y2", function (d) {
          return x1(d[1]);
        })
        .remove();

      // Update innerquartile box.
      let box = g.selectAll("rect.box")
        .data([quartileData]);

      box.enter().append("rect")
        .attr("class", "box")
        .attr("x", 0)
        .attr("y", function (d) {
          return x0(d[2]);
        })
        .attr("width", width)
        .attr("height", function (d) {
          return x0(d[0]) - x0(d[2]);
        }).attr("fill", fillColor)
        .transition()
        .duration(duration)
        .attr("y", function (d) {
          return x1(d[2]);
        })
        .attr("height", function (d) {
          return x1(d[0]) - x1(d[2]);
        });

      box.transition()
        .duration(duration)
        .attr("y", function (d) {
          return x1(d[2]);
        })
        .attr("height", function (d) {
          return x1(d[0]) - x1(d[2]);
        });

      // Update median line.
      let medianLine = g.selectAll("line.median")
        .data([quartileData[1]]);

      medianLine.enter().append("line")
        .attr("class", "median")
        .attr("x1", 0)
        .attr("y1", x0)
        .attr("x2", width)
        .attr("y2", x0)
        .transition()
        .duration(duration)
        .attr("y1", x1)
        .attr("y2", x1);

      medianLine.transition()
        .duration(duration)
        .attr("y1", x1)
        .attr("y2", x1);

      // Update whiskers.
      let whisker = g.selectAll("line.whisker")
        .data(whiskerData || []);

      whisker.enter().insert("line", "circle, text")
        .attr("class", "whisker")
        .attr("x1", 0)
        .attr("y1", x0)
        .attr("x2", 0 + width)
        .attr("y2", x0)
        .style("opacity", 1e-6)
        .transition()
        .duration(duration)
        .attr("y1", x1)
        .attr("y2", x1)
        .style("opacity", 1);

      whisker.transition()
        .duration(duration)
        .attr("y1", x1)
        .attr("y2", x1)
        .style("opacity", 1);

      whisker.exit().transition()
        .duration(duration)
        .attr("y1", x1)
        .attr("y2", x1)
        .style("opacity", 1e-6)
        .remove();

      // Update outliers.
      let outlier = g.selectAll("circle.outlier")
        .data(outlierIndices, Number);

      outlier.enter().insert("circle", "text")
        .attr("class", "outlier")
        .attr("r", 5)
        .attr("cx", width / 2)
        .attr("cy", function (i) {
          return x0(d[i]);
        })
        .style("opacity", 1e-6)
        .transition()
        .duration(duration)
        .attr("cy", function (i) {
          return x1(d[i]);
        })
        .style("opacity", 1);

      outlier.transition()
        .duration(duration)
        .attr("cy", function (i) {
          return x1(d[i]);
        })
        .style("opacity", 1);

      outlier.exit().transition()
        .duration(duration)
        .attr("cy", function (i) {
          return x1(d[i]);
        })
        .style("opacity", 1e-6)
        .remove();

      // Compute the tick format.
      let format = tickFormat || x1.tickFormat(8);

      // Update box ticks.
      let boxTick = g.selectAll("text.box")
        .data(quartileData);
      if (showLabels == true) {
        boxTick.enter().append("text")
          .attr("class", "box")
          .attr("dy", ".3em")
          .attr("dx", function (d, i) {
            return i & 1 ? 6 : -6
          })
          .attr("x", function (d, i) {
            return i & 1 ? +width : 0
          })
          .attr("y", x0)
          .attr("text-anchor", function (d, i) {
            return i & 1 ? "start" : "end";
          })
          .text(format)
          .transition()
          .duration(duration)
          .attr("y", x1);
      }

      boxTick.transition()
        .duration(duration)
        .text(format)
        .attr("y", x1);

      // Update whisker ticks. These are handled separately from the box
      // ticks because they may or may not exist, and we want don't want
      // to join box ticks pre-transition with whisker ticks post-.
      let whiskerTick = g.selectAll("text.whisker")
        .data(whiskerData || []);
      if (showLabels == true) {
        whiskerTick.enter().append("text")
          .attr("class", "whisker")
          .attr("dy", ".3em")
          .attr("dx", 6)
          .attr("x", width)
          .attr("y", x0)
          .text(format)
          .style("opacity", 1e-6)
          .transition()
          .duration(duration)
          .attr("y", x1)
          .style("opacity", 1);
      }
      whiskerTick.transition()
        .duration(duration)
        .text(format)
        .attr("y", x1)
        .style("opacity", 1);

      whiskerTick.exit().transition()
        .duration(duration)
        .attr("y", x1)
        .style("opacity", 1e-6)
        .remove();
    });
    d3.timer.flush();
  }

  box.color = function (x) {
    if (!arguments.length) return 'red';
    width = 'red';
    return box;
  };

  box.width = function (x) {
    if (!arguments.length) return width;
    width = x;
    return box;
  };

  box.height = function (x) {
    if (!arguments.length) return height;
    height = x;
    return box;
  };

  box.tickFormat = function (x) {
    if (!arguments.length) return tickFormat;
    tickFormat = x;
    return box;
  };

  box.duration = function (x) {
    if (!arguments.length) return duration;
    duration = x;
    return box;
  };

  box.domain = function (x) {
    if (!arguments.length) return domain;
    domain = x == null ? x : d3.functor(x);
    return box;
  };

  box.value = function (x) {
    if (!arguments.length) return value;
    value = x;
    return box;
  };

  box.whiskers = function (x) {
    if (!arguments.length) return whiskers;
    whiskers = x;
    return box;
  };

  box.showLabels = function (x) {
    if (!arguments.length) return showLabels;
    showLabels = x;
    return box;
  };

  box.quartiles = function (x) {
    if (!arguments.length) return quartiles;
    quartiles = x;
    return box;
  };

  return box;
}

export let boxWhiskers = (d) => {
  return [0, d.length - 1];
}

export let boxQuartiles = (d) => {
  return [
    d3.quantile(d, .25),
    d3.quantile(d, .5),
    d3.quantile(d, .75)
  ];
}

export let iqr = (k) => {
  return function (d, i) {
    var q1 = d.quartiles[0],
      q3 = d.quartiles[2],
      iqr = (q3 - q1) * k,
      i = -1,
      j = d.length;
    while (d[++i] < q1 - iqr) ;
    while (d[--j] > q3 + iqr) ;
    return [i, j];
  }
}


export let pieChart=(config) =>{
  function setReSizeEvent(data) {
    var resizeTimer;
    window.removeEventListener('resize', function() {});
    window.addEventListener('resize', function(event) {

      if (resizeTimer !== false) {
        clearTimeout(resizeTimer);
      }
      resizeTimer = setTimeout(function() {
        $(data.mainDiv).empty();
        drawPieChart(data);
        clearTimeout(resizeTimer);
      }, 500);
    });
  }
  drawPieChart(config);
  setReSizeEvent(config);
}

function drawPieChart(config) {
  var data = config.data;
  var colorRange = config.colorRange;
  var mainDiv = config.mainDiv;
  console.log(mainDiv);
  var mainDivName = mainDiv.substr(1, mainDiv.length);
  var caption = config.caption;
  var value = config.value;
  d3.select(mainDiv).append("svg").attr("width", $(mainDiv).width()).attr("height", $(mainDiv).height());
  var svg = d3.select(mainDiv + " svg"),
    margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;
  var g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
  var color = d3.scale.ordinal().range(colorRange);
  var colorDomain=new Array(data.length);
  for(var i=0;i<data.length;i++){
    colorDomain[i]=data[i].playerName;
  }
  color.domain(colorDomain);
  var radius = Math.min(width, height) * 0.5;
  var pie = d3.layout.pie()
    .sort(null)
    .value(function(d) {
      return d[value];
    });

  var path = d3.svg.arc()
    .outerRadius(radius - 20)
    .innerRadius(0)
    .cornerRadius(5);

  var label = d3.svg.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);
  var arc = g.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .classed("arc", true);

  var pathArea = arc.append("path")
    .attr("d", path)
    .attr("id", function(d, i) {
      return "arc-" + i
    })
    .attr("style", "fill-opacity: 0.85;")
    .attr("fill", function(d) {
      return color(d.data.playerName);
    })
    .attr("data", function(d) {
      d.data["percentage"] = (d.endAngle - d.startAngle) / (2 * Math.PI) * 100;
      return JSON.stringify(d.data);
    });

  //CBT:give blinking effect on mouse over
  pathArea.on("mouseover", function(d) {
    var currentEl = d3.select(this);
    currentEl.attr("style", "fill-opacity:1;");

    var fadeInSpeed = 120;
    d3.select("#tooltip_" + mainDivName)
      .transition()
      .duration(fadeInSpeed)
      .style("opacity", function() {
        return 1;
      });
    d3.select("#tooltip_" + mainDivName)
      .attr("transform", function(d) {
        var mouseCoords = d3.mouse(this.parentNode);
        var xCo = mouseCoords[0] + 10;;
        var yCo = mouseCoords[0] + 10;
        return "translate(" + xCo + "," + yCo + ")";
      });
    //CBT:calculate tooltips text
    var tooltipData = JSON.parse(currentEl.attr("data"));
    d3.selectAll("#tooltipText_" + mainDivName).text("");
    var yPos = 0;
    d3.selectAll("#tooltipText_" + mainDivName).append("tspan").attr("x", 0).attr("y", yPos * 10).attr("dy", "1.9em").text(d3.format("0.2f")(tooltipData["percentage"]) + "%");
    var dims = helpers.getDimensions("tooltipText_" + mainDivName);
    d3.selectAll("#tooltipText_" + mainDivName + " tspan")
      .attr("x", dims.w + 2);

    d3.selectAll("#tooltipRect_" + mainDivName)
      .attr("width", dims.w + 10)
      .attr("height", dims.h + 20);
  });
  pathArea.on("mousemove", function(d) {
    var currentEl = d3.select(this);
    d3.selectAll("#tooltip_" + mainDivName)
      .attr("transform", function(d) {
        var mouseCoords = d3.mouse(this.parentNode);
        var xCo = mouseCoords[0] + 10;
        var yCo = mouseCoords[1] + 10;
        return "translate(" + xCo + "," + yCo + ")";
      });
  });
  pathArea.on("mouseout", function(d) {
    var currentEl = d3.select(this);
    currentEl.attr("style", "fill-opacity:0.85;");

    d3.select("#tooltip_" + mainDivName)
      .style("opacity", function() {
        return 0;
      });
    d3.select("#tooltip_" + mainDivName).attr("transform", function(d, i) {
      var x = -500;
      var y = -500;
      return "translate(" + x + "," + y + ")";
    });
  });

  //CBT:tooltips start
  var tooltipg = g.append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .attr("text-anchor", "end")
    .attr("id", "tooltip_" + mainDivName)
    .attr("style", "opacity:0")
    .attr("transform", "translate(-500,-500)");

  tooltipg.append("rect")
    .attr("id", "tooltipRect_" + mainDivName)
    .attr("x", 0)
    .attr("width", 120)
    .attr("height", 80)
    .attr("opacity", 0.8)
    .style("fill", "#000000");

  tooltipg
    .append("text")
    .attr("id", "tooltipText_" + mainDivName)
    .attr("x", 30)
    .attr("y", 15)
    .attr("fill", "#fff")
    .style("font-size", 10)
    .style("font-family", "arial")
    .text(function(d, i) {
      return "";
    });
  //CBT:tooltips end
  arc.append("text")
    .attr("transform", function(d) {
      return "translate(" + label.centroid(d) + ")";
    })
    .attr("dy", "0.35em")
    .text(function(d) {
      return d.data[value];
    });

  arc.append("text")
    .attr("dx", 10)
    .attr("dy", -5)
    .append("textPath")
    .attr("xlink:href", function(d, i) {
      return "#arc-" + i;
    })
    .text(function(d) {
      return d.data[caption].toString();
    })

}

let helpers = {
  getDimensions: function(id) {
    var el = document.getElementById(id);
    var w = 0,
      h = 0;
    if (el) {
      var dimensions = el.getBBox();
      w = dimensions.width;
      h = dimensions.height;
    } else {
      console.log("error: getDimensions() " + id + " not found.");
    }
    return {
      w: w,
      h: h
    };
  }
}
