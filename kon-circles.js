var stage = new Konva.Stage({
		height: 800,
		width: 800,
		container: "container-konva",
	});

	var layer = new Konva.Layer();


	var circle1 = new Konva.Circle({
		x:200,
		y:200,
		fill: "blue",
		radius:50,
	});

	
	var circle2 = new Konva.Circle({
		x:500,
		y:200,
		fill: "red",
		radius:50,
	});

	var line = new Konva.Line({
		points: [circle1.x()+circle1.radius(),circle1.y(),circle2.x()-circle2.radius(),circle2.y()],
		stroke: 'black',
        strokeWidth: 5,
        

	});


	layer.add(circle1);
	layer.add(circle2);
	layer.add(line);

	stage.add(layer);
