"use client";

import CustomTable from "@/components/CustomTable";
import TableFallbackUI from "@/components/TableFallbackUI";
import {
  CompanyDashboardcolResult,
  CompanyDashboardrowResult,
} from "@/components/TableItems";
import { headers } from "@/constants/data";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [filteredData, setFilteredData] = useState(CompanyDashboardrowResult);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    let filtered = [];
    if (inputValue?.length === 0) {
      filtered = CompanyDashboardrowResult;
    } else {
      filtered = CompanyDashboardrowResult?.filter((rowResult) =>
        rowResult?.name?.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    setFilteredData(filtered);
  };

  return (
    <>
      <div className='bg-gray-100 h-screen'>
        <div className='w-11/12 mx-auto '>
          <h1 className='pt-14 text-4xl font-bold text-center'>Tryp's Data</h1>
          <input
            value={input}
            type='text'
            placeholder='search'
            onChange={handleSearch}
            className='py-1.5 px-1.5 rounded-md bg-gray-100 text-black uppercase ml-5 outline-none border border-gray-400'
          />
          {filteredData?.length === 0 ? (
            <TableFallbackUI />
          ) : (
            // The data in table can be fetched from an API and can be set in rowResult and this will lead to the dynamic data in table rows
            <CustomTable
              headers={headers}
              caption='Bookings'
              variant='primary'
              colResult={CompanyDashboardcolResult}
              rowResult={filteredData}
              sorting={true}
              pagination={true}
            />
          )}
        </div>
      </div>
    </>
  );
}
