"use client";

import cx from "classnames";
import { useState } from "react";

interface tableData {
  rowResult: Array<any>;
  colResult: Array<any>;
  variant?: "primary" | "secondary";
  caption?: String;
}

const Table = ({ rowResult, colResult, variant, caption }: tableData) => {
  const [sortColumn, setSortColumn] = useState<number>(-1);
  const [sortAscending, setSortAscending] = useState<boolean>(true);

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
      if (sortAscending) {
        return sortFn(a).props.children.localeCompare(sortFn(b).props.children);
      } else {
        return sortFn(b).props.children.localeCompare(sortFn(a).props.children);
      }
    }
    return 0;
  });

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
              {colResult?.map((data, id) => (
                <th
                  key={id}
                  className={cx(
                    {
                      "bg-[#ffffff] ": variant === "primary",
                      "bg-[#b9b9b9]": variant === "secondary",
                    },
                    "px-5 py-3",
                    {
                      "cursor-pointer": data.sortable,
                      "text-[underline]": sortColumn === id && data.sortable,
                    }
                  )}
                  scope='col'
                  onClick={() => handleSort(id, data.sortable)}
                >
                  {data.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedRowResult?.map((row, id) => (
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
                    className='bg-[#232A2C] px-5  py-3'
                    colSpan={colResult.length}
                  >
                    {data.footer}
                  </td>
                )}
              </tr>
            </tfoot>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Table;
