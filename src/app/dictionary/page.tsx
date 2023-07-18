'use client'

import SearchBar from '@/components/SearchBar';
import { useSearchParams } from 'next/navigation';
import useSWR from 'swr'
import React, { useEffect, useState } from 'react'
import TranslationCard from '@/components/TranslationCard';


const Dictionary = () => {
  // const translations = await getTranslations();
  const search = useSearchParams()
  const searchQuery = search ? search.get('q') : null
  const encodedSearchQuery = encodeURI(searchQuery || "")

  const fetchTranslations = async (url: string) => {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Failed to fetch translations")
    }

    return response.json()

  }

  const { data, isLoading } = useSWR(
    `/api/dictionary?q=${encodedSearchQuery}`,
    fetchTranslations,
  )

  if (!data) {
    return null
  }

  console.log(data)


  return (
    <>
      {isLoading && <h1>Test</h1>}
      <SearchBar />
      <TranslationCard translation={data} />
    </>

  )
}

export default Dictionary