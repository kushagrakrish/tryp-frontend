"use client";

import { IColumn } from "@/interfaces/IColumn";
import cx from "classnames";
import { ReactNode } from "react";
import AppPill from "./AppPill";

var CompanyDashboardcolResult: IColumn[] = [
  {
    id: 0,
    header: " ",
    cell: (data: any) => <div className={cx("pl-4")}>{data.id}</div>,
  },
  {
    id: 1,
    header: "TIMESTAMP",
    cell: (data: any) => <div className={cx("pl-4")}>{data.timestamp}</div>,
    sortable: true, // Added sortable property
  },
  {
    id: 2,
    header: "Purchase ID",
    cell: (data: any) => (
      <div className={cx(" w-[125px] text-ellipsis overflow-hidden ")}>
        {data.purchaseId}
      </div>
    ),
  },
  {
    id: 3,
    header: "Mail",
    cell: (data: any) => (
      <div className={cx(" w-[125px] text-ellipsis overflow-hidden ")}>
        {data.mailId}
      </div>
    ),
  },
  {
    id: 4,
    header: "Name",
    cell: (data: any) => <div className={cx("")}>{data.name}</div>,
  },

  { id: 5, header: "Source", cell: (data: any) => <div>{data.source}</div> },

  { id: 6, header: "Status", cell: (data: any) => <div>{data.status}</div> },
  {
    id: 7,
    header: "Select",
    cell: (data: any) => (
      <div className='py-1.5 rounded-lg bg-[#aaaaaa55] text-black text-center font-semibold'>
        {data.select}
      </div>
    ),
  },
];

interface CompanyDashboardrowData {
  id: number;
  timestamp: string;
  purchaseId: number;
  mailId: string;
  name: string;
  source: string;
  status: ReactNode;
  select: ReactNode;
}

var CompanyDashboardrowResult: CompanyDashboardrowData[] = [
  {
    id: 0,
    timestamp: "35 minutes ago",
    purchaseId: 28759828,
    mailId: "dean1@gmail.com",
    name: "Dean Winchester",
    source: "USA",
    status: (
      <AppPill status='failed' size='sm'>
        E-Signed
      </AppPill>
    ),
    select: "Select",
  },
  {
    id: 1,
    timestamp: "1 hour ago",
    purchaseId: 38759829,
    mailId: "sam2@gmail.com",
    name: "Sam Winchester",
    source: "USA",
    status: (
      <AppPill status='waiting' size='sm'>
        E-Signed
      </AppPill>
    ),
    select: "Select",
  },
  {
    id: 2,
    timestamp: "2 hours ago",
    purchaseId: 48759830,
    mailId: "castiel3@gmail.com",
    name: "Castiel",
    source: "USA",
    status: (
      <AppPill status='waiting' size='sm'>
        E-Signed
      </AppPill>
    ),
    select: "Select",
  },
  {
    id: 3,
    timestamp: "3 hours ago",
    purchaseId: 58759831,
    mailId: "rowena4@gmail.com",
    name: "Rowena",
    source: "USA",
    status: (
      <AppPill status='waiting' size='sm'>
        E-Signed
      </AppPill>
    ),
    select: "Select",
  },
  {
    id: 7,
    timestamp: "7 hours ago",
    purchaseId: 98759835,
    mailId: "charlie8@gmail.com",
    name: "Charlie Bradbury",
    source: "USA",
    status: (
      <AppPill size='sm' status='paid'>
        E-Signed
      </AppPill>
    ),
    select: "Select",
  },
  {
    id: 4,
    timestamp: "4 hours ago",
    purchaseId: 68759832,
    mailId: "lucifer5@gmail.com",
    name: "Lucifer",
    source: "USA",
    status: (
      <AppPill size='sm' status='paid'>
        E-Signed
      </AppPill>
    ),
    select: "Select",
  },
  {
    id: 5,
    timestamp: "5 hours ago",
    purchaseId: 78759833,
    mailId: "bobby6@gmail.com",
    name: "Bobby Singer",
    source: "USA",
    status: (
      <AppPill size='sm' status='paid'>
        E-Signed
      </AppPill>
    ),
    select: "Select",
  },
  {
    id: 6,
    timestamp: "6 hours ago",
    purchaseId: 88759834,
    mailId: "crowley7@gmail.com",
    name: "Crowley",
    source: "USA",
    status: (
      <AppPill size='sm' status='paid'>
        E-Signed
      </AppPill>
    ),
    select: "Select",
  },
];

export { CompanyDashboardcolResult, CompanyDashboardrowResult };