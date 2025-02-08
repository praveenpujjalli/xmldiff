const { diff } = require('xml-diff');
const fs = require('fs');

// Function to read XML file and return its contents
function readXMLFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8');
}

// Example usage
const xmlFilePath1 = 'file1.xml';
const xmlFilePath2 = 'file2.xml';

const xmlContent1 = readXMLFile(xmlFilePath1);
const xmlContent2 = readXMLFile(xmlFilePath2);

// Perform XML diff
const differences = diff(xmlContent1, xmlContent2);

// Print the differences
console.log("Differences found between the XML files:");
console.log(differences);
