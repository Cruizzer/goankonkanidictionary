'use client'

import { FC, useEffect, useState } from 'react'
import React from 'react'

interface SearchBarProps {
    getSearchResult: (query: any) => any
    pageIndex: number
}

const SearchBar = ({ getSearchResult, pageIndex }: SearchBarProps) => {
    const [query, searchQuery] = useState<string | null>('')

    const onSearch = async (event: React.FormEvent) => {
        event.preventDefault()

        const response = await fetch(`/api/dictionary?q=${query}`) //&p=${pageIndex}

        const translation = await response.json()

        console.log(translation)

        getSearchResult(translation)
    }


    // Bug when component is rendered as q is null.

    // useEffect(() => {
    //     if (query == "") {
    //         return
    //     }
    //     const onPageChange = async () => {
    //         const response = await fetch(`/api/dictionary?q=${query}?&p=${pageIndex}`)

    //         const translation = await response.json()

    //         getSearchResult(translation)
    //     }

    //     console.log(pageIndex)
    //     onPageChange()
    // }, [pageIndex])


    return (
        <form className="p-10" onSubmit={onSearch}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input
                    value={query || ""}
                    onChange={(event) => searchQuery(event.target.value)}
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm placeholder-gray-400 text-white border border-gray-600 rounded-lg bg-gray-700 focus:ring-blue-500  focus:border-blue-500" placeholder="Search english word..." required />
            </div>
        </form>
    )
}


export default SearchBar