var angle = 3.1;

function setup() {
	createCanvas(500, 500);
	pixelDensity(1);
	loadPixels();
	
	var framesPerSecond = 30;
	setInterval(update, 1000/framesPerSecond);
}

function update() {

	var ca = sin(angle);
	var cb = cos(angle*3.14);

	for (var x = 0; x < width; x++) {
		for (var y = 0; y < height; y++) {
			var pix = (x + y * width) * 4;

				var a = map(x, 0, width, -1.8,1.8);
				var b = map(y, 0, height, -1.4, 1.4);

				var maxIts = 100;

				var n = 0;
				var z = 0;

				while (n<maxIts) {
					newA = a*a - b*b;
					newB = 2*a*b;

					a = newA + ca;
					b = newB + cb;

					n++;

					if (abs(a) > 4 || abs(b) > 4) {
						break;
					}
				}

				var rgb = [0,0,0];
				if (n == maxIts) {
					rgb = [0, 0, 0]

				} else {
					gbBrightness = map(n, 0, maxIts, 0, 255);
					rgb = [gbBrightness, gbBrightness, gbBrightness];
				}

				pixels[pix + 0] = rgb[0];
				pixels[pix + 1] = rgb[1];
				pixels[pix + 2] = rgb[2];
				pixels[pix + 3] = 255;
		}
	}
	updatePixels();
	angle += 0.007;
}
