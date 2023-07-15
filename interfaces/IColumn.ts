import { ReactNode } from "react";

export interface IColumn {
  id: number;
  header: string;
  cell: (data: any) => ReactNode;
  sortable?: boolean;
}
