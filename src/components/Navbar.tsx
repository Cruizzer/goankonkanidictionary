'use client'

import Link from "next/link";
import React from 'react'

const Navbar = () => {
    return (

        <div className="bg-gray-900 border-gray-600 dark:border-gray-600 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="/" className="flex items-center">
                    {/* <img src="/" className="h-8 mr-3" alt="Goan Konkani Logo" /> */}
                    <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">Goan Konkani Dictionary</span>
                </a>
                <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-1">
                    <div className="flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-gray-900  ">
                        <Link href="/" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0  hover:text-blue-500 border-gray-700" aria-current="page">
                            Home
                        </Link>

                        <Link href="/dictionary" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0  hover:text-blue-500 border-gray-700" aria-current="page">
                            Dictionary
                        </Link>

                        <Link href="/contact" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-500 md:p-0  hover:text-blue-500 border-gray-700" aria-current="page">
                            Contact us
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar