import React from 'react'

interface Data {
  ENGLISH: string;
  KONKANI: string;
}

async function getData(): Promise<any> {
  const res = await fetch("http://localhost:3000/api/translations", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Dictionary = async () => {
  const data = await getData();
  return (
    <div className="flex flex-wrap justify-between">
      {data.map((item: Data) => (
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.ENGLISH}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{item.KONKANI}</p>
        </a>
      ))}
    </div>



  )
}

export default Dictionary

/*
      /* Search Bar Component */

/* Translations */
