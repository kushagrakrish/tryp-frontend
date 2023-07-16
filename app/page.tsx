import CustomTable from "@/components/CustomTable";
import {
  CompanyDashboardcolResult,
  CompanyDashboardrowResult,
} from "@/components/TableItems";

export default function Home() {
  return (
    <>
      <h1>This is going to be the table data</h1>
      {/* <div className='w-full'> */}
      <CustomTable
        caption='Bookings'
        variant='primary'
        colResult={CompanyDashboardcolResult}
        rowResult={CompanyDashboardrowResult}
        sorting={true}
        pagination={true}
      />
      {/* </div> */}
    </>
  );
}
