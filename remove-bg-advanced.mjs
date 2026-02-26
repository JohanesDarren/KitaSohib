import { removeBackground } from "@imgly/background-removal-node";
import fs from "fs";

async function main() {
    const imagePath = "public/Gemini_Generated_Image_r9f89wr9f89wr9f8.png";
    console.log("Processing image...");

    try {
        const blob = await removeBackground(imagePath);
        console.log("Background removed. Converting blob to buffer...");

        const buffer = Buffer.from(await blob.arrayBuffer());

        fs.writeFileSync("public/character-transparent.png", buffer);
        console.log("Success! Saved as public/character-transparent.png");
    } catch (err) {
        console.error("Error generating transparent image:", err);
    }
}

main();
