import CustomTable from "@/components/CustomTable";
import {
  CompanyDashboardcolResult,
  CompanyDashboardrowResult,
} from "@/components/TableItems";
import { headers } from "@/constants/data";

export default function Home() {
  return (
    <>
      <h1>This is going to be the table data</h1>

      <CustomTable
        headers={headers}
        caption='Bookings'
        variant='primary'
        colResult={CompanyDashboardcolResult}
        rowResult={CompanyDashboardrowResult}
        sorting={true}
        pagination={true}
      />
    </>
  );
}
