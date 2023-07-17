export const headers = [
  "Timestamp",
  "Purchase ID",
  "Mail",
  "Name",
  "Source",
  "Status",
  "Select",
];

export interface TableData {
  headers: string[];
  rowResult: Array<any>;
  colResult: Array<any>;
  variant?: "primary" | "secondary";
  caption?: string;
  sorting?: boolean;
  pagination?: boolean;
}
