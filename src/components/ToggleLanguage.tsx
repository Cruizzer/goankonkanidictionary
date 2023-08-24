import { FC } from 'react'

type language = 'English' | 'Konkani';

interface ToggleLanguageProps {
    language: language
    setLanguageToggle: (language: language) => void
}

const ToggleLanguage: FC<ToggleLanguageProps> = ({ language, setLanguageToggle }: ToggleLanguageProps) => {
    return (
        <div className="flex justify-center items-center align-middle pt-5">
            <div className="flex justify-center items-center space-x-10 px-5 py-2 rounded">
                <h3 className='font-semibold tracking-tight text-gray-900 dark:text-white'>{language == 'English' ? 'English' : 'Konkani'}</h3>
                <svg onClick={() => setLanguageToggle(language == 'English' ? 'Konkani' : 'English')} className=" text-gray-500 bg-gray-400 rounded-lg hover:bg-gray-400 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" fill="#fff" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g data-name="Layer 2">
                        <g data-name="swap">
                            <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0" />
                            <path d="M4 9h13l-1.6 1.2a1 1 0 0 0-.2 1.4 1 1 0 0 0 .8.4 1 1 0 0 0 .6-.2l4-3a1 1 0 0 0 0-1.59l-3.86-3a1 1 0 0 0-1.23 1.58L17.08 7H4a1 1 0 0 0 0 2z" />
                            <path d="M20 16H7l1.6-1.2a1 1 0 0 0-1.2-1.6l-4 3a1 1 0 0 0 0 1.59l3.86 3a1 1 0 0 0 .61.21 1 1 0 0 0 .79-.39 1 1 0 0 0-.17-1.4L6.92 18H20a1 1 0 0 0 0-2z" />
                        </g>
                    </g>
                </svg>
                <h3 className='font-semibold tracking-tight text-gray-900 dark:text-white'>{language == 'English' ? 'Konkani' : 'English'}</h3>
            </div>
        </div>
    )
}

export default ToggleLanguage


