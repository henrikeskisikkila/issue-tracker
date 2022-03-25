import "./table.css";

interface TableProps {
  headers: string[];
  rows: any[];
}

export const Table = ({ headers, rows }: TableProps) => {
  return (
    <table>
      <tr>
        {headers.map((header) => (
          <th>{header}</th>
        ))}
      </tr>
      {rows.map((row) => (
        <tr>
          {row.map((item: any) => (
            <td>{item}</td>
          ))}
        </tr>
      ))}
    </table>
  );
};
