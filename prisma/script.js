const csv = require('csvtojson');

async function readCSV() {
    const translations = [];

    try {
        const json = await csv({ delimiter: ',' }).fromFile('./prisma/dictionary.csv');
        json.forEach((row) => {
            translations.push(row);
        });
        return translations;
    } catch (error) {
        console.error('Error reading CSV:', error);
        return [];
    }
}

module.exports = readCSV;