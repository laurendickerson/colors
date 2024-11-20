const fs = require('fs');
const path = require('path');

// Step 1: Read a row from Rainbow.txt
fs.readFile('Rainbow.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Split the content into an array of rows
    const lines = data.split('\n');

    // Pick the first value (assuming it's the first row, you can change this index)
    const colorName = lines[3].trim();  // Trim removes any newline characters

    // Step 2: Create a new file with the value as the name
    const fileName = `${colorName}.txt`;

    // Step 3: Write the value into the new file
    fs.writeFile(fileName, colorName, (err) => {
        if (err) {
            console.error('Error writing the file:', err);
            return;
        }
        console.log(`File '${fileName}' created with content: ${colorName}`);
    });
});
