'use client'

import React, { FC } from 'react'
import { useState } from 'react'

interface PaginationProps {
    pageIndex: number
    setPageIndex: (pageNumber: number) => any
}

const Pagination: FC<PaginationProps> = ({ pageIndex, setPageIndex }: PaginationProps) => {

    return (
        <div>Pagination {pageIndex}
            <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
            <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
        </div>
    )
}

export default Pagination

