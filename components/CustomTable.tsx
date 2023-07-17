"use client";

import { TableData } from "@/constants/data";
import cx from "classnames";
import { useState } from "react";

const CustomTable = ({
  headers,
  rowResult,
  colResult,
  variant,
  caption,
  sorting,
  pagination,
}: TableData) => {
  const [sortColumn, setSortColumn] = useState<number>(-1);
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(5);

  const handleSort = (columnId: number, sortable: boolean) => {
    if (sortable) {
      if (columnId === sortColumn) {
        setSortAscending((prevAscending) => !prevAscending);
      } else {
        setSortColumn(columnId);
        setSortAscending(true);
      }
    }
  };

  const sortedRowResult = [...rowResult].sort((a, b) => {
    if (sortColumn !== -1 && colResult[sortColumn].sortable) {
      const sortFn = colResult[sortColumn].cell;
      const valueA = sortFn(a)?.props?.children;
      const valueB = sortFn(b)?.props?.children;

      if (typeof valueA === "string" && typeof valueB === "string") {
        if (sortAscending) {
          return valueA.localeCompare(valueB);
        } else {
          return valueB.localeCompare(valueA);
        }
      }
    }
    return 0;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedRowResult = sortedRowResult.slice(startIndex, endIndex);

  return (
    <div className='px-5 mt-10'>
      <div className='overflow-x-auto shadow-2xl sm:rounded-lg'>
        <table className='text-left bg-white rounded-full w-full'>
          <caption className='font-bold text-xl text-gray-700 py-2'>
            {caption}
          </caption>
          <thead
            className={cx(
              {
                "border-[#ebebeb] ": variant === "primary",
                "border-[#131718]": variant === "secondary",
              },
              "text-[16px] rounded-md leading-[22px] font-medium font-inter text-[#000000] uppercase"
            )}
          >
            <tr>
              {headers.map((header, colIndex) => (
                <th
                  key={colIndex}
                  className={cx(
                    {
                      "bg-[#ffffff] ": variant === "primary",
                      "bg-[#b9b9b9]": variant === "secondary",
                    },
                    "px-5 py-3",
                    {
                      "cursor-pointer": colResult[colIndex]?.sortable,
                      "text-[underline]":
                        sortColumn === colIndex &&
                        colResult[colIndex]?.sortable &&
                        typeof colResult[colIndex]?.cell(rowResult[0])?.props
                          ?.children === "string",
                    }
                  )}
                  scope='col'
                  onClick={() =>
                    handleSort(colIndex, colResult[colIndex]?.sortable)
                  }
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pagination
              ? slicedRowResult?.map((row, id) => (
                  <tr
                    key={id}
                    className={cx({
                      "bg-[#FFFFFF] odd:bg-[#ebebeb]": variant === "primary",
                      "bg-[#131718] odd:bg-[#131718] border-b-[3px] border-[#212829] ":
                        variant === "secondary",
                    })}
                  >
                    {colResult?.map((col, id) => (
                      <td
                        key={id}
                        className='px-5 py-4 text-[16px] leading-[22px] font-normal font-inter text-[#000000]'
                      >
                        {col.cell(row)}
                      </td>
                    ))}
                  </tr>
                ))
              : sortedRowResult?.map((row, id) => (
                  <tr
                    key={id}
                    className={cx({
                      "bg-[#FFFFFF] odd:bg-[#ebebeb]": variant === "primary",
                      "bg-[#131718] odd:bg-[#131718] border-b-[3px] border-[#212829] ":
                        variant === "secondary",
                    })}
                  >
                    {colResult?.map((col, id) => (
                      <td
                        key={id}
                        className='px-5 py-4 text-[16px] leading-[22px] font-normal font-inter text-[#000000]'
                      >
                        {col.cell(row)}
                      </td>
                    ))}
                  </tr>
                ))}
          </tbody>
          {colResult?.map((data, id) => (
            <tfoot key={id}>
              <tr>
                {data?.footer && (
                  <td
                    className='bg-[#232A2C] px-5 py-3'
                    colSpan={colResult.length}
                  >
                    {data.footer}
                  </td>
                )}
              </tr>
            </tfoot>
          ))}
          {pagination && (
            <tfoot>
              <tr>
                <td colSpan={colResult.length}>
                  <div className='flex justify-end py-5 px-5'>
                    <button
                      className={`px-3 py-1 rounded-md bg-[#D94407] text-white  disabled:cursor-not-allowed disabled:text-white `}
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Previous
                    </button>
                    <button
                      className='px-3 py-1 rounded-md bg-[#D94407] text-white ml-2 disabled:cursor-not-allowed'
                      disabled={endIndex >= sortedRowResult.length}
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Next
                    </button>
                  </div>
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
};

export default CustomTable;
