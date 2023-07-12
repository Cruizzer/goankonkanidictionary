import React from 'react'

interface Data {
  ENGLISH: string;
  KONKANI: string;
}

async function getData(): Promise<any> {
  const res = await fetch("http://localhost:3000/api/translations", {
    //cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Dictionary = async () => {
  const data = await getData();
  return (
    <>

      {/* Search Bar Component */}
      <form className="p-10">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search english word..." required />
        </div>
      </form>


      {/* Translations */}
      <div className="grid grid-cols-3 gap-4 p-10">
        {data.map((item: Data) => (
          <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.ENGLISH}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{item.KONKANI}</p>
          </a>
        ))}
      </div>

    </>

  )
}

export default Dictionary