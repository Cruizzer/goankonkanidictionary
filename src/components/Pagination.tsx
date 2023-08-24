'use client'

import { Translation } from '@prisma/client'
import React, { FC } from 'react'
import { useState } from 'react'

interface PaginationProps {
    pageIndex: number
    setPageIndex: (pageNumber: number) => any
    translations: Translation[]
}

const Pagination: FC<PaginationProps> = ({ pageIndex, setPageIndex, translations }: PaginationProps) => {

    return (
        <div className="flex justify-center">
            <button disabled={pageIndex === 0} onClick={() => setPageIndex(pageIndex - 1)} className="flex items-center justify-center px-4 h-10 mr-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                </svg>
                Previous
            </button>

            <button onClick={e => e.preventDefault()} className="flex items-center justify-center px-4 h-10 text-base mr-3 font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                {pageIndex}
            </button>

            <button disabled={translations.length < 20} onClick={() => setPageIndex(pageIndex + 1)} className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </button>
        </div>
        // <div>Pagination {pageIndex}
        //     <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
        //     <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
        // </div>
    )
}

export default Pagination

