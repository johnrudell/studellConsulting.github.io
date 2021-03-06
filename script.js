// Pauses main carousel on modal click
$('.modal').on('shown.bs.modal', function (e) {
    $('.mainCarousel').carousel('pause');
})

// Return main carousel cycle on modal close
$('.modal').on('hidden.bs.modal', function () {
	$('.mainCarousel').carousel('cycle');
})

// Create text over room svgs
var textData = [
	{"name": "4.1", "x": 775,	"y": 250},
	{"name": "4.2", "x": 580, 	"y": 225},
	{"name": "4.3", "x": 410, 	"y": 140},
	{"name": "3.2", "x": 387, 	"y": 320},
	{"name": "2.2", "x": 400, 	"y": 510},
	{"name": "1.1", "x": 775,	"y": 853},
	{"name": "1.2", "x": 360, 	"y": 690},
	{"name": "Den", "x": 625, 	"y": 1030}
];

var svgContainer = d3.select("svg");
	
svgContainer.selectAll("text")
	.data(textData)
	.enter()
	.append("text")
	.classed("room-text", true)
	.text(function(d,i) { return d.name; })
	.attr("x", function(d) {
		return d.x;
	})
	.attr("y", function(d) {
		return d.y;
	});