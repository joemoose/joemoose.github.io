var nRes = 0
var sNoise = 0
var falloff, lod, lanc, pers, oct
var topoDone = false

var features = []
var featureDone = false

var mapSize = []
var mapPos 	= []
//1, x, , , .		
var _ascii = ["'", " x", ",", ".", "*", "+", ">"]
var ascii
var topoType = [0, 0, 0, 0]
var topoRatio = [0, 0, 0, 0]

//seed, nRes, lod, falloff
var topoData1 = [0, 0, 0, 0, 0, 0]
var topoData2 = [0, 0, 0, 0, 0, 0]

var topoX
var topoY
var tS //topoScale

function initTopo() {
	randomSeed(seed)
	topo = createGraphics(800*tS, 800*tS)

	
	var tW = topo.width
	var tH = topo.height

	topoDone = false
	locationDone = false


	mapName = generateMapName()
	drawFlag = true

	mapPos = [0 + border, 0 + border]
	mapSize = [tW - (border * 2), tH - (border * 2)]

	if (fullMap == true) {
		mapPos = [border, border]
		mapSize = [tW - border * 2, tH - border * 2]
	}
	topoX = mapPos[0]
	topoY = mapPos[1]

	topoData1 = newTopoNoise()
	topoData2 = newTopoNoise()
	noiseSeed(topoData1[0])

	ascii = shuffle(_ascii)
	//textH = floor(random(10, 16))
	palette = random([p1, p2, p3, p4])
	//palette = p4
	
	features = []
	var rF = floor(random(2, 7))
	for (var r = 0; r < rF; r++) {
		features.push([floor(random(mapSize[0])), floor(random(mapSize[1])), floor(random(10, 30)), floor(random(10, 30))])
	}

	background(palette[4])
	topo.textFont(jetbrain)
	topo.textSize(textH)
	topo.background(palette[4])
}

function newTopoNoise() {
	nRes = random(0.003, 0.01)
	nSeed = random(55555)
	lod = random(5, 9)
	lod = random(1, 3)
	falloff = random(0.3, 1)
	oct  = random(3, 10)
	lanc = random(1, 10)
	//lanc = 1
	pers = random(0.1, 0.3)

	var topoData = [nSeed, nRes, lod, falloff, random(5555), random(5555)]

	return topoData
}

function setTopoData(topoData) {
	//topoData = [nSeed, nRes, lod, falloff]
	noiseDetail(topoData[2], topoData[3]);
}

function computeRatio() {
	let _t = topoType[0] + topoType[1] + topoType[2] + topoType[3]
	for (var i = 0; i < 4; i++) {
		topoRatio[i] = round(topoType[i] / _t, 2)
	}
	//print(topoType)
}

function drawTopo() {
	if (topoDone) return

	// x, y, octaves, lacunarity, persistence, scale
	setTopoData[topoData1]
	n = fractalNoise(topoX / tS, topoY / tS, oct, lanc, pers, topoData1[1]) 

	var step = ((n * 5) + 2) 
	//if(n < 0.3) n = 0

	c = color(0, 0, 0)
	symbol = ascii[0]
	let topoT = 0

	if (n >= 0.0) {
		topoT = 0
	}
	if (n >= 0.14) {
		//topoT = 5
	}
	if (n > 0.3) {
		topoT = 1
	}
	if (n > 0.4) {
		topoT = 2
	}
	if (n > 0.6) {
		topoT = 3
	}
	if (n > 0.8) {
		//topoT = 4
	}

	symbol = ascii[topoT]
	c = color(palette[min(topoT, 3)])
	topoType[topoT] += 1

	topo.noStroke()
	topo.fill(c)
	topo.textSize(textH)
	topo.text(symbol, topoX, topoY + (n * 3))

	topoX += step;
	if (topoX > mapSize[0] + mapPos[0]) {
		topoX = mapPos[0] - step * 3
		topoY += step
		return;
	}
	if (topoY > mapSize[1] + mapPos[1]) {
		//topoY = mapPos[1]
		computeRatio()
		legend.addLog("Topography Complete.")
		legend.addDiv()
		cMode++
		topoDone = true
		return;
	}
	return 0
}

function drawFeatures() {
	if (featureDone == false) {
		for (var i = 0; i < features.length; i++) {
			var f = features[i]
			topo.push()
			topo.translate(border + f[0], border + f[1])
			for (let j = 0; j < 30; j++) {
				topo.fill(30, random(50, 150))
				topo.text("+", random(f[2]), random(f[3]))
			}
			topo.pop()
		}
		featureDone = true
	}
}