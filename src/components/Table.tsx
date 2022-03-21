interface TableProps {
  headers: any[];
  rows: any[];
}
export const Table = ({ headers, rows }: TableProps) => {
  return <>{headers.map((header) => header)}</>;
};
