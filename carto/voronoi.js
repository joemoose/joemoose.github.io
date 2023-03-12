function initVoronoi(location_number, mapW, mapH) {
		//Set Cell Stroke Weight
	voronoiCellStrokeWeight(0.5);
	//Set Site Stroke Weight
	voronoiSiteStrokeWeight(0.0);
	//Set Cell Stroke
	voronoiCellStroke(color(100, 100, 255, 50));
	voronoiCellStroke(color(100, 100, 100, 250));
	//voronoiCellStroke(100);
	//Set Site Stroke
	voronoiSiteStroke(0);
	//Set flag to draw Site
	voronoiSiteFlag(true);
	
		
	//Maximum distance between jitters
	voronoiJitterStepMax(30);
	//Minimum distance between jitters
	voronoiJitterStepMin(10);
	//Scales each jitter
	voronoiJitterFactor(2);
	//Jitter edges of diagram
	voronoiJitterBorder(true);
	
	var _l = []
	var div = min(mapW/12, 64)
	for(let y = 0; y < floor(mapH/div); y++) { 
		for(let x = 0; x < floor(mapW/div); x++) {
			_l.push([x, y])
		}
	}
	
	var picked
	for(let i = 0; i < location_number;i++) {
		shuffle(_l, true)
		picked = _l.pop()
		//print(picked)
		voronoiSite(picked[0]*div + random(-div/4, div/4) + div/2, picked[1]*div + random(-div/4, div/4) + div/2);	
	}
	
	voronoi(mapSize.x, mapSize.y, true);
}

function jitterLine(x1,y1,x2,y2){

		//Edge info to save
		let memEdge 	= []
		let vertices 	= []
	
		//Edge Details					
		const dX = x2-x1;
		const dY = y2-y1;
		const delta = createVector(dX, dY);
		const deltaNorm = delta.copy(); deltaNorm.normalize();
		const deltaMag = delta.mag();
		const perpendicularNorm = deltaNorm.copy(); perpendicularNorm.rotate(HALF_PI);
		let start = createVector(x1, y1);
		let pos = start.copy();
		let jitterVal = 0;
		let jitterStepMin = random(6,20)
		let jitterStepMax = random(10, 30)
		let jitterFactor 	= random(1, 4)

		//Add first edge vertice
		vertices.push([start.x,start.y]);
		memEdge.push([start.x,start.y]);

		//beginShape()
		//Jitter Vertices
		var total = random(jitterStepMin,jitterStepMax+1);
		while(total < deltaMag){
			//Advance pos
			pos = p5.Vector.add(start, p5.Vector.mult(deltaNorm, total));
			//Jitter Perpendicularly
			jitterVal = (random(0,201)-100)/100;
			jitterVal *= jitterFactor;
			pos.add(p5.Vector.mult(perpendicularNorm, jitterVal));
			//Add vertice
			
			vertices.push([pos.x,pos.y]);
			memEdge.push([pos.x,pos.y]);
			//Advance
		
			
			total += random(jitterStepMin,jitterStepMax+1);
		}
	
	
		//beginShape()
		//stroke(30, 100)
		//strokeWeight(1)
		for(let v = 0; v < vertices.length-1; v++){
			line(vertices[v][0], vertices[v][1], vertices[v+1][0], vertices[v+1][1])
		}
		//endShape()

		//Add to edge memory
		//memEdge.push([edge.getEndpoint().x, edge.getEndpoint().y]);
		//edgeMemory.push([edge, memEdge]);
}

function setLineDash(list) {
  drawingContext.setLineDash(list);
}