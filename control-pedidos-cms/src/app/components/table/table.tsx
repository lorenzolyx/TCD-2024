import React from 'react';
import './table.css';

interface TableProps {
  data: any[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {data.length > 0 && Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, i) => (
              <td key={i}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
