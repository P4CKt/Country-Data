"use client";
import React, { useEffect, useState } from "react";
import Card from "./component/Card";
import { getData } from "../../utils";
import DummyData from "../types/index";
import Search from "./component/Search";

export default function Home() {
  const [data, setData] = useState<DummyData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [perpage, setPerpage] = useState<number>(20);

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getData();
      setData(allData);
    };
    fetchData();
  }, []);


  const paginateData = (data:DummyData[], page:number, perpage:number) => {
    const start = (page - 1) * perpage;
    const end = start + perpage;
    return data.slice(start, end);
  };

  const totalPages = Math.ceil(data.length / perpage);
  let pages = [];
for (let index = 0; index < totalPages; index++) {
 pages.push(index);
  
}

  const handlePageChange = (newPage:number) => {
    setPage(newPage);
  };


  const paginatedData = paginateData(data, page, perpage);

  return (
    <main className="m-auto">
      <h1 className="font-bold text-red-400 text-6xl text-center">Country API</h1>
    <Search/>
      <div className="flex flex-wrap justify-center">
        {paginatedData.map((item: DummyData) => (
          <Card key={item.code} dummyData={item} />
        ))}
      </div>

      {/* Sayfalama düğmelerini ekleyin */}
      <div className="flex justify-center mb-6">
        {page > 1 ? (
          <button className="text-red-600  font-bold mr-2" onClick={() => handlePageChange(page - 1)}>Previous Page</button>
        ):<button disabled className="text-[#22113302]  font-bold mr-2" onClick={() => handlePageChange(page - 1)}>Previous Page</button>}
        { 
        
        pages.map((index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`text-white outline text-[10px] font-light sm:text-lg rounded-sm outline-yellow-100 md:m-1 bg-[#0000007c] outline-1 w-4 sm:w-6 ${
              page === index+1 ? 'text-blue-500' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        {
          
        }
        {page < totalPages ? (
          <button className="text-red-600 font-bold ml-2 " onClick={() => handlePageChange(page + 1)}>Next Page</button>
        ):(
          <button disabled className="text-[#22113302] font-bold ml-2 " onClick={() => handlePageChange(page + 1)}>Next Page</button>
        )}
      </div>
     
    </main>
  );
}
