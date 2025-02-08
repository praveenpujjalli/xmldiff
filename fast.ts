import * as fs from 'fs';
import * as fastXmlParser from 'fast-xml-parser';

// Function to read XML file and return its contents
function readXMLFile(filePath: string): string {
    return fs.readFileSync(filePath, 'utf-8');
}

// Example usage
const xmlFilePath = 'file.xml';
const xmlContent = readXMLFile(xmlFilePath);

// Parse XML to JSON
const options = {
    attributeNamePrefix: "@_",
    ignoreAttributes: false,
    ignoreNameSpace: false
};

if (fastXmlParser.validate(xmlContent) === true) { // optional (it'll return an object in case it's not valid)
    const jsonData = fastXmlParser.parse(xmlContent, options);
    // Print the parsed JSON
    console.log("Parsed JSON:");
    console.log(jsonData);
} else {
    console.error('XML is not valid:', fastXmlParser.getTraversalObj(xmlContent));
}
