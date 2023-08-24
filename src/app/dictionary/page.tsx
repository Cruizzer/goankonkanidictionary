'use client'

import styles from './dictionary.module.css'
import SearchBar from '@/components/SearchBar';
import React, { useEffect, useState } from 'react'
import TranslationCard from '@/components/TranslationCard';
import Pagination from '@/components/Pagination';
import { useQuery } from '@tanstack/react-query';
import ToggleLanguage from '@/components/ToggleLanguage';


const Dictionary = () => {
  const [submitQuery, setSubmitQuery] = useState<string>('')
  const [page, setPage] = useState<number>(0)
  const [language, setLanguage] = useState<'English' | 'Konkani'>('English')


  const { isLoading, data: translations, isError, isFetching, isPreviousData, error, refetch } = useQuery({
    queryKey: ["translations", page, submitQuery],
    queryFn: async () => {
      const response = await fetch(`api/dictionary?q=${submitQuery}&p=${page}&l=${language}`)
      const translations = await response.json()
      return translations
    },
    keepPreviousData: true
  });

  return (
    <>
      <ToggleLanguage language={language} setLanguageToggle={(language) => setLanguage(language)} />
      <SearchBar setSubmitQuery={(query) => setSubmitQuery(query)} setPageIndex={(page) => setPage(page)} />

      {isLoading ? <div className={styles.loading}></div> :
        <div>
          <TranslationCard translations={translations} language={language} />
          <Pagination pageIndex={page} setPageIndex={(page) => setPage(page)} translations={translations} />
        </div>}


    </>

  )
}

export default Dictionary

/*
'use client'

import styles from './dictionary.module.css'
import SearchBar from '@/components/SearchBar';
import React, { useEffect, useState } from 'react'
import TranslationCard from '@/components/TranslationCard';
import Pagination from '@/components/Pagination';
import { useQuery } from '@tanstack/react-query';


const Dictionary = () => {
  const [submitQuery, setSubmitQuery] = useState<string>('')
  const [page, setPage] = useState<number>(0)
  const [translations, setTranslations] = useState([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const getTranslations = async () => {
      const response = await fetch(`api/dictionary?q=${submitQuery}&p=${page}`)
      const translations = await response.json()

      setTranslations(translations)
      setLoading(false)
    }

    getTranslations()
  }, [page, submitQuery])

  // const [currentPage, setCurrentPage] = useState(1);

  // const { isLoading, data, isError, isFetching, isPreviousData, error } = useQuery({
  //   queryKey: ["translations", page],
  //   queryFn: async () => {
  //     const response = await fetch(`api/dictionary?q=${submitQuery}&p=${page}`)
  //     const translations = await response.json()
  //     return translation
  //   },
  //   keepPreviousData: true
  // });

  // if (isLoading) return "Loading...";
  // if (isError) return `Error: ${error.message}`;

  return (
    <>
      <SearchBar setSubmitQuery={(query) => setSubmitQuery(query)} setPageIndex={(page) => setPage(page)} />
      {loading ? <div className={styles.loading}></div> :
        <TranslationCard translations={translations} />}
      <Pagination pageIndex={page} setPageIndex={(page) => setPage(page)} translations={translations} />
    </>

  )
}

export default Dictionary 
*/