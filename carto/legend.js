var topoInfo = false

class Legend {
	constructor() {
		this.info = []
		this.pos = [border, border]
		this.size = [w - 800 - (border * 2), h - border * 2]
		this.cLine = this.pos[0]

		//this.mapScale 	= (random(5) * 10) + "travel day."
		this.elevation 	= [floor(random(-22, 10)), floor(random(160, 230))]
		this.desc 			= ""
		this.descW 			= 1
		this.locW 			= 0
		this.descDone 	= false
		this.res 				= [] //ressources
		this.reset()
		//this.initDesc()
	}

	initDesc() {
		if(this.desc.length > 1) return;
		//this.addLog("Generating map description.")
		var d = ""

		d += "A " + random(lex.landAdj) + " " + random(lex.landType)
		d += " located in the " + random(lex.direction) + " area of Vaarn.\n"
		// population

		//main ressources
		var _r = random(10)
		if (_r > 5) this.res.push(random(lex.trade));
		if (_r > 7) this.res.push(random(lex.collect));
		this.res.push(random(lex.farm))

		d += "Notable trade"

		if (this.res.length > 1) {
			d += "s are "
		} else {
			d += " is "
		}

		for (let i = 0; i < this.res.length; i++) {
			d += this.res[i]
			if (i == this.res.length - 2) {
				d += " and "
			}
			if (i < this.res.length - 2) {
				d += ", "
			}
		}
		d += ".\n"

		this.desc = d
		legend.addLog("Map description done.")
		legend.addDiv()
		this.res = []
	}


	draw() {
		this.cLine = this.pos[0]
		if (cMode > 0) {
			this.descW += 0.3;
		}
		//legend.drawGrid()
		legend.drawTitle()
		legend.drawLog()
		legend.drawColorInfo()
		legend.drawLocations()
	}

	drawTitle() {
		strokeWeight(3)
		stroke(palette[4])
		//noStroke()
		noFill()
		fill(palette[2])
		textSize(20)
		textAlign(LEFT, TOP)
		var m = mapName
		text(m.toUpperCase(), this.pos[0], this.pos[1])
		noStroke()
		this.cLine += 30


		fill(palette[2])
		textAlign(LEFT, TOP)
		textSize(textH)
		var w = min(round(this.descW), this.desc.length)
		var desc = this.desc.substr(0, w)
		text(desc, this.pos[0], this.cLine)
		strokeWeight(1)
		stroke(palette[2])
		this.cLine += 40
		line(this.pos[0], this.cLine, this.pos[0] + this.size[0], this.cLine)
		this.cLine += 10
	}

	drawColorInfo() {
		if (cMode < 1) return;
		let _x = w - border
		let _y = this.pos[1] + this.size[1] + textH
		let colorW = w / 5
		strokeWeight(1)
		textAlign(CENTER, CENTER)
		textSize(textH)
		//noStroke()
		//stroke(0)
		//strokeWeight(0.1)
		rectMode(CORNER)
		text("elevation", _x - colorW / 2, _y + textH)
		text(this.elevation[1] + "m", _x, _y + textH)
		for (let i = 0; i < 4; i++) {
			fill(palette[i])
			let topoW = topoRatio[i] * colorW
			//print(topoType)
			noStroke()
			rect(_x, _y, -topoW, 5)
			stroke(0)
			line(_x, _y - 5, _x, _y + 5)
			/*
			for(let x = 0; x < 15; x+=random(1,2)) {
				for(let y = 0; y < 15; y+=random(1,2)) {
					text(ascii[i], _x + x, _y + y)
				} 
			}
			*/
			_x -= topoW
		}
		line(_x, _y - 5, _x, _y + 5)
		fill(palette[2])
		noStroke()
		text(this.elevation[0] + "m", _x, _y + textH)
		
		//distance
		_x = w/2
		stroke(palette[1])
		strokeWeight(3)
		line(_x, _y, _x - 100, _y)
		strokeWeight(1)
		noFill()
		stroke(palette[3])
		circle(_x, _y, 10)
		circle(_x-100, _y, 10)
		fill(palette[2])
		noStroke()
		textAlign(LEFT, CENTER)
		text("~1 travel day.", _x-100, _y + textH)
		
	}

	drawLocations() {
		var locInfo = getLocInfo()
		let locX = this.pos[0]
		let locY = this.cLine

		textAlign(LEFT, TOP)
		textSize(textH)
		fill(palette[2])
		noStroke()
		var t = ""
		if (locs.length > 0) {
			for (let i = 0; i < locs.length; i++) {
				textSize(textH + 4)
				//text((i+1)+">", locX, locY)
				textSize(textH)
				//text(locs[i].desc, locX + 25, locY)
				t += i+1 + " > "
				t += locs[i].desc
				t += "\n\n\n"
				//text(this.info[i + 1], logX + 200, logY)
				//locY += textH * 5
			}
		}
		var w = min(round(this.locW), t.length)
		var desc = t.substr(0, w)
		text(desc, locX, locY)
		if (locs.length > 0 && w < t.length)
			this.locW += 0.3;
	}

	drawGrid() {
		var gridStep = mapSize[1] / 10
		let gridC = color(palette[2])

		gridC.setAlpha(100)
		stroke(gridC)
		for (let x = border + gridStep; x < mapSize[0] + border; x += gridStep) {
			line(x, border, x, mapSize[1] + border)
		}
		for (let y = border + gridStep; y < mapSize[1] + border; y += gridStep) {
			line(border, y, mapSize[0] + border, y)
		}
	}

	drawLog() {
		let logLine = 5
		let logX = this.pos[0]
		let logY = h - border - textH * logLine + 3
		rectMode(CORNER)
		noFill()
		stroke(palette[2])
		strokeWeight(1)
		rect(logX - 4, logY, 400, textH * logLine + 3)
		textAlign(LEFT, TOP)
		textSize(textH)
		fill(palette[2])
		noStroke()
		if (this.info.length > 1) {
			for (let i = 0; i < logLine; i++) {
				text(this.info[i], logX, logY)
				//text(this.info[i + 1], logX + 200, logY)
				logY += textH
			}
		}
	}

	addLog(text) {
		this.info.unshift(text)

		if (this.info.length > 50) {
			this.info.splice(25, 25)
		}
	}

	addDiv(text) {
		this.addLog("================")
	}

	reset() {
		this.info = []
		this.res 	= []
		this.desc 	= ""
		this.descW 	= 0
		this.locW 	= 0
		this.descDone = false;
		this.elevation = [floor(random(-22, 10)), floor(random(160, 230))]

	}
}