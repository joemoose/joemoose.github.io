var jetbrain //font
var seed
var textH = 12

var drawLegend = true
var fullMap = false

var clearColor = 200
let border = 50
var drawSpeed = 50

var modes = ["Generating Topology", "Discovering Sites", "Analysis Complete"]
var cMode = 0;

var topoPos

var mapName
var palette

var p4 = ['#B8D8D8', '#7A9E9F', '#4F6367', '#FE5F55', '#EEF5DB', '#FE5F55']
// Brown orange
var p3 = ['#E9D985', '#B2BD7E', '#749C75', '#C57B57', '#393D3F', '#1E2D2F']
// Violet hues
var p1 = ['#FB3640', '#FB3640', '#FB3640', '#1F487E', '#C8B8DB']
// Greys
var p2 = ['#87bfff', '#3F8EFC', '#2667FF', '#3B28CC', 200]
var w, h

var legend
var maxLocation = 5

function preload() {
	jetbrain = loadFont("JetBrainsMono.ttf")
	//jetbrain = loadFont("Yantramanav-Medium.ttf")
}

function setup() {
	//seed = 54545456
	//randomSeed(seed)
	//noSmooth()
	//noLoop()
	//frameRate(10) //limit drawing rate
	textFont(jetbrain)
	textSize(textH - 1)
	textAlign(CENTER, CENTER)

	w = 1280
	h = 800

	tS = 1

	createCanvas(w, h);
	t1 = millis();
	border = min(w * 0.1, border)

	noFill()
	
	initTopo()
	topoPos = createVector(w - topo.width, 0)
	
	initLocation(random(3, 10))
	legend = new Legend()
}

function draw() {
	background(palette[4])
	push()
	translate(topoPos.x, topoPos.y)
	image(topo, 0, 0)
	pop()
	drawLocations()
	legend.draw()

	// State Machine
	switch (cMode) {
		// Generating Topology
		case 0:
			legend.addLog("Generating Topography : " + round((topoY*100) + topoX)/100)
			for (var i = 0; i < drawSpeed; i++) {
				drawTopo()
			}
			break;

			// Discovering Location
		case 1:
			legend.initDesc()
			if (!locationDone) {
				findLocation()
			}
			break;
	}

}

function keyReleased() {
	if (key == "1") {
		tS = 1
		initTopo()
	}
	if (key == "2") {
		tS = 2
		initTopo()
	}
	if (key == "3") {
		tS = 3
		initTopo()
	}

	if (key == "n") {
		initTopo()
		initLocation(0)
		legend.reset()
		cMode = 0
	}

	if (key == "s") {
		save("Ruines_Maps_" + round(millis() / 200) + ".png")
	}

	if (key == "i") {
		drawLegend = !drawLegend
	}
}

// reference : https://devforum.roblox.com/t/creating-procedural-mountains-a-fractal-noise-tutorial/1494362
function fractalNoise(x, y, octaves, lacunarity, persistence, scale) {
	//The sum of our octaves
	var value = 0

	//These coordinates will be scaled the lacunarity
	var x1 = x
	var y1 = y

	// Determines the effect of each octave on the previous sum
	var amplitude = 1

	for (var i = 1; i < octaves; i++) {
		// Multiply the noise output by the amplitude and add it to our sum
		value += noise(x1 * scale, y1 * scale) * amplitude

		// Scale up our perlin noise by multiplying the coordinates by lacunarity
		y1 *= lacunarity
		x1 *= lacunarity

		// Reduce our amplitude by multiplying it by persistence
		amplitude *= persistence
	}

	// It is possible to have an output value outside of the range [-1,1]
	// For consistency let's clamp it to that range
	return constrain(value, 0, 1)
}