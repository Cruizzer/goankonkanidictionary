import React from 'react'

interface Translation {
    ENGLISH: string;
    KONKANI: string;
}

const TranslationCard = ({ translation }: { translation: Translation[] }) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-10">
            {translation.map((translation: Translation, i: number) => (
                <a key={i} href="#" className="block max-w-sm p-6 bg-gray-800 border border-gray-700 rounded-lg shadow hover:bg-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{translation.ENGLISH}</h5>
                    <p className="font-normal text-gray-400 dark:text-gray-400">{translation.KONKANI}</p>
                </a>
            ))}
        </div>
    )
}

export default TranslationCard