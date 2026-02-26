const Jimp = require('jimp');

Jimp.read('public/Gemini_Generated_Image_r9f89wr9f89wr9f8.png', (err, image) => {
    if (err) throw err;

    const threshold = 230; // Anything brighter than this is considered white background

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];

        // If the pixel is very light (nearly white)
        if (r > threshold && g > threshold && b > threshold) {
            // Calculate how close it is to pure white to create a smooth alpha transition
            // Distance from threshold to 255
            const brightness = (r + g + b) / 3;
            if (brightness > 250) {
                this.bitmap.data[idx + 3] = 0; // Pure transparent for absolute white
            } else {
                // Soft edge
                const t = (255 - brightness) / (255 - threshold);
                this.bitmap.data[idx + 3] = Math.floor(t * 255);
            }
        }
    });

    image.write('public/character-transparent.png');
    console.log("Image saved as character-transparent.png!");
});
