const wType = [1, 2, 3, 1, 3, 2, 1, 1, 2]
var _symbols = ["x", "+", "-", "*", "#", "!"]

var aLocs = []
var locs = []

var locationDone = false
var locTimer = 0
var locSize = 50;
var locChance = 0;

var locX = 0
var locY = 0

class Location {
	constructor(x, y, id) {
		this.pos = createVector(x, y);
		this.name = _names.splice(random(_names.length), 1)
		this.size = random(3, 10)
		this.neighbors = []
		this.id = id
		this.data = []
		this.desc = ""
		this.trade = false

		this.type = random(lex.location)
		this.symbol = this.type[0];
		this.generateDesc()
	}

	generateDesc() {
		/*
			Some places are still unkown -> sense of wonder and exploration
			Too dangerous -> 
			Rumored / Uncertained -> Mystery
			Repurposed -> Ruins/recycle
			Scavanged -> Repurposed
			United in a faith/ideology -> Occultism
		*/
		var d = ""
		print(this.type)
		var verb1 = random(lex[this.type])
		print(verb1)
		var items = shuffle(lex[verb1], true)
		
		var object1 = items[0]
		var object2 = items[1]
		
		var desc = [
			this.type,
			random(w_size) + " " + this.type.toLowerCase(),
			random(w_size) + " " + this.type.toLowerCase() + " " + random(lex.occupy) + " by " + random(lex.cultures),
			"Ruined location",
			"Unknown location"
		]
		
		var struct = [
			"They " + verb1 + " " + object1 + ".",
			"They " + verb1 + " " + object1 + " and " + object2 + ".",
			//capFirst(verb1) + "s " + object1 + ".",
			random(lex.cultures) + random([" interested in ", " in need of ", " seeking for "]) + object1,
			"Interest for " + object1,
			
			//"No information available.",
		]
		
		var rDesc 	= floor(random(desc.length))
		var rStruct = floor(random(struct.length))
		
		//if(rDesc > 3) rStruct = 3; //
		
		d += desc[rDesc]
		d += "\n"
		d += struct[rStruct]
		print(d)
		print("=================")
		this.desc = d
	}

	addNeighbors(n) {
		this.neighbors = [...n]
		var _dist, _pos, _nei
		//print(this.neighbors)
		for (let i = this.neighbors.length - 1; i >= 0; i--) {
			_nei = locs[this.neighbors[i]]
			if (_nei.neighbors.includes(this.id)) {
				//print("found similar nei :" + this.name + "/" + _nei.name)
				this.neignbors = this.neighbors.splice(i, 1)
			} else {
				_pos = createVector(_nei.pos.x, _nei.pos.y)
				_dist = this.pos.dist(_pos)
				if (_dist > mapSize.mag() / 3) {
					this.neignbors = this.neighbors.splice(i, 1)
					//print("Splice Distance: " + _dist)
				}
			}
		}


		//this.neighbors = shuffle(this.neighbors)
		this.neignbors = this.neighbors.splice(ceil(random(0, 1)))

		//print(this.neighbors)
		//print("+++++++++++++++++")
	}

	render() {
		push()
		translate(this.pos.x, this.pos.y)
		
		//circle
		noFill()
		stroke(0)
		strokeWeight(2)
		var c = color(palette[2])
		c.setAlpha(170)
		fill(c)
		ellipse(0, 0, 25)
		stroke(palette[1])
		//ellipse(2, 2, 25)

		//text
		noStroke()
		//stroke(0)
		//strokeWeight(1)
		fill(0, 200)
		textSize(20)
		textAlign(CENTER, CENTER)
		text(this.id, 0, -3)
		textSize(12)
		//text(this.id, 18, -10)
		
		pop()
	}

	renderN() {
		push()
		var n
		for (const id of this.neighbors) {
			if (locs[id]) {
				n = locs[id].pos
			}

			setLineDash([3, 5]);
			stroke(0, 127)
			//stroke(200, 0, 0, 127)
			strokeWeight(1.5)
			jitterLine(this.pos.x, this.pos.y, n.x, n.y)
			beginShape()
			//curveVertex(this.pos.x, this.pos.y)
			//curveVertex(this.pos.x, this.pos.y)

			//insert more vertex for woobly roads

			//curveVertex(n.x, n.y)
			//curveVertex(n.x, n.y)
			stroke(100, 100, 225)
			noFill()
			endShape()

		}
		pop()

		setLineDash([0, 0]);
	}
}

function getLocInfo() {
	var info = []
	var line = ""
	for (const l of locs) {
		line = l.type
		info.push(line)
	}
	return info
}

function initLocation(locNum) {
	var edge = 75
	locX = random(mapSize[0] - edge) + mapPos[0] + edge / 2 + topoPos.x
	locY = random(mapSize[1] - edge) + mapPos[1] + edge / 2 + topoPos.y
	locTimer = millis() + 1000
	locs = []
	aLocs = []
	locChance = random()
	
	maxLocation = floor(random(3, 8))
	shuffle(_symbols, true)

	/*
	for(var i = 0; i < locNum; i++) {
		locs[i] = new Location(random(border*2, w - border*2), random(border*2, h - border*2), i)
	}
	*/
}

function findLocation() {
	var step = 20
	strokeWeight(1)
	rectMode(CENTER)
	noFill()
	stroke(0)
	rect(locX, locY, locSize, locSize)
	locSize -= 0.7

	if (millis() > locTimer) {
		if (locChance < 0.003 * drawSpeed) {
			let _l = new Location(locX + step / 2, locY + step / 2, locs.length + 1)
			locs.push(_l)
			legend.addLog("Adding " + _l.type + " at X" + round(_l.pos.x) + " Y" + round(_l.pos.y))
			//legend.addLog(_l.id +". "+ random(w_size) + " " +_l.type)
			//legend.addLog("Condition : " + random(w_condition))
		} else {
			legend.addLog("Searching for location.")
		}
		var edge = 75
		locX = random(mapSize[0] - edge) + mapPos[0] + edge / 2 + topoPos.x
		locY = random(mapSize[1] - edge) + mapPos[1] + edge / 2 + topoPos.y
		locSize = 50;
		locTimer = millis() + 1000;
		locChance = random()

		if (locs.length > maxLocation) {
			locationDone = true
			cMode++
			legend.addLog("Found " + maxLocation + " location in " + mapName)
			legend.addDiv()
		}
	}

	/*
	if(locX > mapSize[0]) {
		locX = mapPos[0];
		locY += step;
	}
	
	if(locY > mapSize[1]) {
		locX = mapPos[0];
		locY = mapPos[1];
		locationDone = true
	}
	*/

}

function drawLocations() {
	for (const l of locs) {
		l.render()
	}
}