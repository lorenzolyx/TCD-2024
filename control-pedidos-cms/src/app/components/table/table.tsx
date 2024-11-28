export interface TableData {
  ID: string;
  Produto: string;
  Quantidade: number;
  Data: string;
  Status: string;
}

interface TableProps {
  data: TableData[]; 
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Data</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.ID}>
            <td>{item.ID}</td>
            <td>{item.Produto}</td>
            <td>{item.Quantidade}</td>
            <td>{item.Data}</td>
            <td>{item.Status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
