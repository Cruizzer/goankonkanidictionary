import React from 'react'
import { Translation } from '@prisma/client';

const TranslationCard = ({ translations, language }: { translations: Translation[], language: string }) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-10">
            {translations.map((translation: Translation, i: number) => (
                <a key={i} href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{language == 'English' ? translation.english : translation.konkani}</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{language == 'English' ? translation.konkani : translation.english}</p>
                </a>
            ))}
        </div>
    )
}

export default TranslationCard