// generateImageArray.js
const fs = require("fs");
const path = require("path");

// Directory containing your images
const imagesDir = path.resolve(__dirname, "assets/images");

// Output file where the image array will be written
const outputFile = path.resolve(__dirname, "assets/imageArray.js");

// Read the images directory
fs.readdir(imagesDir, (err, files) => {
  if (err) throw err;

  // Filter image files and create require statements
  const requires = files
    .filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file))
    .map((file) => `  require('./images/${file}'),`);

  // Generate the content for the output file
  const content = `const images = [\n${requires.join(
    "\n"
  )}\n];\n\nexport default images;\n`;

  // Write the content to the output file
  fs.writeFile(outputFile, content, (err) => {
    if (err) throw err;
    console.log("Image array file generated!");
  });
});
