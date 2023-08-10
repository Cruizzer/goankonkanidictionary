const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const readCSV = require('./script')

async function main() {
    await prisma.translation.deleteMany({});

    const translations = await readCSV();

    const translationsToCreate = translations.map((translation: any) => {
        return {
            English: translation.English,
            Konkani: translation.Konkani,
            authorId: ""
            // Add other properties as needed and add authorId.
        };
    });

    const createMany = await prisma.translation.createMany({
        data: translationsToCreate,
        skipDuplicates: true,
    });

    console.log('Translations created:', createMany);

    await prisma.$disconnect();
}

main().catch((error) => {
    console.error('Error:', error);
    prisma.$disconnect();
    process.exit(1);
});