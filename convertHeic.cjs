const fs = require('fs');
const { promisify } = require('util');
const heicConvert = require('heic-convert');
const path = require('path');

async function convertHeic() {
    const dir = 'public/galeri';
    const files = fs.readdirSync(dir);

    for (const file of files) {
        if (file.toLowerCase().endsWith('.heic')) {
            const inputBuffer = fs.readFileSync(path.join(dir, file));
            console.log(`Converting ${file}...`);
            try {
                const outputBuffer = await heicConvert({
                    buffer: inputBuffer,
                    format: 'JPEG',
                    quality: 0.8
                });
                const outPath = path.join(dir, file.replace(/\.heic$/i, '.jpg'));
                fs.writeFileSync(outPath, outputBuffer);
                console.log(`Converted to ${outPath}`);
            } catch (e) {
                console.error(`Error converting ${file}: `, e);
            }
        }
    }
}

convertHeic();
