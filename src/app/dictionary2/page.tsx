'use client'

import styles from './dictionary2.module.css'
import SearchBar from '@/components/SearchBar';
import React, { useEffect, useState } from 'react'
import TranslationCard from '@/components/TranslationCard';
import Pagination from '@/components/Pagination';


const Dictionary = () => {
    // const translations = await getTranslations();
    const [translation, setTranslation] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getTranslations = async () => {
            const response = await fetch(`api/dictionary2?q=`)
            const translation = await response.json()

            setTranslation(translation)
            setLoading(false)
            console.log(translation)
        }

        getTranslations()
    }, [])


    return (
        <>
            <SearchBar getSearchResult={(result) => setTranslation(result)} pageIndex={page} />
            {loading ? <div className={styles.loading}></div> :
                <TranslationCard translation={translation} />}
            <Pagination pageIndex={page} setPageIndex={(page) => setPage(page)} />
        </>

    )
}

export default Dictionary